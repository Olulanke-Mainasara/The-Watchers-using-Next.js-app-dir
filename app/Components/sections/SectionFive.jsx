import React from "react";
import Image from "next/image";
import Button from "../UI/Button";
import SImage from "../UI/Section/SImage";
import Text from "../UI/Section/Text";
import H1 from "../UI/Section/H1";
import P from "../UI/Section/P";

function SectionFive() {
  return (
    <section className="w-full h-screen flex allEMT:flex-col allIL:h-auto">
      <SImage>
        <Image
          src="/Section3.JPG"
          fill
          blur="true"
          priority
          className="absolute border border-black dark:border-white rounded-2xl top-0 left-0"
          alt=""
        />
      </SImage>

      <Text position={"start"}>
        <H1>Feed your curiosity, no matter where you are</H1>

        <P>
          At The Watchers, we understand the importance of accessibility and
          convenience. That's why our content is designed to be easily
          accessible from anywhere in the world and on any device. Whether
          you're at home, on the go, or traveling, you can access our articles,
          videos, and podcasts with just a few clicks. With our responsive
          design and mobile-friendly platform, you can enjoy our content on your
          laptop, tablet, or smartphone, ensuring that you never miss a beat.
        </P>

        <Button />
      </Text>
    </section>
  );
}

export default SectionFive;
