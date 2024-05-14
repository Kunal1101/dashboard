import React, { useState } from 'react'
import { DASHBOARD, NODES, RENTAL } from '../utils/Constants.js'

const Sidebar = ({onClickedItem}) => {

    const [selected, setSelected] = useState(DASHBOARD)

    const onClickSection = (type) => {
        setSelected(type)
        onClickedItem(type) 
    }
    
    return (
     <div className='sidebar d-flex flex-wrap'>
        <p className={selected === DASHBOARD ? 'nav_links mb-4 activeNavLinks' : 'nav_links mb-4'}  
        onClick={() => onClickSection(DASHBOARD)}>Dashboard</p>
        <p className={selected === RENTAL ? 'nav_links mb-4 activeNavLinks' : 'nav_links mb-4'} 
        onClick={() => onClickSection(RENTAL)}>GPUs Rental</p>
        <p className={selected === NODES ? 'nav_links activeNavLinks' : 'nav_links'} 
        onClick={() => onClickSection(NODES)}>Blockchain Nodes
        </p>
        <div className='social_links_box d-flex justify-content-center w-100'>
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

export default Sidebar