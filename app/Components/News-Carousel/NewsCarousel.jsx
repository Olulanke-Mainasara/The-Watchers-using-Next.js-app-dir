'use client'

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useAnimation } from 'framer-motion';
import { news } from '../Arrays';
import News from './News';

function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => {
        if (prevSlide === news.length - 1) {
          return 0;
        }
        return prevSlide + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSlide * width,
      transition: { duration: 2 },
    });
  }, [currentSlide]);


  function nextNews() {
    setCurrentSlide(prevSlide => (prevSlide + 1) % news.length);
  };

  function prevNews() {
    setCurrentSlide(prevSlide => (news.length + prevSlide - 1) % news.length);
  };

  return (
    <section style={{ scrollSnapAlign: "start" }} className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allEMT:my-28">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Today's Featured Articles
      </h1>

      <div className="relative w-screen h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <Link title="Previous page" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 left-2 allIL:left-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tl-none allIL:rounded-bl-none dark:text-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allIL:hover:text-black allIL:dark:hover:text-white allIL:hover:bg-white allIL:dark:hover:bg-black allEMT:shadow-none" onClick={ prevNews } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
        <Link title="Next page" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 right-2 allIL:right-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tr-none allIL:rounded-br-none dark:text-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allIL:hover:text-black allIL:dark:hover:text-white allIL:hover:bg-white allIL:dark:hover:bg-black allEMT:shadow-none" onClick={ nextNews } href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

        <News controls={controls} />
      </div>
    </section>
  );
};

export default NewsCarousel;