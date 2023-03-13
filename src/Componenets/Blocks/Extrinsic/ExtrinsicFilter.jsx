import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Extrinsic.css";
const ExtrinsicFilter = () => {
  const [startDate, setStartDate] = useState(new Date("2023/02/08"));
  const [endDate, setEndDate] = useState(new Date("2023/02/10"));
  const dataInt = [
    { value: "99900", label: "999000" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" }
  ];
  const module = [
    { value: "all", label: "All" },
    { value: "auction", label: "Auctions" },
    { value: "authority", label: "Athority" },
    { value: "babe", label: "Babe" },
    { value: "balence", label: "Balence" },
    { value: "claim", label: "Claim" },
    { value: "dmp", label: "DMP" }
  ];
  const call = [
    { value: "all", label: "All" }
  ];
  const sign = [
    { value: "signed", label: "Signed Only" },
    { value: "all", label: "All" }
  ];
  const options = [
    { value: "date", label: "Date" },
    { value: "block", label: "Block" },
  ];

  const result = [
    { value: "all", label: "ALL" },
    { value: "success", label: "Success" },
    { value: "failed", label: "Failed" }
  ];
  const dimention = [
    { value: "usd", label: "USD" },
    { value: "balence", label: "BALENCE" },
  ];
  return (
    <div>
      <div className="container mt-3 mobile_filter">
        <h5>For All {""} (10,251,919)</h5>
        <div className="row d-flex">
        <div className="col-md-12 d-flex text_filter">
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">Spec Version</p>
              <Select
                defaultValue={dataInt[0]}
                options={dataInt}
                className="ms-2"
              />
            </div>
            <div className="col-md-2 d-flex">
            <p className="mb-0 mt-1">Module</p>
              <Select
                defaultValue={module[0]}
                options={module}
                className="ms-2"
              />
            </div>
            <div className="col-md-2 d-flex">
            <p className="mb-0 mt-1 ms-2">Call</p>
              <Select
                defaultValue={call[0]}
                options={call}
                className="ms-2"
              />
            </div>
            <div className="col-md-2 d-flex">
            <p className="mb-0 mt-1 ms-2">Sign</p>
              <Select
                defaultValue={sign[0]}
                options={sign}
                className="ms-2"
              />
            </div>
            <div className="col-md-2 d-flex">
            <p className="mb-0 mt-1 ms-2">Account</p>
             <input type="text" placeholder="optional" className="ms-2"/>
            </div>
           
          </div>
          <div className="col-md-12 d-flex  mt-3 text_filter">
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">Time Dimension</p>
              <Select
                defaultValue={options[0]}
                options={options}
                className="ms-2"
              />
            </div>
            <div className="col-md-6 d-flex">
              <p className="mb-0 mt-1 ms-3">Date </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <p className="mb-0 mt-1">To </p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
            <div className="col-md-3 d-flex">
    <Select  defaultValue={result[0]} options={result} className="ms-5"/>
    </div>
          </div>
        
          <div className="d-flex">
          <button className="btn btn-danger ms-auto mt-2">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtrinsicFilter;
