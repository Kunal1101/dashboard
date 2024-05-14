import React from 'react'
import modalImg from "../Assets/modalImg.png"


const CartProduct = () => {
  return (
    <>
        <h3 className='productName'>NVIDIA GH200 Grace Hopper™</h3>
        <div className='productSpecificationContainer'>
            <div className='productSpecificationBox d-flex justify-content-between'>
                <span className='d-block productSpecCategory'>vCPU</span>
                <p className='d-flex justify-content-between'>
                    <span className='productSpecVlaue'>28</span>
                    <span className='productSpecCategory effect d-block position-relative'>vCPU</span>
                </p>
            </div>
            <div className='productSpecificationBox d-flex justify-content-between'>
                <span className='d-block productSpecCategory'>VRAM</span>
                <p className='d-flex justify-content-between'>
                    <span className='productSpecVlaue'>80</span>
                    <span className='productSpecCategory effect d-block position-relative'>GB</span>
                </p>
            </div>
            <div className='productSpecificationBox d-flex justify-content-between'>
                <span className='d-block productSpecCategory'>RAM</span>
                <p className='d-flex justify-content-between'>
                    <span className='productSpecVlaue'>251</span>
                    <span className='productSpecCategory effect d-block position-relative'>GB</span>
                </p>
            </div>
            <div className='productSpecificationBox d-flex justify-content-between'>
                <span className='d-block productSpecCategory'>ROM</span>
                <p className='d-flex justify-content-between'>
                    <span className='productSpecVlaue'>751</span>
                    <span className='productSpecCategory effect d-block position-relative'>GB,SSD</span>
                </p>
            </div>
        </div>
        <img src={modalImg} alt='' className='mt-5' />
    </>
  )
}

export default CartProduct