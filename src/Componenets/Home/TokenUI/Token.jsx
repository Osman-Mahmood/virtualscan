import { CanvasJSChart } from 'canvasjs-react-charts'
import React from 'react'
// import CanvasJSReact from './canvasjs.stock.react'
import Graph from './Graph'
import GraphCircle from './GraphCircle'
import './Token.css'
// import DateTimeAxisStockChart from './StockChart with Date-Time Axis';
import Trading from './Trading'
const Token = () => {
  return (
    <div className='container p-0 mt-3'>
        <div className='container-fluid'>
        <div className='row mb-2'>
            {/* Token Status */}
            <div className='col-lg-7 col-md-7 col-12'>
              <div className='d-flex align-items-center'>
            <i className="bi bi-graph-up-arrow fs-2"></i>
                    <h5>Token Status</h5>
                    </div>
                    <div className='chain_box box_width trading'>
                    <Graph className="graph_wid"/>
                    {/* <CanvasJSReact /> */}
                    {/* <DateTimeAxisStockChart style={{height:'400px'}}/> */}
                    {/* <Trading className="graph_wid"/> */}
                    
                    </div>
            </div>
{/* TOKEN DATA */}
            <div className='col-lg-5 col-md-5'>
              <div className='d-flex align-items-center'>
            <i className="bi bi-database-fill-check fs-2"></i>
                    <h5>Token Distribution</h5>
                    </div>
                    <div className='status'>
                      <h5 className='bg'>Total Issuance: 1.289 B</h5>
                        <GraphCircle className="mobile_graph"/>
                    </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Token
