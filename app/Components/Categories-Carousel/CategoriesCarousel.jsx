'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useAnimation } from 'framer-motion';
import { categories } from '../Arrays'
import Categories from './Categories'

function CategoriesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [width, setWidth] = useState(460);

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
        x: -currentSlide * width,
        transition: { duration: 0.7 },
        });
    }, [currentSlide]);

    function nextItem() {
        setCurrentSlide(prevSlide => {
        if (prevSlide === categories.length - 3) {
            return 0;
        }
        return prevSlide + 1;
        });
    }

    function prevItem() {
        setCurrentSlide(prevSlide => {
        if (prevSlide === 0) {
            return categories.length - 3;
        }
        return prevSlide - 1;
        });
    }

  return (
    <section className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center my-40 text-center">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Our Categories
      </h1>

      <motion.div className="relative w-screen h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <Link title="Previous page" className="w-12 allEM:w-6 allT:w-4 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 left-2 allIL:left-0 duration-300 allIL:hover:bg-transparent allIL:hover:text-black allEM:shadow-none allT:shadow-none text-black" onClick={ prevItem } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
        <Link title="Next page" className="w-12 allEM:w-6 allT:w-4 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 right-2 allIL:right-0 duration-300 allIL:hover:bg-transparent allEMT:hover:text-black allEM:shadow-none allT:shadow-none text-black allLM:text-white" onClick={ nextItem } href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

        <Categories controls={controls}/>
      </motion.div>
    </section>
  )
}

export default CategoriesCarousel