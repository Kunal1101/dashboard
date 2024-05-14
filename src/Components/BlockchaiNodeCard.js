import React from 'react'
import cardImg from "../Assets/nodeImg.png"

const BlockchaiNodeCard = () => {
  return (
    <div className='blockChainNodeCard'>
        <span className='nodeStatus text-center d-block mb-2'>Available</span>
        <div className='blockChainCardBox' >
            <div className='gap-4 d-flex justify-content-between align-items-center'>
                <img src={cardImg} alt="" />      
                <div className='d-flex flex-column w-100'>
                    <div className='nodeCardDetails d-flex justify-content-between align-items-center position-relative'>
                        <span className='cardValue d-block'>$29</span>
                        <span className='cardDuration d-block'>Month</span>
                    </div>
                    <div className='nodeCardDetails d-flex justify-content-between align-items-center position-relative'>
                        <span className='cardValue d-block'>$179</span>
                        <span className='cardDuration d-block'>6 Month</span>
                    </div>
                    <div className='nodeCardDetails d-flex justify-content-between align-items-center position-relative'>
                        <span className='cardValue d-block'>$348</span>
                        <span className='cardDuration d-block'>12 Month</span>
                    </div>
                </div>    
            </div>
            <p className='cardMsg mt-4 text-center'>Central to our platform is the NVIDIA Grace Hopper™ Superchip. The al</p>          
        </div>
            <div className='rentalCardBtnBox mt-4 align-items-center position-relative d-flex justify-content-between'>
                <button className='rentalCardBtn w-100'>Deploy Now</button>
            </div>
    </div>
  )
}

export default BlockchaiNodeCard