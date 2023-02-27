import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export function LeftArrow({ onclick }) {
  return (
    <button title="Previous item" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 left-2 allIL:left-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tl-none allIL:rounded-bl-none dark:text-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allIL:hover:text-black allIL:dark:hover:text-white allIL:hover:bg-white allIL:dark:hover:bg-black allEMT:shadow-none" onClick={ onclick } href="#"><FontAwesomeIcon icon={ faChevronLeft } /></button>
  )
}

export function RightArrow({ onclick }) {
  return (
    <button title="Next item" className="w-12 h-12 allIL:h-14 flex items-center justify-center z-10 absolute rounded-full text-xl transition-colors top-1/2 -translate-y-1/2 right-2 allIL:right-0 duration-300 allEM:w-6 allT:w-4 allIL:rounded-tr-none allIL:rounded-br-none dark:text-white bg-white dark:bg-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black allEMT:shadow-none" onClick={ onclick } href="#"><FontAwesomeIcon icon={ faChevronRight } /></button>
  )
}