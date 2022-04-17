import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams()
    const navigate=useNavigate()
    const navigateCheckOut=()=>{
        navigate('/checkout')
    }
    return (
        <div>
            <h1>{serviceId}</h1>
            <button onClick={navigateCheckOut}>checkout</button>
        </div>
    );
};

export default ServiceDetails;