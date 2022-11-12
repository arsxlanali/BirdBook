import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Podcast.css";

export default function Podcast(props) {
  return (
    <div className="podcast">
      <div>
        <img className="podcast-img" src={props.image} />
      </div>
      <div>
        <div className="podcast-text">
          <p className="podcast-name">Bird Gathering | 12 June 2022</p>
          <h4 className="podcast-title">
            The Past, Present, and Future of Purple Martins
          </h4>
        </div>
        <audio controls className="audio-height">
          <source src={props.link} type="audio/ogg" />
        </audio>
      </div>
    </div>
  );
}
