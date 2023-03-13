import React from "react";
import tree from "../../../assets/tree.jpg";
import Slick from './Slick'
import "./FocusChain.css";
const FocusChain = () => {
  return (
    <div className="container p-0 mt-3">
      <div className="container-fluid">
      <div className="row">
        {/* FOCUS */}
        <div className="col-lg-4 col-md-5 col-12">
          <div className="d-flex align-items-center">
        <i className="bi bi-menu-up fs-2"></i>
          <h5>Focus</h5>
          </div>
          <Slick />
        </div>

        {/* CHAIN DATA */}
        <div className="col-lg-8 col-md-7 col-12">
          <div className="d-flex align-items-center">
        <i className="bi bi-file-earmark-bar-graph fs-2"></i>
          <h5>Chain Data</h5>
          </div>
          <div className="chain_box">
          <div className="d-flex chain">

        
          <div className="col-md-4 chain_res">
            <p className="mb-0">Finnalized Blocks</p>
            <h6 className="num">14,549,943</h6>
          </div>
          <div className="col-md-4 chain_res">
            <p className="mb-0">Signed Extrinsics</p>
            <h6 className="num">12,019,199</h6>
          </div>
          <div className="col-md-4 chain_res">
            <p className="mb-0">Staked / Bonded</p>
            <h6 className="num">632.244 M / 643.765 M</h6>
          </div>
          </div>
          <div className="d-flex chain mt-3">

        
<div className="col-md-4 chain_res">
  <p className="mb-0">Holders</p>
  <h6 className="num">1,073,872</h6>
</div>
<div className="col-md-4 chain_res">
  <p className="mb-0">Transfers</p>
  <h6 className="num">10,220,791</h6>
</div>
<div className="col-md-4 chain_res">
  <p className="mb-0">Inflation Rate</p>
  <h6 className="num">7.40%</h6>
</div>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FocusChain;
