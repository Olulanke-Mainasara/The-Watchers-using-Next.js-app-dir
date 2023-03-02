import React from 'react'
import Image from 'next/image'

function Splash() {
  return (
    <div className="w-screen h-screen bg-black text-white text-9xl 2xl:text-[160px] lg:text-8xl md:text-7xl allEM:text-4xl allT:text-3xl flex items-center justify-center z-50">
      <div className="w-60 2xl:w-64 allEMT:w-32 aspect-square overflow-hidden relative">
        <Image src={"/The Universe 2.jpg"} fill priority alt="" />
      </div>

      <h1 className="opacity-1">The Watchers.</h1>
    </div>
  );
}

export default Splash