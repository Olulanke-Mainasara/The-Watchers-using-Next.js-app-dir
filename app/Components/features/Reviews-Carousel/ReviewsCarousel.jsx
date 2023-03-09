"use client";

import React, { useEffect, useMemo } from "react";
import Reviews from "./Reviews";
import useCustomWidthCarousel from "../../hooks/useCustomWidthCarousel";
import { reviews } from "../../data/Arrays";
import { LeftArrow, RightArrow } from "../../UI/Arrows";

function ReviewsCarousel() {
  const { controls, recoil, nextItem, prevItem } = useCustomWidthCarousel(reviews);

  useEffect(() => {
    const interval = setInterval(nextItem, 6000);
    return () => clearInterval(interval);
  }, [controls, recoil]);

  const reviewsWithControls = useMemo(
    () => <Reviews controls={controls} />,
    []
  );

  return (
    <section className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-28">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Reviews
      </h1>

      <div className="relative w-screen h-[360px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        {reviewsWithControls}
        <RightArrow onclick={nextItem} />
      </div>
    </section>
  );
}

export default ReviewsCarousel;
