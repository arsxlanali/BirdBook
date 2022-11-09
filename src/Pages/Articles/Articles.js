import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import './Articles.css'

export default function Articles(){
    return(
        <div className='Article'>
       
        {/* <h1 className='article-title'> Latest Articles</h1> */}
        
        <Card className="card-container">
        <div>
            <Row >
                <Col lg={8}>
                <Card.Title className='Card-title'>What is the capital of USA?</Card.Title>
        <Card.Text className='card-text'>
        JNDSCNKBC;SZCNJ;ZNXM,Z NKJK;ZN;LXZN ,Z
        </Card.Text>
    
                </Col>
                <Col lg={4}>
                
                <Card.Img className='card-img'  src="./Resources/birmingham.webp"/>
                </Col>
            </Row>
            </div>
    
        </Card></div>
        )
}