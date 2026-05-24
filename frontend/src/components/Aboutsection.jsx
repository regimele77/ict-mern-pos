import React from 'react'

const Aboutsection = () => {
  return (
   <div className='flex'>
  

  <div className='flex items-center justify-center p-4 w-1/2'>
    <img
      src="https://posing-html.vercel.app/assets/img/about_img_1.png"
      width='90%'
    />
  </div>

 
  <div className='flex flex-col justify-center w-2/5 p-6 gap-4'>
    <p className='text-green-400 text-lg'>About The POS</p>
    <h1 className='font-bold text-4xl'>Best solution for point of sale about details</h1>
    <p className='text-lg text-gray-500'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum the & been the industry's. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages.
    </p>
  </div>

</div>
  )
}

export default Aboutsection
