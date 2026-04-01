import React from 'react'
import ToolCard from './ToolCard.jsx';

const Tools = ({ tools ,carts, setCarts }) => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto'>
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool}  carts={carts} setCarts={setCarts}/>
        ))}
      </div>
    </div>
  )
}

export default Tools;