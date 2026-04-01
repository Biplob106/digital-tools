import React from 'react'

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            desc: 'Perfect for getting started',
            price: 0,
            btnText: 'Get Started Free',
            popular: false,
            features: [
                'Access to 10 free tools',
                'Basic templates',
                'Community support',
                '1 project per month',
            ],
        },
        {
            name: 'Pro',
            desc: 'Best for professionals',
            price: 29,
            btnText: 'Start Pro Trial',
            popular: true,
            features: [
                'Access to all premium tools',
                'Unlimited templates',
                'Priority support',
                'Unlimited projects',
                'Cloud sync',
                'Advanced analytics',
            ],
        },
        {
            name: 'Enterprise',
            desc: 'For teams and businesses',
            price: 99,
            btnText: 'Contact Sales',
            popular: false,
            features: [
                'Everything in Pro',
                'Team collaboration',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'Custom branding',
            ],
        },
    ]

    return (
        <section className="py-16 px-4 sm:px-8 bg-white">


            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md
              ${plan.popular
                                ? 'bg-gradient-to-b from-purple-600 to-purple-800 text-white'
                                : 'bg-gray-50 text-gray-800 border border-gray-200'
                            }`}
                    >

                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full shadow">
                                    Most Popular
                                </span>
                            </div>
                        )}


                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-1">{plan.name}</h3>
                            <p className={`text-sm mb-5 ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                                {plan.desc}
                            </p>


                            <div className="flex items-end gap-1 mb-6">
                                <span className="text-4xl sm:text-5xl font-extrabold">${plan.price}</span>
                                <span className={`text-sm mb-2 ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                                    /Month
                                </span>
                            </div>


                            <ul className="space-y-2 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <svg
                                            className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-green-300' : 'text-purple-600'}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <button
                            className={`btn rounded-full w-full font-semibold text-sm sm:text-base border-none
                ${plan.popular
                                    ? 'bg-white text-purple-700 hover:bg-gray-100'
                                    : 'bg-purple-600 text-white hover:bg-purple-700'
                                }`}
                        >
                            {plan.btnText}
                        </button>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Pricing