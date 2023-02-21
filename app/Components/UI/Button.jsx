import React from 'react'
import Link from 'next/link'

function Button() {
  return (
    <Link href="#categories" title="Categories" className="rounded-xl bg-black px-4 py-3 text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white border duration-500 w-fit text-xl mt-10 allEMT:mx-auto">Start reading</Link>
  )
}

export default Button