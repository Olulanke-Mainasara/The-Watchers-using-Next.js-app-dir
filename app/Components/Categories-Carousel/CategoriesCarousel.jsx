'use client'

import React, { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useAnimation } from 'framer-motion';
import { categories } from '../Arrays'
import Categories from './Categories'

function CategoriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [recoil, setRecoil] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth <= 767 ? window.innerWidth : 460)
    setRecoil(window.innerWidth <= 1023 ? 1 : window.innerWidth > 1023 & window.innerWidth < 1310 ? 2 : window.innerWidth >= 1310 & window.innerWidth < 1536 ? 3 : 4)

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth <= 767 ? window.innerWidth : 460)
      setRecoil(window.innerWidth <= 1023 ? 1 : window.innerWidth > 1023 & window.innerWidth < 1310 ? 2 : window.innerWidth >= 1310 & window.innerWidth < 1536 ? 3 : 4)
    });

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth <= 767 ? window.innerWidth : 460));
  }, []);

  const controls = useAnimation();

  useEffect(() => {
      controls.start({
      x: -currentSlide * width,
      transition: { duration: 0.7 },
      });
  }, [currentSlide]);

  function nextItem() {
    setCurrentSlide(prevSlide => {
    if (prevSlide === categories.length - recoil) {
        return 0;
    }
    return prevSlide + 1;
    });
  }

  function prevItem() {
    setCurrentSlide(prevSlide => {
    if (prevSlide === 0) {
        return categories.length - recoil;
    }
    return prevSlide - 1;
    });
  }

  const categoriesWithControls = useMemo(() => <Categories controls={controls} />, [controls]);

  return (
    <section className="w-full h-screen row overflow-hidden flex flex-col gap-10 items-center justify-center text-center my-36">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Our Categories
      </h1>

      <div className="relative w-screen h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <Link title="Previous page" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 left-2 allIL:left-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tl-none allIL:rounded-bl-none dark:text-white dark:bg-black hover:dark:bg-white hover:dark:text-black allIL:hover:dark:text-white allIL:hover:dark:bg-black allEMT:shadow-none" onClick={ prevItem } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
        <Link title="Next page" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 right-2 allIL:right-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tr-none allIL:rounded-br-none dark:text-white dark:bg-black hover:dark:bg-white hover:dark:text-black allIL:hover:dark:text-white allIL:hover:dark:bg-black allEMT:shadow-none" onClick={ nextItem } href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

        {categoriesWithControls}
      </div>
    </section>
  )
}

export default CategoriesCarousel