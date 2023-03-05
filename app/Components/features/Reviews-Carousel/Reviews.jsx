import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { reviews } from '../../data/Arrays';

function Reviews({ controls }) {
  return (
    <div className='h-full flex gap-[60px] pl-[60px] allEMT:pl-0 allEMT:gap-0'>
          {
            reviews.map(reviewsItem => {
              return (
                <motion.div
                  className={`w-[400px] allEMT:w-screen h-full`}
                  animate={controls}
                  key={reviewsItem.id}
                >
                  <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black text-white dark:bg-white dark:text-black flex flex-col items-center justify-evenly px-[5%]">
                    <div className="w-full flex gap-2 justify-center items-center">
                      <div className="w-14 h-14 rounded-full relative border overflow-hidden">
                        <Image
                          src="/My Logo 1.jpg"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          blur="true"
                          priority
                          alt="User Image"
                        />
                      </div>
                      <h5 className="text-3xl allT:text-xl">
                        {reviewsItem.title}
                      </h5>
                    </div>

                    <FontAwesomeIcon className="text-4xl" icon={faQuoteLeft} />

                    <p className="text-lg allT:text-base">{reviewsItem.text}</p>

                    <FontAwesomeIcon className="text-4xl" icon={faQuoteRight} />
                  </div>
                </motion.div>
              );
            })
          }
        </div>
  )
}


export default Reviews