'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import CarouselItem from './CarouselItem';

function CarouselV2({ heading, array }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [width, setWidth] = useState(400);

    const controls = useAnimation();

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

    function nextItem() {
        setCurrentSlide(prevSlide => {
        if (prevSlide === array.length - 1) {
            return 0;
        }
        return prevSlide + 1;
        });
    }

    function prevItem() {
        setCurrentSlide(prevSlide => {
        if (prevSlide === -1) {
            return array.length - 1;
        }
        return prevSlide - 1;
        });
    }

  return (
    <section className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center my-28 text-center">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        {heading}
      </h1>

      <motion.div className="relative w-screen h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <Link title="Previous page" className="w-12 allEM:w-6 allT:w-4 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 left-2 allIL:left-0 duration-300 allIL:hover:bg-transparent allIL:hover:text-black allEM:shadow-none allT:shadow-none text-black" onClick={ prevItem } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
        <Link title="Next page" className="w-12 allEM:w-6 allT:w-4 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 right-2 allIL:right-0 duration-300 allIL:hover:bg-transparent allIL:hover:text-black allEM:shadow-none allT:shadow-none text-black" onClick={ nextItem } href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

        <CarouselItem array={array} controls={controls}/>
      </motion.div>
    </section>
  )
}

export default CarouselV2