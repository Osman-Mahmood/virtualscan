import React from "react";

const LogsTable = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="block_box box_margin">
          <table className="table mt-3">
            <thead className="extrinsic_font">
              <tr>
                <th scope="col">Log Index</th>
                <th scope="col">Block</th>
                <th scope="col">Type</th>
                <th scope="col">Engine</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {Array(2)
                .fill("")
                .map(() => {
                  return (
                    <tr className="extrinsic_font_text">
                      <th scope="row" className="text-primary fw-normal">
                        14543713
                      </th>
                      <td>14543713</td>
                      <td className="time">Seal</td>
                      <td className="text-primary">BABE</td>

                      <td className="text-primary">
                        <button
                          className="dropdown-toggle extrinsic_btn"
                          data-bs-toggle="collapse"
                          href="#collapseExample4"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        ></button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="container">
            <div className="row">
              <div className="col-md-8 new_box">
                <div
                  className="collapse min-width-thin w-100"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="collapseExample4"
                >
                  <div className="d-flex list_new">
                    <a className="dropdown-item" to="block">
                      dest
                    </a>
                    <a className="dropdown-item" to="block">
                      id
                    </a>
                    <a className="dropdown-item" to="block">
                      12dv8KGjFs9yA5NQgH6dwqkyu4gENx2HKuB2vJdJTNecRY5E
                    </a>
                  </div>
                  <hr />
                  <div className="d-flex list_new mt-3">
                    <a className="dropdown-item" to="block">
                      value
                    </a>
                    <a className="dropdown-item" to="block">
                      2,346.75933552 VRC
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsTable;
