import React from "react";
import "./styles.css";
import IMAGES from "../../assets/images";

const Fotter = () => {
  return (
    <div className="row parent-container w-100 px-4">
      <div
        className="col-md-4 col-xs-12"
        style={{ borderRight: "1px solid #000" }}
      >
        <div className="fotter-logo-container">
          <img src={IMAGES.logo} alt="" className="fotter-logo" />
        </div>
        <div className="fotter-logo-container-text">
          <p>
            Got a question or a bright idea for Omni World Commerce? We’re all
            ears! Let’s get in touch!
          </p>
          <div>
            <ul className="">
              <li className="d-flex align-center gap-1">
                <div className="w-18 h-18">
                  <img
                    src={IMAGES.location}
                    alt=""
                    className="w-100 h-100 object-fit-contain"
                  />
                </div>
                8 the Green, suite A, Dover, 19901
              </li>
              <li className="d-flex align-center gap-1">
                <div className="w-18 h-18">
                  <img
                    src={IMAGES.phone}
                    alt=""
                    className="w-100 h-100 object-fit-contain"
                  />
                </div>
                +1 302 219 2637
              </li>
              <li className="d-flex align-center gap-1">
                <div className="w-18 h-18">
                  <img
                    src={IMAGES.email}
                    alt=""
                    className="w-100 h-100 object-fit-contain"
                  />
                </div>
                info@omniworldcommerce.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xs-12 categoryList">
        <p className="heading"> Categories</p>
        {/* <div className="list-container mt-2"> */}
        <p className="list-item">Beauty & Personal Care</p>
        <p className="list-item">Garden & Outdoor</p>
        <p className="list-item">Health & Household</p>
        <p className="list-item">Home Decor</p>
        {/* </div> */}
      </div>
      <div className="col-md-4 col-xs-12 CompanyInfo">
        <p className="heading"> Company</p>
        {/* <div className="list-container mt-2"> */}
        <p className="list-item">About Us</p>
        <p className="list-item">Contact Us</p>
        <p className="list-item">Privacy Policy</p>
        <p className="list-item">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Fotter;
