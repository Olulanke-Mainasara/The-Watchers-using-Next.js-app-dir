import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';

function CarouselItem({ array, controls }) {
  return (
    <div className='h-full flex gap-[60px] pl-[60px]'>
          {
            array.map(arrayItem => {
              return (
                <motion.div className={`w-[400px] h-full`} animate={controls} key={arrayItem.id}>
                  <div className="w-full h-full rounded-2xl bg-black flex flex-col items-center justify-center overflow-hidden">
                      <div className='relative basis-[40%] border w-full h-full'>
                          <Image src="/My Logo 1.jpg" fill priority alt="Category Image" />
                      </div>

                      <div className="text-white flex flex-col items-center justify-evenly basis-[60%]">
                          <h5 className="text-3xl allT:text-2xl">{arrayItem.title}</h5>
                          <p className="text-lg">{arrayItem.text}</p>
                          <Link className="text-xl border rounded-2xl p-4 allEMT:p-3 allEM:text-lg allT:text-base hover:text-gray-800 hover:bg-white transition-colors duration-500" href="#">Read more</Link>
                      </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
  )
}


export default CarouselItem