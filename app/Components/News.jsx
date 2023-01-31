import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion';

function News({ news, controls }) {
  return (
    <div className='h-full flex'>
          {
            news.map(newsItem => {
              return (
                <motion.div className={`w-screen h-full`} animate={controls} key={newsItem.id}>
                  <div className="carousel-item w-[90%] h-full overflow-hidden rounded-2xl mx-auto bg-black list-none flex items-center justify-center">
                      <div className='relative basis-3/4 w-full h-full'>
                          <Image src={newsItem.imgsrc} fill priority alt="" />
                      </div>

                      <div className="text-white flex flex-col items-center justify-center text-center gap-6 basis-2/5 px-6">
                          <h5 className="text-xl">{newsItem.sn}</h5>
                          <p className="text-5xl leading-[60px]">{newsItem.text}<br /><Link className="text-xl border rounded-2xl p-4 hover:text-gray-800 hover:bg-white transition-colors duration-500" href="#">Read more</Link></p>
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