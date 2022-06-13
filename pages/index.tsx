import type { NextPage } from "next";
import Head from "next/head";
import { Logo } from "../components/Logo";
import { Slide1 } from "../components/Slide1";
import React, { useEffect } from "react";
import cx from "classnames";
import { Slide2 } from "../components/Slide2";

const Home: NextPage = () => {
  const [active, setActive] = React.useState(1);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (scrollPosition > e.deltaY) {
        setActive(1);
      } else {
        setActive(2);
      }
      setScrollPosition(e.deltaY);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>microsite</title>
        <meta name='description' content='This is a microsite' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className='relative z-30'>
          <Logo color={active} />
        </header>
        <div className='relative inset-0'>
          <Slide1 active={active === 1} setActive={setActive} />
          <Slide2 active={active === 2} />
        </div>

        <div className='absolute z-30 top-[90%]  md:top-1/2 -translate-y-1/2 right-0 flex flex-col items-end space-y-1'>
          {[1, 2].map((i) => (
            <button
              key={i}
              aria-label='Go to  slide 1'
              onClick={() => setActive(i)}
              className='h-8'
            >
              <span
                className={cx(
                  "block transition-all duration-500 cursor-pointer",
                  {
                    "h-2 w-10 bg-black": active !== i && active === 1,
                    "h-2 w-10 bg-white": active !== i && active === 2,
                    "bg-blue-500 h-3 w-16": active === i,
                  }
                )}
              >
                <span className='opacity-0'>go to slide {i}</span>
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
