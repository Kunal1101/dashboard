import React from 'react'

const DashboardRentalMobile = () => {
  return (
    <div className='rentalMobileBox mb-3'>
        <div className='rentalMobileHeader d-flex justify-content-between'>
            <h2 className='d-flex flex-column gap-2'>
                <span className='label'>Rental Id</span>
                <span className='value'># 2154 5684</span>
            </h2>
            <h2 className='d-flex flex-column gap-2'>
                <span className='label text-end'>GPU</span>
                <span className='value text-end'>NVIDIA GH200 Grace Hopper™</span>
            </h2>
        </div>
        <div className='rentalMobileData mt-2'>
            <span className='label'>Spec</span>
            <div className='d-flex'>
                <div className='d-flex rentalMobileDataBlock flex-column gap-2'>
                    <span className='d-block dataHeading'>VCPU</span>
                    <p>
                        <span className='dataValue'>24</span>                    
                        <span className='dataLabel'>VCPU</span>
                    </p>
                </div>
                <div className='d-flex rentalMobileDataBlock flex-column gap-2'>
                    <span className='d-block dataHeading'>VRAM</span>
                    <p>
                        <span className='dataValue'>22</span>                    
                        <span className='dataLabel'>GB</span>
                    </p>
                </div>
                <div className='d-flex rentalMobileDataBlock flex-column gap-2'>
                    <span className='d-block dataHeading'>RAM</span>
                    <p>
                        <span className='dataValue'>76</span>                    
                        <span className='dataLabel'>GPU</span>
                    </p>
                </div>
                <div className='d-flex rentalMobileDataBlock flex-column gap-2'>
                    <span className='d-block dataHeading'>RAM</span>
                    <p>
                        <span className='dataValue'>76</span>                    
                        <span className='dataLabel'>GPU</span>
                    </p>
                </div>
            </div>
            <div className='rentalMobileDataFooter mt-4 d-flex justify-content-between align-items-center'>
                <h2 className='d-flex flex-column gap-2'>
                    <span className='label'>Payment</span>
                    <span className='dataValue'>$830/ week</span>
                </h2>
                <button  className='rentalMobileBtn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default DashboardRentalMobile