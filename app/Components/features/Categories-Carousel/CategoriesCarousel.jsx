"use client";

import React, { useMemo } from "react";
import Categories from "./Categories";
import useCustomWidthCarousel from "../../hooks/useCustomWidthCarousel";
import { LeftArrow, RightArrow } from "../../UI/Arrows";
import { categories } from "../../data/Arrays";

function CategoriesCarousel() {
  const { controls, nextItem, prevItem } = useCustomWidthCarousel(categories);

  const categoriesWithControls = useMemo(
    () => <Categories controls={controls} />,
    []
  );

  return (
    <section className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-40">
      <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
        Our Categories
      </h1>

      <div className="relative w-screen h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        {categoriesWithControls}
        <RightArrow onclick={nextItem} />
      </div>
    </section>
  );
}

export default CategoriesCarousel;
