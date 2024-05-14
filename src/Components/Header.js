import React, { useEffect, useState } from 'react'
import logo from "../Assets/hopper_logo.png"
import hamBurger from "../Assets/hamburger.png"
import close from "../Assets/close.png"

const Header = ({toggleHeader, isHamburgerClicked}) => {
  const [isNotVisible, setIsNotVisible] = useState(true);
  
  const toggleView = () => {
    toggleHeader(isNotVisible)
    setIsNotVisible(!isNotVisible)
  }

  useEffect((isHamburgerClicked) => {
    if(isHamburgerClicked === true) {
      setIsNotVisible(!isNotVisible)
    }
  }, [isHamburgerClicked])

  return (
    <div className='d-flex justify-content-between site_header align-items-center'>
        <img src={logo} alt="logo" title='Logo' className='site_logo' />
        <button title='Get started' className='header_btn gradient-cta position-relative d-none d-lg-block'>Get Started</button> 
        <div className='toggleIcon d-lg-none  position-relative' onClick={() => toggleView()}>
          <img src={ isNotVisible ? hamBurger : close} alt='' />
        </div>
    </div>
  )
}

export default Header