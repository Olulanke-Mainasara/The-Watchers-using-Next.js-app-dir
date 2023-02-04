'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faChevronDown, faClose, faMoon, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    const [navMenu, setMenu] = useState("allIL:-right-full")
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Listen for the scroll event
        window.addEventListener('scroll', handleScroll);

        return () => {
        // Remove the scroll event listener
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleScroll = () => {
        // Get the current scroll position
        const currentScrollPos = window.pageYOffset;

        // Check if the user is scrolling up or down
        if (currentScrollPos < prevScrollPos && !visible) {
            // The user is scrolling up
            setVisible(true);
        } else if (currentScrollPos > prevScrollPos && visible) {
            // The user is scrolling down
            setVisible(false);
        }

        // Update the previous scroll position
        setPrevScrollPos(currentScrollPos);
    };
    
    function openMenu() {
        setMenu("allIL:right-0")
    }

    function closeMenu() {
        setMenu("allIL:-right-full")
    }

  return (
    <nav className={`fixed top-0 left-0 z-50 ${visible ? "" : "allIL:opacity-0"} allIL:duration-300 h-16 w-screen bg-black dark:bg-gray-800/0 backdrop-blur-l`}>
        <div className="h-full mx-auto flex items-center justify-between px-10 sm:px-5 xs:px-3 iphone5:px-3 xtraSmall:px-2">
            <Link href="#" className="flex items-center text-2xl text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:text-gray-400 hover:after:scale-x-100 allT:text-lg allIL:hover:after:w-0"><img src="/The Universe 2.jpg" className="w-10 h-10 rounded-full" alt="The Watchers Logo"/><span>The Watchers.</span></Link>
        
            <ul className={"flex items-center text-white gap-20 allIL:absolute allIL:top-0 allIL:h-screen allIL:w-full allIL:flex-col allIL:justify-center allEM:gap-12 allIL:bg-black duration-500 " + navMenu}>
                <li><Link href="#" className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-white after:duration-500 after:content-[''] after:scale-x-110">Home</Link></li>
                <li className="group relative">
                    <Link href="#" className="cursor-default allLM:text-2xl">Our categories  <FontAwesomeIcon icon={ faChevronDown } /></Link>
        
                    <div id="dropList" className="absolute z-30 h-0 group-hover:h-[362px] -left-[45%] pt-[22px] duration-500 overflow-hidden">
                        <ul className="border rounded-xl text-center w-60 bg-black dark:bg-gray-600 overflow-hidden">
                            <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">Space Exploration</Link></li>
                            <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">World of Science</Link></li>
                            <li className="w-full py-4 px-2 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">Feat in Transportation</Link></li>
                            <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">History</Link></li>
                            <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">Art and Entertainment</Link></li>
                            <li className="w-full py-4 px-3 hover:bg-gray-800 duration-500 allIL:hover:bg-transparent"><Link href="#" className="py-4 px-[26px]">Upload your article</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link href="#" className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110">Contact</Link></li>
                <li><Link href="#" className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110">About</Link></li>
        
                <button title="Close navigation menu" onClick={ closeMenu } className="text-white text-3xl absolute top-14 iphone5:top-7 left-1/2 -translate-x-1/2 xl:hidden 2xl:hidden"><FontAwesomeIcon icon={ faClose } /></button>
        
                <button title="Theme" className="w-10 h-10 rounded-full flex items-center justify-center text-xl allLM:text-3xl allLM:w-12 allLM:h-12 text-gray-800 bg-white allIL:hover:bg-transparent xl:hidden 2xl:hidden"><FontAwesomeIcon icon={ faMoon } /></button>            

                <div className="flex gap-10 items-center xl:hidden 2xl:hidden">
                    <button title="Start reading" className='py-2 px-3 allLM:text-2xl allLM:p-4 bg-white text-gray-800 rounded-lg'>Start reading</button>

                    <button type="Log in" className='py-2 px-3 allLM:text-2xl text-white'>Log in <FontAwesomeIcon icon={ faArrowRight } /></button>
                </div>
            </ul>

            <button title="Search" className="xl:hidden 2xl:hidden w-10 h-10 rounded-full flex items-center justify-center text-xl text-white duration-500 lg:hover:bg-transparent"><FontAwesomeIcon icon={ faSearch } /></button>
            
            <button title="Open navigation menu" onClick={ openMenu } className="xl:hidden 2xl:hidden text-white text-2xl"><FontAwesomeIcon icon={ faBars } /></button>
            
            <div className="flex gap-6 items-center allIL:hidden">
                <button title="Theme" className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white"><FontAwesomeIcon icon={ faMoon } /></button>

                <button title="Search" className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white"><FontAwesomeIcon icon={ faSearch } /></button>

                <button type="Log in" className='py-2 px-3 text-white hover:text-gray-800 hover:bg-white duration-500 rounded-lg'>Log in <FontAwesomeIcon icon={ faArrowRight } /></button>            
            </div>
        </div>
    </nav>
  )
}

export default Nav