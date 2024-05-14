import React from 'react'
import GpuModal from './GpuModal'

const RentalCard = () => {
  return (
    <div className='rentalCard'>
        <h2 className='rentalCardName'>NVIDIA GH200 Grace Hopper<sup>TM</sup></h2>
        <p className='rentalCardInfo text-white d-flex justify-content-between'>
            <span>intel</span>
            <span>Available</span>
        </p>
        <div className='rentalGpuSpecContainer d-flex flex-wrap gap-2'>
            <div className='rentalGpuSpecBox'>
                <span className='specCategory'>vCPU</span>
                <p className='specValue'>24 <span>vCPU</span></p>
            </div>
            <div className='rentalGpuSpecBox'>
                <span className='specCategory'>VRAM</span>
                <p className='specValue'>80 <span>GPU</span></p>
            </div>
            <div className='rentalGpuSpecBox'>
                <span className='specCategory'>RAM</span>
                <p className='specValue'>24 <span>vCPU</span></p>
            </div>
            <div className='rentalGpuSpecBox'>
                <span className='specCategory'>RAM</span>
                <p className='specValue'>24 <span>vCPU</span></p>
            </div>
        </div>
        <div className='rentalCardBtnBox align-items-center position-relative d-flex justify-content-between'>
            <button className='rentalCardBtn' data-bs-toggle="modal" data-bs-target="#exampleModal">Rent Now</button>
            <span className='d-block rentalCardPrice'>$830/ <span>week</span></span>
        </div>
        <div class="modal fade buyGpu" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <GpuModal />
        </div>
    </div>
  )
}

export default RentalCard