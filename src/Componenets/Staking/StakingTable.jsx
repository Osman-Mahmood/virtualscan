import React, { useEffect, useState } from "react";
// import "./Parachaindata.css";
import paraChain from "../../tableData";
import { PaginationControl } from "react-bootstrap-pagination-control";
const StakingTable = () => {
  const [page, setPage] = useState(1);
  const [paraData,showParaData] = useState("paraChain");
 
  const [paraChaniData, setParaChainData] = useState(paraChain);
  const [filterParaChaniData, setFilterParaChainData] = useState(paraChain);
  // const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {

    if(paraData === "paraThread" ){
      let obj = []
      obj = paraChaniData.filter(data => data.ParaId === 1234)
      setFilterParaChainData(obj)
    } else if (paraData === "registered") {
      let obj = []
      obj = paraChaniData.filter(data => data.ParaId === 12345) 
      setFilterParaChainData(obj)
    } else {
      setFilterParaChainData(paraChaniData)
    }

  }, [paraData])


  return (
    <div className="container">
      <div className="d-flex mt-3 mb-2">
        <h5 className="ms-2">Validator</h5>
        <div className="ms-auto mobile_hide">
          <input
            type="text"
            placeholder="Search for para id"
            className="para_input"
          />
          <i class="bi bi-search fs-5 clr_search_icon para_icon2"></i>
        </div>
      </div>
      <div className="block_box box_margin">
        <button className={paraData === "paraChain" ? "select_btn_active select_btn" : "select_btn"} onClick={() => showParaData("paraChain")} >Active</button>
        <button className={paraData === "paraThread" ? "select_btn_active select_btn" : "select_btn"} onClick={()=>showParaData("paraThread")}>Waiting</button>    
        <table className="table mt-3">
          <thead className="extrinsic_font">

            <tr>
              <th className="bor" scope="col">
                Validator
              </th>
              <th className="bor" scope="col">
                Self-Bounded
              </th>
              <th className="bor" scope="col">
                Total-Bounded
              </th>
              <th className="bor" scope="col">
                Nominatore
              </th>
              <th className="bor" scope="col">
                Commision
              </th>
              <th className="bor" scope="col">
                GrandPa Vote
              </th>
              <th className="bor" scope="col">
                Reward Point
              </th>
              <th className="bor" scope="col">
                Least Minning
              </th>
              {/* {data.paraHeading} */}
            </tr>
          </thead>
          <tbody>
            {filterParaChaniData
              .map((data, index) => {
                return (
                  <tr key={index} className="extrinsic_font_text">
                    <th scope="row" className="text-primary fw-normal">
                      {data.ParaId}
                    </th>
                    <td>{data.FundId}</td>
                    <td>{data.leasePeriod}</td>
                    <td>{data.sendXcmTransfer}</td>
                    <td>{data.channel}</td>
                    <td>{data.leasePeriod}</td>
                    <td>{data.sendXcmTransfer}</td>
                    <td>{data.channel}</td>

                  
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        {/* PAGINATION */}
        <PaginationControl
          page={page}
          between={4}
          total={250}
          limit={20}
          changePage={(page) => {
            setPage(page);
            console.log(page);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  );
};

export default StakingTable 
