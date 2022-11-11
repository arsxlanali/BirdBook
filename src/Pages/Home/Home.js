import './Home.css';
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className='Home_main'>
      <Row>
        <Col lg={4}>
          <div className="FirstFold">
            <h1 className='heading'>BirdBook</h1>
            <h3 className='sub-heading'>Where bird lover comes</h3>
            <p className='paragraph'>
              We are dedicated to make the impact by preserving the habitate of
              the birds and help saving birds from going extint by eudcation
              people.
            </p>
            <button type="button"  className="button_b">EXPLORE</button>
          </div>
        </Col>
        <Col lg={8} >
            <img src='./Resources/birmingham.webp' alt='img' className="image"></img>
            
        </Col>
      </Row>
    </div>
  );
}
