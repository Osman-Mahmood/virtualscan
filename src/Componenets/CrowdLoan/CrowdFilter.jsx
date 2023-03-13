import React from 'react'
import Search from '../../Componenets/Search/Search'
import './Crowd.css'
const CrowdFilter = () => {
  return (
    <div>
      <Search />
      <div className='container mt-3 crowd_mob'>
        <h5>Crowdloan List (1)</h5>
        <div className='row mt-3'>
            <div className='col-md-4 justify-content-between'>
                <div className='d-flex'>
             <h5>Lease Period</h5>
             <input type="text" className='crowd_input ms-3'/>
             <h5 className='ms-3'>-</h5>
             <input type="text" className='crowd_input ms-3'/>
            </div>
            </div>
            <div className='col-md-5'>
                <div className='d-flex'>
                <h5>Owner ParaId</h5>
                <input type="text"  className='ms-3'/>
                </div>
                </div>
                <div className='col-md-3'>
                <button className='btn btn-danger'>Filter</button>
                </div>
               
        </div>
      </div>
    </div>
  )
}

export default CrowdFilter
