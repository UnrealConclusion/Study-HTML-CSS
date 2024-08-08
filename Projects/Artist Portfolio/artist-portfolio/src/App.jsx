import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="work" element={<HomePage/>}/>
        <Route path="about" element={<HomePage/>}/>
        <Route path="contact" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
