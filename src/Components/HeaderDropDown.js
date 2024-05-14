import React from 'react'

const HeaderDropDown = (props) => {
  return (
    <div className="dropdown">
        <button className="dropDownbtn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           {props.btnTitle}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
        </ul>
    </div>
 )
}

export default HeaderDropDown