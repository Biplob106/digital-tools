import { useEffect, useState } from "react";
import Nav from './component/Nav.jsx'
import Banner from './component/Banner.jsx'
import Tools from './component/Tools.jsx'



function App() {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("/tool.json")
      .then(res => res.json())
      .then(data => setTools(data));
  }, []);

  


  return (
    <>
      <Nav />
      <Banner />
      <Tools tools={tools} />

    </>
  )
}

export default App
