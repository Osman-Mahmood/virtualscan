import React from 'react'
import XcmBlocks from '../../Componenets/xcm/XCMDASHBORD/XcmBlocks'
import XcmDash from '../../Componenets/xcm/XCMDASHBORD/XcmDash'
import XcmTable from '../../Componenets/xcm/XCMDASHBORD/XcmTable'
const XcmDashboard = () => {
  return (
    <div>
      <XcmDash />
      <XcmBlocks />
      <XcmTable />
    </div>
  )
}

export default XcmDashboard
