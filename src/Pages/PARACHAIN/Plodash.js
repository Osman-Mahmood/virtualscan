import React from 'react'
import Ploauction from '../../Componenets/Parachain/PLODASHBOARD/Ploauction'
import PloDashBoard from '../../Componenets/Parachain/PLODASHBOARD/PloDashBoard'
import PloTable from '../../Componenets/Parachain/PLODASHBOARD/PloTable'
const Plodash = () => {
  return (
    <div>
      <PloDashBoard />
      <Ploauction />
      <PloTable />
    </div>
  )
}

export default Plodash
