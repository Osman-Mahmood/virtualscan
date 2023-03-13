import React from 'react'
import TransferFilter from '../../Componenets/Blocks/Transfer/TransferFilter'
import TransferGraph from '../../Componenets/Blocks/Transfer/TransferGraph'
import TransferTable from '../../Componenets/Blocks/Transfer/TransferTable'

const Transfer = () => {
  return (
    <div>
      <TransferGraph />
      <TransferFilter />
      <TransferTable />
    </div>
  )
}

export default Transfer
