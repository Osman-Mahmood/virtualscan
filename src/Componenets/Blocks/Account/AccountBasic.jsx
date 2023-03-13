import React from "react";
import Search from "../../Search/Search";
import CountUp from 'react-countup';
import "./Account.css";
const AccountBasic = () => {
  return (
    <div>
      <Search />
      <div className="container mt-3">
        <div className="row justify-content-between">
          <div className="col-md-6 col-12">
            <div className="d-flex align-items-center">
          <i class="bi bi-menu-up fs-2"></i>
            <h5>Basic</h5>
            </div>
            <div className="account_box d-flex">
              <div className="col-md-6 col-6">
                <h5>Holders</h5>
                <h3 className="mt-4"><CountUp start={20000} end={50000} /></h3>
                <p className="mb-0">Total</p>
              </div>
              <div className="col-md-6 text-end col-6">
                <button className="btn btn-danger account_wid ms-auto">
                  Details
                </button>
                <h3 className="mt-4 text-success">+782</h3>
                <p className="mb-0">Last 24h</p>
              </div>
            </div>

            <div className="account_box d-flex mt-3">
              <div className="col-md-6 col-6">
                <h5>Active Accounts</h5>
                <h3 className="mt-4"><CountUp start={600} end={6000} /></h3>
                <p className="mb-0">Daily Active Account</p>
              </div>
              <div className="col-md-6 text-end col-6">
                <button className="btn btn-danger account_wid ms-auto">
                  Details
                </button>
                <h3 className="mt-4 text-danger">-6.40%</h3>
                <p className="mb-0">24h change</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12">
         <div className="d-flex align-items-center">
          <i class="bi bi-pie-chart-fill fs-2"></i>
            <h5>Account Distribution</h5>
            </div>
            <div className="account_box d-flex">
              <div className="col-md-6">

                <h5>GRAPH HEERE</h5>
              </div>
              <div className="col-md-6 ms-auto p-2">
                <div className="d-flex align-items-center text-center">
              <i class="bi bi-person-circle fs-1"></i>
                <p className="mt-3 mb-0">
                  Whale Account
                  <br />
                
                  <span className="fw-bold">136</span>
                </p>
                </div>
                <div className="d-flex align-items-center text-center">
              <i class="bi bi-person-circle fs-1"></i>
                <p className="mt-3 mb-0">
                  Fish Account
                  <br />
                
                  <span className="fw-bold">136</span>
                </p>
                </div>
                <div className="d-flex align-items-center text-center">
              <i class="bi bi-person-circle fs-1"></i>
                <p className="mt-3 mb-0">
                  Whale Account
                  <br />
                
                  <span className="fw-bold">136</span>
                </p>
                </div>
                <div className="d-flex align-items-center text-center">
              <i class="bi bi-person-circle fs-1"></i>
                <p className="mt-3 mb-0">
                  Shrimp Account
                  <br />
                
                  <span className="fw-bold">136</span>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBasic;
