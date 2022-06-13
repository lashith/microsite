import React from "react";
import cx from "classnames";
import Image from "next/image";
import { Carousel } from "./Carousel";
import data from "../data/data.json";
export const Slide2 = ({ active }: { active: boolean }) => {
  return (
    <div
      className={cx("absolute inset-0 z-20", {
        "opacity-0 duration-500": !active,
        "opacity-100 duration-500": active,
      })}
    >
      <a href='#' className='absolute right-5 top-7  z-30 text-gray-400'>
        DISCOVER MORE
      </a>
      <section className='relative z-10 h-screen flex items-center justify-center'>
        <div className='absolute inset-0'>
          <Image
            src={data.slide2.images[0]}
            layout='fill'
            alt='background image'
            objectFit='cover'
            priority
            className='md:hidden'
          />
          <Image
            src={data.slide2.images[1]}
            layout='fill'
            objectFit='cover'
            alt='background image'
            objectPosition='-10% 50%'
            priority
            className='hidden md:block'
          />
          <Image
            src={data.slide2.images[2]}
            alt='background image'
            layout='fill'
            objectFit='cover'
            priority
            className='hidden lg:block'
          />
        </div>
        <div className='flex flex-col items-center z-30 w-full px-5 md:mr-28 min-h-[300px]'>
          <Carousel />
        </div>
      </section>
    </div>
  );
};
