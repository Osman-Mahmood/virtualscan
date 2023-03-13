import React from 'react'
import Search from '../../Search/Search'
import Select from "react-select";
import './Price.css'
const PriceConvert = () => {
    const options = [
        { value: "date", label: "Date" },
        { value: "block", label: "Block" },
      ];
      const dimention = [
        { value: "usd", label: "USD" },
        { value: "balence", label: "BALENCE" },
      ];
      const vrc = [
        { value: "vrc", label: "VRC" },
        { value: "usd", label: "USD" },
      ];
  return (
    <div>
      <Search />
      <div className='container mt-3'>
        <h5>Price Converter</h5>
          <div className='row mt-3'>
            <div className='col-md-12 format_box'>
              <h5>Conversion will be based on historical price at this time</h5>
              <h5 className='mt-3'>Time Dimention</h5>
              <Select
                defaultValue={options[0]}
                options={options}
                className="price"
              />
              <h5 className='mt-3'>Block</h5>
              <input type="text" className="price_inp"/>
              <div className='d-flex mt-3 mob_res'>
                <div className='d-block'>
                <h5>From</h5>
                
                <input type="text" placeholder='Enter the Number of VRC' className='price_inp mt-3'/>
                </div>
                <Select  defaultValue={vrc[0]} options={vrc} className="mt-5 ms-5 dimen_wid mob_res"/>
                <i class="bi bi-arrow-right fs-3 ms-3 mt-5 arrow_margin"></i>
                <div className='d-block'>
                <h5 className='ms-5 mob_res'>To</h5>
                <Select  defaultValue={dimention[0]} options={dimention} className="mt-4 ms-5 dimen_wid mob_res top"/>
             </div>
              </div>
              <button className="format_btn">Convert</button>
              <div className='result bg-light text-primary mt-3 w-100 p-3'>
                <h5>Result :</h5>
                <div className='d-flex'>
                    <h5>DOT Price ( USD ):</h5>
                    <h5 className='ms-3'>
Number of USD:</h5>
                </div>
            </div>
            </div>
          
          </div>
      </div>
    </div>
  )
}

export default PriceConvert
