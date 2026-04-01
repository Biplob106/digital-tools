import React from 'react'
import { toast } from 'react-toastify'

const Cart = ({ carts, setCarts }) => {

  const handlePayment = () => {
    setCarts([])
    toast.success("procced tools")
  }
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const handleDelete = (item)=>{
    const filteredArray = carts.filter(c=> c.id != item.id)
    setCarts(filteredArray)
    toast.warning("cart delete");
  }
  return (

    <div className=" p-4 sm:p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-lg sm:text-2xl p-5 text-gray-400">Cart is empty</p>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border rounded-lg p-3 sm:p-4 gap-4"
                key={item.id}
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div>
                    <img
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-md shrink-0"
                      src={item.icon}
                    />
                  </div>

                  <div>
                    <h2 className="text-base sm:text-xl font-bold">{item.name}</h2>
                    <div className="text-gray-500 text-sm">${item.price}</div>

                  </div>
                </div>

                <div className="flex gap-10">


                  <button onClick={()=>handleDelete(item)}

                    className=" btn btn-error btn-sm sm:btn-md rounded-full self-end sm:self-auto"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between items-center p-4 sm:p-5 mt-5 rounded-lg bg-base-200 text-xl sm:text-3xl font-bold">
            <div>Total</div>
            <div>$  {totalPrice} </div>
          </div>

          <button onClick={handlePayment}

            className="btn w-full mt-5 bg-[#811ff9] text-white hover:bg-purple-800 text-lg sm:text-2xl rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart