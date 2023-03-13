import React from 'react'
import ExtrinsicFilter from '../../Componenets/Blocks/Extrinsic/ExtrinsicFilter'
import ExtrinsicTable from '../../Componenets/Blocks/Extrinsic/ExtrinsicTable'
import TransferHiostry from '../../Componenets/Blocks/Extrinsic/TransferHiostry'

const Extrinsic = () => {
  return (
    <div>
      <TransferHiostry />
      <ExtrinsicFilter />
      <ExtrinsicTable />
    </div>
  )
}

export default Extrinsic
