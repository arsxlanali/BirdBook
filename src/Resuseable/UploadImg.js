import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MagicDropzone from "react-magic-dropzone";
import { baseURL } from "../apiUrl";

const token = localStorage.getItem("Token");

const api_key = "252944217837197";
const cloud_name = "dpxrvbatm";

function UplaodImg({ field, image }) {
  const [preview, setPreview] = useState(null);
  const [signature, setSignature] = useState("");
  const data = new FormData();
  const onDrop = async (accepted, links) => {
    setPreview(accepted[0].preview || links[0]);
    data.append("file", accepted[0]);
    data.append("api_key", api_key);
    data.append("signature", signature.signature);
    data.append("timestamp", signature.timestamp);
    const cloudinaryResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    field(image, cloudinaryResponse.data.secure_url);
  };
  useEffect(() => {
    axios
      .get(`${baseURL}/img/getSignature`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSignature(res.data);
        console.log("THis is ", res.data, signature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <MagicDropzone
      className="Dropzone"
      accept="image/jpeg, image/png, .jpg, .jpeg, .png"
      multiple={false}
      style={{ width: "250px", height: "250px" }}
      onDrop={onDrop}
    >
      {preview ? (
        <img
          alt="upload preview"
          // onLoad={this.onImageChange}
          style={{ width: "250px", height: "250px" }}
          className="Dropzone-img"
          src={preview}
        />
      ) : (
        "Choose or drop a file."
      )}
    </MagicDropzone>
  );
}

export default UplaodImg;
