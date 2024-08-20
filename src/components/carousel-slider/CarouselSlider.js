'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

function CarouselSlider() {
  const [images, setImages] = useState(null);
  useEffect(() => {}, []);
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide />
    </Swiper>
  );
}
export default CarouselSlider;
