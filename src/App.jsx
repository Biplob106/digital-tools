import { useEffect, useState } from "react";
import Nav from './component/Nav.jsx'
import Banner from './component/Banner.jsx'
import Tools from './component/Tools.jsx'
import Cart from './component/Cart.jsx'
import Steps  from "./component/Steps.jsx";
import Pricing from "./component/Pricing.jsx";
import Footer from "./component/Footer.jsx";
import Call from "./component/Call.jsx";


function App() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("/tool.json")
      .then(res => res.json())
      .then(data => setTools(data));
  }, []);

  const [cartActive, setCartActive] = useState("Products");

  const [carts, setCarts] = useState([]);



  return (
    <>
      <Nav carts={carts} />
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
          <input type="radio" name="my_tabs_1" onClick={() => setCartActive("Products")} className="tab rounded-full w-40" aria-label="Products" defaultChecked />
          <input type="radio" name="my_tabs_1" onClick={() => setCartActive("Cart")} className="tab rounded-full w-40" aria-label={`Cart (${carts.length})`} />
        </div>
      </div>


      {cartActive == "Products" && <Tools tools={tools} carts={carts} setCarts={setCarts} />}
      {cartActive == "Cart" && <Cart carts={carts} setCarts={setCarts} />}
      <Steps/>
      <Pricing/>
      <Call/>
      <Footer/>
      

    </>
  )
}

export default App
