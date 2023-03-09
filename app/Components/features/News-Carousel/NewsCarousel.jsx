"use client";

import React, { useMemo } from "react";
import News from "./News";
import useFullWidthCarousel from "../../hooks/useFullWidthCarousel";
import { news } from "../../data/Arrays";
import { LeftArrow, RightArrow } from "../../UI/Arrows";

function NewsCarousel() {
  const { controls, prevNews, nextNews } = useFullWidthCarousel(news);

  const newsWithControls = useMemo(() => <News controls={controls} />, []);

  return (
    <section
      className="w-screen h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-28"
      id="news"
    >
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Today's Featured Articles
      </h1>

      <div className="relative w-screen h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevNews} />
        {newsWithControls}
        <RightArrow onclick={nextNews} />
      </div>
    </section>
  );
}

export default NewsCarousel;
