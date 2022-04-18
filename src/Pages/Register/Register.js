import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import signup from "../../images/login/6333213.jpg"
import SocialLogin from "../../Shared/SocialLogIn/SocialLogin";
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
     let errorElement;
    const navigate=useNavigate()
    const navigatelogin=()=>{
        navigate('/login')
    }
    if(user){
      navigate('/home')
    }
    if(error){
      errorElement=<p className="text-danger">{error?.message}</p>
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        
        const email=e.target.email.value;
        const password =e.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }
  return (
    <div className="vh-100 d-flex flex-column justify-content-center">
      <div className=" d-sm-flex container justify-content-center align-items-center align-items-center  ">
      <div className="w-50 mx-auto">
          <img className="w-100" src={signup} alt="" />
          </div>
      <div className="w-75 mx-auto">
        <h1 className="common text-center">signup</h1>
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
          {errorElement}
          <button className="common-btn" type="submit">
            sign up
          </button>
        </Form>
          <p className="text-center">already have an account?<Link
          className="common pe-auto text-decoration-none" onClick={navigatelogin} to="/login" >please login</Link></p>
        
      </div>
    </div>
      {<SocialLogin></SocialLogin>}
    </div>
  );
};

export default Register;
