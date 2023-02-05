import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionOne() {
  return (
    <section className="w-full h-screen flex allEMT:flex-col allIL:h-auto allEMT:mt-16 allLM:py-[210px]">
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allLM:h-[555px] allEMT:h-full allIL:w-4/5">
                <Image src="/Section1.JPG" fill priority className="absolute border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
            </div>
        </section>
        
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-2/5 allEMT:py-14">
            <div className="w-4/5 allLM:h-[555px] flex flex-col justify-center gap-7 dark:text-white allEMT:text-center">
                <h1 className="text-5xl 2xl:text-7xl md:text-3xl allT:text-3xl">Welcome to the chronicles of the universe</h1>
        
                <p className="text-xl 2xl:text-3xl md:text-base allEMT:text-lg">Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond. Whether you're interested in exploring the mysteries of the universe, learning about the latest advancements in medicine, or discovering the rich tapestry of human history, we've got you covered.</p>

                <div className="flex justify-between">
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Articles']">1K+</p>
        
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Users']">1M+</p>
        
                    <p className="relative text-6xl allLM:text-4xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Awards']">5+</p>
                </div>

                <Link href="#categories" title="Categories" className="rounded-xl bg-gray-800 px-9 py-4 text-white w-fit text-xl allEMT:text-base mt-10 allEMT:mx-auto">Start reading</Link>
            </div>
        </section>
    </section>
  )
}

export default SectionOne