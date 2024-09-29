import React from 'react'
import { Container } from 'react-bootstrap'
import './Component.css';
import Contact from '../OnePageComponent/Contact';

function Service() {
  return (
    <div id='service' className='service'>
      <Container >
        <h1 className='heading'>OUR SERVICES</h1>
        <div className='service-card'>
         
          
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='card-box'>
            <h2>Srervice</h2>
          </div>
          <div className='button'>
          <Contact/>
        </div>
      
          
        </div>
        
      </Container >
    </div>
  )
}

export default Service
