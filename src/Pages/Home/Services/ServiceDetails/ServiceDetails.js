import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams()
    const navigate=useNavigate()
    const navigateCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div className='vh-100 container d-flex justify-content-center align-items-center'>
            

            <button className='common-bg btn text text-white px-3 ' onClick={navigateCheckOut}>checkout</button>
        </div>
    );
};

export default ServiceDetails;