import React from 'react';
import hridoy from '../../images/about/IMG_8425~3.jpg'
const AboutMe = () => {
    return (
        <div className=' vh-100 d-flex flex-column  align-items-center my-3 '>
            <h1 className='common my-4'>about me</h1>
            <div className='container rounded-3 bg-light p-5  w-75  d-lg-flex justify-content-between align-items-center mx-auto'>
            <div className='w-25 order-lg-2 my-5 '>
                <img className='rounded' src={hridoy} alt="" />
            </div>
            <div className='w-sm-50 order-lg-1'>
            <h1 className='common'>This is MD Rakib Hasan Hridoy</h1>
            <p>I am an student of Hstu under graduate Bsc in chemistry.My goal is to be an web developer and want to move my carrier in this field.in future i want to be start a stratup</p>
            </div>
            
        </div>
        </div>
    );
};

export default AboutMe;