import React from 'react'
import './Component.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import heroimg from '../images/1.png';
import heroimg1 from '../images/2.png';
import heroimg2 from '../images/3.png';
import heroimg3 from '../images/4.png';
import heroimg4 from '../images/5.png';
import heroimg5 from '../images/7.png';
import heroimg7 from '../images/511.png';
import heroimg8 from '../images/dasf-removebg-preview.png';
import { Container } from 'react-bootstrap';



const Hero = () => {
  return (
    < >
      <div className='hhero'>
   
        <Container fluid>
          <div className='hero h-100' id='home'>
            <div className='hero-box col-md-7 col-lg-7' >
              <h1>All Kind of <span>Holsters/Covers</span> Made to Order Accessories</h1>
            </div>
            <div className='hero-box2 col-md-5 col-lg-5'>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable:true, 
                // }}
                // navigation={true}s
                modules={[Autoplay, Pagination, Navigation]}
                className="myswiper"
              >
                <SwiperSlide>
                  <img src={heroimg} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg1} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg8} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg2} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg3} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg4} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg5} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={heroimg7} alt="sile-img" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Hero

