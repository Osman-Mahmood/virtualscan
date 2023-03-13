import React,{useState,useEffect} from 'react'
import { PaginationControl } from "react-bootstrap-pagination-control";
const ChannelTable = () => {
    const [page, setPage] = useState(1);
    useEffect(()=> {
      window.scrollTo(0,0)
    },[])
  return (
    <div className='container mt-3'>
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead className="extrinsic_font">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Transfers</th>
                <th scope="col">Active Time</th>
                <th scope="col">Status</th>
             
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Array(30)
                .fill("")
                .map((data, index) => {
                  return (
                    <tr key={index} className="extrinsic_font_text"> 
                      <th scope="row" className="text-primary fw-normal">
                        1
                      </th>
                      <td>Moonbeam</td>
                      <td className="time">Acala</td>
                      <td className="text-primary">	
7276</td>
                      <td className="text-primary">	
302 days 21 hrs ago</td>
                      {/* <td className="text-primary">950.015 VRC</td> */}
                      <td className="text-primary">
                        <i className="bi bi-check-circle icon_clr"></i>
                      </td>
                      <td className="text-primary">
                        <button className="ms-auto arrow">
                          <i className="bi bi-arrow-right para_icon"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="text-center">
        {/* PAGINATION */}
        <PaginationControl
          page={page}
          between={4}
          total={250}
          limit={20}
          changePage={(page) => {
            setPage(page);
            console.log(page);
          }}
          ellipsis={1}
        />
      </div>
    </div>
  )
}

export default ChannelTable
