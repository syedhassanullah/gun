import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function AdminProduct() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    productId: '',
    productTitle: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", image);
    data.append("productId", formData.productId);
    data.append("productTitle", formData.productTitle);
    data.append("description", formData.description);
    data.append("price", formData.price);

    try {
      const result = await axios.post("http://localhost:8000/api/product", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(result);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  return (
    <>
  
        <div className="admin-product">
          <h1>PRODUCTS DETAIL</h1>
        
        <div>

          <Form className='pinput'>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose Product Picture</Form.Label>
              <Form.Control type="file" onChange={handleChange} className='custom-input'/>
              {/* <input type='file' accept='image/*' onChange={handleChange}></input> */}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Product Id</Form.Label> */}
              <Form.Control 
              type="text" 
              placeholder="Product Id"  
              className='custom-input'
              onChange={handleInputChange}
              name='productId'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Product Title</Form.Label> */}
              <Form.Control 
              type="text" 
              placeholder="Product Title"  
              className='custom-input'
              onChange={handleInputChange} 
              name='productTitle'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Description</Form.Label> */}
              <Form.Control 
              as="textarea" 
              rows={8} 
              placeholder="Description"  
              className='custom-input'
              onChange={handleInputChange}
              name='description'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Price</Form.Label> */}
              <Form.Control 
              type="number" 
              placeholder="Price"  
              className='custom-input'
              onChange={handleInputChange}
              name='price'
              />
            </Form.Group>
            <div 
            onClick={handleSubmit}
              className='nbutton' style={{
              }}>
              List
            </div>
          </Form>
        </div>
        </div>
    
    </>
  )
}

export default AdminProduct
// const [image, setImage] = useState(null);
//   const [productId, setProductId] = useState('');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');

//   const handleChange = (e) => {
//     setImage(e.target.files[0]); // Store the first file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();   

//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('productId', productId);
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('price', price);

//     try {
//       const result = await axios.post(
//         'http://localhost:5000/api/product',
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       console.log(result.data); // Handle success
//     } catch (error) {
//       console.error('Error uploading file:', error); // Handle error
//     }
//   };

//   return (
//     <Container>
//       <div className="admin-product">
//         <h1>PRODUCTS DETAIL</h1>
//       </div>
//       <Form className='pinput' >
//         <Form.Group controlId="formFile" className="mb-3">
//           <Form.Label>Choose Product Picture</Form.Label>
//           <Form.Control type="file" onChange={handleChange} className='custom-input'/>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formProductId">
//           <Form.Label>Product Id</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Product Id"  
//             className='custom-input'
//             value={productId}
//             onChange={(e) => setProductId(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formProductTitle">
//           <Form.Label>Product Title</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Product Title"  
//             className='custom-input'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control 
//             as="textarea" 
//             rows={8} 
//             placeholder="Description"  
//             className='custom-input'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formPrice">
//           <Form.Label>Price</Form.Label>
//           <Form.Control 
//             type="number" 
//             placeholder="Price"  
//             className='custom-input'
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </Form.Group>
//         <div type="submit" onClick={handleSubmit} className='nbutton'>
//           List
//         </div>
//       </Form>
//     </Container>
//   );
// };

// export default AdminProduct;





// const pid = useRef("");
  // const title = useRef("");
  // const description = useRef("");
  // const price = useRef("");
  // const image = useRef("");



  // const List = (event) => {
  //   event.preventDefault();

  //   console.log(pid.current.value);
  //   console.log(title.current.value);
  //   console.log(description.current.value);
  //   console.log(price.current.value);
  //   console.log(image.current.files);



  //   var Image = image.current.files[0].name;
  //   var Title = title.current.value;
  //   const Obj = new Object();
  //   Obj.Title = Title;
  //   Obj.Image = Image;


  //   // const pformdata = new FormData();


  //   // var Image = image.current.files[0];


  //   // console.log(Image+'Image')
  //   // // Append product data
  //   // pformdata.append('pid', pid.current.value);
  //   // pformdata.append('title',Title );
  //   // pformdata.append('description', description.current.value);
  //   // pformdata.append('price', price.current.value);
  //   // pformdata.append('Image',Image);


  //   console.log(Obj);
    // if (image.current.files[0]) {
    //   pformdata.append('image', image.current.files[0]);
    // }


  //   Axios.post("http://localhost:5000/api/product", Obj)
  //   .then(response => {
  //     console.log('response', response.data);
  //   })
  //   .catch( error =>{
  //     console.log('error',error);
  //   })

  // }

  // const [formData, setFormData] = useState({
  //   pid: '',
  //   title: '',
  //   description: '',
  //   price: '',
  //   image: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: name === 'image' ? files[0] : value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   data.append('pid', formData.pid);
  //   data.append('title', formData.title);
  //   data.append('description', formData.description);
  //   data.append('price', formData.price);
  //   if (formData.image) {
  //     data.append('image', formData.image);
  //   }

  //   console.log(data);
  //   try {
  //     const response = await Axios.post('http://localhost:5000/api/product', data, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log('response', response.data);
  //   } catch (error) {
  //     console.error('Error uploading data', error);
  //   }
  // };
