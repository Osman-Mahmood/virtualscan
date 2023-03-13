import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid mt-3 footer_clr">
      <div className="container">
        <div className="row box_inner footer_mob">
          <div className="col-lg-7 col-md-12 col-12">
            <div className="d-flex mt-4">
              <p className="footer_font">
                Donate (DOT) :14RYaXRSqb9rPqMaAVp1UZW2czQ6dMNGMbvukwfifi6m8ZgZ
              </p>
              <p className="text-primary ms-2 footer_font fw-bold cursor">
                DONATE HERE
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12">
            <div className="ms-auto d-flex justify-content-center align-items-center">
              <p className="footer_font1 fw-bolder mb-0 ms-auto">VIRTUAL ALLIANCE</p>
              <i className="bi bi-twitter fs-1"></i>
              <i className="bi bi-facebook fs-1"></i>
              <i className="bi bi-envelope fs-1"></i>
              <i className="bi bi-github fs-1"></i>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="d-flex mt-4 center">
              <p className="footer_font">
                VirtualScan © 2023 - Developed by VirtualScan Team
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12 mb-0 footer_mob">
            <div className="ms-auto d-flex justify-content-center align-items-center tab">
              <ul className="d-flex mt-4 ms-auto tab_footer">
                <li className="list">Version History</li>
                <li className="list">Privacy Policy</li>
                <li className="list">Terms of Use</li>
                <li className="list">Open Source Notices</li>
                <li className="list">Service Status</li>
                <li className="list">Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
