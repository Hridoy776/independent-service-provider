import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const navigate =useNavigate()
    const navigateSignUp=()=>{
        navigate('/register')
    }
    if(user){
        navigate('/home')
    }
    const handleSignIn=e=>{
        e.preventDefault()
        const email= e.target.email.value;
        const password =e.target.password.value
        signInWithEmailAndPassword(email,password)
    }
  return (
    <div>
      <h1 className="text-center text-primary">login</h1>
      <div className=" mx-auto w-25 ">
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form>
        <p>new to parfect passion?<Link onClick={navigateSignUp} to="/register" >please signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
