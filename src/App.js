import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Details from "./page/Details";
import { useState } from "react";
const App = () => {
  
  const [info, setInfo] = useState(1)
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home setInfo={setInfo}/>} />
          <Route path="/details" element={<Details info={info}/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App;
