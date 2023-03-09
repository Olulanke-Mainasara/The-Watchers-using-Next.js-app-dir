import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function useCustomWidthCarousel(array) {
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
      if (prevSlide === array.length - recoil) {
        return 0;
      }
      return prevSlide + 1;
    });
  }

  function prevItem() {
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 0) {
        return array.length - recoil;
      }
      return prevSlide - 1;
    });
  }

  return { controls, recoil, prevItem, nextItem };
}

export default useCustomWidthCarousel;
