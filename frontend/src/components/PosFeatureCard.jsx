import React from 'react'

const PosFeatureCard = () => {
    return (
        <div className='w-1/4 flex text-sm bg-white rounded-2xl items-center gap-4 p-4'>
            <div className='w-1/3'>
                <div className='w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center'>
                    <img
                        src="https://posing-html.vercel.app/assets/img/icons/icon_box_5.svg"
                        className='w-8 h-8'
                    />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-l'>Effortless card</h1>
                <p>Lorem Ipsum is simply dummy text of the most printing and typese Ipsum is simply dummy</p>
            </div>
        </div>
    )
}

export default PosFeatureCard