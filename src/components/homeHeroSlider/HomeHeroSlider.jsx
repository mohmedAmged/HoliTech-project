import React from 'react'
import './homeHeroSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
// import { Pagination } from 'swiper/modules';
import heroSlider1 from '../../assets/heroImgs/hero-slider-4.jpg'
import heroSlider2 from '../../assets/heroImgs/hero-slider-5.jpg'
import heroSlider3 from '../../assets/heroImgs/hero-slider-6.jpg'
import { NavLink } from 'react-router-dom';

export default function HomeHeroSlider() {
    const slidesData = [
        {
            imgSrc: heroSlider1,
            title: "Best solution for your ",
            titText: "Business.",
            subTitle: "creative",
            description: "Holitech: Your premier business solution. Our team crafts innovative software & web-apps & apps tailored to your needs. Streamline operations, enhance customer experiences, & drive growth. Elevate your business with Holitech!",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "01"
        },
        {
            imgSrc: heroSlider2,
            title: "Best solution for your ",
            titText: "Markets.",
            subTitle: "creative",
            description: "Holitech excels in market solutions. From research tools to customer engagement platforms, we help you understand markets, reach new territories, & drive sales. Conquer markets confidently with Holitech!",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "02"
        },
        {
            imgSrc: heroSlider3,
            title: "Best solution for your ",
            titText: "Finance.",
            subTitle: "creative",
            description: "Unlock financial success with Holitech. Our software optimizes processes, streamlines operations, & maximizes profitability. From budgeting to payment processing, achieve financial excellence with Holitech!",
            link1: "/about-us",
            link2: "/services",
            sliderNum: "03"
        },
    ];
    return (
        <div className='homeHeroSlider__handler'>
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                effect={"fade"}
                speed={1000}
                autoplay={{ delay: 6000 }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[ Pagination, Autoplay, EffectFade]}
                
                className="mySwiper"
            >
                {
                    slidesData?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="hero__slider__content__handler">
                                            <div className="hero__slider__content">
                                                <div className="hero__content__img">
                                                    <img src={slide?.imgSrc} alt="hero_slider_img" />
                                                </div>
                                                <div className="hero__content">
                                                    <h2>
                                                        {slide?.subTitle}
                                                    </h2>
                                                    <h1>
                                                        {slide?.title}
                                                        <span> {slide?.titText}</span>
                                                    </h1>
                                                    <p>
                                                        {slide?.description}
                                                    </p>
                                                    <NavLink to={slide?.link1} className="nav-link hero__link about__btn">
                                                        About Us
                                                    </NavLink>
                                                    <NavLink to={slide?.link2} className="nav-link hero__link work__btn">
                                                        How we work
                                                    </NavLink>
                                                    <div className="slider__num">
                                                        <span>
                                                            {slide?.sliderNum}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="hero__socialMedia">
                <ul className='social__list'>
                    <li>
                        <NavLink className="nav-link" to={''}>
                            FaceBook
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to={''}>
                            Instagram
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to={''}>
                            Linkedin
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
