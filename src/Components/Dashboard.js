import React, { useState } from 'react'
import DashboardNodes from './DashboardNodes'
import DashboardRental from './DashboardRental'
import MainComponentHeader from './MainComponentHeader'
import ResoucresDataInDashboard from './ResoucresDataInDashboard'
import DashboardMobileToggle from './DashboardMobileToggle'
import DashboardRentalMobile from './DashboardRentalMobile'
import DashboardNodeMobile from './DashboardNodeMobile'
import { NODE_MOBILE, RENTAL_MOBILE } from '../utils/Constants'

const  Dashboard =() => {
  const ComponentMobileView = ({type}) => {
    switch (type) {
      case RENTAL_MOBILE:
        return <DashboardRentalMobile />
        
        case NODE_MOBILE:
          return <DashboardNodeMobile />
          
          default:
            return <DashboardRentalMobile
             />
          }
        }
        
        const [type, setTabType] = useState(RENTAL_MOBILE)
  return (
    <div className='componentMainScreen'>
      <div className="d-none d-md-block mb-5">
        <MainComponentHeader headerTitle="Dashboard" />
      </div>
      <div className="d-md-block">
        <DashboardMobileToggle onTabViewClick={(type) => {
            setTabType(type)
          }}/>
      </div>
        <div className='dashboardData mt-4'>
            <h2 className='dataHeading text-white mb-5 d-none d-md-block'>GPUs Rental</h2>
            <ResoucresDataInDashboard />
            <div className='d-none d-lg-block'>
              <DashboardRental />
            </div>
            <div className='d-lg-none'>
                <ComponentMobileView type={type} />
            </div>
        </div>
        <div className='dashboardData mt-4 d-none d-lg-block'>
            <h2 className='dataHeading text-white mb-5'>Blockchain Nodes</h2>
            <div className='d-none d-lg-block'>
              <DashboardNodes />
            </div>
        </div>
    </div>
  )
}

export default Dashboard