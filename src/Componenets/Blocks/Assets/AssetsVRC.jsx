import React from "react";
import Search from "../../Search/Search";
import './Assets.css'
const AssetsVRC = () => {
  return (
    <div>
      <Search />
      <div className="container mt-3">
        <div className="row justify-content-between">
          <div className="col-md-7 chain_box d-flex asstes_mobile">
            <div className="col-md-4 col-12 justify-content-between p-3">
              <h5>VRC</h5>
              <p className="mb-0">$5.930 (-0.00%)</p>
              <p>https://polkadot.network/</p>
            </div>
           
            <div className="col-md-8 col-12 d-flex p-5 split_line justify-content-between assets_num">
                <div className="col-md-3 ms-3">
              <h5>Decimals</h5>
              <p className="mb-0">10</p>
              </div>
              <div className="col-md-3">
              <h5>Holders</h5>
              <p className="mb-0">1,075,137</p>
              </div>
              <div className="col-md-3">
              <h5>Transfers</h5>
              <p className="mb-0">10,253,403</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 chain_box">
            <h1>GRAPH HERE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsVRC;
