import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import valhala from '../../assets/HeadreIcons/valhala.png'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation,EffectCoverflow,Pagination,]);


export const Slider = () => {
    return (
        <>
            <Swiper effect={'coverflow'}
                    autoplay={{
                        delay:100
                    }}

                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                "rotate": 70,
                "stretch": 10,
                "depth": 100,
                "modifier": 1,

            }} pagination={true} className="mySwiper">
                <SwiperSlide>
                    <img src={valhala} alt=""/>
                </SwiperSlide>
                <SwiperSlide title={'erererer'}><img src={valhala} alt=""/></SwiperSlide>
                <SwiperSlide><img src={valhala} alt=""/></SwiperSlide>
                <SwiperSlide><img src={valhala} alt=""/></SwiperSlide>
            </Swiper>
        </>
    )
}
