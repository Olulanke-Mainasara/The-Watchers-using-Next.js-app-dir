import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <header
      id="hero"
      className="flex h-screen items-center bg-[url(/Header.jpeg)] bg-cover allIL:bg-bottom"
    >
      <div className="w-full h-full justify-center flex flex-col gap-8 backdrop-brightness-50 text-center">
        <h1 className="text-white text-9xl 2xl:text-[160px] md:text-8xl allEM:text-7xl allT:text-6xl">
          All Things Curious
        </h1>
        <h2 className="text-white text-3xl 2xl:text-4xl md:text-2xl allEM:text-xl allT:text-lg">
          Inspiring Minds, Everywhere, Unveiling Knowledge and Inspiration.
        </h2>

        <div className="mt-4 allT:mt-0 allT:flex allT:flex-col allT:items-center allT:gap-4">
          <Link
            href="#"
            title="Categories"
            className="rounded-3xl w-fit border border-black bg-white px-6 py-4 2xl:text-2xl allT:py-3 text-black text-xl transition-colors duration-300 hover:bg-black hover:text-white hover:border-white allEMT:text-lg"
          >
            Start reading
          </Link>
          <a
            href="#news"
            className="w-fit px-7 py-3 text-white text-xl allEMT:text-lg allEM:pr-0"
            title="Today's Articles"
          >
            Today's articles <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
