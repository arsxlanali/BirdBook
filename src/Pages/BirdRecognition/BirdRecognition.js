import React from "react";
import MagicDropzone from "react-magic-dropzone";
import _birds from "./birds";
import "./styles.css";
const tf = require("@tensorflow/tfjs");

const weights = "/web_model/model.json";

const names = _birds;

class BirdRecognition extends React.Component {
  state = {
    model: null,
    preview: "",
    predictions: [],
  };

  componentDidMount() {
    tf.loadGraphModel(weights).then((model) => {
      this.setState({
        model: model,
      });
    });
  }

  onDrop = (accepted, rejected, links) => {
    // console.log("this is blob", accepted, links);
    this.setState({ preview: accepted[0].preview || links[0] });
  };
  handleClick = async (e) => {
    // console.log("ssss", e.target.src);
    let file = await fetch(e.target.src)
      .then((r) => r.blob())
      .then((blobFile) => {
        this.setState({ preview: URL.createObjectURL(blobFile) });
      });
  };
  cropToCanvas = (image, canvas, ctx) => {
    const naturalWidth = image.naturalWidth;
    const naturalHeight = image.naturalHeight;

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const ratio = Math.min(
      canvas.width / image.naturalWidth,
      canvas.height / image.naturalHeight
    );
    const newWidth = Math.round(naturalWidth * ratio);
    const newHeight = Math.round(naturalHeight * ratio);
    // console.log("this is ", newWidth, newHeight);
    ctx.drawImage(
      image,
      0,
      0,
      naturalWidth,
      naturalHeight,
      (canvas.width - newWidth) / 2,
      (canvas.height - newHeight) / 2,
      newWidth,
      newHeight
    );
  };

  onImageChange = (e) => {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    this.cropToCanvas(e.target, c, ctx);
    // let [modelWidth, modelHeight] = [320, 320];
    let [modelWidth, modelHeight] = this.state.model.inputs[0].shape.slice(
      1,
      3
    );
    // console.log("this is ", modelHeight1, modelWidth1)
    const input = tf.tidy(() => {
      return tf.image
        .resizeBilinear(tf.browser.fromPixels(c), [modelWidth, modelHeight])
        .div(255.0)
        .expandDims(0);
    });
    this.state.model.executeAsync(input).then((res) => {
      // Font options.
      const font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      const [boxes, scores, classes, valid_detections] = res;
      const boxes_data = boxes.dataSync();
      const scores_data = scores.dataSync();
      const classes_data = classes.dataSync();
      const valid_detections_data = valid_detections.dataSync()[0];

      tf.dispose(res);

      var i;
      for (i = 0; i < valid_detections_data; ++i) {
        let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
        x1 *= c.width;
        x2 *= c.width;
        y1 *= c.height;
        y2 *= c.height;
        const width = x2 - x1;
        const height = y2 - y1;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        // Draw the bounding box.
        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x1, y1, width, height);

        // Draw the label background.
        ctx.fillStyle = "#00FFFF";
        const textWidth = ctx.measureText(klass + ":" + score).width;
        const textHeight = parseInt(font, 10); // base 10
        ctx.fillRect(x1, y1, textWidth + 4, textHeight + 4);
      }
      for (i = 0; i < valid_detections_data; ++i) {
        let [x1, y1, ,] = boxes_data.slice(i * 4, (i + 1) * 4);
        x1 *= c.width;
        y1 *= c.height;
        const klass = names[classes_data[i]];
        const score = scores_data[i].toFixed(2);

        // Draw the text last to ensure it's on top.
        ctx.fillStyle = "#000000";
        ctx.fillText(klass + ":" + score, x1, y1);
      }
    });
  };

  render() {
    return (
      <div className="Dropzone-page">
        {this.state.model ? (
          <MagicDropzone
            className="Dropzone"
            accept="image/jpeg, image/png, .jpg, .jpeg, .png"
            multiple={false}
            onDrop={this.onDrop}
            style={{ width: "60vh", height: "60vh" }}
          >
            {this.state.preview ? (
              <img
                alt="upload preview"
                onLoad={this.onImageChange}
                className="Dropzone-img"
                src={this.state.preview}
                style={{ width: "58vh", height: "58vh" }}
              />
            ) : (
              "Choose or drop a file."
            )}
            <canvas id="canvas" width="100" height="100" />
          </MagicDropzone>
        ) : (
          <div className="Dropzone">Loading model...</div>
        )}
        <h4 className="my-3">Choose the image for Recognition</h4>
        <div
          className="select-div-image"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80vh",
          }}
        >
          <img
            alt="upload preview"
            className="select-image"
            src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1669571708/tnlc1l7ivirq5lcw8mj4.jpg"
            onClick={this.handleClick}
          />
          <img
            alt="upload preview"
            className="select-image"
            src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1669450189/hhclr2ikw7k9p6yk2kdf.jpg"
            onClick={this.handleClick}
          />
          <img
            alt="upload preview"
            className="select-image"
            src="https://res.cloudinary.com/dpxrvbatm/image/upload/v1669029972/b8lwz1pjwf1mlu5sl85o.jpg"
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default BirdRecognition;
