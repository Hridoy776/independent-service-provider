import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Services = ({service}) => {
  const navigate =useNavigate()
  const navigateCheckOut=()=>{
    navigate('/checkout')
  }
    
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
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
