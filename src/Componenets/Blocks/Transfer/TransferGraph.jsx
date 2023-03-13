import React,{useEffect} from 'react'
import Search from "../../Search/Search";
import './Transfer.module.css'
const TransferGraph = () => {
   
  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <Search />
      <div className='container mt-3'>
        <h5>Transfer History</h5>
        <div className='row'>
            <div className='col-md-12 extri_box'>
                <h2>  Graph Here</h2>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default TransferGraph
