import React from 'react'
import './plodashboard.css'
const PloTable = () => {
  return (
    <div className='container mt-3'>
        <div className='head d-flex'>
      <h5>Auction #41 Bidders</h5>
      <h5 className='ms-2'>Latest Update Block:</h5>
      <h5 className='ms-2 text-primary fw-bold'>14,571,187</h5>
      <div className='ms-auto'>
        <button className='view'>Charts</button>
      </div>
      </div>
      <div className="block_box box_margin">
          <table className="table mt-3">
            <thead>
              <tr>
                <th className='bor' scope="col">Para Id</th>
                <th className='bor' scope="col">Project</th>
                <th className='bor' scope="col">Owner</th>
                <th className='bor' scope="col">Lease Period</th>
                <th className='bor' scope="col">Fund Raised</th>
                <th className='bor' scope="col">Fund Cap</th>
                <th className='bor' scope="col">CountDown</th>
                <th className='bor' scope="col">Contributor</th>
              </tr>
            </thead>
          <tbody className='justify-content-center align-items-center text-center'>
            {/* {Array(30).fill('').map(()=>{
                return(
                    <tr>
                    <th scope="row" className="text-primary fw-normal">
                      14531294
                    </th>
                    <td>
                      <i className="bi bi-clock mt-0"></i>
                    </td>
                    <td className="time">1 hr 2 mins ago</td>
                    <td className="text-primary">3</td>
                    <td className="text-primary">45</td>
                    <td className="text-primary">15VbT8....w57qzp</td>
                    <td className="text-primary">0x1824....4210b6</td>
                  </tr>
                )
            })} */}
          </tbody>
         
          </table>
          <h1 className='text-center p-5'>search</h1>
          <p className='text-center p-5'>no data</p>
        </div>
    </div>
  )
}

export default PloTable
