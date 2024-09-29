import React from 'react'
import { useState, useEffect } from 'react';
import './Component.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Product() {
  const [posts, setPosts] = useState([]);

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
          <div className='nbuttonc'>
            <Link to='/productDetals'>Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        <div>

        </div>
        
      </Container>
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