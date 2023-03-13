import React from 'react'
import './Search.css'
import { Link, NavLink } from "react-router-dom";
const Search = () => {
  return (
    <div className='container-fluid p-0 mt-3'>
     <div className='row text-center justify-content-center align-items-center'>
        <div className='col-lg-8 col-md-12 col-12'>
            <div className='d-flex mb-1 ms-5 search_res'>
        {/* <select className="form-select" aria-label="Default select example">
  <option selected>ALL</option>
  <option className='option' value="1">ALL</option>
  <option value="2">Extrinsic</option>
  <option value="3">Account</option>
  <option value="4">Event</option>
  <option value="5">Validator</option>
  <option value="6">Nominator</option>
</select>  */}

<div className='col-11 d-flex marg justify-content-center text-center'>
<input type="text" placeholder='Block/Extrinsic/Account' className='search'/>
<NavLink className="" to="searchpage">
<button className='btn_search'>Search</button>
<button className='d-none mobile_search bg-white search_icon'><i className="bi bi-search fs-2 clr_search_icon"></i></button>
</NavLink>
</div>

</div>
</div>
        </div>
     </div>
  )
}

export default Search
