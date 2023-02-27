import React from "react";
import Image from "next/image";
import Link from "next/link";

function SectionThree() {
  return (
    <section
      style={{ scrollSnapAlign: "start" }}
      className="w-full h-screen flex allEMT:flex-col allIL:h-auto allLM:mt-40"
    >
      <section className="w-1/2 h-full flex items-center justify-end allIL:justify-center allEMT:w-screen allEMT:h-2/5">
        <div className="w-4/5 h-3/5 flex flex-col justify-center gap-7 dark:text-white allLM:h-[705px] allEMT:text-center allEMT:my-14">
          <h1 className="text-5xl 2xl:text-7xl md:text-3xl allT:text-3xl">
            We inspire, no matter the reader
          </h1>

          <p className="text-xl 2xl:text-3xl md:text-base allEM:text-lg allT:text-base">
            Here, we believe that knowledge and inspiration should be accessible
            to all. Regardless of your age, background, or interests, we strive
            to create content that is comprehensive and engaging. Our aim is to
            provide a platform where everyone can come to explore and learn
            about the world around us, and to be inspired by the endless
            possibilities of what we can achieve.
          </p>

          <p className="text-xl 2xl:text-3xl md:text-base allEM:text-lg allT:text-base">
            Whether you're a curious child, a student looking for a reliable
            source of information, or simply someone seeking to expand your
            horizons, our content is designed to cater to your needs. We believe
            that everyone has the potential to be inspired, and it is our
            mission to bring that inspiration to you, no matter who you are or
            where you come from.
          </p>

          <Link
            href="#categories"
            title="Categories"
            className="rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white border duration-500 w-fit text-xl mt-3 allEMT:mx-auto"
          >
            Start reading
          </Link>
        </div>
      </section>

      <section className="w-1/2 h-full flex items-center justify-center allLM:justify-start allEMT:w-screen allEMT:h-[450px]">
        <div className="relative w-3/5 max-w-[595px] h-3/4 allEMT:h-full allLM:w-[90%] allLM:h-[705px] allEM:w-[310px] allT:w-[252px]">
          <Image
            src="/Section2a.JPG"
            width={500}
            height={800}
            blur="true"
            className="absolute w-3/5 md:w-4/5 h-3/5 border border-black dark:border-white rounded-2xl top-0 left-0 allEMT:min-h-[250px]"
            alt=""
          />
          <Image
            src="/Section2b.JPG"
            width={500}
            height={800}
            blur="true"
            className="absolute w-3/5 md:w-4/5 h-3/5 border rounded-2xl bottom-0 right-0 allEMT:min-h-[250px]"
            alt=""
          />
        </div>
      </section>
    </section>
  );
}

export default SectionThree;
