import React from "react";
import AssetsTable from '../Assets/AssetsTable'
import "./Account.css";
const AccountRole = () => {
  return (
    <div className="container mt-3">
         <h5>Account Role</h5>
      <div className="row justify-content-between account_box">
        <div className="col-md-12 col-12">
         <div className="res_account">
          <div className="d-flex mobile_role">
            <div class="col">
              <div className="d-flex align-items-center">   <i class="bi bi-gear fs-1"></i>
             <div className="d-block">
              <p className="mb-0">System</p>
              
              <p className="mb-0 fw-bold">120</p>
              </div>
              </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">   <i class="bi bi-link-45deg fs-1"></i>
            <div className="d-block">
              <p className="mb-0">ON-change Identity</p>
              <p className="mb-0 fw-bold">1195</p>
              </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">  <i class="bi bi-person fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Validator</p>
              <p className="mb-0 fw-bold">300</p>
              </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">   <i class="bi bi-person-check-fill fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Nominator</p>
              <p className="mb-0 fw-bold">400</p>
            </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">  <i class="bi bi-microsoft-teams fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Council</p>
              <p className="mb-0 fw-bold">197</p>
            </div>
            </div>
            </div>
          </div>
          <div className="d-flex mobile_role">
            <div class="col">
            <div className="d-flex align-items-center">   <i class="bi bi-cast fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Technical Committee</p>
              <p className="mb-0 fw-bold">120</p>
              </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">    <i class="bi bi-cpu fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Proxy</p>
              <p className="mb-0 fw-bold">1195</p>
              </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">    <i class="bi bi-cpu-fill fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Proxied</p>
              <p className="mb-0 fw-bold">300</p>
              </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">   <i class="bi bi-diagram-2-fill fs-1"></i>
            <div className="d-block">
              <p className="mb-0">Multisig</p>
              <p className="mb-0 fw-bold">400</p>
            </div>
            </div>
            </div>
            <div class="col">
            <div className="d-flex align-items-center">    <i class="bi bi-person-gear fs-1"></i>
            <div className="d-block">
            <p className="mb-0">Multisig member</p>
              <p className="mb-0 fw-bold">197</p>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
       
      </div>
      <AssetsTable />
    </div>
  );
};

export default AccountRole;
