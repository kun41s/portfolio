import React from "react";
import "./testimonials.css";
import testimonialReview from "./testimonial-review";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" >
        {testimonialReview.map(({img, clientName, clientReview }, index) => {
          return (
            
            <SwiperSlide key={index} className="testimonial">
              <div className="clients_avtar">
                <img src={img} alt="avtar" />
              </div>

              <h5 className="client_name">{clientName}</h5>
              <small className="client_review">{clientReview}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
