import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const UpdatePasword = () => {
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);
  const handleShow = () => setShow1(true);



  return (
    <div>
      <div className='main-small-button' onClick={handleShow} style={{margin:'0px',width:"auto",padding:'5px 10px'}}>
                    Update Password
        </div>

                  <Modal show={show1} onHide={handleClose} centered size="sm" >
                    <Modal.Header closeButton style={{display:'flex', msFlexDirection:'column'}}>
                      <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>
                    <div>
                      
                    <Modal.Body>
                      <Form className='main-form'>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          {/* <Form.Label>Your Full Name</Form.Label> */}
                          <Form.Control
                            className='main-custom-input'
                            placeholder="full name "
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          {/* <Form.Label>What's App Number / Contact Number</Form.Label> */}
                          <Form.Control
                            className='main-custom-input'
                            placeholder="number"
                            maxLength={20}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1" >
                          {/* <Form.Label>Your Full Name</Form.Label> */}
                          <Form.Control
                            className='main-custom-input'
                            placeholder="full name "
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
                      <div variant="secondary" onClick={handleClose} className='main-small-button' style={{width:'70px'}}>
                        Close
                      </div>
                      <div variant="primary" onClick={handleClose}className='main-small-button' style={{width:'150px' }}>
                        Save Changes
                      </div>
                    </Modal.Footer>
                  </Modal>
    </div>
  )
}

export default UpdatePasword
