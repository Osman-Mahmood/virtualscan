import React, { useEffect, useState } from "react";
// import "./Parachaindata.css";
import Search from '../../Search/Search'
import paraChain from "../../../tableData";
import { PaginationControl } from "react-bootstrap-pagination-control";
const BountiesTable = () => {
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
        <Search />
      <div className="d-flex mt-3 mb-2">
        <h5 className="ms-2">Bounties</h5>
      </div>
      <div className="block_box box_margin">
        <div className="d-flex">
        <button className={paraData === "paraChain" ? "select_btn_active select_btn" : "select_btn"} onClick={() => showParaData("paraChain")} >In Progress</button>
        <button className={paraData === "paraThread" ? "select_btn_active select_btn" : "select_btn"} onClick={()=>showParaData("paraThread")}>Completed</button>    
         <div className="ms-auto">
            <button className="view mt-3">View All</button>
         </div>
         </div>
        <table className="table mt-3">
          <thead className="extrinsic_font">

            <tr>
              <th className="bor" scope="col">
                Perposal ID
              </th>
              <th className="bor" scope="col">
                Perposer
              </th>
              <th className="bor" scope="col">
                Description
              </th>
              <th className="bor" scope="col">
                Value
              </th>
              <th className="bor" scope="col">
                Time
              </th>
              <th className="bor" scope="col">
                Status
              </th>
              <th className="bor" scope="col">
                
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
                  
                    <td className="text-primary">
                        <button className="ms-auto arrow">
                          <i className="bi bi-arrow-right para_icon"></i>
                        </button>
                      </td>
                  
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

export default BountiesTable 
