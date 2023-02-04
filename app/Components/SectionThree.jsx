import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SectionThree() {
  return (
    <section className="w-full h-screen flex allEMT:flex-col allIL:h-auto allLM:py-[210px]">
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-2/5">
            <div className="w-4/5 h-3/5 flex flex-col justify-center gap-7 dark:text-white allLM:h-[705px] allEMT:text-center allEMT:my-14">
                <h1 className="text-7xl allLM:text-5xl allEM:text-5xl allT:text-3xl">We inspire, no matter the reader</h1>

                <p className="text-xl 2xl:text-4xl allLM:text-lg allEMT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>

                <p className="text-xl 2xl:text-4xl allLM:text-lg allEMT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>

                <Link href="#categories" title="Categories" className="rounded-xl bg-gray-800 px-9 py-4 text-white w-fit text-xl allEMT:text-base mt-3 allEMT:mx-auto">Start reading</Link>
            </div>
        </section>

        <section className="w-1/2 h-full flex items-center justify-center allLM:justify-start allEMT:w-screen allEMT:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allEMT:h-full allLM:w-[90%] allLM:h-[705px] allEMT:w-4/5">
                <Image src="/headerM.jpg" width={350} height={500} className="absolute w-3/5 md:w-4/5 h-3/5 border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
                <Image src="/headerM.jpg" width={350} height={500} className="absolute w-3/5 md:w-4/5 h-3/5 border rounded-2xl bottom-0 right-0" alt=""/>
            </div>
        </section>
    </section>
  )
}

export default SectionThree