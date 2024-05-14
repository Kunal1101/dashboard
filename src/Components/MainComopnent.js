import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Rental from "./Rental"
import BlockChain from "./BlockChain"
import Sidebar from "./Sidebar"
import { DASHBOARD, NODES, RENTAL } from '../utils/Constants'

const ComponentPanelView = ({type}) => {
    switch (type) {
      case DASHBOARD:
        return <Dashboard />
  
        case RENTAL:
        return <Rental />
  
        case NODES:
        return <BlockChain />
  
      default:
        return <Dashboard />
    }
  }

  const MainComopnent = ({toShowItems, 
    onItemClick}) => {
    const [type, setType] = useState(DASHBOARD)

  return (
    <>
     <div className='mt-4 main-panel row'>
        { (toShowItems || window.innerWidth > 991 ) && 
          <div className='sidebar_panel col-lg-3'>
          <Sidebar onClickedItem={(type) => {
            onItemClick()
            setType(type)
          }}/>
        </div>}
       { (!toShowItems || window.innerWidth > 991 ) &&
        <div className='component_panel col-lg-9 mt-4 mt-lg-0'>
          <ComponentPanelView type={type} />
        </div>}
      </div>
    </>
  )
}

export default MainComopnent