
// import Layout from './components/Layout';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Footer from './components/Footer';
// import Vans from './Pages/Vans/Vans';
// import VanDetail from './Pages/Vans/VanDetail';
// import HostLayout from './components/HostLayout';
// import Dashboard from './Pages/Host/Dashboard';
// import Income from './Pages/Host/Income';
// import Hostvans from './Pages/Host/HostVans';
// import HostVanDetail from './Pages/Host/HostVanDetail';
// import Detail from './Pages/Host/HostDetail/Detail';
// import Photos from './Pages/Host/HostDetail/Photos';
// import Pricing from './Pages/Host/HostDetail/Pricing';
// import Reviews from './Pages/Host/Reviews';
// import NotFound from './Pages/NotFound';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { makeServer } from './data/server';
// import { useState, useEffect } from 'react';

// // export function App() {
// //   return (
// //     <BrowserRouter>
// //     <nav>
// //       <Link to="/">Home</Link>
// //       <Link to="/about">About</Link>
// //     </nav>
// //     <Routes>
// //       <Route path='/' element={<Home />} />
// //       <Route path='/about' element={<About />} />
// //     </Routes>
// //   </BrowserRouter> 
    
// //   )
// // }

// makeServer()

// export function App() { 
  
//   return (
//     <BrowserRouter>
//     <Routes>
      
//       <Route element={<Layout />}>
        
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='vans' element={<Vans />} />
//         <Route path='vans/:id' element={<VanDetail/>} />
//         {/* /:id means parameter (it can be anything) */}
      
//         <Route path='host' element={<HostLayout />}> 
//           <Route index element={<Dashboard />} />
//           {/* index, means render the elemnt at parent path */}
//           <Route path='income' element={<Income />} />
//           <Route path='host-vans' element={<Hostvans />} />
          
//           <Route path='host-vans/:id' element={<HostVanDetail />}>
//             <Route index element={<Detail />} />
//             <Route path="pricing" element={<Pricing />} />
//             <Route path="photos" element={<Photos />} />
//           </Route>
          
//           <Route path='reviews' element={<Reviews />} />
//         </Route>

//         <Route path='*' element={<NotFound />} />
//       </Route>
    
//     </Routes>
//   </BrowserRouter> 
    
//   )
// }




// changing our router to a newer one that supports the data API's

import Layout from './components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './Pages/Vans/VanDetail';
import HostLayout from './components/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Hostvans, {loader as hostVanLoader} from './Pages/Host/HostVans';
import HostVanDetail, {loader as hostVanDetailLoader} from './Pages/Host/HostVanDetail';
import Detail from './Pages/Host/HostDetail/Detail';
import Photos from './Pages/Host/HostDetail/Photos';
import Pricing from './Pages/Host/HostDetail/Pricing';
import Reviews from './Pages/Host/Reviews';
import Login, {loader as loginLoader, action as loginAction} from './Pages/Login';
import NotFound from './Pages/NotFound';
import Error from './components/Error';
import { requiredAuth } from './utils';
import { 
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
} from 'react-router-dom'

import './data/server';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
      
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route 
        path='/login' 
        element={<Login />} 
        loader={loginLoader} 
        action={loginAction}
      />
      <Route 
        path='vans' 
        element={<Vans />} 
        errorElement={<Error />} 
        loader={vansLoader} 
      />
        
      <Route 
        path='vans/:id' 
        element={<VanDetail/>} 
        loader={vanDetailLoader} 
        errorElement={<Error />} 
      />
      {/* /:id means parameter (it can be anything) */}
    
      <Route path='host' element={<HostLayout />}>

        <Route 
          index 
          element={<Dashboard />} 
          loader={ async({request}) => await requiredAuth(request)} 
        />

        {/* index, means render the elemnt at parent path */}
        <Route 
          path='income' 
          element={<Income />} 
          loader={ async({request}) => await requiredAuth(request)} 
        />

        <Route 
          path='host-vans' 
          element={<Hostvans />} 
          loader={ hostVanLoader } 
          errorElement={<Error />} 
        />
        
        <Route 
          path='host-vans/:id' 
          element={<HostVanDetail />}
          loader={ hostVanDetailLoader } 
          errorElement={<Error />}
          >
        
          <Route
            index 
            element={<Detail />} 
            loader={ async({request}) => await requiredAuth(request)} 
          />

          <Route 
            path="pricing" 
            element={<Pricing />} 
            loader={ async({request}) => await requiredAuth(request)} 
          />

          <Route 
            path="photos" 
            element={<Photos />} 
            loader={ async({request}) => await requiredAuth(request)} 
          />
        </Route>
        
        <Route path='reviews' element={<Reviews />} />
      </Route>

      <Route path='*' element={<NotFound />} />
   
    </Route>
))

export function App() { 

  return (
    <RouterProvider router={router} />   
  )
}






