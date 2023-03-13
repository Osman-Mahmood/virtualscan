import React from "react";

const XcmTable = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <i class="bi bi-diagram-2-fill fs-2"></i>
        <h5>Parachain</h5>
        <div className="ms-auto">
          <button className="view">View All</button>
        </div>
      </div>
      <div className="block_box box_margin">
        <table className="table mt-3">
          <thead className="extrinsic_font">
            <tr>
              <th className="bor" scope="col">
                Para Id
              </th>
              <th className="bor" scope="col">
                Lease Period
              </th>
              <th className="bor" scope="col">
                Send Xcm Transfers
              </th>
              <th className="bor" scope="col">
                Recieve Xcm Transfers
              </th>
              <th className="bor" scope="col">
                Channels
              </th>

              <th className="bor" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill("")
              .map((data, index) => {
                return (
                  <tr key={index} className="extrinsic_font_text">
                    <th scope="row" className="text-primary fw-normal">
                      1000 {""} Statement
                    </th>
                    <td>11-20</td>
                    <td className="time">1247</td>
                    <td className="text-primary">712</td>
                    <td className="text-primary">29</td>

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
  );
};

export default XcmTable;
