import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ListedProduct = () => {

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
      const res = await fetch("http://localhost:8000/api/product");
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
        <h1>Listed Product</h1>
        <h5>All Listed Product</h5>
        <div className='content'>
          <div className='listed-item'>
            <div className='head'>

              <Row className='Row' style={{ paddingBottom: '35px' }}>
                <Col xs={1} className='p-id'>ID</Col>
                <Col xs={3} className='p-title'>Title</Col>
                <Col xs={4} >Description</Col>
                <Col xs={2} className='p-price' >Price</Col>
                <Col xs={2}></Col>
              </Row>
            </div>
            {posts.map((item, index) => (
              <Row className='Row' key={index}>
                <Col xs={1} className='p-id'>{item.productId}</Col>
                <Col xs={3} className='p-title'>{item.productTitle}</Col>
                <Col xs={4} className='p-description'>{item.description}</Col>
                <Col xs={2} className='p-price'>200</Col>
                <Col xs={2} style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                  <div className='main-small-button' style={{ padding: '0px' }} onClick={()=>handleShow(item)}>
                    View
                  </div>


                </Col>


              </Row>

            ))}
            <Row className='Row'>
                <Col xs={1} className='p-id'>456</Col>
                <Col xs={3} className='p-title'>HASSAN</Col>
                <Col xs={5} className='p-description'>sklfjasklkavk;</Col>
                <Col xs={2} className='p-price'>200</Col>
                <Col xs={1} style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                  <div className='main-small-button' style={{ padding: '0px' }} onClick={()=>handleShow()}>
                    View
                  </div>


                </Col>


              </Row>
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
            <div className='p-modal'>
              {selectedProduct.productTitle}
            </div>
          ) : (
            <p>Loading...</p>
          )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </div>
    </>


  )
}

export default ListedProduct