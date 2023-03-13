import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Transfer.module.css";

const TransferFilter = () => {
  const [startDate, setStartDate] = useState(new Date("2023/02/08"));
  const [endDate, setEndDate] = useState(new Date("2023/02/10"));  
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
              <p className="mb-0 mt-1">Time Dimension</p>
              <Select
                defaultValue={options[0]}
                options={options}
                className="ms-2"
              />
            </div>
            <div className="col-md-6 d-flex">
              <p className="mb-0 mt-1 ms-2">Date </p>
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
          <div className="col-md-12 d-flex mt-3 text_filter">
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">Value Dimension</p>
              <Select
                defaultValue={dimention[0]}
                options={dimention}
                className="ms-2"
              />
            </div>
            <div className="col-md-6 d-flex">
              <p className="mb-0 mt-1 ms-2">More Than or Equal </p>
               <input type="text" placeholder="Deafult is 0" className="input_filter"/>
               <p className="mb-0 mt-1 ms-2">Less Than or Equal </p>
               <input type="text" placeholder="Deafult is" className="input_filter"/>
            </div>
           
          </div>
          <div className="d-flex">
          <button className="btn btn-danger ms-auto">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferFilter;
