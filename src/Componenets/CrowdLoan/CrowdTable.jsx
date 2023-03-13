import React,{useEffect, useState} from 'react'
import paraChain from "../../tableData";

import { PaginationControl } from "react-bootstrap-pagination-control";
const CrowdTable = () => {
    const [page, setPage] = useState(1);
    const [paraData,showParaData] = useState("active");
    const [paraChaniData, setParaChainData] = useState(paraChain);
    const [filterParaChaniData,setFilterParaChainData] = useState(paraChain);
  
    useEffect(() => {

      if(paraData === "completed" ){
        let obj = []
        obj = paraChaniData.filter(data => data.ParaId === 1234)
        setFilterParaChainData(obj)
      } else if (paraData === "retired") {
        let obj = []
        obj = paraChaniData.filter(data => data.ParaId === 12345) 
        setFilterParaChainData(obj)
      } else {
        setFilterParaChainData(paraChaniData)
      }
  
    }, [paraData])
// teri logic ni chli idr // kr 
  return (
    <div className='container mt-3'>
      <div className="block_box box_margin">
        <button className={paraData === "active" ? "select_btn_active select_btn" : "select_btn"} onClick={() => showParaData("active")} >Active</button>
        <button className={paraData === "completed" ? "select_btn_active select_btn" : "select_btn"} onClick={() => showParaData("completed")} >Completed</button>
        <button className={paraData === "retired" ? "select_btn_active select_btn" : "select_btn"} onClick={() => showParaData("retired")} >Retired</button>
        <table className="table mt-3">
          <thead className="extrinsic_font">

            <tr>
              <th className="bor" scope="col">
                Para Id
              </th>
              <th className="bor" scope="col">
                Fund Id
              </th>
              <th className="bor" scope="col">
                Lease Period
              </th>
              <th className="bor" scope="col">
                Send XCM Transfer
              </th>
              <th className="bor" scope="col">
                Channel
              </th>
              <th className="bor" scope="col"></th>
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
  )
}

export default CrowdTable
