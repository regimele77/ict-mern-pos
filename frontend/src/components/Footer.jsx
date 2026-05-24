import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full justify-between items-center p-4 font-bold'>
        
        <img
          src="https://www.zohowebstatic.com/sites/oweb/images/ogimage/pos-logo.png"
          width='100'
        />

        <div className='w-3/4 flex justify-around p-4 font-light'>
            <div className='flex flex-col gap-4'>
                <h3>Features</h3>
                <h3>Price</h3>
            </div>

            <div className='flex flex-col gap-4'>
                <h3>Terms and Conditions</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer