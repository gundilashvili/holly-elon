"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
 
import Image from "next/image"; 
import HeroSlideImageOne from "@/../public/assets/images/hero/hero-slide-1.png";
import HeroSlideImageTwo from "@/../public/assets/images/hero/hero-slide-2.png"; 
import HeroSlideImageThree from "@/../public/assets/images/hero/hero-slide-3.png";

import certificateImageOne from '@/../public/assets/images/icons/certificate-1.webp';
import certificateImageTwo from '@/../public/assets/images/icons/certificate-2.webp';
import certificateImageThree from '@/../public/assets/images/icons/certificate-3.webp';

export default function MovieSliderOne() {
  const [copied, setCopied] = useState(false);

  const CA = process.env.NEXT_PUBLIC_CA 

  const handleCopy = () => {
    const CA = process.env.NEXT_PUBLIC_CA;
    if (CA) {
      navigator.clipboard.writeText(CA).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

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
          src="assets/video/promo_video_1.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={HeroSlideImageThree} alt="card-img" className="w-100" />
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
                <p className="banner-description pe-xl-5 me-xl-5 responsive-description">
                  {CA ? `CA:   ${CA} ` : `🎬 CA: Launching on Pump.fun – July 29`}
                  {!!CA && (
                    <button
                      onClick={handleCopy}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "20px",
                      }}
                      title={copied ? "Copied!" : "Copy"}
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="green"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.414-1.414 3.871 3.871 9.871-9.871z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  )}
                </p>
                <style jsx>{`
                          @media (max-width: 576px) {
                            .responsive-description {
                              font-size: 12px !important;
                              white-space: normal !important;
                              text-align: center !important;
                            }
                          }
                        `}</style>
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
          src="assets/video/promo_video_3.mp4"
          preload="auto"
          muted
          autoPlay
          loop
        ></video>
        <div className="thumb">
          <Image src={HeroSlideImageTwo} alt="card-img" className="w-100" />
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
                <p className="banner-description pe-xl-5 me-xl-5 responsive-description">
                  {CA ? `CA:   ${CA} ` : `🎬 CA: Launching on Pump.fun – July 29`}
                  {!!CA && (
                    <button
                      onClick={handleCopy}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "20px",
                      }}
                      title={copied ? "Copied!" : "Copy"}
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="green"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.414-1.414 3.871 3.871 9.871-9.871z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  )}
                </p>

                <style jsx>{`
                          @media (max-width: 576px) {
                            .responsive-description {
                              font-size: 12px !important;
                              white-space: normal !important;
                              text-align: center !important;
                            }
                          }
                        `}</style>
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
          <Image src={HeroSlideImageOne} alt="card-img" className="w-100" />
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
                <p className="banner-description pe-xl-5 me-xl-5 responsive-description">
                  {CA ? `CA:   ${CA} ` : `🎬 CA: Launching on Pump.fun – July 29`}
                  {!!CA && (
                    <button
                      onClick={handleCopy}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontSize: "20px",
                      }}
                      title={copied ? "Copied!" : "Copy"}
                    >
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="green"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.414-1.414 3.871 3.871 9.871-9.871z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                  )}
                </p>
                <style jsx>{`
                          @media (max-width: 576px) {
                            .responsive-description {
                              font-size: 12px !important;
                              white-space: normal !important;
                              text-align: center !important;
                            }
                          }
                        `}</style>
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
