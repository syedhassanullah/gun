// import React from 'react'
// import Layout from "./Layout"
// import { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../Component/Footer';

// function ProductInfo() {

 
//     const [posts, setPosts] = useState([]);
  
//   useEffect(() => {
//     GetDynamicData();
//   }, []);

//   const GetDynamicData = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/api/product");
//       const data = await res.json();
//       setPosts(data.data);
//       console.log(data.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const Navigate = useNavigate();

//   const Nav = () =>{
//     Navigate('/')
//   }

//   return (
//     <>

//     <div id='product' className='product' >

//       <Container >
//         <h1 className='heading'>OUR PRODUCTS</h1>


//         <div className='cardbx'>
//           {posts?.map((item, index) => (

//             <div className='cardbx' key={index}>

//               <div className='product-card-box'>
//                 <div className='product-card-img'>
//                   <img src={require(`../uploads/${item.image}`)} alt='' />
//                 </div>
//                 <div className='product-card-text'>
//                   <h4>{item.productTitle}</h4>
//                   <p>{item.description}</p>
//                   <div className='product-card-price'>
//                     <h6>Price</h6>
//                     <h6>{item.price}$</h6>
//                   </div>
//                   <div className='nbuttonc' >
//                     <Link to={'/productDetals'}>Buy Now</Link >
//                       </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>

//         </div>
        
//       </Container>
//       <div onClick={Nav} className='nbutton pbutton'>
//         <Link>Back To Home</Link >
//         </div>
//     </div>

//     <Footer/>
//     </>

//   );
// }

// export default ProductInfo;
import React from 'react'
import { useState, useEffect } from 'react';
import '../Component/Component.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Footer from '../Component/Footer';




function ProductInfo() {
  const [posts, setPosts] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    GetDynamicData();
  }, []);

  const GetDynamicData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/product");
      const data = await res.json();
      setPosts(data.data);
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const openModal =(item)=>{
    setShow(true)
    setSelectedProduct(item)
  }

  const Navigate = useNavigate();
  const Nav = () =>{
        Navigate('/')
      }

  return (
    <>
    <div id='product' className='product' >

      <Container >
        <h1 className='heading'>OUR PRODUCTS</h1>
        <div className='cardbx'>
          {posts?.slice(0, 6).map((item, index) => (
            <div className='card' key={index}>
              <div className='product-card-box'>
                <div className='product-card-img'>
                  <img src={require(`../uploads/${item.image}`)} alt={item.productTitle} />
                </div>
                <div className='product-card-text'>
                  <h4>{item.productTitle}</h4>
                  <p>{item.description}</p>
                  <div className='product-card-price'>
                    <h6>Price</h6>
                    <h6>{item.price}$</h6>
                  </div>
                  <div className='main-small-button' onClick={() => openModal(item)}>
                    BUY NOW
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Modal show={show} fullscreen onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-name'><h1><span>Product</span>-Details</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {selectedProduct ? (
          <div className='p-modal'>
            <div className='p-modal-image'>
              <img src={require(`../uploads/${selectedProduct.image}`)} alt={selectedProduct.productTitle} />
            </div>
            <div className='p-modal-text'>
              <h1>{selectedProduct.productTitle}</h1>
              <div>
              <h4>Description.</h4>
              <p>{selectedProduct.description}</p>
              </div>
              <div className='p-modal-text-price'>
              <h2>price</h2>
              <h2>{selectedProduct.price}<span>PKR</span></h2>
              </div>
              <div className='M-Button'>
                <div className='main-Button'>
                  Conform Purchase
                </div>
              </div>
            </div>
          </div>
          ) : (
            <p>Loading...</p>
          )}

        </Modal.Body>
      </Modal>
      <div onClick={Nav} className='main-Button' style={{marginTop:'40px'}}>
        <Link>Back To Home</Link >
        </div>
    </div>

    <Footer/>
    </>

  );
}

export default ProductInfo;


