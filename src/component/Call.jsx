import React from 'react'

const Call = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-500 py-16 px-6">
      
      <div className=" rounded-xl max-w-3xl mx-auto py-12 px-6 text-center">

   
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Ready To Transform Your Workflow?
        </h2>

    
        <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden sm:block" />
          Start your free trial today.
        </p>

      
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="btn rounded-full bg-white text-purple-700 font-semibold border-none hover:bg-gray-100 px-8">
            Explore Products
          </button>
          <button className="btn rounded-full bg-transparent text-white font-semibold border-2 border-white hover:bg-white hover:text-purple-700 px-8">
            View Pricing
          </button>
        </div>

        
        <p className="text-white/60 text-xs sm:text-sm">
          14-day free trial &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Cancel anytime
        </p>

      </div>
    </section>
  )
}

export default Call