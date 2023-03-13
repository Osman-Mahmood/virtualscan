import React from 'react'
import Search from "../../Search/Search";
import './plodashboard.css'
const PloDashBoard = () => {
  return (
    <div>
      <Search />
      <div className='container mt-3'>
        <div className='row d-flex'>
          <div className='col-md-12'>
          <div className="col-lg-12 col-md-12 col-12">
          {/* <div className="d-flex align-items-center">
        <i className="bi bi-file-earmark-bar-graph fs-2"></i>
          <h5>Chain Data</h5>
          </div> */}
          <div className="chain_box">
          <div className="d-flex chain">

        
          <div className="col-md-3 d-flex">
            <h3 className="mb-0 mt-1">Virtual VRC</h3>
            {/* <h6 className="num">14,549,943</h6> */}
            <h5 className='bg-dark text-light ms-3 mb-0 relay'>Relay Chain</h5>
          </div>
          <div className="col-md-3 chain_res ms-3 plo_res">
            <h5 className="mb-0">Parachain/Total Slot</h5>
            <h6 className="number">43/100</h6>
          </div>
          <div className="col-md-3 chain_res">
            <h5 className="mb-0">Parathread</h5>
            <h6 className="number">13</h6>
          </div>
         
          {/* <div className="d-flex mt-3"> */}

        
<div className="col-md-2 chain_res">
  <h5 className="mb-0">Auction</h5>
  <h6 className="number">41</h6>
</div>
<div className="col-md-2 chain_res">
  <h5 className="mb-0">Current Lease</h5>
  <h6 className="number">11</h6>
</div>

{/* </div> */}
</div>
        </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PloDashBoard
