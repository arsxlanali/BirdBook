import { Card, Row , Col} from "react-bootstrap"
import './Videos.css'

export default function Videos(){
    return(
        <div >
            <h1 className="video-title">Videos</h1>
            <Card className="card-containerr">
        <div>
            <Row >
                <Col>
        <Card.Text >
       Video here
        </Card.Text>
    
                </Col>
                
            </Row>
            </div>
    
        </Card>
        </div>
    )
}