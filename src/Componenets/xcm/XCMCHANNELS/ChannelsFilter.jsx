import React from "react";
import Search from "../../Search/Search";
import Select from "react-select";
const ChannelsFilter = () => {
  const dataInt = [
    { value: "99900", label: "999000" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
    { value: "99000", label: "98008" },
  ];
  const module = [
    { value: "all", label: "All" },
    { value: "auction", label: "Auctions" },
    { value: "authority", label: "Athority" },
    { value: "babe", label: "Babe" },
    { value: "balence", label: "Balence" },
    { value: "claim", label: "Claim" },
    { value: "dmp", label: "DMP" },
  ];
  const call = [{ value: "all", label: "All" }];
  return (
    <div>
      <Search />
      <div className="container mt-3 mobile_filter">
        <h5>XCM Transfers (214,019)</h5>
        <div className="row d-flex">
          <div className="col-md-12 d-flex text_filter">
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">From Chain</p>
              <Select
                defaultValue={dataInt[0]}
                options={dataInt}
                className="ms-2"
              />
            </div>
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">To Chain</p>
              <Select
                defaultValue={module[0]}
                options={module}
                className="ms-2"
              />
            </div>
            <div className="col-md-3 d-flex">
              <p className="mb-0 mt-1">Status</p>
              <Select defaultValue={call[0]} options={call} className="ms-2" />
            </div>
            {/* <div className="col-md-2 d-flex">
            <p className="mb-0 mt-1">Sign</p>
              <Select
                defaultValue={sign[0]}
                options={sign}
                className="ms-2"
              />
            </div> */}
            <div className="d-flex ms-auto">
              <button className="btn btn-danger ms-auto">Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsFilter;
