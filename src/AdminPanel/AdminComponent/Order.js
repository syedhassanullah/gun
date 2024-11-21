import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Order() {
  const [posts, setPosts] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleShow = (item) => {
    setShow(true);
    setSelectedProduct(item)
  }
  useEffect(() => {
    GetDynamicData();
  }, []);

  const GetDynamicData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/order");
      const data = await res.json();
      setPosts(data.data);
      console.log(data.data);

    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <div className='menu-section'>
        <h1>Orders</h1>
        <h5>All Orders</h5>
        <div className='content'>
          <div className='listed-item'>
            <div className='head'>

              <Row className='Row' style={{ paddingBottom: '35px' }}>
                <Col xs={1} className='p-id'>P-ID</Col>
                <Col xs={2} className='p-title'>Name</Col>
                <Col xs={2} className='p-title'>Number</Col>
                <Col xs={3} className='p-description' >Address</Col>
                <Col xs={2} className='p-description' >LandMark</Col>
                <Col xs={2}></Col>
              </Row>
            </div>
            {posts.map((item, index) => (
              <Row className='Row' key={index}>
                <Col xs={1} className='p-id'>{item.productId}</Col>
                <Col xs={2} className='p-title'>{item.fullname}</Col>
                <Col xs={2} className='p-title'>{item.number}</Col>
                <Col xs={3} className='p-description'>{item.address}</Col>
                <Col xs={2} className='p-description' >{item.landmark}</Col>
                <Col xs={2} style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                  <div className='main-small-button' style={{ padding: '0px' }} onClick={() => handleShow(item)}>
                    View
                  </div>
                </Col>
              </Row>

            ))}

          </div>

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}
            className='order-info'>
            <Modal.Header closeButton>
              <Modal.Title><h3>ORDER INFO</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProduct ? (
                <>
                  <Row>
                    <Col>
                    <div className='buyer'>
                      <div className='buyer-input1' >
                      <h5>Name:</h5>
                      <h5>Number:</h5>
                      <h5>Address:</h5>
                      <h5>LandMark:</h5>
                      </div>
                      <div  className='buyer-input2'>
                      <h5>{selectedProduct.fullname}</h5>
                      <h5>{selectedProduct.number}</h5>
                      <h5>{selectedProduct.address}</h5>
                      <h5>{selectedProduct.landmark}</h5>
                      </div>
                    </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className='modal-in'>
                      <Col md={4}>
                        <div className='in-img'>
                          <img src={`http://localhost:8000/uploads/${selectedProduct.productImage}`} alt={selectedProduct.productTitle} />
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className='in-text'>
                          <div className='buyer-input1'>
                          <h5>Product ID:</h5>
                          <h5>Product Title:</h5>
                          <h5>Product Price:</h5>
                          </div>
                          <div className='buyer-input2'>
                          <h5>{selectedProduct.productId}</h5>
                          <h5>{selectedProduct.productTitle}</h5>
                          <h5>{selectedProduct.price}</h5>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <div variant="secondary" className='main-small-button' onClick={handleClose}>
                Close
              </div>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </>


  )
}

export default Order
