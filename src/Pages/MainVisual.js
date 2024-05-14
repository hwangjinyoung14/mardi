import React from 'react'
// Import Swiper React components
import { Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const MainVisual = () => {
  return (
    <div className='MainVisual'>
      <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/main_bg/bg1.png'} /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/main_bg/bg2.png'} /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/main_bg/bg3.png'} /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/main_bg/bg4.png'} /></SwiperSlide>
      <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/main_bg/bg5.png'} /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default MainVisual