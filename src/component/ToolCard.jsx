import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ToolCard = ({ tool ,carts, setCarts}) => {
  const [isBuy, setIsBuy] = useState(false)
  const handleBuy= () => {
    setIsBuy(true)
    const isFound = carts.find((item)=>item.id === tool.id)
    if(isFound){
      toast.error("tool already in cart")
      return;
    }
    setCarts([...carts ,tool])
    toast.success("tools added")
  }

  return (
    <div className='shadow-lg rounded-lg border p-6'>
      
      <div>
        <img src={tool.icon} alt={tool.name} />
      </div>

      <div>
        <h2 className='font-bold text-lg'>{tool.name}</h2>
        <p>{tool.description}</p>
        <p>{tool.price} {tool.period}</p>

        <ul className="space-y-1">
          {tool.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              ✔️ {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleBuy}
          className='btn rounded-full bg-blue-600 w-full mt-3'
        >
          {isBuy ? "Buyed" : "Buy Now"}
        </button>
      </div>

    </div>
  )
}

export default ToolCard