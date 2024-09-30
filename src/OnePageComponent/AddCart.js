import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../Component/Footer';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AddCart = () => {
  const { cardid } = useParams();
  const [post, setPost] = useState(null); // Initialize as null
  const { state: { productTitle } } = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/product/${cardid}`);
        const data = await res.json();
        console.log("API Response:", data); // Log the response
        setPost(data.data); // Ensure data is set correctly
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };
  
    getData();
  }, [cardid]);
  

  return (
    <>
      <Container>
        <h1>{post?.productTitle || "Loading..."}</h1>
        <h2>{productTitle || "Loading..."}</h2>
        <Button>click</Button>
      </Container>
      <Footer />
    </>
  );
}
export default AddCart;
