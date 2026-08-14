
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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
      </Route>
    </Routes>
  </BrowserRouter> 
    
  )
}



