import Link from 'next/link'
import React from 'react'

function Header() {
  return (
     <header className="flex h-screen justify-center items-center bg-[url(/Header.jpeg)] bg-cover bg-fixed ultraWide:bg-scroll dark:bg-scroll allIL:bg-[url(/headerM.jpg)] allIL:bg-bottom">
        <div className="w-full flex flex-col gap-8 text-center">
            <h1 className="text-white text-9xl md:text-8xl sm:text-8xl xs:text-7xl iphone5:text-6xl xtraSmall:text-6xl">All Things Curious</h1>
            <h2 className="text-white text-4xl md:text-[26px] sm:text-2xl xs:text-xl iphone5:text-lg xtraSmall:text-lg">...Your one stop encyclopedia of <br className="lg:hidden md:hidden xl:hidden 2xl:hidden ultraWide:hidden"/>everything you want to know</h2>
            <div className="mt-4">
                <Link href="#featuredArticles" title="Today's Articles" className="rounded-3xl bg-white px-9 py-4 text-xl transition-colors duration-300 hover:bg-gray-800 hover:text-white xtraSmall:text-base iphone5:text-base xs:text-base sm:text-base allIL:hidden mr-4 xtraSmall:mr-2">Today's articles</Link>
                <Link href="#categories" title="Categories" className="rounded-3xl bg-white px-9 py-4 text-xl transition-colors duration-300 hover:bg-gray-800 hover:text-white xtraSmall:text-base iphone5:text-base xs:text-base sm:text-base allIL:hover:bg-white allIL:hover:text-black">Our categories</Link>
            </div>
        </div>
    </header>
  )
}

export default Header