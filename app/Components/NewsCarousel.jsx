'use client'

import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from 'framer-motion';
import { news } from './Arrays';
import News from './News';

let innerWidth = window.innerWidth

function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => {
        if (prevSlide === news.length - 2) {
          return -1;
        }
        return prevSlide + 1;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSlide * innerWidth,
      transition: { duration: 2 },
    });
  }, [currentSlide]);

  function nextNews() {
    setCurrentSlide(prevSlide => {
      if (prevSlide === news.length - 2) {
        return -1;
      }
      return prevSlide + 1;
    });
  }

  function prevNews() {
    setCurrentSlide(prevSlide => {
      if (prevSlide === -1) {
        return news.length - 2;
      }
      return prevSlide - 1;
    });
  }

  return (
    <section className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center my-20 allM:hidden lg:hidden">
      <h1 className="dark:text-white text-8xl">
        Today's Featured Articles
      </h1>

      <motion.div className="relative w-screen h-[500px] 2xl:h-[650px] flex items-center justify-center overflow-x-hidden">
        <Link title="Previous page" className="w-12 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 left-2 duration-300 allEM:shadow-none allT:shadow-none text-black" onClick={ prevNews } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
        <Link title="Next page" className="w-12 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 right-2 duration-300 allEM:shadow-none allT:shadow-none text-black" onClick={ nextNews } href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

        <News news={news} controls={controls}/>
      </motion.div>
    </section>
  );
};

export default NewsCarousel;