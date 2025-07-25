"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import heroSliderTwoImage from "@/../public/assets/images/hero/hero-slide-2.webp";
import heroSliderOneImage from "@/../public/assets/images/hero/hero-slide-1.webp";
import certificateImageOne from '@/../public/assets/images/icons/certificate-1.webp';
import certificateImageTwo from '@/../public/assets/images/icons/certificate-2.webp';
import certificateImageThree from '@/../public/assets/images/icons/certificate-3.webp';

export default function MovieSliderOne() {

  const CA = process.env.NEXT_PUBLIC_CA
  const DEX = process.env.NEXT_PUBLIC_DEX

  const swiperOptions = {
    speed: 1500,
    slidesPerView: "auto",
    initialSlide: "2",
    centeredSlides: true,
    slideToClickedSlide: true,
    clickable: "true",
    allowTouchMove: false,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    breakpoints: {
      1366: {
        spaceBetween: -50,
      },
      1600: {
        spaceBetween: -70,
      },
    },
  };
  return (
    <Swiper
      {...swiperOptions}
      className="swiper hero-slider-one style-two pt-80"
    >
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/HeisenElon.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderTwoImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                  <Image className="me-3" src={certificateImageOne} alt="img" />
                  <Image className="me-3" src={certificateImageTwo} alt="img" />
                  <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  HOLLYWOOD ELON
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  {CA ? CA : `🎬 CA: Launching on Pump.fun – July 24`}
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
            

                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/HeisenElon.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderOneImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                  <Image className="me-3" src={certificateImageOne} alt="img" />
                  <Image className="me-3" src={certificateImageTwo} alt="img" />
                  <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  HOLLYWOOD ELON
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  {CA ? CA : `🎬 CA: Launching on Pump.fun – July 24`}
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
         
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="home-one-slider position-relative swiper-slide">
        <video
          className="video-autoplay"
          src="assets/video/HeisenElon.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={heroSliderOneImage} alt="card-img" className="w-100" />
        </div>
        <div className="container position-absolute top-50 start-50 translate-middle mt-5">
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-6 col-md-9 col-sm-12 align-self-center offset-lg-6">
              <div className="content text-center text-lg-start">
                <div className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                  <Image className="me-3" src={certificateImageOne} alt="img" />
                  <Image className="me-3" src={certificateImageTwo} alt="img" />
                  <Image className="me-3" src={certificateImageThree} alt="img" />
                </div>
                <h2 className="banner-title fw-bold text-uppercase">
                  HOLLYWOOD ELON
                </h2>
                <p className="banner-description pe-xl-5 me-xl-5">
                  {CA ? CA : `🎬 CA: Launching on Pump.fun – July 24`}
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
