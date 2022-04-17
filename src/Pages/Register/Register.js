import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import signup from "../../images/login/6333213.jpg"
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
    <div className=" d-sm-flex container justify-content-center align-items-center align-items-center vh-100 ">
      <div className="w-50 mx-auto">
          <img className="w-100" src={signup} alt="" />
          </div>
      <div className="w-75 mx-auto">
        <h1 className="text-primary text-center">signup</h1>
        <Form className="w-lg-25 w-50 mx-auto" onSubmit={handleSignUp}>
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
          <p className="text-center">already have an account?<Link onClick={navigatelogin} to="/login" >please login</Link></p>
        
      </div>
    </div>
  );
};

export default Register;
