"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { popularOneMoviesData as movies } from "@/data/movie";
import MovieCard from "@/components/Card/MovieCard";

export default function PopularOne() {
  const [showPopup, setShowPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handlePlay = (src) => {
    setVideoUrl(src);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setVideoUrl(null);
  };

const getYoutubeId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : null;
};


  const videoId = getYoutubeId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  const swiperOptions = {
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      0: { slidesPerView: "1.2" },
      576: { slidesPerView: "1.7", spaceBetween: 20 },
      992: { slidesPerView: "2.5", spaceBetween: 20 },
      1366: { slidesPerView: "3.5", spaceBetween: 30 },
      1600: { slidesPerView: "3.9", spaceBetween: 30 },
    },
  };

  return (
    <div className="popular-show pt-80">
      <div className="container mb-45">
        <div className="d-md-flex text-lg-start text-center align-items-center justify-content-md-between">
          <div className="d-inline-flex align-item-center section-header">
            <span className="mb-2">🎬</span>
            <h3 className="section-title mt-1 mt-lg-2 mb-0 lh-1">HOLLY Trailers</h3>
          </div>
          <Link
            href="trailers"
            className="hl-btn btn-base small-btn fs-18 fw-normal text-uppercase flex-shrink-0 d-sm-inline-block d-none"
          >
            <span>See All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                opacity="0.8"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0304 0.562497V0H10.9054V0.562497C10.9054 2.69834 12.0892 4.75254 13.871 5.96946H0V7.09445H13.871C12.0893 8.31136 10.9054 10.3656 10.9054 12.5014V13.0639H12.0304V12.5014C12.0304 9.73629 14.4843 7.10404 17.4214 7.09448C17.4268 7.09449 17.4321 7.0945 17.4375 7.0945H18V7.09445V5.96951V5.96946H17.9995H17.4375H17.4159C14.4812 5.95662 12.0304 3.32594 12.0304 0.562497Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Sliders */}
      {movies && movies.length && (
        <Swiper {...swiperOptions} className="swiper movie-card-slider-sm">
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} onPlay={handlePlay} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* YouTube Popup */}
      {showPopup && embedUrl && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button className="close-btn" onClick={closePopup}>✕</button>
          </div>
          <style jsx>{`
            .popup-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0, 0, 0, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
            }

            .popup-content {
              position: relative;
              width: 90%;
              max-width: 960px;
              aspect-ratio: 16 / 9;
              background: #000;
              border-radius: 8px;
              overflow: hidden;
            }

            .close-btn {
              position: absolute;
              top: 10px;
              right: 10px;
              background: rgba(255, 255, 255, 0.1);
              border: none;
              font-size: 1.5rem;
              color: white;
              cursor: pointer;
              padding: 4px 10px;
              border-radius: 4px;
              z-index: 10;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
