import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionFive() {
  return (
    <section className="row w-full h-screen flex allEMT:flex-col allIL:h-auto allLM:py-[210px]">
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allLM:h-[555px] allEMT:h-full allIL:w-4/5">
                <Image src="/Section3.JPG" fill priority className="absolute border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
            </div>
        </section>
        
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-2/5 allEMT:py-14">
            <div className="w-4/5 allLM:h-[555px] flex flex-col justify-center gap-7 dark:text-white allEMT:text-center">
                <h1 className="text-5xl 2xl:text-7xl md:text-3xl allT:text-3xl">Feed your curiosity, no matter where you are</h1>
        
                <p className="text-xl 2xl:text-3xl md:text-base allEMT:text-lg">At The Watchers, we understand the importance of accessibility and convenience. That's why our content is designed to be easily accessible from anywhere in the world and on any device. Whether you're at home, on the go, or traveling, you can access our articles, videos, and podcasts with just a few clicks. With our responsive design and mobile-friendly platform, you can enjoy our content on your laptop, tablet, or smartphone, ensuring that you never miss a beat.</p>

                <div className="flex justify-between">
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Downloads']">520K+</p>
        
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Reads-Day']">400K+</p>
        
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Dailies']">10+</p>
                </div>

                <Link href="#categories" title="Categories" className="rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white border duration-500 w-fit text-xl mt-10 allEMT:mx-auto">Start reading</Link>
            </div>
        </section>
    </section>
  )
}

export default SectionFive