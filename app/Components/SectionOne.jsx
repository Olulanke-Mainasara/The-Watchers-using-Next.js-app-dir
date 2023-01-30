import React from 'react'
import Image from 'next/image'

function SectionOne() {
  return (
    <section className="w-full h-screen flex allIL:flex-col allIL:h-auto allIL:mt-16">
        <section className="w-1/2 h-full flex items-center justify-center allIL:w-screen allIL:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allIL:h-full allEM:w-4/5 allT:w-4/5">
                <Image src="/headerM.jpg" fill priority className="absolute border border-black dark:border-white rounded-2xl top-0 left-0" alt=""/>
            </div>
        </section>
        
        <section className="w-1/2 h-full flex items-center justify-center allIL:w-screen allIL:h-2/5">
            <div className="w-4/5 h-3/5 flex flex-col gap-7 dark:text-white allIL:my-14">
                <h1 className="text-7xl allEM:text-5xl allT:text-3xl">Welcome to the chronicles of the universe</h1>
        
                <p className="text-2xl 2xl:text-4xl lg:text-3xl md:text-3xl allEM:text-lg allT:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis culpa corrupti unde tempora voluptates, necessitatibus aliquam optio cum tenetur nam architecto mollitia quam odit consequatur eum at atque placeat assumenda!</p>

                <div className="flex justify-between">
                    <p className="relative text-6xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Articles']">1K+</p>
        
                    <p className="relative text-6xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Users']">1M+</p>
        
                    <p className="relative text-6xl after:absolute after:-bottom-8 after:left-0 after:w-auto after:text-xl allEM:text-4xl allT:text-3xl allT:after:text-sm after:content-['Awards']">5+</p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default SectionOne