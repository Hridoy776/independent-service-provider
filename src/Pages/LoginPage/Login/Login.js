import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Google from "../../../images/logo/Google.svg";
const Login = () => {
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate("/register");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if(user1){
    navigate(from, { replace: true });
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
  };
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
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form>
        <p>
          new to parfect passion?
          <Link onClick={navigateSignUp} to="/register">
            please signup
          </Link>
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="my-3">
          <button onClick={handleSignInWithGoogle} className="btn btn-primary">
            <img src={Google} alt="" />
            <span className="ms-2 h5">sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
