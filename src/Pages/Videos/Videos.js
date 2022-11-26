import { Card, Row, Col } from "react-bootstrap";
import "./Videos.css";

export default function Videos(props) {
  return (
    <div className="vidoe-card" key={props._id}>
      <Card className="card-container">
        <video controls>
          <source src={props.link} type="video/mp4"></source>
        </video>
      </Card>
      <h4 className="Video-heading">{props.title}</h4>
    </div>
  );
}
