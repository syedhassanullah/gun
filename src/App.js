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
import AdminLogin from './AdminPanel/AdminLogin';
import AdminDash from './AdminPanel/AdminComponent/AdminDash';
import ProductInfo from './OnePageComponent/ProductInfo';
import AddCart from './OnePageComponent/AddCart'
import ListedProduct from './AdminPanel/AdminComponent/ListedProduct';
import { AuthProvider } from './AuthContext';
// import ProtectedRoute from './protectRout';
import AdminLogout from './AdminPanel/AdminLogout';
import ProtectedRoute from './ProtectedRoute';
import Order from './AdminPanel/AdminComponent/Order';
import Contacts from './AdminPanel/AdminComponent/Contacts';

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
    <AuthProvider>
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

              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/gellary" element={<Gallery />} />
              <Route path="/service" element={<Service />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productDetals" element={<ProductInfo />} />
              <Route path="/addcart/:cardid" element={<AddCart />} />
              <Route path="404" element={<NotFound />} />
              <Route path="adminlogin" element={<AdminLogin />} />
              <Route path="logout" element={<AdminLogout />} />
              <Route path="/admin" element={<ProtectedRoute><AdminIndex /></ProtectedRoute>}>
                <Route index element={<Navigate to="Index" replace />} />
                <Route path='Index' element={<AdminDash />} />
                <Route path="product-listing" element={<AdminProduct />} />
                <Route path="orders" element={<Order />} />
                <Route path='listed-product' element={<ListedProduct />} />
                <Route path='contacts' element={<Contacts />} />
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;