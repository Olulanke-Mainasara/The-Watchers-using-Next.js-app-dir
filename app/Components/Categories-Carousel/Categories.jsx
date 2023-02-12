import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../Arrays';

function Categories({ controls }) {
  return (
    <div className='h-full flex gap-[60px] pl-[60px] allEMT:pl-0 allEMT:gap-0'>
          {
            categories.map(categoriesItem => {
              return (
                <motion.div className={`w-[400px] allEMT:w-screen h-full`} animate={controls} key={categoriesItem.id}>
                  <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black dark:bg-white flex flex-col items-center justify-center overflow-hidden">
                      <div className='relative basis-[40%] w-full h-full'>
                          <Image src={ categoriesItem.imgsrc } fill priority alt="Category Image" />
                      </div>

                      <div className="dark:text-black text-white flex flex-col items-center justify-evenly basis-[60%] px-[5%]">
                          <h5 className="text-3xl allT:text-2xl">{categoriesItem.title}</h5>
                          <p className="text-base allT:text-base">{categoriesItem.text}</p>
                          <Link className="text-xl rounded-2xl px-4 py-3 allIL:px-5 allEM:text-lg allT:text-base bg-black text-white hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white allIL:hover:text-white allIL:hover:bg-black transition-colors duration-500" href="#">View <FontAwesomeIcon icon={ faArrowRight } /></Link>
                      </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
  )
}


export default Categories