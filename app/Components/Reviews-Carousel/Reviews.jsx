import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { reviews } from '../Arrays';

function Reviews({ controls }) {
  return (
    <div className='h-full flex gap-[60px] pl-[60px] allEMT:pl-0 allEMT:gap-0'>
          {
            reviews.map(reviewsItem => {
              return (
                <motion.div className={`w-[400px] allEMT:w-screen h-full`} animate={controls} key={reviewsItem.id}>
                  <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black text-white flex flex-col items-center justify-evenly allEMT:px-[5%]">
                      <div className='w-14 h-14 rounded-full relative border overflow-hidden'>
                          <Image src="/My Logo 1.jpg" fill priority alt="Category Image" />
                      </div>

                      <h5 className="text-3xl allT:text-2xl">{reviewsItem.title}</h5>

                      <FontAwesomeIcon className='text-4xl' icon={ faQuoteLeft } />

                      <p className="text-lg allT:text-base">{reviewsItem.text}</p>

                      <FontAwesomeIcon className='text-4xl' icon={ faQuoteRight } />
                  </div>
                </motion.div>
              )
            })
          }
        </div>
  )
}


export default Reviews