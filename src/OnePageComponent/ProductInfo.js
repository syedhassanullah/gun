import React from 'react'
import Layout from "./Layout"
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';

function ProductInfo() {

 
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
          {posts?.map((item, index) => (

            <div className='cardbx' key={index}>

              <div className='product-card-box'>
                <div className='product-card-img'>
                  <img src={require(`../uploads/${item.image}`)} alt='' />
                </div>
                <div className='product-card-text'>
                  <h4>{item.productTitle}</h4>
                  <p>{item.description}</p>
                  <div className='product-card-price'>
                    <h6>Price</h6>
                    <h6>{item.price}$</h6>
                  </div>
                  <div className='nbuttonc' >
                    <Link to={'/productDetals'}>Buy Now</Link >
                      </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>

        </div>
        
      </Container>
      <div onClick={Nav} className='nbutton pbutton'>
        <Link>Back To Home</Link >
        </div>
    </div>

    <Footer/>
    </>

  );
}

export default ProductInfo;
