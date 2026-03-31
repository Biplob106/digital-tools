import React from 'react'
import { use } from "react";

const Tools = ({ tools }) => {

  console.log(tools);

  return (
    <>
      <div>
        <div className='flex flex-col justify-center  text-center'>
          <h2 className='text-[48px] font-extrabold'>Premium Digital Tools</h2>
          <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
          <div className=' gap-6'>
            <button className='btn rounded-full bg-blue-600'>Products</button>
            <button className='btn rounded-full'>Cart (2)</button>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-5 pt-4 w-4/5 mx-auto '>
          {tools.map(tool => <div className='shadow-lg rounded-lg border p-6'>
            <div>
              <img src={tool.icon} alt="" />
            </div>
            <div>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <p>{tool.price} {tool.period}</p>
              <div>
                <ul className="space-y-1">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      ✔️ {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className='btn rounded-full bg-blue-600 w-full'>Buy Now</button>
            </div>
          </div>)}
        </div>
      </div>


    </>
  )
}

export default Tools