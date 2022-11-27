import "./buy.scss";
import { Col, Row, Card } from "react-bootstrap";
export default function Buy(props) {
  return (
    <div className="buy" key={props._id}>
      <Row>
        <Col lg={4} style={{ paddingLeft: "0" }}>
          <img src={props.image} className="buy-img" alt=""></img>
        </Col>
        <Col lg={8}>
          <div>
            <h3>{props.name}</h3>
            <h5>{props.price} Rs</h5>
            <p>{props.details}</p>
            <p>
              Contact: <span className="text-muted">{props.phone}</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
