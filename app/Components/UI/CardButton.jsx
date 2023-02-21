import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function CardButton({ text }) {
  return (
    <Link className="text-xl rounded-2xl px-4 py-3 allIL:px-5 allEM:text-lg allT:text-base bg-black text-white hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white transition-colors duration-500" href="#">{text} <FontAwesomeIcon icon={ faArrowRight } /></Link>
  )
}

export default CardButton