import Footer from "./Components/Footer"
import Header from "./Components/Header"
import All from "./Pages/All"
import Career from "./Pages/Career"
import SyberScurity from "./Pages/CyberSecurity"
import DataScience from "./Pages/DataScience"
import FullStack from "./Pages/FullStack"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
   <>
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Header/>}>
    <Route path="/" element={<All/>}/>
    <Route path="/FullStack" element={<FullStack/>}/>
    <Route path="/DataScience" element={<DataScience/>}/>
    <Route path="/SyberScurity" element={<SyberScurity/>}/>
    <Route path="/Career" element={<Career/>}/>
    
    </Route>
  </Routes>
   </BrowserRouter>
   <Footer/>
   </>
  )
}

export default App
