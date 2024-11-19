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
            centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedProduct ? (
                <>
                <Row>
                  <div className='modal-in'>
                    <Col md={4}>
                      <div className='in-img'>
                        <img src={`http://localhost:8000/uploads/${selectedProduct.productImage}`} alt={selectedProduct.productTitle} />
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className='in-text'>
                        <h4>{selectedProduct.productId}</h4>
                        <h2>{selectedProduct.productTitle}</h2>
                        <p>{selectedProduct.description}</p>
                        <h2>{selectedProduct.price}</h2>
                      </div>
                    </Col>
                  </div>
                </Row>
                
                <Row>
                <p>{selectedProduct.fullname}</p>
                <p>{selectedProduct.number}</p>
                <p>{selectedProduct.address}</p>
                <p>{selectedProduct.landmark}</p>
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
