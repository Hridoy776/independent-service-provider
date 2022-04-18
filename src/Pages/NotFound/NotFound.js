import React from 'react';
import notfound from '../../images/not found/Hnet.com-image.jpg'
const NotFound = () => {
    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='w-75 shadow-lg p-3 mb-5 bg-body rounded'>
                <img src={notfound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;