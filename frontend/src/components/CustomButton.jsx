import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({title, path}) => {
  return (
    <Link to={path}>
        <button
          className='rounded-xl bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white border-none padding-0.5rem 1rem cursor-pointer'
        >
          {title}
        </button>
    </Link>
  )
}

export default CustomButton