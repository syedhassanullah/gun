import React from 'react'
import './Component.css'
import { Container } from 'react-bootstrap';
import image from '../images/New folder/close-up-gun-inside-suitcase.jpg'


export default function About() {

  return (
    <>
      <div className='about' id='about'>
  <Container>
  <h1 className='heading'>ABOUT US</h1>
  <div className='flex flex-col md:flex-row items-center justify-evenly gap-8'>
      <div className='md:w-1/2 text-left'>
        <h2 className='text-3xl font-bold mb-4'>WHO WE ARE?</h2>
        <ul className='list-disc pl-5 space-y-2 text-gray-700'>
          <li>Dedicated to excellence in our field.</li>
          <li>Innovation is at the core of our values.</li>
          <li>Customer satisfaction is our top priority.</li>
          <li>Our team is our greatest asset. Customer satisfaction is our top priority</li>
          <li>Our team is our greatest asset.Customer satisfaction is our top priority </li>
          <li>Our team is our greatest asset.</li>
          <li>Our team is our greatest asset.</li>
        </ul>
      </div>
      <div className=' flex justify-center'>
        <img
          src={image}
          alt="About Us"
          className='w-96 h-auto rounded-lg shadow-lg object-cover'
        />
      </div>
    </div>
  </Container>
</div>



    </>
  );
}
