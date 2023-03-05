"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useAnimation } from "framer-motion";
import { news } from "../../data/Arrays";
import News from "./News";
import { LeftArrow, RightArrow } from "../../UI/Arrows";

function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [width, setWidth] = useState(0);

  const controls = useAnimation();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    const interval = setInterval(nextNews, 6000);

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    controls.start({
      x: -currentSlide * width,
      transition: { duration: 2 },
    });
  }, [currentSlide]);

  function nextNews() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % news.length);
  }

  function prevNews() {
    setCurrentSlide((prevSlide) => (news.length + prevSlide - 1) % news.length);
  }

  const newsWithControls = useMemo(() => <News controls={controls} />, []);

  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      className="w-screen h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-28"
      id="news"
    >
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Today's Featured Articles
      </h1>

      <div className="relative w-screen h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevNews} />
        <RightArrow onclick={nextNews} />

        {newsWithControls}
      </div>
    </section>
  );
}

export default NewsCarousel;
