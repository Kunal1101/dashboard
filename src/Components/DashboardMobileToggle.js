import React, { useState } from 'react'
import { NODE_MOBILE, RENTAL_MOBILE } from '../utils/Constants'

function DashboardMobileToggle({onTabViewClick}) {
  const [selected, setSelected] = useState(RENTAL_MOBILE)

  const onClickedLink = (type) => {
    setSelected(type)
    onTabViewClick(type)
  }
  return (
    <div className='d-flex mobileToggleBox gap-2 d-lg-none mb-4'>
        <h2 className={selected === RENTAL_MOBILE ? 'mobileToggle activeToggleLinks' : 'mobileToggle'} onClick={() => onClickedLink(RENTAL_MOBILE)}>
            GPUs Rental
        </h2>
        <h2 className={selected === NODE_MOBILE ? 'mobileToggle activeToggleLinks' : 'mobileToggle'} onClick={() => onClickedLink(NODE_MOBILE)}>
            Blockchain Nodes
        </h2>
    </div>
  )
}

export default DashboardMobileToggle