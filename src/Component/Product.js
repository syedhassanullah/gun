import React from 'react'
import { useState, useEffect } from 'react';
import './Component.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import image1 from "../../src/image/3.png";
import image2 from "../../src/image/2.png";
import image3 from "../../src/image/5.png";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';





export default function Product() {
  // const [posts, setPosts] = useState(null);
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



  // useEffect(() => {
  //   GetDynamicData();
  // }, []);

  // const GetDynamicData = async () => {
  //   try {
  //     const res = await fetch("https://gunserver-wh6i0sgb.b4a.run/api/product");
  //     const data = await res.json();
  //     setPosts(data.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const openModal = (item) => {
    setShow('true')
    setSelectedProduct(item)


  }

  const ConfirmPurchaseChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ConfirmPurchase = async (e) => {
    e.preventDefault();

    const payload = {
      productId: selectedProduct.id,
      productTitle: selectedProduct.title,
      price: selectedProduct.price,
      productImage: selectedProduct.image,
      ...formData
    }
    console.log(payload);

    // try {
    //   const res = await axios.post('https://gunserver-wh6i0sgb.b4a.run/api/order', payload, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })

    //   console.log('Data Send :', res.data);
    //   const res_data = await res.data;
    //   toast.success(`Successful`, {});
    // } catch (error) {
    //   if (error.response) {
    //     toast.error("Some Thing Is Wrong")
    //   } else {
    //     toast.error(`${error.message}`)
    //   }
    // }

    console.log(payload)

  }

  const Products = [
    { id: '1', title: 'new', description: 'some', price: '500', image: [image1,image2,image3] },
    { id: '2', title: 'new', description: 'some', price: '500', image: [image1,image2,image3] },
    { id: '3', title: 'new', description: 'some', price: '500', image: [image1,image2,image3] },
    { id: '4', title: 'new', description: 'some', price: '500', image: [image1,image2,image3] },
    { id: '5', title: 'new', description: 'some', price: '500', image: [image1,image2,image3] },
  ]



  return (
    <div id='product' className='product' >

      <Container >
        <h1 className='heading'>OUR PRODUCTS</h1>
        <div className='cardbx'>
          {Products?.slice(0, 6).map((Products) => (
            <div className='card' key={Products.id}>
              <div className='product-card-box'>
                <div className='product-card-img'>
                  <img src={Products.image[0]} alt={Products.title} />
                </div>
                <div className='product-card-text'>
                  <h4>{Products.title}</h4>
                  <p>{Products.description}</p>
                  <div className='product-card-price'>
                    <h6>Price</h6>
                    <h6>{Products.price}$</h6>
                  </div>
                  <div className='main-small-button' onClick={() => openModal(Products)}>
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

            <Container>
              <Row>
                <div className='p-modal'>
                  <Col xs={12} md={6}>
                    <div className='p-modal-image'>
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable:true, 
                        }}
                        navigation={true}s
                        modules={[Autoplay, Navigation]}
                        className="myswiper"
                      >
                         {selectedProduct.image.map((img1, index) => (
                  <SwiperSlide key={index}>
                    <img src={img1} alt={` ${index + 1}`} className="img-fluid" />
                  </SwiperSlide>
                ))}
                      </Swiper>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className='p-modal-text'>
                      <h1>{selectedProduct.title}</h1>
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
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                                  <Form.Label>Product Color</Form.Label>
                                  <Form.Control
                                    className='main-custom-input'
                                    onChange={ConfirmPurchaseChange}
                                    placeholder="color "
                                    name="color"
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
                  </Col>
                </div>
              </Row>
            </Container>

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