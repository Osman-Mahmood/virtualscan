import React, { Component } from "react";
import Slider from "react-slick";
import './FocusChain.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
        <div className="container p-0">
      
      <div className="slider_wid">
        <Slider {...settings}>
          <div className="">
           
            <h5 className="bg">BASIC INFO</h5>
       
                <h6 className="ms-3 mb-0">VIRTUAL TECH</h6>
                <p className="ms-3 text-primary">VRC $6.040 (-5.33%)</p>
          </div>
          <div>
          <h5 className="bg">Auction #41</h5>
                <p className="ms-3 mb-0 text-primary">In Auction</p>
                <p className="ms-3 mb-0">Lease Period: 11 - 18</p>
                <p className="ms-3 text-primary">2 Crowdloans {""} 3 Bids</p>
                <div className="d-md-flex justify-content-md-end justify-content-end detail">
                  <button className="btn details_btn">Details</button>
                </div>
          </div>
          <div>
          <h5 className="bg">Referenda #107</h5>
                <p className="ms-3 mb-0">Runtime Release v9370 for VIRTUAL</p>
                <p className="ms-3 text-primary">Countdown: 4 days 1 hr</p>
                <div className="d-md-flex justify-content-md-end detail">
                  <button className="btn details_btn">Details</button>
                </div>
          </div>
          <div>
          <h5 className="bg">Referenda #106</h5>
                <p className="ms-3 mb-0">
                  A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum,
                  Litentry
                </p>
                <p className="ms-3 text-primary">Countdown: 7 days 1 hr</p>
                <div className="d-md-flex justify-content-md-end detail">
                  <button className="btn details_btn">Details</button>
                </div>
          </div>
          <div>
          <h5 className="bg">Referenda #103</h5>
                <p className="ms-3 mb-0">Unbrick Zeitgeist Parachain</p>
                <p className="ms-3 mb-0">By—Zeitgeist</p>
                <p className="ms-3 text-primary">Countdown: 2 days 1 hr</p>
                <div className="d-md-flex justify-content-md-end detail">
                  <button className="btn details_btn">Details</button>
                </div>
          </div>
        
        </Slider>
      </div>
      </div>
    );
  }
}