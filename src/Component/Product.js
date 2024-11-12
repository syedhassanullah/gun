import React from 'react'
import { useState, useEffect } from 'react';
import './Component.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios  from 'axios';
import { toast } from 'react-toastify';


export default function Product() {
  const [posts, setPosts] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    address: '',
    landmark: ''
  })



  useEffect(() => {
    GetDynamicData();
  }, []);

  const GetDynamicData = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/product");
      const data = await res.json();
      setPosts(data.data);

    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (item) => {
    setShow(true)
    setSelectedProduct(item)

   
  }

  const ConfirmPurchaseChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ConfirmPurchase = async (e)=>{
      e.preventDefault();

    const payload = {
      productId: selectedProduct.productId,
      productTitle: selectedProduct.productTitle,
      price: selectedProduct.price,
      productImage: selectedProduct.image,
      ...formData
    }

    try{
      const res =await axios.post('http://localhost:8000/api/order',payload, {
        headers: {
          'Content-Type': 'application/json',
        },  
      })

      console.log('Data Send :', res.data);
      const res_data = await res.data;
      toast.success(`Successful`,{});
    } catch (error) {
      if (error.response) {
        toast.error("Some Thing Is Wrong")
      } else {
        toast.error(`${error.message}`)
      }
    }

    console.log(payload)

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
                  <div className='main-Button' onClick={handleShow}>
                    Confirm Purchase
                  </div>

                  <Modal show={show1} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton style={{ display: 'flex', msFlexDirection: 'column' }}>
                      <Modal.Title>Cash On Delivery</Modal.Title>
                    </Modal.Header>
                    <div>

                      <Modal.Body >

                        <Form className='main-form'>
                          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control
                              className='main-custom-input'
                              onChange={ConfirmPurchaseChange}
                              placeholder="full name "
                              name="fullname"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                            <Form.Label>What's App Number / Contact Number</Form.Label>
                            <Form.Control
                              className='main-custom-input'
                              placeholder="number"
                              onChange={ConfirmPurchaseChange}
                              maxLength={20}
                              name="number"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              className='main-custom-input'
                              onChange={ConfirmPurchaseChange}
                              as="textarea"
                              placeholder="House# Area Town City . . . ."
                              rows={3}
                              name="address"
                            />
                          </Form.Group>
                          <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                            <Form.Label>Nearest Landmark</Form.Label>
                            <Form.Control
                              className='main-custom-input'
                              placeholder="like shop / masjid / School /etc"
                              name="landmark"
                              onChange={ConfirmPurchaseChange}
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
                      <div variant="secondary" className='main-Button' style={{ width: '110px', }} onClick={handleClose}>
                        Close
                      </div>
                      <div variant="primary" className='main-Button' onClick={ConfirmPurchase}>
                        Save Changes
                      </div>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}

        </Modal.Body>
      </Modal>

      <div className='main-Button' style={{ marginTop: '40px' }}>
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