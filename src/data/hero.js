import HeroSlideImageOne from "@/../public/assets/images/hero/hero-slide-1.png";
import HeroSlideImageTwo from "@/../public/assets/images/hero/hero-slide-2.png";
import HeroSlideImageThree from "@/../public/assets/images/hero/hero-slide-3.png";

import HeroCardSlideImageOne from "@/../public/assets/images/hero/1.png";
import HeroCardSlideImageTwo from "@/../public/assets/images/hero/2.png";
import HeroCardSlideImageThree from "@/../public/assets/images/hero/3.png";


const CA = process.env.NEXT_PUBLIC_CA

const heroOneData = {
  slides: [
    {
      videoSrc: "assets/video/promo_video_3.mp4",
      image: HeroSlideImageThree,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "HOLLYWOOD ELON",
      description: CA ? `CA: ${CA}` : `🎬 CA: Launching on Pump.fun – July 24`,
      btnOneText: "Buy on Pump.fun",
      btnTwoText: "WATCH TRAILER",
    },

    {
      videoSrc: "assets/video/promo_video_2.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "HOLLYWOOD ELON",
      description: CA ? `CA: ${CA}` : `🎬 CA: Launching on Pump.fun – July 24`,
      btnOneText: "Buy on Pump.fun",
      btnTwoText: "WATCH TRAILER",
    },
    {
      videoSrc: "assets/video/promo_video_1.mp4",
      image: HeroSlideImageTwo,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "HOLLYWOOD ELON",
      description: CA ? `CA: ${CA}` : `🎬 CA: Launching on Pump.fun – July 24`,
      btnOneText: "Buy on Pump.fun",
      btnTwoText: "WATCH TRAILER",
    },
  ],
  cardSlides: [
    {
      image: HeroCardSlideImageOne,
      title: "",
      description: "",
    }, 
    {
      image: HeroCardSlideImageThree,
      title: "",
      description: "",
    },
  ],
};



const heroThreeData = {
  title: "The monkey king",
  review: "4.9",
  duration: "02h 30m",
  quality: "4k",
  downloadBtnText: "Download Now",
  addToListBtnText: "Add to List",
};

export { heroOneData, heroThreeData };
