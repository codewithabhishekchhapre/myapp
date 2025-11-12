import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
// import Abc from './components/Abc';
import Signup from './components/Signup';
import Abc from './Pages/Abc';
import CreateProductCard from './Pages/CreateProductCard';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
function App() {

  return (
    <>
   { <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>} >
      <Route index element={<LandingPage/>}/>
      <Route path="/login" element={<CreateProductCard/>} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/signup" element={<Signup/>} />
      </Route>

    </Routes>
    </BrowserRouter>}
    
    </>
  )
}

export default App