import React from 'react'
import parachain from "../../../assets/parachain.webp";
import parachain2 from "../../../assets/parachain2.webp";
import { Link, NavLink } from "react-router-dom";
const XcmBlocks = () => {
  return (
    <div className='container'>
          <div className='row space-between'>
          <div className='col-md-6 col-12'>
            <div className='d-flex transfer'>
                <div className='d-flex align-items-center'>
            <i className="bi bi-arrow-down-up fs-2"></i>
                <h5 className=''>Latest XCM Transfers {""} (Total 210,149)</h5>
                </div>
                <NavLink className="ms-auto" to="block">
                <button className='view ms-auto'>View All</button>
                </NavLink>
                </div>
                <div className='box'>
                {Array(10).fill("").map(()=>{
                    return(
                   
                    <div className='box_inner'>
                    <div className='d-flex'>
                    <h6 className='mb-0'>Index#</h6>
                    <h6 className='ms-2 text-primary'>14,488,870</h6>
                    <p className='ms-auto mb-0 mt-2'>23.872 <span className='fw-bold dot_clr'>VRC</span> </p>
                    <i className="bi bi-check-circle icon_clr"></i>
                    </div>
                    <div className='d-flex mb-0'>
                    <p>From</p>
                    <p className='ms-2 text-primary'>1qnJN7....4t8GT7 {""}
                    
                    <span className='text-dark'>To</span> </p>    
                    <p className='mb-0 ms-1 text-primary'>15dJbp....gkLTsH</p>
                    <p className='ms-auto'>1 hr 29 min</p>
                    </div>
                    </div>
                
                    );
                })}
               </div>
            </div>


            {/* TRANSFER */}
            <div className="col-md-6 col-12 top">
            <div className="d-flex align-items-center">
            <i className="bi bi-fire fs-2"></i>
              <h5 className=''>Hot Channels <span style={{fontSize:'13px'}}>(Total 107)</span></h5>
              <NavLink className="ms-auto" to="transfer">
                <button className='view ms-auto align-items-center view_error'>View All</button>
                </NavLink>
            </div>
            <div className="box">
                {Array(10).fill("").map(()=>{
                    return(
                        <div className="d-flex responsive box_inner">
                        <div className="col-md-7 col-12">
                          <div className="d-flex bottom">
                            <img
                              src={parachain2}
                              alt="img"
                              className="img-fluid para_img"
                            />
                            <p className="mb-0">
                              Moonbeam
                              <br />
                              <span className="text-primary">2000</span>
                            </p>
                            <p className="ms-auto mb-0 left">
                              Acala <br />{" "}
                              <span className="text-primary">2004</span>{" "}
                            </p>
                            <img
                              src={parachain}
                              alt="img"
                              className="img-fluid para_img ms-2 img2"
                            />
                          </div>
        
                          <div className="line"></div>
                        </div>
                        <div className="col-md-5 col-12">
                          <div className="d-flex res">
                            <div className="d-block ms-auto mobile_para top">
                              <div className="d-flex">
                              <p className="text-primary mb-0 mt-2">7,216 Txs</p>
                              <i className="bi bi-check-circle icon_clr"></i>
                              </div>
                              <button className="ms-auto arrow">
                                <i className="bi bi-arrow-right para_icon"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                })}
            
             
              
            </div>
          </div>
            </div> 
    </div>
    // <Block />
  )
}

export default XcmBlocks
