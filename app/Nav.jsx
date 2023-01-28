'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faClose, faMoon, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    const [navMenu, setMenu] = useState("allIL:-right-full")
    
    function openMenu() {
        setMenu("allIL:right-0")
    }

    function closeMenu() {
        setMenu("allIL:-right-full")
    }

  return (
    <nav className="fixed top-0 left-0 z-50 h-16 w-screen bg-black dark:bg-gray-800/0 backdrop-blur-lg">
        <div className="max-w-[1440px] h-full mx-auto flex items-center justify-between px-10 sm:px-5 xs:px-3 iphone5:px-3 xtraSmall:px-2">
            <div className="flex space-x-20">
                <a href="#" className="flex items-center text-2xl text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:text-gray-400 hover:after:scale-x-100 xtraSmall:text-lg iphone5:text-xl allIL:hover:after:w-0"><img src="/The Universe 2.jpg" className="w-10 h-10 rounded-full" alt="The Watchers. Logo"/><span>The Watchers.</span></a>
            
                <ul className={"flex items-center text-white space-x-20 allIL:absolute allIL:top-0 allIL:h-screen allIL:w-full allIL:flex-col allIL:justify-center allIL:gap-12 allIL:space-x-0 allIL:bg-black duration-500 " + navMenu}>
                    <li><a href="#" className="relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110">Home</a></li>
                    <li className="group relative" id="dropDown">
                        <a href="#" className="cursor-default">Our categories  <FontAwesomeIcon icon={ faChevronDown } /></a>
            
                        <div id="dropList" className="absolute z-30 h-0 group-hover:h-[362px] -left-[45%] pt-[22px] duration-500 overflow-hidden">
                            <ul className="border rounded-xl text-center w-60 bg-black dark:bg-gray-600 overflow-hidden">
                                <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">Space Exploration</a></li>
                                <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">World of Science</a></li>
                                <li className="w-full py-4 px-2 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">Feat in Transportation</a></li>
                                <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">History</a></li>
                                <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">Art and Entertainment</a></li>
                                <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500"><a href="#" className="py-4 px-[26px]">Upload your article</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" className="relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110">Contact</a></li>
                    <li><a href="#" className="relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110">About</a></li>
            
                    <button title="Close mobile menu" onClick={ closeMenu } className="text-white text-3xl absolute top-14 iphone5:top-7 left-1/2 -translate-x-1/2 xl:hidden 2xl:hidden"><FontAwesomeIcon icon={ faClose } /></button>
            
                    <div className="flex flex-col gap-12 items-center xl:hidden 2xl:hidden">
                        <div>
                            <form action="" className="border flex items-center rounded-2xl">
                                <input type="text" placeholder="Search" className="text-white h-10 w-72 iphone5:w-60 xtraSmall:w-52 bg-transparent pl-3 focus:outline-none"/>
                                <button title="Search" type="submit" className="text-white border-l-2 px-3 h-10 text-xl"><FontAwesomeIcon icon={ faSearch } /></button>
                            </form>
                        </div>
            
                        <button title="Login" className="w-10 h-10 border rounded-full flex items-center justify-center text-xl text-white"><FontAwesomeIcon icon={ faUser } /></button>
                    </div>
                </ul>
            </div>
            
            <button title="Theme toggler" className="w-10 h-10 flex items-center justify-center text-white text-2xl" id="themeToggler"><FontAwesomeIcon icon={ faMoon } /></button>
            
            <button title="Open mobile menu" onClick={ openMenu } className="lg:hidden xl:hidden 2xl:hidden text-white text-2xl"><FontAwesomeIcon icon={ faBars } /></button>
            
            <div className="flex space-x-10 items-center allM:hidden">
                <div>
                    <form action="" className="border flex items-center rounded-2xl overflow-hidden">
                        <input type="text" placeholder="Search" className="text-white h-10 w-72 2xl:w-96 bg-transparent pl-3 focus:outline-none"/>
                        <button title="Search" type="submit" className="text-white border-l-2 px-3 h-10 text-xl hover:bg-white hover:text-gray-800 duration-500"><FontAwesomeIcon icon={ faSearch } /></button>
                    </form>
                </div>

                <button title="Login" className="w-10 h-10 border rounded-full flex items-center justify-center text-xl text-white hover:bg-gray-800 duration-500 lg:hover:bg-transparent"><FontAwesomeIcon icon={ faUser } /></button>
            
                <button title="open mobile menu" onClick={ openMenu } className="xl:hidden 2xl:hidden text-white text-2xl"><FontAwesomeIcon icon={ faBars } /></button>
            </div>
        </div>
    </nav>
  )
}

export default Nav