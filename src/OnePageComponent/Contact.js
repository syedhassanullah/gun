import { useState, useRef } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Component/Component.css';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';





const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const firstname = useRef("");
  const lastname = useRef("");
  const contact = useRef("");
  const message = useRef("");



  const Submit = (event) => {
    event.preventDefault();

    console.log(firstname.current.value);
    console.log(lastname.current.value);
    console.log(contact.current.value);
    console.log(message.current.value);


    const detail = {
      fname: firstname.current.value,
      lname: lastname.current.value,
      contact: contact.current.value,
      message: message.current.value
    }

    if(detail === ''){
      alert('try')
    }else{


    Axios.post('http://localhost:8000/api/contact1', detail)
      .then(response => {
        console.log('Response:', response.data);
 

        alert( "send successfully");
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Error Response:', error.response.data);
          console.error('Error Status:', error.response.status);
          console.error('Error Headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error Request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
        }
        alert("Please resend");
      });

    }

  }
  return (
    <>
      <div className='cForm'>
        <div variant="outline-light" className='nbutton' onClick={handleShow} style={{color:'#14aa00' , fontSize:'20px',}}>
          Contact Us
        </div>

          <Offcanvas style={{paddingTop:'20px', }} show={show} onHide={handleClose} scroll='true' placement='end' data-bs-theme="light" className='contact2'>
          <Offcanvas.Header closeButton >
            <Offcanvas.Title style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '25px', fontWeight: '900' , color:'#14aa00', }}>CONTACT US</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ paddingTop: '70px' }}>
            <Form >
              <Row className="mb-3 cinput">
                <Form.Group as={Col} >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="first name" ref={firstname} className='custom-input'/>
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="last name" ref={lastname} className='custom-input'/>
                </Form.Group>
              </Row>
              <Row className='cinput'>
                <Form.Group as={Col} >
                  <Form.Label>What's App Number</Form.Label>
                  <Form.Control type="text" placeholder="number" ref={contact} className='custom-input'/>
                </Form.Group>
              </Row>
              
              <Row className='cinput'>
              <Form.Group  as={Col} className="mb-3" >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={8} placeholder="Your message" ref={message} className='custom-input'/>
              </Form.Group>
              </Row>
              {/* 

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
             
                <div className='nbutton' onClick={Submit}>
                  Submit
                </div>
              
              
            </Form>
            <Row>

            <div className='icon' style={{
              justifyContent:'center' 
            }}>
                <FontAwesomeIcon icon={faFacebook} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faInstagram} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faWhatsapp} size="xl" className='icon2' />
                <FontAwesomeIcon icon={faTiktok} size="xl" className='icon2' />
            </div>
</Row>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Contact;


// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import '../Component/Component.css';

// const Contact = () => {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     contact: '',
//     message: '',
//   });

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle form submission here, e.g., send the data to an API
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <>
//       <Button
//         variant="outline-light"
//         onClick={handleShow}
//         style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '13px', fontWeight: '400' }}
//       >
//         Contact Us
//       </Button>

//       <Offcanvas show={show} onHide={handleClose} scroll='true' placement='end' data-bs-theme="dark">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>CONTACT US</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Form onSubmit={handleSubmit}>
//             <Row className="mb-3">
//               <Form.Group as={Col} controlId="formGridFirstName">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="First name"
//                   name="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                 />
//               </Form.Group>

//               <Form.Group as={Col} controlId="formGridLastName">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Last name"
//                   name="lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </Row>

//             <Form.Group as={Col} controlId="formGridContact">
//               <Form.Label>What's App Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Number"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formGridMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={6}
//                 placeholder="Your message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// export default Contact;
