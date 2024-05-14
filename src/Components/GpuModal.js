import React from 'react'
import CartForm from './CartForm'
import CartProduct from './CartProduct'

const GpuModal = () => {
  return (
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Rent GPU</h5>
                <button type="button" class="btn-close modalClose" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='row'>
                <div className='col-md-6 cartProduct'>
                    <CartProduct />
                </div>
                <div className='col-md-6 cartForm'>
                    <CartForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GpuModal