import React from 'react'
import BannerImage from '../../src/assets/banner.png'

const Banner = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ]

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-12 py-10 md:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">

        
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <p className="rounded-full bg-[#E1E7FF] text-[#4F39F6] px-4 py-1 mb-4 w-fit text-sm font-medium">
              New: AI-Powered Tools Available
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight mb-4">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-sky-400 text-white border-none w-full sm:w-auto">
                Explore Products
              </button>
              <button className="btn rounded-full w-full sm:w-auto">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={BannerImage}
              alt="Banner"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>

        </div>
      </div>

      
      <div className="bg-blue-600 py-6 px-4">
        <div className="flex flex-wrap justify-around gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Banner