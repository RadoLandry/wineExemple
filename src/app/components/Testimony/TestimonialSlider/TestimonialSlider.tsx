import React from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';


const TestimonialSlider : React.FC = () => {
    
    return(
        <Swiper 
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{clickable:true,dynamicBullets: true,}}
            modules={[Autoplay,Pagination,Navigation]}
            autoplay={{
                delay: 4000, 
                disableOnInteraction: false, 
              }}
              loop={true}
            className='mySwiper'
        >
            {
            testimonialsData.map((slide, index) => {
                const { image, name, message, delay } = slide;
                return (
                    <SwiperSlide key={index} className='bg-white rounded border-accent-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px]'>
                        <div className='flex'>
                            <Image src={image} alt='image' width={50} height={50}/>
                            <div className='text-black pt-5 pl-5 font-bold'>{name}</div>
                        </div>

                        <div className='text-black italic font-sans dancingFont text-center m-10'>{message}</div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default TestimonialSlider;