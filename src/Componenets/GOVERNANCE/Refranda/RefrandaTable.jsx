import React, { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Search from "../../Search/Search";
const RefrandaTable = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Search />
      <div className="container">
        <h5>Democracy Referenda</h5>
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead className="extrinsic_font">
              <tr>
                <th className="bor" scope="col">
                  Refrabdum Id
                </th>
                <th className="bor" scope="col">
                  Block
                </th>
                <th className="bor" scope="col">
                  Vote Threshold
                </th>
                <th className="bor" scope="col">
                  Action
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
                        110
                      </th>
                      <td>14573699</td>
                      <td className="time">SimpleMajority </td>
                      <td className="text-primary">Utility (batch_all)</td>
                      <td className="text-primary">1 day 2 hrs ago</td>
                      <td className="text-primary">started</td>

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

export default RefrandaTable;
