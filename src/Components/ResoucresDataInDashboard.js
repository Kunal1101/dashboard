import React from 'react'

const ResoucresDataInDashboard = () => {
  return (
    <div className='resourcesData mb-4 d-flex flex-column flex-xl-row gap-3 gap-xl-0 align-items-xl-center justify-content-between'>
        <div className='d-inline-flex flex-column flex-md-row justify-content-between align-items-center'>
            <h3 className='resourcesHeading mb-4 mb-md-0'>Total Resources</h3>
            <div className='d-flex flex-wrap flex-md-nowrap gap-3 gap-md-0'>
                <div className='resourceValue'>
                    <h4>
                        24<sup className='ms-2'>VCPU</sup>
                    </h4>
                    <span className='category'>
                        VCPU
                    </span>
                </div>
                <div className='resourceValue'>
                    <h4>
                        22<sup className='ms-2'>GB</sup>
                    </h4>
                    <span className='category'>
                        VRAM
                    </span>
                </div>
                <div className='resourceValue'>
                    <h4>
                        76<sup className='ms-2'>GPU</sup>
                    </h4>
                    <span className='category'>
                        RAM
                    </span>
                </div>
                <div className='resourceValue'>
                    <h4>
                        76<sup className='ms-2'>GPU</sup>
                    </h4>
                    <span className='category'>
                        RAM
                    </span>
                </div>
            </div>
        </div>
        <div className='totalCash d-inline-flex justify-content-between align-items-center'>
            <h3 className='resourcesHeading mb-0'>Total Cash</h3>
            <div className='d-flex'>
                <div className='resourceValue d-flex align-items-center flex-row d-md-block'>
                    <h4 className='mb-0 mb-md-2'>
                        $830
                    </h4>
                    <span className='category'>
                        per month
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResoucresDataInDashboard