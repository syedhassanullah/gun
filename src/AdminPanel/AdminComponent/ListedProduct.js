import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const ListedProduct = () => {

  const [posts, setPosts] = useState([]);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);

  
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
    
        <Row className='Row' style={{paddingBottom:'35px'}}>
          <Col xs={1} className='p-id'>ID</Col>
          <Col xs={3} className='p-title'>Title</Col>
          <Col xs={4} >Description</Col>
          <Col xs={2} className='p-price' >Price</Col>
          <Col xs={2}></Col>
        </Row>
        </div>
        {posts.map((item,index) => (
        <Row className='Row' key={index}>
          <Col xs={1} className='p-id'>456</Col>
          <Col xs={3} className='p-title'>{item.productTitle}</Col>
          <Col xs={4} className='p-description'>{item.description}</Col>
          <Col xs={2} className='p-price'>200</Col>
          <Col xs={2} style={{textAlign:'center',display:'flex',alignItems:'center'}}>
                  <div className='main-small-button' style={{padding:'0px'}}onClick={handleShow}>
                    View
                  </div>

                  <Modal show={show1} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton style={{display:'flex', msFlexDirection:'column'}}>
                      <Modal.Title>hjsaf</Modal.Title>
                      <h4>Cash On Delivery</h4>
                    </Modal.Header>
                    <div>
                      
                    <Modal.Body  style={{display:'flex', flexWrap:'wrap'}}>
                    <div style={{background:'black',width:'50%'}}></div>
                      <Form className='main-form'>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          <Form.Label>Your Full Name</Form.Label>
                          <Form.Control
                            className='main-custom-input'
                            placeholder="full name "
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          <Form.Label>What's App Number / Contact Number</Form.Label>
                          <Form.Control
                            className='main-custom-input'
                            placeholder="number"
                            maxLength={20}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            className='main-custom-input'
                            as="textarea"
                            placeholder="House# Area Town City . . . ."
                            rows={3}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          <Form.Label>Nearest Landmark</Form.Label>
                          <Form.Control
                            className='main-custom-input'
                            placeholder="like shop / masjid / School /etc"
                          />
                        </Form.Group>
                        {/* <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" className='main-custom-input' rows={3} />
                        </Form.Group> */}
                      </Form>
                    </Modal.Body>
                    </div>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
        </Row>
        ))}
        </div>
       
      </div>
    </div>
  </>


  )
}

export default ListedProduct