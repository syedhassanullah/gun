import React from 'react'
import { useState, useEffect } from 'react';
import './Component.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';



export default function Product() {
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

  return (
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
                  <div className='nbuttonc' onClick={() => openModal(item)}>
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
            </div>
          </div>
          ) : (
            <p>Loading...</p>
          )}

        </Modal.Body>
      </Modal>

      <div className='nbutton pbutton'>
        <Link to={'/productDetals'}>See More</Link >
      </div>

    </div>
  );
}





/* <Card style={{ width: '18rem' }} className='card1'>
                    <Card.Img  src={require(`../uploads/${item.image}`)}/>
                    <Card.Body>
                      <Card.Title style={{ fontFamily: ' "Orbitron", sans-serif', }}>{item.pid}</Card.Title>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Card.Title>{item.price}</Card.Title>
                      <div className='nbutton' style={{ width: "8rem" }}>Buy Now</div>
                    </Card.Body>
                  </Card> */

// to={`/addcart/${item.productTitle}`}