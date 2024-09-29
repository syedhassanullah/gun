import {useState}from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AdminLogin() {

  const [value,setValue] = useState();

  const handleChange =(e)=>{
    e.preventdefault();
    const {name,value} = e.target;
    

  }


  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <div className="p-4 shadow-lg login-box">
            <h2 className="text-center mb-4">Admin Login</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className='custom-input' name='email' />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='custom-input' name='passowrd' />
              </Form.Group>

              <div className="lbtn nbutton my-3">
                Login
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminLogin;
