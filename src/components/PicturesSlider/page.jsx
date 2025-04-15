"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function PicturesSlider() {
    return (
      <div className="flex justify-center items-center">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={800}
          className="max-w-[350px] h-[500px]"
        >
          <SwiperSlide>
            <div className="w-[350px] h-[500px] flex items-center justify-center overflow-hidden bg-zinc-800">
              <img src="/hottie/first.jpg" alt="first" className="w-full h-full object-cover rounded-md" />
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="w-[350px] h-[500px] flex items-center justify-center overflow-hidden bg-zinc-800">
              <img src="/hottie/second.jpg" alt="second" className="w-full h-full object-cover rounded-md" />
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="w-[350px] h-[500px] flex items-center justify-center overflow-hidden bg-zinc-800">
              <img src="/hottie/third.jpg" alt="third" className="w-full h-full object-cover rounded-md" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
}
  