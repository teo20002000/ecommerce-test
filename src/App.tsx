import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import HomeContext from "./context/HomeContext";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import BaseContext from "./context/BaseContext";


 



function App() {



  return ( <Router>
    <Routes>
      <Route path="/" element={<BaseContext><HomeContext /></BaseContext>} />
      <Route path="/home" element={<BaseContext><HomeContext /></BaseContext>} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} /> 
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<BaseContext><Login /></BaseContext>} />
    </Routes>
  </Router>
)
}
export default App
 