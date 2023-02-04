import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionOne() {
  return (
    <section className="w-full h-screen flex allEMT:flex-col allIL:h-auto allIL:mt-16 allLM:pb-[210px]">
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allLM:h-[555px] allEMT:h-full allIL:w-4/5">
                <Image src="/headerM.jpg" fill priority className="absolute border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
            </div>
        </section>
        
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-2/5 allEMT:py-14">
            <div className="w-4/5 allLM:h-[555px] flex flex-col justify-center gap-7 dark:text-white allEMT:text-center">
                <h1 className="text-7xl allLM:text-5xl allEM:text-5xl allT:text-3xl">Welcome to the chronicles of the universe</h1>
        
                <p className="text-2xl 2xl:text-4xl allLM:text-lg allEM:text-lg allT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>

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