
import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';
import Vans from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Hostvans from './Pages/Host/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail';
import Detail from './Pages/Host/HostDetail/Detail';
import Photos from './Pages/Host/HostDetail/Photos';
import Pricing from './Pages/Host/HostDetail/Pricing';
import Reviews from './Pages/Host/Reviews';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { makeServer } from './data/server';
import { useState, useEffect } from 'react';

// export function App() {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//     </Routes>
//   </BrowserRouter> 
    
//   )
// }

makeServer()

export function App() { 
  
  return (
    <BrowserRouter>
    <Routes>
      
      <Route element={<Layout />}>
        
        <Route path='/' element={<Home />} />
        
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail/>} />
        {/* /:id means parameter (it can be anything) */}
      
        <Route path='host' element={<HostLayout />}> 
          <Route index element={<Dashboard />} />
          {/* index, means render the elemnt at parent path */}
          <Route path='income' element={<Income />} />
          <Route path='host-vans' element={<Hostvans />} />
          
          <Route path='host-vans/:id' element={<HostVanDetail />}>
            <Route index element={<Detail />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
          
          <Route path='reviews' element={<Reviews />} />
        </Route>

      </Route>
    
    </Routes>
  </BrowserRouter> 
    
  )
}



