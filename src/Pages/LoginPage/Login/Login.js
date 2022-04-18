import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';
import login from "../../../images/login/ian-schneider-TamMbr4okv4-unsplash.jpg"
import SocialLogin from "../../../Shared/SocialLogIn/SocialLogin";
const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
      auth
    );
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  let errorElement;
  const navigateSignUp = () => {
    navigate("/register");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if(error){
    errorElement=<p className="text-center text-danger">{error?.message}</p>
  }
  
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  const resetPassword=async()=>{
    
    const email = emailRef.current.value;
    if (email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    else{
        toast('please enter your email address');
    }
        }

  
  return (
    <div className=" vh-100 d-flex flex-column justify-content-center ">
      <div className=" d-sm-flex container justify-content-center align-items-center  ">
        <div className="w-50 mx-auto">
          <img className="w-100" src={login} alt="" />
          </div>
        <div className="w-75 mx-auto">
        <h1 className="text-center common">login</h1>
        <Form className="w-lg-25 w-50 mx-auto" onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errorElement}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <button className="common-bg btn text-white px-3"  type="submit">
            login
          </button>
          
        </Form>
        <p className="text-center">
          new to parfect passion?
          <Link className="pe-auto text-decoration-none common" onClick={navigateSignUp} to="/register">
            please signup
          </Link>
        </p>
        <p className="text-center">Forget password?<span onClick={resetPassword} className="btn btn-link pe-auto text-decoration-none common">reset password</span></p>
        </div>
        
      </div>
      
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
