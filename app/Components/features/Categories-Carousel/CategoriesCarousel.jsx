"use client";

import React, { useMemo } from "react";
import Categories from "./Categories";
import useCustomWidthCarousel from "../../hooks/useCustomWidthCarousel";
import { LeftArrow, RightArrow } from "../../UI/Arrows";
import { categories } from "../../data/Arrays";
import H1C from "../../UI/Carousel/H1C";
import ContainerC from "../../UI/Carousel/ContainerC";

function CategoriesCarousel() {
  const { controls, nextItem, prevItem } = useCustomWidthCarousel(categories);

  const categoriesWithControls = useMemo(
    () => <Categories controls={controls} />,
    []
  );

  return (
    <ContainerC>
      <H1C>Our Categories</H1C>

      <div className="relative w-screen h-[550px] allT:h-[420px] flex items-center overflow-x-hidden">
        <LeftArrow onclick={prevItem} />
        {categoriesWithControls}
        <RightArrow onclick={nextItem} />
      </div>
    </ContainerC>
  );
}

export default CategoriesCarousel;
