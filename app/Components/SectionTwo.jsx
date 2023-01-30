'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function SectionTwo() {
    const news = [
        { id: 1, imgsrc: "/Today's news.jpg", sn: "1 / 3", text: "New Planet discovered in the celestial 9-1 sector, rich in OMEGA Oil." },
        { id: 1, imgsrc: "/Today's news 2.jpg", sn: "2 / 3", text: "OMEGA factory finally completed on the 20th December, 2031." },
        { id: 1, imgsrc: "/Feats in Transportation 5.jpg", sn: "3 / 3", text: "The Nissan GTR becomes world's most desired car." },
    ];

    const [index, setIndex] = useState(2);

    function prevIndex() {
        if (index === 0) {
            setIndex(news.length - 1)
            return
        }
        setIndex(index - 1)
    }

    function nextIndex() {
        if (index === news.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }

  return (
    <>
        <Link href={"#"} id={"featuredArticles"}></Link>
        <section className="w-full overflow-hidden flex flex-col gap-10 items-center justify-center my-20 allM:hidden lg:hidden">
            <h1 className="dark:text-white text-8xl">
                Today's Featured Articles
            </h1>
    
            <motion.div className="relative w-screen h-[500px] 2xl:h-[650px] flex items-center justify-center overflow-x-hidden">
                <Link title="Previous page" onClick={prevIndex} className="w-12 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 left-2 duration-300 allEM:shadow-none allT:shadow-none text-black" href="#"><FontAwesomeIcon icon={ faChevronLeft } /></Link>
                <Link title="Next page" onClick={nextIndex} className="w-12 h-12 flex items-center justify-center z-10 bg-none absolute border-none rounded-full text-xl transition-colors hover:bg-black hover:text-white top-1/2 -translate-y-1/2 right-2 duration-300 allEM:shadow-none allT:shadow-none text-black" href="#"><FontAwesomeIcon icon={ faChevronRight } /></Link>

                <div className="carousel-item w-[90%] h-full overflow-hidden rounded-2xl mx-auto bg-black list-none flex items-center justify-center" key={news[index].id}>
                    <div className='relative basis-3/4 w-full h-full'>
                        <Image src={news[index].imgsrc} fill priority alt="" />
                    </div>
                    <div className="text-white flex flex-col items-center justify-center text-center gap-6 basis-2/5 px-6">
                        <h5 className="text-xl">{news[index].sn}</h5>
                        <p className="text-5xl leading-[60px]">{news[index].text}<br /><Link className="text-xl border rounded-2xl p-4 hover:text-gray-800 hover:bg-white transition-colors duration-500" href="#">Read more</Link></p>
                    </div>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default SectionTwo