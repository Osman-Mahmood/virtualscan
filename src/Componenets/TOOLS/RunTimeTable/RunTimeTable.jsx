import React from 'react'
import Search from '../../Search/Search'
import Select from "react-select";
import XcmTransfer from '../../xcm/XCMTRANSFER/XcmTransferTable'
const RunTimeTable = () => {
    const dataInt = [
        { value: "99900", label: "999000" },
        { value: "99000", label: "98008" },
        { value: "99000", label: "98008" },
        { value: "99000", label: "98008" },
        { value: "99000", label: "98008" },
        { value: "99000", label: "98008" },
        { value: "99000", label: "98008" }
      ];
  return (
    <div>
    <Search />
    <div className='container mt-3'>
        <div className='d-flex'>
            <h5>Runtime Modules</h5>
            <div className='ms-auto d-flex'>
                <h5>Spec Version:</h5>
                <Select
                defaultValue={dataInt[0]}
                options={dataInt}
                className="ms-3"
              />
            </div>
          
        </div>
        <XcmTransfer />
    </div>
    </div>
  )
}

export default RunTimeTable
