import React from 'react'
import Link from 'next/link'

function Button() {
  return (
    <Link href="#" title="Categories" className="rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white border duration-500 w-fit text-xl allEMT:mx-auto">Start reading</Link>
  )
}

export default Button