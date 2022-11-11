import { Card, Row, Col } from "react-bootstrap";
import "./Videos.css";

export default function Videos() {
  return (
    <main>
      <h1 className="video-title">Videos</h1>
      <Card className="card-container">
        <video controls>
          <source
            src="https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4"
            type="video/mp4"
          ></source>
        </video>
      </Card>
    </main>
  );
}
