  import { useState } from 'react';
  import { Container, Row, Col, Form, Button } from 'react-bootstrap';
  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { useNavigate } from 'react-router-dom';
  import { useAuth } from '../AuthContext';
  import { toast } from 'react-toastify';



  function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {storetokenInLS} = useAuth();



    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(!email || !password){

        toast.warning("Please fill in all the fields.")
        return;
      }
      const loginData = { email, password };

      try {
        const response = await axios.post('https://gunserver-wh6i0sgb.b4a.run/api/signin', loginData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Login successful:', response.data);
        const res_data = await response.data;
        console.log("get data",res_data)
        storetokenInLS(res_data.token);
        toast.success(`Login Successful`,{});
        // Handle successful login (e.g., redirect or show a success message)
        navigate('/admin')
        
      } catch (error) {
        if (error.response) {
          // Handle login error (e.g., show an error message)
          toast.error("Some Thing Is Wrong")
        } else {
          toast.error(`${error.message}`)
        }
      }
    };

    return (
      <Container fluid className="d-flex align-items-center justify-content-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} md={6} lg={4} className="mx-auto">
            <div className="p-4 shadow-lg login-box">
              <h2 className="text-center mb-4">Admin Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className='custom-input'
                    name='email'
                    value={email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className='custom-input'
                    name='password'
                    value={password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div type="submit" className=" lbtn main-small-button my-3"style={{width:'110px',}} onClick={handleSubmit}>Login</div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  export default AdminLogin;

