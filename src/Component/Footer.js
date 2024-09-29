import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import '../Component/Component.css'
import { Link, } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import img1 from '../images/hhhhh.png';



export default function Footer() {
  return (
    // <div className='footer'>
    //   <Container>
    //     <Row style={{ alignItems: 'center' }}>
    //       <Col lg="5" md='6' sx>
    //         <div className='fimg'>
    //           <img src={img1} className='imglog ' alt="logo" />
    //         </div>
    //       </Col>
    //       <Col md='6'>
    //       <Row>
    //         <Col  md='4' sx >
    //           <div className='fnav'>
    //             <h3>Quick Links</h3>

    //             <Nav.Link href='#home' exact className='navlink' ><span   >Home</span></Nav.Link>
    //             <Nav.Link href="#about" className='navlink' ><span >About</span></Nav.Link>
    //             <Nav.Link href="#gellary" className='navlink' ><span  >Gellary</span></Nav.Link>
    //             <Nav.Link href="#services" className='navlink' ><span >Services</span></Nav.Link>
    //             <Nav.Link as={Link} to='/404' href='#service' className='navlink'><span >404</span></Nav.Link>
    //           </div>
    //         </Col>
    //         <Col  md='4' sx  >
    //           <div className='fnav'>
    //             <h3>Quick Links</h3>
    //             <Nav.Link href='#home' exact className='navlink' ><span   >Home</span></Nav.Link>
    //             <Nav.Link href="#about" className='navlink' ><span >About</span></Nav.Link>
    //             <Nav.Link href="#gellary" className='navlink' ><span  >Gellary</span></Nav.Link>
    //             <Nav.Link href="#services" className='navlink' ><span >Services</span></Nav.Link>
    //             <Nav.Link as={Link} to='/404' href='#service' className='navlink'><span >404</span></Nav.Link>
    //           </div>
    //         </Col>
    //         <Col  md='4' sx >
    //           <h3>Contact Links</h3>
    //           <div className='gmail'>
    //             <p>
    //               03181088606<br />
    //               03181088606<br />
    //             </p>
    //             <h6> syedhassanullah.0900@gmail.com</h6>
    //           </div>
    //           <div className='icon' >
    //             <FontAwesomeIcon icon={faFacebook} size="xl" className='icon2' />
    //             <FontAwesomeIcon icon={faInstagram} size="xl" className='icon2' />
    //             <FontAwesomeIcon icon={faWhatsapp} size="xl" className='icon2' />
    //             <FontAwesomeIcon icon={faTiktok} size="xl" className='icon2' />
    //         </div>
    //         </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <div className='footer'>
    <footer class=" text-white p-6 md:p-10">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <div class="mb-6 md:mb-0 flex justify-center md:justify-start">
        <img src={img1} className=' md:w-64 lg:w-80' alt="logo" />
      </div>
  
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
        <div>
          <h5 class="font-bold mb-2 text-lg">Links</h5>
          <ul class="space-y-2 fnav">
            <li><Nav.Link href='#home' exact className='navlink hover:text-gray-400'><span>Home</span></Nav.Link></li>
            <li><Nav.Link href="#about" className='navlink hover:text-gray-400'><span>About</span></Nav.Link></li>
            <li><Nav.Link href="#gallery" className='navlink hover:text-gray-400'><span>Gallery</span></Nav.Link></li>
            <li><Nav.Link href="#services" className='navlink hover:text-gray-400'><span>Services</span></Nav.Link></li>
            <li><Nav.Link as={Link} to='/404' className='navlink hover:text-gray-400'><span>404</span></Nav.Link></li>
          </ul>
        </div>
  
        <div>
          <h5 class="font-bold mb-2 text-lg">Follow Us</h5>
          <ul class="space-y-2 fnav">
            <li><Nav.Link href='#home' exact className='navlink hover:text-gray-400'><span>Home</span></Nav.Link></li>
            <li><Nav.Link href="#about" className='navlink hover:text-gray-400'><span>About</span></Nav.Link></li>
            <li><Nav.Link href="#gallery" className='navlink hover:text-gray-400'><span>Gallery</span></Nav.Link></li>
            <li><Nav.Link href="#services" className='navlink hover:text-gray-400'><span>Services</span></Nav.Link></li>
            <li><Nav.Link as={Link} to='/404' className='navlink hover:text-gray-400'><span>404</span></Nav.Link></li>
          </ul>
        </div>
  
        <div className='fnav'>
          <h5 class="font-bold mb-2 text-lg contact ">Contact</h5>
          <p >Email: <a href="mailto:info@example.com" class="hover:text-gray-400 navlink">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" class="hover:text-gray-400 navlink">+1 (234) 567-890</a></p>
          <div className='icon' >
              <FontAwesomeIcon icon={faFacebook} size="xl" className='icon2' />
              <FontAwesomeIcon icon={faInstagram} size="xl" className='icon2' />
              <FontAwesomeIcon icon={faWhatsapp} size="xl" className='icon2' />
              <FontAwesomeIcon icon={faTiktok} size="xl" className='icon2' />
      </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
  
  )
}
