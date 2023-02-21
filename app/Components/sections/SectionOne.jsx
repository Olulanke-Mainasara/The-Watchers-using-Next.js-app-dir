import React from 'react'
import Image from 'next/image'
import Button from '../UI/Button'
import PWithAfter from '../UI/PWithAfter'

function SectionOne() {
  return (
    <section style={{ scrollSnapAlign: "start" }} className="w-full h-screen flex allEMT:flex-col allEMT:h-auto allEMT:mt-16">
        <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-extraHeight">
            <div className="relative w-3/5 h-3/4 allLM:h-[555px] allEMT:h-full allIL:w-4/5">
                <Image src="/Section1.JPG" fill priority className="absolute border border-black dark:border-white rounded-2xl top-0 left-0" alt=''/>
            </div>
        </section>
        
        <section className="w-1/2 h-full flex items-center justify-start allIL:justify-center allEMT:w-screen allEMT:h-2/5 allEMT:py-14">
            <div className="w-4/5 allLM:h-[555px] flex flex-col justify-center gap-7 dark:text-white allEMT:text-center">
                <h1 className="text-5xl 2xl:text-7xl md:text-3xl allT:text-3xl">Welcome to the chronicles of the universe</h1>
        
                <p className="text-xl 2xl:text-3xl md:text-base allEM:text-lg allT:text-base">Here, you will be transported to a world of endless discovery as we delve into a wide range of topics that span across all areas and sectors of the world. From science and technology, to culture and history, our goal is to provide a comprehensive and informative look into the marvels of our world and beyond. Whether you're interested in exploring the mysteries of the universe, learning about the latest advancements in medicine, or discovering the rich tapestry of human history, we've got you covered.</p>

                <div className="flex justify-between">
                    <PWithAfter after={"Articles"} text={"1K+"} />
        
                    <PWithAfter after={"Users"} text={"1M+"} />
        
                    <PWithAfter after={"Awards"} text={"5+"} />
                </div>

                <Button />
            </div>
        </section>
    </section>
  )
}

export default SectionOne