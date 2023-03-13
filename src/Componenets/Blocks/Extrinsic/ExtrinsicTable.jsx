import React, { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import "./Extrinsic.css";
import '../../../Componenets/Navbar/Navbar.css'
const ExtrinsicTable = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div className="container mt-4">
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead className="extrinsic_font">
              <tr>
                <th scope="col">Extrinsic Id</th>
                <th scope="col">Block</th>
                <th scope="col">Extrinsic Hash</th>
                <th scope="col">Time</th>
                <th scope="col">Result</th>
                <th scope="col">Action</th>
                <th scope="col">List</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Array(1)
                .fill("")
                .map(() => {
                  return (
                    <tr className="extrinsic_font_text">
                      <th scope="row" className="text-primary fw-normal">
                        14543713
                      </th>
                      <td>
                        14543713
                      </td>
                      <td className="time">0x0d9b....c7cbb0</td>
                      <td className="text-primary">	
3 mins ago</td>
                      <td className="text-primary">	   <i className="bi bi-x-circle-fill fill"></i></td>
                      <td className="text-primary">balances (transfer)</td>
                      <td className="text-primary">
                    
        <button className="dropdown-toggle extrinsic_btn" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
        </button>
     
      
                      </td>
                    </tr>
                  );
                })}
              
            </tbody>
            
          </table>
          <div className="container">
          <div className="row">
            <div className="col-md-8 new_box">
        <div className="collapse min-width-thin w-100" aria-labelledby="navbarDropdownMenuLink" id="collapseExample4">
          <div className="d-flex list_new">
        <a className="dropdown-item" to="block">dest</a>
        <a className="dropdown-item" to="block">id</a>
        <a className="dropdown-item" to="block">12dv8KGjFs9yA5NQgH6dwqkyu4gENx2HKuB2vJdJTNecRY5E</a>
        </div>
        <hr />
        <div className="d-flex list_new mt-3">
        <a className="dropdown-item" to="block">value</a>
        <a className="dropdown-item" to="block">2,346.75933552 VRC</a>
        </div>
        </div>
            </div>
            </div>
            </div>
        </div>
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
  );
};

export default ExtrinsicTable;
