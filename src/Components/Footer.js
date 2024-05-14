import React from 'react'
import logo from "../Assets/hopper_logo.png"


function Footer() {
  return (
    <div className='d-flex justify-content-between site_header align-items-center mt-4'>
        <img src={logo} alt="logo" title='Logo' className='site_logo' />
        <div className='footer_social_links'>
            <a href='/' className='social_link'>
                <i class="fa-solid fa-paper-plane"></i>
            </a>
            <a href='/' className='social_link'>
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a href='/' className='social_link'>
                <i class="fa-brands fa-discord"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer