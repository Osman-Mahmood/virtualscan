import React, { useState } from "react";
import navbarbackground from "../../assets/navbarbackground.png";
import "./Navbar.css";
import toggle from "../../assets/toggle.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <>
    <div className="back">
      <div className="container p-0 back">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
          <NavLink className="navbar-brand mobile_navbar" to="/">
            Navbar
          </NavLink>
          <a className="nav-link ms-5 text-white res_vrc" href="#">
            <span className="fw-bold">VRC</span> {""} $6.450 (-2.66%)
          </a>
          <div
            className="collapse navbar-collapse justify-content-center align-items-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-center">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blockchain
                </a>
                <div
                  className="dropdown-menu min-width-thin"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="block">
                    Blocks
                  </NavLink>
                  <NavLink className="dropdown-item" to="extrinsic">
                    Extrinsic
                  </NavLink>
                  <NavLink className="dropdown-item" to="transfer">
                    Transfers
                  </NavLink>
                  <NavLink className="dropdown-item" to="event">
                    Events
                  </NavLink>
                  <NavLink className="dropdown-item" to="assets">
                    Assets
                  </NavLink>
                  <NavLink className="dropdown-item" to="account">
                    Accounts
                  </NavLink>
                  <NavLink className="dropdown-item" to="logout">
                    Logs
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Parachain
                </a>
                <div
                  className="dropdown-menu min-width-thin"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="plodashboard">
                    PLO Dashboard
                  </NavLink>
                  <NavLink className="dropdown-item" to="parachain">
                    Parachain
                  </NavLink>
                  <NavLink className="dropdown-item" to="auction">
                    Auction
                  </NavLink>
                  <NavLink className="dropdown-item" to="crowdload">
                    CrowdLoad
                  </NavLink>
                  <NavLink className="dropdown-item" to="bid">
                    Bid
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  XCM
                </a>
                <div
                  className="dropdown-menu min-width-thin"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="xcmdashboard">
                    XCM Dashboard
                  </NavLink>
                  <NavLink className="dropdown-item" to="xcmmessage">
                    XCM Messages
                  </NavLink>
                  <NavLink className="dropdown-item" to="xcmtransfer">
                    XCM Transfer
                  </NavLink>
                  <NavLink className="dropdown-item" to="xcmchannel">
                    XCM Channels
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="staking">
                Staking
              </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Governance
                </a>
                <div
                  className="dropdown-menu min-width-thin"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                   <NavLink className="dropdown-item" to="proposal">
               Democracy Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="refranda">
               Democracy Referanda
             </NavLink>
             <NavLink className="dropdown-item" to="motion">
               Council Motions
             </NavLink>
             <NavLink className="dropdown-item" to="tech">
               Tech . Com . Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="tresury">
               Tresury Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="tips">
               Tresury Tips
             </NavLink>
             <NavLink className="dropdown-item" to="bounties">
               Bounties
             </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools
                </a>
                <div
                  className="dropdown-menu min-width-thin"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to="runtime">
               Runtime
             </NavLink>
             <NavLink className="dropdown-item" to="accountformat">
               Account Format Transform
             </NavLink>
             <NavLink className="dropdown-item" to="priceconverter">
               Price converter
             </NavLink>
             <NavLink className="dropdown-item" to="charts">
               Charts
             </NavLink>
             <NavLink className="dropdown-item" to="multisig">
               Multi-sig Tool
             </NavLink>
             <NavLink className="dropdown-item" to="apiDocs">
               API Docs
             </NavLink>
             <NavLink className="dropdown-item" to="apiKey">
               Get API Key
             </NavLink>
                </div>
              </li>
              <li className="nav-item active ms-5">
                <a className="nav-link mainnet" href="#">
                 <span className="mainnetvrc">MAINNET</span>  VirtualScan
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* RESPONSIVE VIEW MENU */}

      {/* Bars here */}
      <button
        className="btn btn-menue transform-icon me-auto "
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        aria-controls="offcanvasExample"
        // onClick={() => setNavShow(!navShow)}
      >
        {/* Bars here */}

        <div htmlFor="menu_checkbox" className="toggle-icon">
          <img src={toggle} alt="" className="img-fluid toggle" />
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
     <div
     className="offcanvas offcanvas-end"
     tabIndex="-1"
     id="offcanvasExample"
     aria-labelledby="offcanvasExampleLabel"
   >
     <div className="offcanvas-header">
       <h1 className="offcanvas-title" id="offcanvasExampleLabel">
         <a
           to={"/"}
           className="d-flex text-white fs-5 text-decoration-none menu_size"
         >
           MENU
         </a>
       </h1>
       <button
         type="button"
         className="btn-close"
         data-bs-dismiss="offcanvas"
         aria-label="Close"
       ></button>
     </div>
     <div className="offcanvas-body">
       <ul className="p-0">
         <li className="nav-item active">
           <NavLink className="nav-link" to="/"    
            data-bs-dismiss="offcanvas"
            aria-label="Close">
             Home{" "}
           </NavLink>
           
         </li>
         <li className="nav-item dropdown">
           <a
             className="nav-link dropdown-toggle"
             data-bs-toggle="collapse"
             href="#collapseExample4"
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample"
           >
             Blockchain
           </a>
           <div
             className="collapse min-width-thin"
             aria-labelledby="navbarDropdownMenuLink"
             id="collapseExample4"
             data-bs-dismiss="offcanvas"
             aria-label="Close"
           >
             <NavLink className="dropdown-item" to="block">
               Blocks
             </NavLink>
             <NavLink className="dropdown-item" to="extrinsic">
               Extrinsic
             </NavLink>
             <NavLink className="dropdown-item" to="transfer">
               Transfers
             </NavLink>
             <NavLink className="dropdown-item" to="event">
               Events
             </NavLink>
             <NavLink className="dropdown-item" to="assets">
               Assets
             </NavLink>
             <NavLink className="dropdown-item" to="account">
               Accounts
             </NavLink>
             <NavLink className="dropdown-item" to="logout">
               Logs
             </NavLink>
           </div>
         </li>
         <li className="nav-item dropdown">
           <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
           >
             Parachain
           </a>
           <div
            className="collapse min-width-thin"
            aria-labelledby="navbarDropdownMenuLink"
            id="collapseExample3"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
           >
              <NavLink className="dropdown-item" to="plodashboard">
                 PLO Dashboard
               </NavLink>
               <NavLink className="dropdown-item" to="parachain">
                 Parachain
               </NavLink>
               <NavLink className="dropdown-item" to="auction">
                 Auction
               </NavLink>
               <NavLink className="dropdown-item" to="crowdload">
                 CrowdLoad
               </NavLink>
               <NavLink className="dropdown-item" to="bid">
                 Bid
               </NavLink>
           </div>
         </li>
         <li className="nav-item dropdown">
           <a
             className="nav-link dropdown-toggle"
             data-bs-toggle="collapse"
             href="#collapseExample2"
             role="button"
             aria-expanded="false"
             aria-controls="collapseExample"
           >
             XCM
           </a>
           <div
             className="collapse min-width-thin"
             aria-labelledby="navbarDropdownMenuLink"
             id="collapseExample2"
             data-bs-dismiss="offcanvas"
             aria-label="Close"
           >
            <NavLink className="dropdown-item" to="xcmdashboard">
                 XCM Dashboard
               </NavLink>
               <NavLink className="dropdown-item" to="xcmmessage">
                 XCM Messages
               </NavLink>
               <NavLink className="dropdown-item" to="xcmtransfer">
                 XCM Transfer
               </NavLink>
               <NavLink className="dropdown-item" to="xcmchannel">
                 XCM Channels
               </NavLink>
           </div>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="staking" 
              data-bs-dismiss="offcanvas"
              aria-label="Close" 
              >
             Staking
           </NavLink>
        
         </li>
         <li className="nav-item dropdown">
           <a
           className="nav-link dropdown-toggle"
           data-bs-toggle="collapse"
           href="#collapseExample1"
           role="button"
           aria-expanded="false"
           aria-controls="collapseExample"
           >
             Governance
           </a>
           <div
             className="collapse min-width-thin"
             aria-labelledby="navbarDropdownMenuLink"
             id="collapseExample1"
             data-bs-dismiss="offcanvas"
             aria-label="Close"
           >
             <NavLink className="dropdown-item" to="proposal">
               Democracy Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="refranda">
               Democracy Referanda
             </NavLink>
             <NavLink className="dropdown-item" to="motion">
               Council Motions
             </NavLink>
             <NavLink className="dropdown-item" to="tech">
               Tech . Com . Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="tresury">
               Tresury Perposals
             </NavLink>
             <NavLink className="dropdown-item" to="tips">
               Tresury Tips
             </NavLink>
             <NavLink className="dropdown-item" to="bounties">
               Bounties
             </NavLink>
           </div>
         </li>
         <li className="nav-item dropdown">
           <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
           >
             Tools
           </a>
           <div
            className="collapse min-width-thin"
            aria-labelledby="navbarDropdownMenuLink"
            id="collapseExample"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
           >
             <NavLink className="dropdown-item" to="runtime">
               Runtime
             </NavLink>
             <NavLink className="dropdown-item" to="accountformat">
               Account Format Transform
             </NavLink>
             <NavLink className="dropdown-item" to="priceconverter">
               Price converter
             </NavLink>
             <NavLink className="dropdown-item" to="charts">
               Charts
             </NavLink>
             <NavLink className="dropdown-item" to="multisig">
               Multi-sig Tool
             </NavLink>
             <NavLink className="dropdown-item" to="apiDocs">
               API Docs
             </NavLink>
             <NavLink className="dropdown-item" to="apiKey">
               Get API Key
             </NavLink>
           </div>
         </li>
       </ul>
     </div>
   </div>
   </>
  );
};

export default Navbar;
