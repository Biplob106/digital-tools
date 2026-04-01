import React from 'react'

const Cart = ({ carts, setCarts }) => {

  const handlePayment = () => {
    setCarts([])
  }
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handleDelete = (item)=>{
    const filteredArray = carts.filter(c=> c.id != item.id)
    setCarts(filteredArray)
  }
  return (

    <div className=" p-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-2xl p-5">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between border rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-20 object-contain"
                      src={item.icon}
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <div className="text-3xl font-bold">${item.price}</div>

                  </div>
                </div>

                <div className="flex gap-10">


                  <button onClick={()=>handleDelete(item)}

                    className=" btn rounded-full btn-error"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total</div>
            <div>$  {totalPrice} </div>
          </div>

          <button onClick={handlePayment}

            className="btn w-full mt-5 bg-[#811ff9] text-2xl  rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart