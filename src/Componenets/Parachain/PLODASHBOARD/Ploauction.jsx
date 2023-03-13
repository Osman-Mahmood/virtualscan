import React from 'react'
import './plodashboard.css'
const Ploauction = () => {
  return (
    <div className='container mt-3'>
        <div className='d-flex'>
      <h5>Auction</h5>
      <div className='ms-auto'>
        <button className='view'>Auction Hiostry</button>
        <button className='view'>Last Auction</button>
      </div>
     
      </div>
      <div className='plo_box justify-content-center align-items-center text-center'>
           <h3>No auctions in progress</h3>
           <h3>The next auction is in preparation</h3>
      </div>
    </div>
  )
}

export default Ploauction
