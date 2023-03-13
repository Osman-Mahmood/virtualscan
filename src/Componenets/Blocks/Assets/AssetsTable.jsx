import Reactc, { useState } from "react";
import Select from "react-select";
import { PaginationControl } from "react-bootstrap-pagination-control";
const AssetsTable = () => {
  const [page, setPage] = useState(1);
  const type = [
    { value: "all", label: "All" },
    { value: "validator", label: "Validator" },
    { value: "nominator", label: "Nominator" },
    { value: "council", label: "Council" },
    { value: "proxy", label: "Proxy" },
    { value: "pool", label: "Pool" },
    { value: "dmp", label: "DMP" },
  ];
  return (
    <div className="container mt-3">
      <div className="d-flex">
        <h5>Holders (1,075,173)</h5>
        <h5 className="ms-auto">Type</h5>
        <Select
          defaultValue={type[0]}
          options={type}
          className="ms-2 type_wid"
        />
      </div>
      <div className="block_box box_margin">
        <table className="table mt-3">
          <thead className="extrinsic_font">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Account</th>
              <th scope="col">Extrinsics</th>
              <th scope="col">Locked VRC</th>
              <th scope="col">Balence VRC</th>
            </tr>
          </thead>
          <tbody>
            {Array(30)
              .fill("")
              .map(() => {
                return (
                  <tr className="extrinsic_font_text">
                    <th scope="row" className="text-primary fw-normal">
                      14543713
                    </th>
                    <td className="text-primary">
                      16ZL8yLyXv3V3L3z9ofR1ovFLziyXaN1DPq4yffMAZ9czzBD
                    </td>
                    <td className="time">90</td>
                    <td className="text-primary">27,896,633</td>
                    <td className="text-primary">59,747,447</td>
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
  );
};

export default AssetsTable;
