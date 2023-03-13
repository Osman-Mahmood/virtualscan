import React from 'react'
import Search from '../../Componenets/Search/Search'
import './Staking.css'
const StakingBox = () => {
  return (
   
    <div className='container'>
         <Search />
        <div className="row justify-content-between mt-3">
          <div className="col-md-7 chain_box d-flex asstes_mobile justify-content-center">
           <div className='col-md-2 d-block mobile_stake'>
              <h5>Validators</h5>
              <p className="mb-0 number">297/297</p>
              </div>
         
           
           
                <div className="col-md-2 mobile_stake">
              <h5>Nomination Pools</h5>
              <p className="mb-0">106/128</p>
              </div>
              <div className="col-md-2 mobile_stake">
              <h5>Inflation Rate</h5>
              <p className="mb-0">7.44%</p>
              </div>
            
           <div className='col-md-6'>
            <div className='d-flex mobile_stake'>
                <h5 className='ms-2'>Era #1011</h5>
                <h5 className='ms-auto'>11,988/14,400</h5>
            </div>
            <div class="line_stake"></div>
            <div className='d-flex mobile_stake'>
                <h5 className='ms-2'>Era #1011</h5>
                <h5 className='ms-auto'>11,988/14,400</h5>
            </div>
            <div class="line_stake"></div>
           </div>
          </div>
          <div className="col-md-4 chain_box">
            <h1>GRAPH HERE</h1>
          </div>
        </div>
      </div>
  )
}

export default StakingBox
