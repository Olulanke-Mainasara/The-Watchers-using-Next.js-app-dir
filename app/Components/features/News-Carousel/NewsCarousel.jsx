"use client";

import React, { useMemo } from "react";
import News from "./News";
import useFullWidthCarousel from "../../hooks/useFullWidthCarousel";
import { news } from "../../data/Arrays";
import { LeftArrow, RightArrow } from "../../UI/Arrows";
import H1C from "../../UI/Carousel/H1C";
import ContainerC from "../../UI/Carousel/ContainerC";

function NewsCarousel() {
  const { controls, prevNews, nextNews } = useFullWidthCarousel(news);

  const newsWithControls = useMemo(() => <News controls={controls} />, []);

  return (
    <ContainerC id={"news"}>
      <H1C>Today's Featured Articles</H1C>

      <div className="relative w-screen h-[500px] 2xl:h-[650px] lg:h-[350px] md:h-[800px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevNews} />
        {newsWithControls}
        <RightArrow onclick={nextNews} />
      </div>
    </ContainerC>
  );
}

export default NewsCarousel;
