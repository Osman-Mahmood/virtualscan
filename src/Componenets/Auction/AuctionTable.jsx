import React from 'react'
import Search from "../../Componenets/Search/Search";
const AuctionTable = () => {
  return (
    <div>
      <Search />
      <div className='container mt-3'>
        <h5>Auction History</h5>
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Auction Index</th>
                <th scope="col">Lease Period</th>
                <th scope="col">Winner</th>
                <th scope="col">Status</th>
              
              </tr>
            </thead>
          <tbody>
            {Array(30).fill('').map(()=>{
                return(
                    <tr>
                    <th scope="row" className="text-primary fw-normal">
                      41
                    </th>
                    <td>
                     11-18
                    </td>
                    <td className="time">333 ? Unknown</td>
                    <td className="text-primary">Auction Termination</td>
                   
                  </tr>
                )
            })}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AuctionTable
