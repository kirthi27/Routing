import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Img3 from './images/weekend.jpg';
import Img5 from './images/babyhug.jpg';
import Img6 from './images/sastikutty.jpg';
import Img7 from './images/sastikutty1.jpg';



function Girls() {
  return (
<div>
    <h3><c>GIRLS COLLECTIONS</c></h3>
  <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1}).map((_, idx) => (<Col key={0}>
  <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={Img3} text="MARUTI"/>
      </Card>
     </Col> 
     ))}
        <Col key={1}>
      <Card style={{width: '40rem',height: '10rem'}}>
        <Card.Img variant="top" src={Img5}/>
        </Card>
        </Col>
        <Col key={2}>
        <Card style={{ width: '40rem', height:'20rem'}}>
      <Card.Img variant="top" src={Img6}/>
      </Card>
        </Col>
      <Col key={3}>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={Img7}/>
    </Card>
    </Col>
    </Row>
    
     
  
  </div>

  
  );
}


export default Girls;
