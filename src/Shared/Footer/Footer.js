import React from "react";
import facebook from "../../images/footer-logo/Subtract.svg"
import twitter from "../../images/footer-logo/twitter.svg"
import instra from "../../images/footer-logo/instagram.svg"
import apple from "../../images/footer-logo/apple.svg"
const Footer = () => {
  return (
    <div className=" bg-dark text-white py-5">
      <h1 className="text-center">copyright</h1>
      <div className="row mx-auto container">
        <div className="col">
          <h1 className="common">PERFECT PASSION</h1>
          <img className="me-2" src={facebook} alt="" />  
          <img className="me-2" src={twitter} alt="" />  
          <img className="me-2" src={instra} alt="" />  
          <img src={apple} alt="" />  
        </div>
        <div className="col">
          <p className="h5 common">support</p>  
          <p>Contuct me</p>
          <p>FAQ</p>
          <p>Downloads</p>
          <p>Product Registration</p>
        </div>
        <div className="col">
          <p className="h4 common">PERFECT PASSION</p> 
          <p>About Perfect passion</p> 
          <p>Services</p> 
          <p>Packages</p>  
          <p>customer reviews</p> 
        </div>
        <div className="col">
            <button className="btn common-bg text-white d-block px-4">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
