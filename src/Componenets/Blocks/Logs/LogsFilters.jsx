import React,{useState} from "react";
import Select from "react-select";
import Search from "../../Search/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Logs.css";
const LogsFilters = () => {
    const [startDate, setStartDate] = useState(new Date("2023/02/08"));
  const [endDate, setEndDate] = useState(new Date("2023/02/10"));  
    const type = [
        { value: "all", label: "All" },
        { value: "validator", label: "Validator" },
        { value: "nominator", label: "Nominator" },
        { value: "council", label: "Council" },
        { value: "proxy", label: "Proxy" },
        { value: "pool", label: "Pool" },
        { value: "dmp", label: "DMP" },
      ];
      const options = [
        { value: "date", label: "Date" },
        { value: "block", label: "Block" },
      ];
  return (
    <div className="container">
      <Search />
      <h5>Log List For All (29,124,473)</h5>
     
         <div class="row d-flex mt-4 mobile_logs text_filter">
    <div class="col-md-2 d-flex">
    <p className="">Type</p>
        <Select
          defaultValue={type[0]}
          options={type}
          className="ms-2 type_wid"
        />
    </div>
    <div class="col-md-4 d-flex">
    <p className="mb-0 mt-1">Time Dimension</p>
              <Select
                defaultValue={options[0]}
                options={options}
                className="ms-2"
              />
    </div>
    <div class="col-md-6 d-flex">
    <p className="mb-0 mt-1">Date </p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="log_wid"
              />
              <p className="mb-0 mt-1 ms-4">To </p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="log_wid"
              />
    </div>
    <div class="col-md-4 d-flex mt-2">
        <p className="mb-0 mt-1">Engine</p>
        <input type="text" placeholder="optional" className="ms-2"/>
    </div>
    <div class="col d-flex">
    <button className="btn btn-danger mt-2 ms-auto">Filter</button>
    </div>
  </div>
    </div>
  );
};

export default LogsFilters;
