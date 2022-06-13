import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ChevronRight } from "./icons/ChevronRight";
import data from "../data/data.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft } from "./icons/ChevronLeft";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='bg-white/80 p-4 rounded-tl-3xl rounded-br-3xl sm:min-h-[270px]'>
      <h2 className='text-xl sm:text-2xl font-semibold'>{title}</h2>
      <p className='sm:text-xl mt-3'>{description}</p>
    </div>
  );
};

export const Carousel = () => {
  const [showNextButton, setShowNextButton] = React.useState(true);
  const [showPrevButton, setShowPrevButton] = React.useState(false);
  const [instance, setInstance] = React.useState<any>(null);

  return (
    <div className='max-w-full w-full'>
      <h1 className='text-right text-2xl sm:text-3xl md:text-5xl text-gray-300 font-semibold'>
        {data.slide2.title}
      </h1>
      <div className='max-w-[500px] sm:max-w-[700px] ml-auto mt-9 flex relative'>
        <div className='absolute inset-0 z-50'>
          {showNextButton && (
            <button
              id='swiper-button-next'
              aria-label='Go to next Carousel slide'
              className=' md:-mr-15 lg:-mr-20 absolute top-1/2 -translate-y-1/2 right-0'
              onClick={() => {
                instance.slideNext();
              }}
            >
              <ChevronRight />
            </button>
          )}
          {showPrevButton && (
            <button
              id='swiper-button-prev'
              aria-label='Go to next Carousel slide'
              className=' md:-ml-15 lg:-ml-20 absolute top-1/2 -translate-y-1/2 left-0'
              onClick={() => {
                instance.slidePrev();
              }}
            >
              <ChevronLeft />
            </button>
          )}
        </div>
        <Swiper
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1.3,
            },
            500: {
              slidesPerView: 1.8,
            },
            700: {
              slidesPerView: 2.4,
            },
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          onInit={setInstance}
          onSlideChange={(swipe) => {
            if (swipe.isEnd) {
              console.log("hi end");
              setShowNextButton(false);
            } else {
              setShowNextButton(true);
            }
            if (swipe.isBeginning) {
              setShowPrevButton(false);
            } else {
              setShowPrevButton(true);
            }
          }}
          freeMode
        >
          {data.slide2.slides.map((slide, i) => (
            <SwiperSlide key={i} style={{ height: "auto" }}>
              <Card title={slide.title} description={slide.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
