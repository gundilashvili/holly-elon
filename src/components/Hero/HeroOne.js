"use client";

import { useState } from "react";
import Link from "next/link";
import PumpFun from "@/../public/assets/images/logo/pump-fun-dark.png";
import DexLogo from "@/../public/assets/images/logo/dex.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  Scrollbar,
} from "swiper/modules";

import { heroOneData as data } from "@/data/hero";
import Image from "next/image";
import pumpfunLogo from '@/../public/assets/images/logo/pump-fun.png';

export default function HeroOne() {

  const [copied, setCopied] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const videoId = "SWz1wbvLpHI";

  const CA = process.env.NEXT_PUBLIC_CA
  const DEX = process.env.NEXT_PUBLIC_DEX

  const handleCopy = () => {
    const CA = process.env.NEXT_PUBLIC_CA;
    if (CA) {
      navigator.clipboard.writeText(CA).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };


  const swiperHeroOptions = {
    speed: 1500,
    slidesPerView: "auto",
    initialSlide: "2",
    spaceBetween: "-70",
    centeredSlides: "true",
    slideToClickedSlide: "true",
    clickable: "true",
    allowTouchMove: "false",
    loop: "true",
    autoplay: {
      delay: 10000,
    },
    navigation: {
      prevEl: ".prev-slide",
      nextEl: ".next-slide",
    },
    onAutoplayTimeLeft(s, time, progress) {
      const progressCircle = document.querySelector(".linear-circle");
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
    modules: [Autoplay, Pagination, Navigation],
  };

  const swiperHeroCardOptions = {
    speed: 500,
    effect: "cards",
    rotate: "false",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    modules: [Pagination, Navigation, EffectCards, Scrollbar],
  };




  return (
    <>
      {data.slides && data.slides.length > 0 && (
        <Swiper {...swiperHeroOptions} className="swiper hero-slider-one">
          {data.slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="home-one-slider position-relative swiper-slide"
            >
              <video
                className="video-autoplay"
                src={slide.videoSrc}
                preload="auto"
                muted
                autoPlay
                loop
              ></video>
              <div className="thumb">
                <Image src={slide.image} alt="card-img" className="w-100" />
              </div>
              <div className="container position-absolute top-50 start-50 translate-middle mt-5">
                <div className="row justify-content-lg-between justify-content-center">
                  <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                    <div className="content text-center text-lg-start">
                      <ul className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-1 gap-lg-2">
                        <li
                          className="movie-info-list--item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "#aaa",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.cursor = "pointer";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#aaa";
                            e.currentTarget.style.cursor = "default";
                          }}
                          onClick={() => window.open("https://x.com/HollyElon", "_blank")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="15"
                            viewBox="0 0 17 15"
                            fill="none"
                          >
                            <path
                              d="M13.2402 0.656738H15.6604L10.3731 6.69986L16.5932 14.9232H11.7229L7.90825 9.93578L3.54348 14.9232H1.12184L6.77721 8.45939L0.810173 0.656738H5.80416L9.25222 5.21542L13.2402 0.656738ZM12.3908 13.4746H13.7319L5.07547 2.02924H3.63639L12.3908 13.4746Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span>{!CA ? "Twitter" : ""}</span>
                        </li>


                        <li
                          className="movie-info-list--item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "#aaa",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.cursor = "pointer";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#aaa";
                            e.currentTarget.style.cursor = "default";
                          }}
                          onClick={() => window.open("https://t.me/hollyelon", "_blank")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9.036 16.569L9.438 20.535C9.935 20.535 10.144 20.316 10.404 20.062L12.62 17.939L16.539 20.813C17.261 21.208 17.768 20.999 17.952 20.127L21.347 3.644C21.598 2.576 20.947 2.103 20.253 2.37L2.508 9.21C1.46 9.618 1.466 10.212 2.331 10.477L6.873 11.863L17.844 5.376C18.355 5.083 18.823 5.266 18.434 5.589L9.036 16.569Z" fill="currentColor" />
                          </svg>
                          <span>{!CA ? "Telegram" : ""}</span>
                        </li>


                        <li
                          className="movie-info-list--item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            color: "#aaa",
                            transition: "color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.cursor = "pointer";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#aaa";
                            e.currentTarget.style.cursor = "default";
                          }}
                          onClick={() => window.open("https://www.youtube.com/@hollyelon", "_blank")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                            <path d="M9.51528 0.656738C9.98947 0.659457 11.1759 0.671406 12.4364 0.724002L12.8834 0.744302C14.1525 0.806895 15.4206 0.913825 16.0496 1.0965C16.8885 1.342 17.5479 2.05833 17.7707 2.96636C18.1256 4.40827 18.17 7.22255 18.1755 7.9036L18.1763 8.04473V8.05463C18.1763 8.05463 18.1763 8.05805 18.1763 8.06462L18.1755 8.20575C18.17 8.8868 18.1256 11.7011 17.7707 13.143C17.5448 14.0543 16.8854 14.7707 16.0496 15.0128C15.4206 15.1955 14.1525 15.3024 12.8834 15.365L12.4364 15.3853C11.1759 15.4379 9.98947 15.4498 9.51528 15.4526L9.30717 15.4534H9.29793C9.29793 15.4534 9.29483 15.4534 9.2887 15.4534L9.08077 15.4526C8.07716 15.4469 3.8809 15.3996 2.5463 15.0128C1.70737 14.7673 1.04799 14.051 0.825102 13.143C0.470261 11.7011 0.425904 8.8868 0.420364 8.20575V7.9036C0.425904 7.22255 0.470261 4.40827 0.825102 2.96636C1.05108 2.05497 1.71046 1.33864 2.5463 1.0965C3.8809 0.709667 8.07716 0.662491 9.08077 0.656738H9.51528ZM7.52227 4.81772V11.2916L12.8493 8.05463L7.52227 4.81772Z" fill="currentColor" />
                          </svg>
                          <span>{!CA ? "Youtube" : ""}</span>
                        </li>

                        {!!CA && (
                          <li
                            className="movie-info-list--item"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              color: "#aaa",
                              transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.cursor = "pointer";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#aaa";
                              e.currentTarget.style.cursor = "default";
                            }}
                            onClick={() => window.open(`https://pump.fun/coin/${CA}`, "_blank")}
                          >
                            <Image src={PumpFun} alt="Pump.fun" width={20} height={20} />
                            <span></span>
                          </li>
                        )}


                        {!!DEX && (
                          <li
                            className="movie-info-list--item"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              color: "#aaa",
                              transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#fff";
                              e.currentTarget.style.cursor = "pointer";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#aaa";
                              e.currentTarget.style.cursor = "default";
                            }}
                            onClick={() => window.open(`${DEX}`, "_blank")}
                          >
                            <Image src={DexLogo} alt="Pump.fun" width={22} height={22} />
                            <span></span>
                          </li>
                        )}


                      </ul>



                      <h2 className="banner-title fw-bold text-uppercase">
                        {slide.title}
                      </h2>
                      <div
                        className="d-flex align-items-center flex-column flex-sm-row pe-xl-5 me-xl-5"
                        style={{
                          fontSize: "30px",
                          marginBottom: 20,
                        }}
                      >
                        <p
                          className="banner-description mb-2 mb-sm-0 me-0 me-sm-2 text-center text-sm-start"
                          style={{
                            fontSize: "22px",
                          }}
                        >
                          {slide.description}
                        </p>
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

                      </div>
                      <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                        <button
                          onClick={() => setShowModal(true)}
                          className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 flex-shrink-0 text-uppercase"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="15"
                            viewBox="0 0 13 15"
                            fill="none"
                          >
                            <path
                              d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                              fill="currentColor"
                              fillOpacity="0.2"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{slide.btnTwoText}</span>
                        </button>
                        {!!CA && (
                          <button
                            className="hl-btn big-btn lh-1 trans-btn fs-18 radius-20 fw-medium flex-shrink-0 text-uppercase btn-inactive"
                            onClick={(e) => {
                              e.preventDefault()
                              const CA = process.env.NEXT_PUBLIC_CA;
                              if (CA) {
                                window.open(`https://pump.fun/coin/${CA}`, '_blank');
                              }
                            }}
                          >
                            <Image
                              src={pumpfunLogo}
                              alt="Pump.fun Logo"
                              width={24}
                              height={24}
                              style={{ marginRight: '8px' }}
                            />
                            <span>{slide.btnOneText}</span>
                          </button>

                        )}


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper >
      )
      }

      {/* <!-- small slider --> */}
      <div className="hero-card-slider">
        {data.cardSlides && data.cardSlides.length > 0 && (
          <Swiper
            {...swiperHeroCardOptions}
            className="swiper hero-card-slider-wrap"
          >
            {data.cardSlides.map((cardSlide, key) => (
              <SwiperSlide
                key={key}
                className="hero-movie-card text-center swiper-slide"
              >
                <div className="thumb">
                  <Image src={cardSlide.image} alt="card-img" />
                </div>
                <div className="content mt-3">
                  <h3 className="card-title">{cardSlide.title}</h3>
                  <p className="card-description">{cardSlide.description}</p>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-btn-wrapper d-flex align-item-center justify-content-center gap-4 mt-xl-4 mt-3">
              <button className="slider-btn slider-btn--big prev-slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="29"
                  viewBox="0 0 40 29"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.91 1.5125V0.322754H15.2895V1.5125C15.2895 6.03007 12.7856 10.375 9.017 12.9489H38.3558V15.3284H9.01686C12.7856 17.9023 15.2895 22.2472 15.2895 26.7648V27.9545H12.91V26.7648C12.91 20.9162 7.71984 15.3487 1.50732 15.3285C1.496 15.3285 1.48468 15.3285 1.47336 15.3285H0.283611V15.3284V12.949V12.9489H0.284611H1.47336H1.519C7.72634 12.9217 12.91 7.35752 12.91 1.5125Z"
                    fill="#fff"
                  />
                </svg>
              </button>
              <button className="slider-btn slider-btn--big next-slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="90"
                  height="90"
                  className="linear-circle"
                >
                  <defs>
                    <linearGradient id="bg_gradient">
                      <stop offset="0%" stopColor="#5A0DFF" />
                      <stop offset="39%" stopColor="#FF29B8" />
                      <stop offset="100%" stopColor="#FF581C" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="20" strokeLinecap="round"></circle>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="29"
                  viewBox="0 0 40 29"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.4206 1.7022V0.512451H24.0411V1.7022C24.0411 6.21977 26.5449 10.5647 30.3136 13.1386H0.974731V15.5181H30.3137C26.545 18.092 24.0411 22.4369 24.0411 26.9545V28.1442H26.4206V26.9545C26.4206 21.1059 31.6107 15.5384 37.8232 15.5181C37.8346 15.5182 37.8459 15.5182 37.8572 15.5182H39.047V15.5181V13.1387V13.1386H39.046H37.8572H37.8116C31.6042 13.1114 26.4206 7.54722 26.4206 1.7022Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
            <div className="hero-card-slider-control position-absolute ms-5 top-50 d-md-inline-block d-none">
              <div className="slider-counter-two gap-1">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </Swiper>
        )}
      </div>
      {
        showModal && (
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                width: "90%",
                maxWidth: "800px",
                aspectRatio: "16 / 9",
                backgroundColor: "#000",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)"
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: 24,
                  cursor: "pointer"
                }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>
        )
      }

    </>


  );
}
