
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import vanimg from './assets/vanimg.jpg';
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


export function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<HeaderFooter />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail/>} />
        {/* /:id means parameter (it can be anything) */}
      </Route>
    </Routes>
  </BrowserRouter> 
    
  )
}



