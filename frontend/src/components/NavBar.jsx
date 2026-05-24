import React from 'react'
import CustomButton from './CustomButton'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-4 font-bold'>
        <div>
            <img
              src="https://www.zohowebstatic.com/sites/oweb/images/ogimage/pos-logo.png"
              width='100'
            />
        </div>
        <ul className="nav-links flex gap-8 items-center">
            <li><a href="#features">Features</a></li>
            <li><a href="#price">Price</a></li>
            <li>
              <CustomButton/>
            </li>
        </ul>
    </nav>
   

  )
}

export default NavBar