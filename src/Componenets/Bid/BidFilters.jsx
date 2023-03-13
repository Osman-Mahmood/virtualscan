import React from 'react'
import Search from '../Search/Search'
import Select from "react-select";
import TransferTable from '../Blocks/Transfer/TransferTable';
import './bid.css'
const BidFilters = () => {
    const type = [
        { value: "all", label: "All" },
        { value: "inprogess", label: "In Progress" },
        { value: "succeeded", label: "Succeeded" },
        { value: "failed", label: "Failed" },
      ];
  return (
    <div>
    <Search />
    <div className='container crowd_mob'>
      <h5>Bid List (48)</h5>
      <div className='row mt-3'>
      <div className='col-md-3'>
                <div className='d-flex'>
                <h5>Compaign Status</h5>
                <Select
          defaultValue={type[0]}
          options={type}
          className="ms-2 type_wid"
        />
                </div>
                </div>
            <div className='col-md-4 justify-content-between'>
                <div className='d-flex'>
             <h5>Lease Period</h5>
             <input type="text" className='crowd_input ms-3'/>
             <h5 className='ms-3'>-</h5>
             <input type="text" className='crowd_input ms-3'/>
            </div>
            </div>
          
                <div className='col-md-5 text-end'>
                <button className='btn btn-danger ms-auto'>Filter</button>
                </div>
               
        </div>
    </div>
    <TransferTable />
    </div>
  )
}

export default BidFilters
