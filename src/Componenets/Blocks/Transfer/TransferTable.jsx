import React, { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import "./Transfer.module.css";
const TransferTable = () => {
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
                <th scope="col">Time</th>
                <th scope="col">From</th>
                <th scope="col">To</th>
                <th scope="col">Value</th>
                <th scope="col">Result</th>
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
                        14543713
                      </th>
                      <td>14543713</td>
                      <td className="time">1 hr 2 mins ago</td>
                      <td className="text-primary">1346Pq....VA7mcq</td>
                      <td className="text-primary">16XyxJ....TgEXZU</td>
                      <td className="text-primary">950.015 VRC</td>
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

export default TransferTable;
