import React from 'react'
import CustomButton from './CustomButton'

const HeroSection = () => {
  return (
    <div className='min-h-screen w-full flex items-center bg-gray-100 bg-[url("https://posing-html.vercel.app/assets/img/hero_bg.svg")] bg-no-repeat bg-center bg-cover px-6 py-12 md:px-16 lg:px-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto'>
        <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-6'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
            Easy-To-Use <br /> 
            <span className='text-black'>Point of Sale</span>
          </h1>
          
          <p className='text-lg text-gray-600 max-w-md'>
            Streamline your sales process with our intuitive POS system.
          </p>
          
          <div>
            <CustomButton title='Start Free Trial'/>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className='flex justify-center md:justify-end w-full'>
          <img 
            src="https://posing-html.vercel.app/assets/img/hero_img.png" 
            alt="POS System" 
            className='w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain'
          />
        </div>

      </div>
    </div>
  )
}

export default HeroSection