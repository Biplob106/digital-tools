import React from 'react'

const Steps = () => {
    return (
        <div className='max-h-[762px] bg-fuchsia-50 mt-6 flex flex-col justify-center items-center'>
  
  <div className='p-6 text-center'>
    <h2 className='text-4xl font-bold mb-4'>Get Started in 3 Steps</h2>
    <p>Start using premium digital tools in minutes, not hours.</p>
  </div>

  <div className='grid grid-cols-3 gap-6 w-4/5 mx-auto mb-4'>
    
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src="/src/assets/user.png" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Create Account</h2>
        <p>Sign up for free in seconds.</p>
      </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src="/src/assets/package.png" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Choose Products</h2>
        <p>Browse our catalog.</p>
      </div>
    </div>

    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src="/src/assets/rocket.png" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Start Creating</h2>
        <p>Start using tools instantly.</p>
      </div>
    </div>

  </div>

</div>

    )
}

export default Steps