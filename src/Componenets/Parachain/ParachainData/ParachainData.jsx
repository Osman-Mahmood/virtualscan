import React from 'react'
import Search from "../../Search/Search";
import './Parachaindata.css'
const ParachainData = () => {
  return (
    <div>
      <Search />
      <div className='container mt-3'>
      
          <div className='row'>
            <div className='col-md-6 col-12 box_dat'>
            <h5>Basic Data</h5>
            <div className='chain_box '>
                <h5>Virtual VRC</h5>
                <p className='relay'>Relay Chain</p>
                <div className='divide'></div>
                <div className='data_box p-2 rounded'>
                    <h5 className='text-white'>Auction #42 is in preparation</h5>
                </div>
                <div className="d-flex align-items-center">
          </div>
          <div className="chain_box">
          <div className="d-flex chain">

        
          <div className="col-md-4 chain_res">
            <p className="mb-0">Parachain/Total Slot</p>
            <h6 className="number">43/100</h6>
          </div>
          <div className="col-md-4 chain_res">
            <p className="mb-0">Parathread</p>
            <h6 className="number">13</h6>
          </div>
          <div className="col-md-4 chain_res">
            <p className="mb-0">Open Channels</p>
            <h6 className="number">94</h6>
          </div>
          </div>
          <div className="d-flex chain mt-3">

        
<div className="col-md-4 chain_res">
  <p className="mb-0">Auction</p>
  <h6 className="number">41</h6>
</div>
<div className="col-md-4 chain_res">
  <p className="mb-0">Current Lease</p>
  <h6 className="number">11</h6>
</div>
<div className="col-md-4 chain_res">
  <p className="mb-0">XCM Transfers</p>
  <h6 className="number">209355</h6>
</div>
</div>
</div>
            </div>
            </div>
            
            <div className='col-md-6 col-12 box_dat'>
            <h5>Parachain Connection Status</h5>
            <div className='chain_box '>
                <h5>Graph here</h5>
            </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default ParachainData
