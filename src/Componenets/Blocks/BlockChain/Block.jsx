// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Search from "../../Search/Search";
import "./BlockChain.css";
const Block = () => {
    const [page, setPage] = useState(1)
  
    useEffect(()=> {
      window.scrollTo(0,0)
    },[])

  return (
    <div>
      <Search />
      {/* Table */}
      <div className="container mt-4">
        <div className="block_box">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Block</th>
                <th scope="col">Status</th>
                <th scope="col">Time</th>
                <th scope="col">Extrinsics</th>
                <th scope="col">Events</th>
                <th scope="col">Valoidator</th>
                <th scope="col">Block Hash</th>
              </tr>
            </thead>
          <tbody>
            {Array(30).fill('').map(()=>{
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
            })}
          </tbody>
          </table>
        </div>
      </div>
      <div className='text-center'>
        {/* PAGINATION */}
      <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      setPage(page); 
      console.log(page)
    }}
    ellipsis={1}
  />
  </div>
    </div>
  );
};

export default Block;
