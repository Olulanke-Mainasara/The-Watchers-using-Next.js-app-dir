import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { categories } from '../Arrays';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Categories({ controls }) {
  return (
    <div className='h-full flex gap-[60px] pl-[60px] allEMT:pl-0'>
          {
            categories.map(categoriesItem => {
              return (
                <motion.div className={`w-[400px] allEMT:w-screen h-full`} animate={controls} key={categoriesItem.id}>
                  <div className="w-full allEMT:w-[90%] allEMT:mx-auto h-full rounded-2xl bg-black flex flex-col items-center justify-center overflow-hidden">
                      <div className='relative basis-[40%] border w-full h-full'>
                          <Image src="/My Logo 1.jpg" fill priority alt="Category Image" />
                      </div>

                      <div className="text-white flex flex-col items-center justify-evenly basis-[60%] allEMT:px-[5%]">
                          <h5 className="text-3xl allT:text-2xl">{categoriesItem.title}</h5>
                          <p className="text-lg allT:text-base">{categoriesItem.text}</p>
                          <Link className="text-xl rounded-2xl allIL:rounded-none p-4 allIL:p-3 allEM:text-lg allT:text-base hover:text-gray-800 allIL:hover:text-white hover:bg-white allIL:hover:bg-transparent transition-colors duration-500" href="#">Learn more <FontAwesomeIcon icon={ faArrowRight } /></Link>
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