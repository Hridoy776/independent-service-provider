import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Services = ({service}) => {
  
  const navigate =useNavigate()
  const navigateCheckOut=()=>{
    navigate(`/service/${service.id}`)
  }
    
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>price: {service.price}</Card.Text>
          <Card.Text>{service.details}</Card.Text>
          <p><button onClick={navigateCheckOut} className="btn btn-primary">more details</button></p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Services;
