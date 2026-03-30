import React from 'react'
import BannerImage from '../../src/assets/banner.png'

const Banner = () => {
    return (
        <>
        <div className=" w-4/5 mx-auto  max-h-[760px] flex">
            <div className="w-4/5 mx-auto h-[760px] flex items-center justify-center gap-10">

                <div className="flex flex-col items-center text-center">
                    <p className='rounded-full bg-[#E1E7FF] text-[#4F39F6] px-4 py-1 mb-4 w-fit'>
                        New: AI-Powered Tools Available
                    </p>
                    <h1 className='text-[72px] font-bold max-w-xl'>
                        Supercharge Your Digital Workflow
                    </h1>
                    <p>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                       Explore Products
                    </p>
                    <div className='flex gap-4'>
                        <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-sky-400'>Explore Products</button>
                        <button className='btn rounded-full'>Watch Demo</button>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <img src={BannerImage} alt="Banner" className="max-h-full" />
                </div>
            </div>


        </div>
        <div className='max-h-[760px] bg-blue-600 flex justify-around py-6'>
           <div>
            <p className='text-2xl font-bold text-white'>50K+</p>
            <p className='text-white'>Active Users</p>
           </div>
           <div>
            <p className='text-2xl font-bold text-white'>200+</p>
            <p className='text-white'>Premium Tools</p>
           </div>
           <div>
            <p className='text-2xl font-bold text-white'>4.9</p>
            <p className='text-white'>Rating</p>
           </div>
        </div>

        </>
    )
}

export default Banner