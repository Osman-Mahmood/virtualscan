import React from 'react'
import Search from '../Search/Search'

import { Link, NavLink } from "react-router-dom";
import './demi.css'
const OverView = () => {
  return (
    <div>
      <Search />


      <div className='container mt-3'>
        <h5>Token Tether USD (Wormhole)</h5>
        <hr />
        <p>Sponsored:  bc.game - FREE 10000BNB everyday! Live casino + 20k slots ! Play Now Play Now
        </p>
        <div className='row justify-content-between' >
          <div className='col-md-5 col-12 view_box'>
            <h5 className='view_bor'>Overview </h5>
            <div className='d-flex view_bor'>
              <div className='d-block'>

            
              <p className='mb-0'>PRICE</p>
              <p className='mb-0 fw-bold'>$0.00 @ 0.000000 BNB
              </p>
              </div>
              <div className='ms-auto'>
                <p className='mb-0'>FULLY DILUTED MARKET CAP 
</p>
                <p className='mb-0 fw-bold'>$0.00 @ 0.000000 BNB</p>
              </div>
            </div>
            <div className='d-flex view_bor'>
              <h5>Total Supply:</h5>
              <h5 className='ms-auto'>
1,027.629578 USDT.e </h5>
            </div>
            <div className='d-flex view_bor'>
              <h5>Holders:</h5>
              <h5 className='ms-auto'>
              23 addresses</h5>
            </div>
            <div className='d-flex view_bor'>
              <h5>Transfers:</h5>
              <h5 className='ms-auto'>
336 </h5>
            </div>
            </div>        
          <div className='col-md-5 col-12 view_box '>
            <h5 className='view_bor'>Profile Summary</h5>

            <div className='d-flex view_bor'>
              <h5>Contract:</h5>
              <h5 className='ms-auto'>
0x2b90e061a517db2bbd7e39ef7f733fd234b494ca
 </h5>
            </div>
            <div className='d-flex view_bor'>
              <h5>Decimals:</h5>
              <h5 className='ms-auto'>
              6</h5>
            </div>
            <div className='d-flex view_bor'>
              <h5>Official Site:</h5>
              <h5 className='ms-auto'>

              https://wormholebridge.com/ 
 </h5>
            </div>
            <div className='d-flex view_bor'>
              <h5>Social Profiles:</h5>
              <h5 className='ms-auto'>

              https://wormholebridge.com/ 
 </h5>
            </div>
          </div>
        </div>
        <div className='d-flex'>
      <NavLink className="nav-link" to="/">
                   

Transfers
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                </div>
      </div>
     
 </div>
  )
}

export default OverView
