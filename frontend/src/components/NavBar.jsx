import React from 'react'

const NavBar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem'}}>
        <div>
            <h1>LOGO</h1>
        </div>
        <ul className="nav-links flex gap-8 items-center">
            <li><a href="#features">Features</a></li>
            <li><a href="#price">Price</a></li>
            <li><button className='rounded-xl bg-blue-500 px-4 py-2 text-white border-none padding-0.5rem 1rem cursor-pointer'>Login</button></li>
        </ul>
    </nav>
   

  )
}

export default NavBar