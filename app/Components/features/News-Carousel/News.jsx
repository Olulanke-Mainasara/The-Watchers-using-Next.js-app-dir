import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { news } from "../../data/Arrays";
import CardButton from "../../UI/CardButton";

function News({ controls }) {
  return (
    <div className="h-full flex">
      {news.map((newsItem) => {
        return (
          <motion.div
            className={`w-screen h-full`}
            animate={controls}
            key={newsItem.id}
          >
            <div className="w-[90%] max-w-[1920px] allEMT:max-w-[420px] h-full overflow-hidden rounded-2xl mx-auto bg-black dark:bg-white flex items-center justify-center allM:flex-col">
              <div className="relative basis-3/4 md:basis-1/2 allEM:basis-2/5 allT:basis-2/5 w-full h-full">
                <Image
                  src={newsItem.imgsrc}
                  fill
                  blur="true"
                  priority
                  alt="News Image"
                />
              </div>

              <div className="dark:text-black text-white flex flex-col items-center justify-center gap-6 basis-2/5 md:basis-1/2 allEM:basis-3/5 allT:basis-3/5 allM:justify-evenly allM:gap-0 px-6">
                <h5 className="text-xl allT:text-lg">{newsItem.sn}</h5>
                <p className="text-5xl leading-[60px] lg:text-3xl allEM:text-3xl allEM:leading-[45px] allT:text-2xl">
                  {newsItem.text}
                </p>
                <CardButton text={"Read more"} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default News;
