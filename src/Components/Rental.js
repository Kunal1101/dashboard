import React from 'react'
import MainComponentHeader from './MainComponentHeader'
import RentalCard from './RentalCard'

function Rental() {
  return (
    <div className='componentMainScreen'>
      <div className="mb-5">
        <MainComponentHeader headerTitle="GPUs Rental" />
      </div>        
      <div className='d-flex mt-lg-5 gap-3 flex-wrap'>
          <RentalCard />
          <RentalCard /> 
          <RentalCard />
          <RentalCard />
          <RentalCard /> 
          <RentalCard />
        </div>
    </div>
  )
}

export default Rental