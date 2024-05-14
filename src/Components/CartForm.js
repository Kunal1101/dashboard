import React, { useRef, } from 'react'
import copyIcon from "../Assets/copy.png"


const CartForm = () => {
    const valueToCopy = '0xcdsxbsfhfsxb';
    const valueRef = useRef(null);
    const copyToClipboard = () => {
        const value = valueRef.current.innerText;
        navigator.clipboard.writeText(value)
          .then(() => {
            alert("Copied")
          })
          .catch(err => {
            console.error('Failed to copy value: ', err);
          });
      };
    return (
    <>
        <div className='formFieldsBox position-relative'>
            <h2 className='formFieldsHeading'>Enter Your Details</h2>
            <div className='mt-4'>
                <input type='text' className='formFields' placeholder='Enter Telegram' />
                <input type='email' className='formFields' placeholder='Enter Email' />
                <input type='text' className='formFields' placeholder='SSH Key' />
            </div>
        </div>
        <div className='formFieldsBox position-relative mt-4'>
            <h2 className='formFieldsHeading'>Payment Details</h2>
            <div className='d-flex justify-content-between mt-4'>     
                <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label d-flex ms-3" htmlFor="flexRadioDefault1">
                        ETH
                        <span className='d-block ms-3'>
                            (0.280 ET)
                        </span>
                    </label>
                </div>
                <div className="form-check d-flex align-items-center">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label d-flex ms-3" htmlFor="flexRadioDefault2">
                      ETH
                      <span className='d-block ms-3'>
                            (10% off)
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <div className='formFieldsBox position-relative mt-5'>
            <h2 className='formFieldsHeading'>Send payment to</h2>
            <div className='copyCodeBox d-flex justify-content-between align-items-center'>
                <span className='d-block code' ref={valueRef}>{valueToCopy}</span>
                <img onClick={copyToClipboard} src={copyIcon} alt="" className='copyIcon' />
            </div>
        </div>
        <div className='formFieldsBox position-relative mt-5'>
            <h2 className='formFieldsHeading'>Transaction Proof</h2>
            <input type='text' className='formFields mt-4' placeholder='Enter Transaction Hash' />
        </div>
        <div className='mt-4 rentalCardBtnBox align-items-center position-relative d-flex justify-content-between'>
            <button className='rentalCardBtn'>Submit Now</button>
            <span className='d-block rentalCardPrice'>$830/ <span>week</span></span>
        </div>
    </>
  )
}

export default CartForm