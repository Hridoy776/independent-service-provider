import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./CheckOut.css";
const CheckOut = () => {
    const [message, setMessage]=useState([])
    let bookingMessage=<p>{message[0]}</p>;
    const handleSubscription=(e)=>{
        setMessage([])
        const abc=['hello how are you']
        
        e.preventDefault();
        setMessage(abc)
        

    }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div>
        <Form onSubmit={handleSubscription}>
          <Form.Group className="mb-3" controlId="formBasicName">
           <Form.Control name="name" type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAddress">
             <Form.Control name="address" type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control name="number" type="number" placeholder="Enter number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="password" type="password" placeholder="password" />
          </Form.Group>
          <button className="common-bg btn px-3 text-white " type="submit">
            Subscirbe
          </button>
        </Form>
        {bookingMessage}
      </div>
      
    </div>
  );
};

export default CheckOut;
