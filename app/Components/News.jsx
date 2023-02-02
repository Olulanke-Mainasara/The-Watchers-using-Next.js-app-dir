import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';

function News({ width, news, controls }) {
  return (
    <div className='h-full flex'>
          {
            news.map(newsItem => {
              return (
                <motion.div className={`w-screen h-full`} animate={controls} key={newsItem.id}>
                  <div className="w-[90%] h-full overflow-hidden rounded-2xl mx-auto bg-black list-none flex items-center justify-center allM:flex-col">
                      <div className='relative basis-3/4 md:basis-1/2 allEM:basis-2/5 allT:basis-2/5 w-full h-full'>
                          <Image src={newsItem.imgsrc} fill priority alt="News Image" />
                      </div>

                      <div className="text-white flex flex-col items-center justify-center gap-6 basis-2/5 md:basis-1/2 allEM:basis-3/5 allT:basis-3/5 allM:justify-evenly allM:gap-0 px-6">
                          <h5 className="text-xl allT:text-lg">{newsItem.sn}</h5>
                          <p className="text-5xl leading-[60px] lg:text-3xl allEM:text-3xl allEM:leading-[45px] allT:text-2xl">{newsItem.text}</p>
                          <Link className="text-xl border rounded-2xl p-4 allEM:p-3 allEM:text-lg allT:p-3 allT:text-base hover:text-gray-800 hover:bg-white transition-colors duration-500" href="#">Read more</Link>
                      </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
  )
}


export default News