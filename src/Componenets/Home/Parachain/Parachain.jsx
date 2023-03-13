import React from "react";
import "./Parachain.css";
import parachain from "../../../assets/parachain.webp";
import { Link, NavLink } from "react-router-dom";
import parachain2 from "../../../assets/parachain2.webp";
import ParachainGraph from "./ParachainGraph";
const Parachain = () => {
  return (
    <div className="container p-o mt-3">
      <div className="">
        <div className="row space-between">
          <div className="col-md-6 col-12">
            <div className="d-flex align-items-center">
            <i className="bi bi-pie-chart-fill fs-2"></i>
              <h5 className=''>Parachain Connection Status</h5>
            </div>

            <div className="box circle_graph">
              <div className="box_inner">
                <ParachainGraph />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12 mobile_hot">
            <div className="d-flex align-items-center">
            <i className="bi bi-fire fs-2"></i>
              <h5 className=''>Hot Channels <span style={{fontSize:'13px'}}>(Total 107)</span></h5>
              <NavLink className="ms-auto" to="xcmchannel">
              <button className="view ms-auto">View All</button>
              </NavLink>
            </div>
            <div className="box">
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      Virtual
                      <br />
                      <span className="text-primary">2003</span>
                    </p>
                    <p className="ms-auto mb-0">
                      VRC <br />{" "}
                      <span className="text-primary">2010</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line mt-2"></div>
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
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      VIRTUAL
                      <br />
                      <span className="text-primary">2002</span>
                    </p>
                    <p className="ms-auto mb-0">
                      VRC <br />{" "}
                      <span className="text-primary">2010</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line2 mt-2"></div>
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
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      Virtual
                      <br />
                      <span className="text-primary">2012</span>
                    </p>
                    <p className="ms-auto mb-0">
                      Minnet <br />{" "}
                      <span className="text-primary">2020</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line mt-2"></div>
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
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      VirtualScan
                      <br />
                      <span className="text-primary">2020</span>
                    </p>
                    <p className="ms-auto mb-0">
                      VRC <br />{" "}
                      <span className="text-primary">2025</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line2 mt-2"></div>
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
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      MVC
                      <br />
                      <span className="text-primary">2002</span>
                    </p>
                    <p className="ms-auto mb-0">
                      CBC <br />{" "}
                      <span className="text-primary">2001</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line mt-2"></div>
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
              <div className="d-flex responsive box_inner">
                <div className="col-md-7 col-12">
                  <div className="d-flex bottom">
                    <img
                      src={parachain2}
                      alt="img"
                      className="img-fluid para_img"
                    />
                    <p className="mb-0 ms-2">
                      LIGHT
                      <br />
                      <span className="text-primary">2030</span>
                    </p>
                    <p className="ms-auto mb-0">
                      VRC <br />{" "}
                      <span className="text-primary">2022</span>{" "}
                    </p>
                    <img
                      src={parachain}
                      alt="img"
                      className="img-fluid para_img ms-2 img2"
                    />
                  </div>

                  <div className="line2 mt-2"></div>
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
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parachain;
