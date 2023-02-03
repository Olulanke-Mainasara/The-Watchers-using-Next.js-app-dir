import NewsCarousel from './Components/NewsCarousel'
import Hero from './Components/Hero'
import SectionOne from './Components/SectionOne'
import SectionThree from './Components/SectionThree'
import SectionFive from './Components/SectionFive'
import { categories } from './Components/Arrays';
import CarouselV2 from './Components/CarouselV2'

export default function Home() {
  return (
    <>
      <Hero />
      <main className='max-w-[1920px] mx-auto min-h-screen'>
        <SectionOne />
        <NewsCarousel />
        <SectionThree />
        <CarouselV2 heading={ "Our Categories" } array={ categories }/>
        <SectionFive />
      </main>
    </>
  )
}
