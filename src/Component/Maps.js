import React from 'react';
import { Container } from 'react-bootstrap';

const Maps = () => {
  return (
    <div className='map'>
      <Container fluid >
      <h1 className='heading container'>OUR LOCATION</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067.831194020614!2d67.07004137572832!3d24.86248984517564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea228c00001%3A0xc9d20428598ea82b!2sNedo%20Pakistan!5e1!3m2!1sen!2s!4v1722505705862!5m2!1sen!2s"
        style={{width:'100%', height:'50vh',}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed of Nedo Pakistan"
      ></iframe>
      </Container>
    </div>
  );
};

export default Maps;
