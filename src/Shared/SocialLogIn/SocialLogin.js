import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Google from "../../images/logo/Google.svg"
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    const location=useLocation()
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
      }
      if(error){
        errorElement= <p className='text-center text-danger'>error:{error?.message}</p>;
      }
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
      };
    return (
        <div className=''>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center w-50 mx-auto' >
                <div style={{height:"2px"}} className='w-25 bg-primary'></div>
                <p>or</p>
                <div style={{height:"2px"}} className='w-25 bg-primary'></div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
        <div className="my-3">
          <button onClick={handleSignInWithGoogle} className="btn btn-primary">
            <img src={Google} alt="" />
            <span className="ms-2 h5">google signin </span>
          </button>
        </div>
      </div>
        </div>
    );
};

export default SocialLogin;