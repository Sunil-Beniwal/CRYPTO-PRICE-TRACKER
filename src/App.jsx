import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import CoinDetail from "./Pages/CoinDetail"

function App() {

  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coin/:id" element={<CoinDetail/>}/>
     </Routes>
  )
}

export default App
