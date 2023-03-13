import React from "react";
import Search from "../../Search/Search";
import Select from "react-select";
import "./Format.css";
const AccountTransform = () => {
  const outputTYPE = [
    { value: "all", label: "ALL" },
    { value: "publickey", label: "Public Key" },
    { value: "h160", label: "H160" },
    { value: "vrc", label: "VRC & Parachain" },
    { value: "shedan", label: "Shedan Prefix 5" },
    { value: "turing", label: "Turing" },
    { value: "crust", label: "Crust" },
  ];
  return (
    <div>
      <Search />
      <div className="container mt-3">
        <h5>Account Format Transform</h5>
        <div className="row mt-3">
          <div className="col-md-4 format_box">
            <h5>Input Account</h5>
            <input
              type="text"
              placeholder="Support SSB/PUBLIC KEY"
              className="format_inp"
            />
            <h5 className="mt-3">Output Type</h5>
            <Select
              defaultValue={outputTYPE[0]}
              options={outputTYPE}
              className="format_select"
            />
            <button className="format_btn">Transform</button>
            <div className="bg-light mt-3 format_p">
              <h5>What is the SS58 account?</h5>
              <p>
                SS58 is a simple account format designed for Substrate based
                chains. There's no problem with using other account formats for
                a chain, but this serves as a robust default. It is heavily
                based on Bitcoin's Base-58-check format with a few alterations.
                The basic idea is a base-58 encoded value that can identify a
                specific account on the Substrate chain. Different chains have
                different means of identifying accounts. SS58 is designed to be
                extensible for this reason. The living specification for the
                SS58 account format can be found on the Substrate wiki
              </p>
            </div>
          </div>
          <div className="col-md-7 format_box justify-content-center align-items-center text-center ms-5 format_res">
            <h5 className="text-center">no data</h5>
            <h5>Please Input Account and click [Transform] to get data</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTransform;
