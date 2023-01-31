import React from 'react'
import Image from 'next/image'

function SectionThree() {
  return (
    <section className="w-full h-screen flex allIL:flex-col allIL:h-auto allIL:mt-28 allIL:mb-28">
        <section className="w-1/2 h-full flex items-center justify-center allIL:w-screen allIL:h-2/5">
            <div className="w-4/5 h-3/5 flex flex-col justify-center gap-7 dark:text-white allIL:my-14">
                <h1 className="text-7xl allEM:text-5xl allT:text-3xl">We inspire, no matter the reader</h1>

                <p className="text-xl 2xl:text-4xl lg:text-3xl md:text-3xl allEM:text-lg allT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>

                <p className="text-xl 2xl:text-4xl lg:text-3xl md:text-3xl allEM:text-lg allT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>
            </div>
        </section>

        <section className="w-1/2 h-full flex items-center justify-center allIL:w-screen allIL:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allIL:h-full allEM:w-4/5 allT:w-4/5">
                <Image src="/headerM.jpg" width={350} height={500} className="absolute w-3/5 h-3/5 border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
                <Image src="/headerM.jpg" width={350} height={500} className="absolute w-3/5 h-3/5 border rounded-2xl bottom-0 right-0" alt=""/>
            </div>
        </section>
    </section>
  )
}

export default SectionThree