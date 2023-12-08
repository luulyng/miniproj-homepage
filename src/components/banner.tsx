// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://victorthemes.com/themes/windfall/wp-content/uploads/2019/04/slide3.png" />
      </SwiperSlide>
      
    </Swiper>
  );
};
