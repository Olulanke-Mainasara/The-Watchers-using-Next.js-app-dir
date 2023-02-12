import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer style={{ scrollSnapAlign: "start" }} className='w-full h-[70vh] flex flex-col px-10 bg-gray-800 text-white allEM:h-fit allEM:px-8 allT:h-fit allT:px-6'>
        <section className='flex gap-10 allIL:gap-0 basis-4/5 allIL:flex-col'>
            <section className='flex flex-col h-full justify-center basis-[30%] allLM:flex-row allLM:items-center allLM:basis-1/2 allLM:border-white allIL:border-b'>
                <div className='flex h-full flex-col justify-center gap-10 allIL:basis-1/2 border-slate-100 border-b allLM:border-b-0 allEM:py-8 allT:py-8'>
                    <img className="w-10 h-10 rounded-full mx-auto" alt="The Watchers. Logo" src={ "/The Universe 2.jpg" } />
                    <p className='text-lg 2xl:text-2xl'>Inspiring Minds, Everywhere, Unveiling Knowledge and Inspiration.</p>
                </div>

                <div className='h-full flex flex-col gap-5 justify-center allEM:py-8 allT:py-8'>
                    <p className='text-xl 2xl:text-2xl'>Subscribe to our newsletter</p>
                    <p className='block text-slate-00'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form action="" className='flex gap-5 allEM:flex-col allT:flex-col'>
                        <input type="text" placeholder='Enter your email' className='py-2 px-3 bg-gray-600 border border-slate-100 rounded-lg w-full outline-none' />
                        <button type="submit" className='py-2 px-3 bg-white text-gray-800 hover:bg-gray-800 hover:text-white border duration-500 rounded-lg allEM:w-fit allT:w-fit allEM:mx-auto allT:mx-auto'>Subscribe</button>
                    </form>
                </div>
            </section>

            <section className='border-white border-l allEMT:border-l-0 flex h-full basis-[70%] allLM:basis-1/2 allEMT:flex-col allEMT:gap-8 allEMT:py-8'>
                <div className='basis-1/2 h-full flex justify-evenly allEMT:justify-around border-r border-white allEMT:border-none'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='text-xl'>Solutions</p>

                        <div className='flex flex-col gap-3 text-slate-300'>
                            <Link href={ "#" }><p>Marketing</p></Link>
                            <Link href={ "#" }><p>Analytics</p></Link>
                            <Link href={ "#" }><p>Commerse</p></Link>
                            <Link href={ "#" }><p>Insights</p></Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='text-xl'>Solutions</p>

                        <div className='flex flex-col gap-3 text-slate-300'>
                            <Link href={ "#" }><p>Marketing</p></Link>
                            <Link href={ "#" }><p>Analytics</p></Link>
                            <Link href={ "#" }><p>Commerse</p></Link>
                            <Link href={ "#" }><p>Insights</p></Link>
                        </div>
                    </div>
                </div>

                <div className='basis-1/2  h-full flex justify-evenly allEMT:justify-around'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='text-xl'>Solutions</p>

                        <div className='flex flex-col gap-3 text-slate-300'>
                            <Link href={ "#" }><p>Marketing</p></Link>
                            <Link href={ "#" }><p>Analytics</p></Link>
                            <Link href={ "#" }><p>Commerse</p></Link>
                            <Link href={ "#" }><p>Insights</p></Link>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 justify-center'>
                        <p className='text-xl'>Solutions</p>

                        <div className='flex flex-col gap-3 text-slate-300'>
                            <Link href={ "#" }><p>Marketing</p></Link>
                            <Link href={ "#" }><p>Analytics</p></Link>
                            <Link href={ "#" }><p>Commerse</p></Link>
                            <Link href={ "#" }><p>Insights</p></Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section className='basis-1/5 flex justify-between items-center border-slate-100 border-t allEM:flex-col-reverse allT:flex-col-reverse text-sm text-center allEM:py-8 allT:py-8 allEM:gap-8 allT:gap-8'>
            <p>© 2023 The Watchers Inc. All rights reserved.</p>

            <div className='flex gap-7 text-2xl text-white'>
                <Link href={ "#" }><FontAwesomeIcon icon={ faFacebook } /></Link>
                <Link href={ "#" }><FontAwesomeIcon icon={ faInstagram } /></Link>
                <Link href={ "#" }><FontAwesomeIcon icon={ faTwitter } /></Link>
                <Link href={ "#" }><FontAwesomeIcon icon={ faGithub } /></Link>
                <Link href={ "#" }><FontAwesomeIcon icon={ faYoutube } /></Link>
            </div>
        </section>
    </footer>
  )
}

export default Footer