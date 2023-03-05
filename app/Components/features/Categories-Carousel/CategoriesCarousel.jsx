"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useAnimation } from "framer-motion";
import { categories } from "../../data/Arrays";
import Categories from "./Categories";
import { LeftArrow, RightArrow } from "../../UI/Arrows";

function CategoriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [recoil, setRecoil] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    setWidth(window.innerWidth <= 767 ? window.innerWidth : 460);
    setRecoil(
      window.innerWidth <= 1023
        ? 1
        : (window.innerWidth > 1023) & (window.innerWidth < 1310)
        ? 2
        : (window.innerWidth >= 1310) & (window.innerWidth < 1536)
        ? 3
        : 4
    );

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth <= 767 ? window.innerWidth : 460);
      setRecoil(
        window.innerWidth <= 1023
          ? 1
          : (window.innerWidth > 1023) & (window.innerWidth < 1310)
          ? 2
          : (window.innerWidth >= 1310) & (window.innerWidth < 1536)
          ? 3
          : 4
      );
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth <= 767 ? window.innerWidth : 460);
        setRecoil(
          window.innerWidth <= 1023
            ? 1
            : (window.innerWidth > 1023) & (window.innerWidth < 1310)
            ? 2
            : (window.innerWidth >= 1310) & (window.innerWidth < 1536)
            ? 3
            : 4
        );
      });
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSlide * width,
      transition: { duration: 0.7 },
    });
  }, [currentSlide]);

  function nextItem() {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === categories.length - recoil) {
        return 0;
      }
      return prevSlide + 1;
    });
  }

  function prevItem() {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        return categories.length - recoil;
      }
      return prevSlide - 1;
    });
  }

  const categoriesWithControls = useMemo(
    () => <Categories controls={controls} />,
    []
  );

  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-40"
    >
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Our Categories
      </h1>

      <div className="relative w-screen h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        <RightArrow onclick={nextItem} />

        {categoriesWithControls}
      </div>
    </section>
  );
}

export default CategoriesCarousel;
