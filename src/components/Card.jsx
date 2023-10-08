import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import card from './card.scss'
import 'swiper/css';

export const Card = () => {
  return (
    <>
    
    <div className='container mt-5 mb-5'>
      <Swiper
        // spaceBetween={30}
        slidesPerView={3}
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img className='img-slider' src="https://images.pexels.com/photos/11805534/pexels-photo-11805534.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-slider' src="https://images.pexels.com/photos/355087/pexels-photo-355087.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-slider' src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-slider' src="https://images.pexels.com/photos/1546495/pexels-photo-1546495.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-slider' src="https://images.pexels.com/photos/11805534/pexels-photo-11805534.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}


