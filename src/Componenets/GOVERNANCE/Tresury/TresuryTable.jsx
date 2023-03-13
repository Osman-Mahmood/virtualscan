import React, { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Search from '../../Search/Search'

const TresuryTable = () => {
    const [page, setPage] = useState(1);
  return (
    <div>
       <div>
      <Search />
      <div className='container mt-3'>
        <h5 className="ms-2">Treasury Proposals</h5>
        <div className="container">
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead className="extrinsic_font">
              <tr>
                <th className="bor" scope="col">
                  Proposal Id
                </th>
                <th className="bor" scope="col">
                  Block
                </th>
                <th className="bor" scope="col">
                  Beneficiary
                </th>
                <th className="bor" scope="col">
                  Perposed By
                </th>
                <th className="bor" scope="col">
                  Value
                </th>
                <th className="bor" scope="col">
                  Time
                </th>
                <th className="bor" scope="col">
                  Status
                </th>
                <th className="bor" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Array(30)
                .fill("")
                .map((data, index) => {
                  return (
                    <tr key={index} className="extrinsic_font_text">
                      <th scope="row" className="text-primary fw-normal">
                        367
                      </th>
                      <td>14573699</td>
                      <td className="time">8 </td>
                      <td className="text-primary">2</td>
                      <td className="text-primary">0</td>
                      <td className="text-primary">	
Treasury (approve_proposal)</td>
                      <td className="text-primary">1 day 2 hrs ago</td>
                      {/* <td className="text-primary"><i class="bi bi-check-circle icon_clr"></i> {" "}Perposed</td> */}

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
    </div>
    </div>
  )
}

export default TresuryTable
