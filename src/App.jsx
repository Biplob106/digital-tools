import { useEffect, useState } from "react";
import Nav from './component/Nav.jsx'
import Banner from './component/Banner.jsx'
import Tools from './component/Tools.jsx'
import Cart from './component/Cart.jsx'



function App() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("/tool.json")
      .then(res => res.json())
      .then(data => setTools(data));
  }, []);

  const [cartActive,setCartActive]=useState("Products");
  console.log(cartActive);

  


  return (
    <>
      <Nav />
      <Banner />
       <div className='flex flex-col justify-center text-center'>
        <h2 className='text-[48px] font-extrabold'>
          Premium Digital Tools
        </h2>

        <p>
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box justify-center bg-white">
          <input type="radio" name="my_tabs_1" onClick={()=>setCartActive("Cart")} className="tab rounded-full w-40" aria-label="Products" defaultChecked />
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={()=>setCartActive("Products")} />
        </div>
      </div>


      {cartActive == "Cart" && <Tools tools={tools} />}
      {cartActive =="Products" &&<Cart/>}

    </>
  )
}

export default App
