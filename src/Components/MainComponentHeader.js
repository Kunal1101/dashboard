import React from 'react'
import HeaderDropDown from './HeaderDropDown'

const MainComponentHeader = (props) => {
  return (
    <div className='mainComponentHeader gap-2 d-flex flex-column flex-lg-row align-items-lg-center justify-content-between flex-md-nowrap flex-lg-wrap'>
        <h2 className='text-white componentHeading mb-md-4 mb-lg-0 d-inline-block text-center text-lg-end'>{props.headerTitle}</h2>
        <div className='mainComponentHeaderBox d-flex flex-column flex-md-row flex-lg-row gap-4 mt-3 mt-md-0 mt-lg-4'>
            <input type="search" placeholder="Search" className='headerSearchBar' />
            <div className='d-flex gap-3'>
              <HeaderDropDown btnTitle="Select type"  />
              <HeaderDropDown btnTitle="Sort by" />        
            </div>
        </div>
    </div>
  )
}

export default MainComponentHeader