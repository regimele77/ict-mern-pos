import React from 'react'
import PosFeatureCard from './PosFeatureCard'

const PosFeatures = () => {
    return (
        <div className='w-full p-8 py-14 bg-[#f6f4ff]'>
            <p className='text-green-400 text-center'>POS Features</p>
            <h1 className='text-center font-bold text-4xl'>Available features</h1>
            <div className='flex items-center justify-center gap-8 mt-10'>
                <PosFeatureCard/>
                <PosFeatureCard/>
                <PosFeatureCard/>
            </div>
            <div className='flex items-center justify-center gap-8 mt-10'>
                <PosFeatureCard/>
                <PosFeatureCard/>
                <PosFeatureCard/>
            </div>
        </div>
    )
}

export default PosFeatures