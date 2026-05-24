import React from 'react'

const CustomButton = ({title}) => {
  return (
    <div>
        <button
            className='rounded-xl bg-blue-500 hover:bg-blue-700 px-5 py-2 text-white border-none padding-0.5rem 1rem cursor-pointer'
        >
          {title}
        </button>
    </div>
  )
}

export default CustomButton