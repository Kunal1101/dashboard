import React from 'react'

const  DashboardNodeMobile = () => {
  return (
    <div className='rentalMobileBox mb-3'>
    <div className='rentalMobileHeader d-flex justify-content-between'>
        <h2 className='d-flex flex-column gap-2'>
            <span className='label'>Rental Id</span>
            <span className='value'># 2154 5684</span>
        </h2>
        <h2 className='d-flex flex-column gap-2'>
            <span className='label text-end'>Node</span>
            <span className='value text-end'>X0sfhg..fsghasfa</span>
        </h2>
    </div>
    <div className='rentalMobileData mt-2'>
        <div className='nodeMobileDate'>
          <span className='label d-block text-center'>Date</span>
          <span className='date d-block text-center text-white mt-2'>04-12-24 14:08</span>
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

export default DashboardNodeMobile