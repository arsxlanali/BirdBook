import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Podcast.css";

export default function Podcast(props) {
  // console.log("podcast", props.id);
  return (
    <div className="podcast" key={props._id}>
      <div>
        <img className="podcast-img" src={props.image} />
      </div>
      <div>
        <div className="podcast-text">
          <p className="podcast-name">
            {props.name} | {props.date}
          </p>
          <h4 className="podcast-title">{props.title}</h4>
        </div>
        <audio controls className="audio-height">
          <source src={props.link} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
}
