import React from 'react'
import { toast } from 'react-toastify'

const ToolCard = ({ tool, carts, setCarts }) => {
  const isBuy = carts.some(item => item.id === tool.id)

  const handleBuy = () => {
    if (isBuy) {
      toast.error("Tool already in cart")
      return
    }
    setCarts([...carts, tool])
    toast.success("Tool added to cart")
  }

  return (
    <div className="shadow-lg rounded-xl border p-4 sm:p-6 flex flex-col justify-between h-full">

    
      <div className="flex justify-center mb-4">
        <img
          src={tool.icon}
          alt={tool.name}
          className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
        />
      </div>

      
      <div className="flex flex-col flex-1">
        <h2 className="font-bold text-base sm:text-lg mb-1">{tool.name}</h2>
        <p className="text-gray-500 text-sm mb-2 leading-relaxed">{tool.description}</p>

        <p className="font-bold text-purple-600 text-sm sm:text-base mb-3">
          ${tool.price}
          <span className="text-gray-400 font-normal text-xs ml-1">{tool.period}</span>
        </p>

        <ul className="space-y-1 mb-4">
          {tool.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              ✔️ {feature}
            </li>
          ))}
        </ul>

      
        <button
          onClick={handleBuy}
          className={`btn rounded-full w-full mt-auto text-sm sm:text-base text-white border-none
            ${isBuy
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {isBuy ? "✔ Added to Cart" : "Buy Now"}
        </button>
      </div>

    </div>
  )
}

export default ToolCard