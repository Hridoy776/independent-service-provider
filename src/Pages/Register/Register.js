import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate=useNavigate()
    const navigatelogin=()=>{
        navigate('/login')
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        
        const email=e.target.email.value;
        const password =e.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }
  return (
    <div>
        <h1 className="text-primary text-center">signup</h1>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>name</Form.Label>
            <Form.Control name='name'  type="text" placeholder="your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email"  type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password"  type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>already have an account?<Link onClick={navigatelogin} to="/login" >please login</Link></p>
      </div>
    </div>
  );
};

export default Register;
