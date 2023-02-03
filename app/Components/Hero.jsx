import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
     <header className="flex h-screen items-center bg-[url(/Header.jpeg)] bg-cover bg-fixed dark:bg-scroll allIL:bg-[url(/headerM.jpg)] allIL:bg-bottom">
        <div className="w-full h-full justify-center flex flex-col gap-8 backdrop-brightness-50 text-center">
            <h1 className="text-white text-9xl md:text-8xl allEM:text-7xl allT:text-6xl">All Things Curious</h1>
            <h2 className="text-white text-4xl md:text-[26px] allEM:text-xl allT:text-lg">...Your one stop encyclopedia of <br className="lg:hidden md:hidden xl:hidden 2xl:hidden ultraWide:hidden"/>everything you want to know</h2>
            <div className="mt-4">
              <Link href="#categories" title="Categories" className="rounded-3xl bg-white px-9 py-4 text-gray-800 text-xl transition-colors duration-300 hover:bg-gray-800 hover:text-white allT:text-base allEM:text-base allIL:hover:bg-white allIL:hover:text-gray-800">Start reading</Link>
              <Link href="#featuredArticles" title="Today's Articles" className="px-7 py-4 text-white text-xl allEM:text-base allT:text-base allEM:hidden allT:hidden">Today's articles <FontAwesomeIcon icon={ faArrowRight } /></Link>
            </div>
        </div>
    </header>
  )
}

export default Hero