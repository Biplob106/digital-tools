import React from 'react'

const Steps = () => {
  const steps = [
    {
      img: "public/user.png",
      title: "Create Account",
      desc: "Sign up for free in seconds.",
      step: "01",
    },
    {
      img: "public/package.png",
      title: "Choose Products",
      desc: "Browse our catalog.",
      step: "02",
    },
    {
      img: "public/rocket.png",
      title: "Start Creating",
      desc: "Start using tools instantly.",
      step: "03",
    },
  ]

  return (
    <div className="bg-fuchsia-50 py-12 px-4 sm:px-8 mt-6">

      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Get Started in 3 Steps</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s) => (
          <div key={s.step} className="card bg-base-100 shadow-sm w-full">

        
            <div className="px-6 pt-6">
              <span className="text-xs font-bold text-purple-500 bg-purple-100 px-3 py-1 rounded-full">
                Step {s.step}
              </span>
            </div>

            <figure className="px-10 pt-6">
              <img src={s.img} alt={s.title} className="rounded-xl h-24 sm:h-28 object-contain" />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-base sm:text-lg">{s.title}</h2>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Steps