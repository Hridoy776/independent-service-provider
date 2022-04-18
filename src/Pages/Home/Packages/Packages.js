import React from "react";
import pakage from "../../../images/packages/package.jpg";
const Packages = () => {
  return (
    <div>
        <h1 className="common text-center my-5">packages</h1>
      <div className="d-sm-flex container justify-content-evenly align-items-center bg-light rounded p-5 ">
      <div className="w-sm-25 ">
        <div>
          <div>
            <h1 className="common">A partial list of packages</h1>
            <div>
              <p className="h5 my-3">1. wedding premium package</p>
            </div>
            <div>
              <p className="h5">2. wedding elite package</p>
            </div>
            <div>
              <p className="h5 my-3">1. wedding platinum premium package</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-sm-50 d-flex flex-end ">
        <img className="w-50  " src={pakage} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Packages;
