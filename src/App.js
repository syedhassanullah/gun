import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './OnePageComponent/Home';
import NotFound from './OnePageComponent/NotFound';
import About from './Component/About';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Component/Component.css';
import Product from './Component/Product';
import Gallery from './Component/Gallery';
import Service from './Component/Service';
import AdminIndex from './AdminPanel/AdminPanel/AdminIndex';
import AdminProduct from './AdminPanel/AdminComponent/AdminProduct';
import AdminProduct2 from './AdminPanel/AdminComponent/AdminProduct2';
import AdminLogin from './AdminPanel/AdminLogin';
import AdminDash from './AdminPanel/AdminComponent/AdminDash';
import ProductInfo from './OnePageComponent/ProductInfo';
import AddCart from './OnePageComponent/AddCart'

// import Server from './Server.js';



// const routerConfig = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "*",
//     element: <NotFound/>
//   },
//   {
//     path: "/about",
//     element: <About/>
//   },
//   {
//     path: "/contact",
//     element: <Contact/>
//   },



// ])

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Simulate a 10-second delay before hiding the spinner
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000); // 10 seconds in milliseconds

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="helo">
      {showSpinner ? (
        <div className="spinner-container App">
          <Spinner animation="grow" variant='light' />
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '30px', fontWeight: '600' }}>Loading...</h1>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about"  element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/gellary" element={<Gallery />} />
            <Route path="/service" element={<Service/>} />
            <Route path="/product" element={<Product />} />
            <Route path="/productDetals" element={<ProductInfo/>} />
            <Route path="/addcart/:cardid" element={<AddCart/>} />
            <Route path="404" element={<NotFound />} />
            <Route path="adminlogin" element={<AdminLogin/>} />
            <Route path="admin" element={<AdminIndex />}>
            <Route index element={<Navigate to="Index" replace />} />
              <Route path='Index' element={<AdminDash/>} />
              <Route path="product" element={<AdminProduct />} />
              <Route path="product2" element={<AdminProduct2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;