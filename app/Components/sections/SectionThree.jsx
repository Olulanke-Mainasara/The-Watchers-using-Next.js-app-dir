import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import Text from "../UI/Section/Text";
import H1 from "../UI/Section/H1";
import P from "../UI/Section/P";

function SectionThree() {
  return (
    <section className="w-full h-screen flex allEMT:flex-col allIL:h-auto allLM:mt-40">
      <Text position={"justify-end"}>
        <H1>We inspire, no matter the reader</H1>

        <P>
          Here, we believe that knowledge and inspiration should be accessible
          to all. Regardless of your age, background, or interests, we strive to
          create content that is comprehensive and engaging. Our aim is to
          provide a platform where everyone can come to explore and learn about
          the world around us, and to be inspired by the endless possibilities
          of what we can achieve.
        </P>

        <P>
          Whether you're a curious child, a student looking for a reliable
          source of information, or simply someone seeking to expand your
          horizons, our content is designed to cater to your needs. We believe
          that everyone has the potential to be inspired, and it is our mission
          to bring that inspiration to you, no matter who you are or where you
          come from.
        </P>

        <Button />
      </Text>

      <section className="w-1/2 h-full flex items-center justify-center allLM:justify-start allEMT:w-screen allEMT:h-[450px]">
        <div className="relative w-3/5 max-w-[595px] h-3/4 allEMT:h-full allLM:w-[90%] allLM:h-[705px] allEM:w-[310px] allT:w-[252px]">
          <Image
            src="/Section2a.JPG"
            width={500}
            height={800}
            priority
            blur="true"
            className="absolute w-3/5 md:w-4/5 h-3/5 border border-black dark:border-white rounded-2xl top-0 left-0 allEMT:min-h-[250px]"
            alt=""
          />
          <Image
            src="/Section2b.JPG"
            width={500}
            height={800}
            priority
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
