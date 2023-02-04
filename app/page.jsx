import Hero from './Components/Hero'
import SectionOne from './Components/SectionOne'
import NewsCarousel from './Components/News-Carousel/NewsCarousel'
import SectionThree from './Components/SectionThree'
import CategoriesCarousel from './Components/Categories-Carousel/CategoriesCarousel'
import SectionFive from './Components/SectionFive'
import ReviewsCarousel from './Components/Reviews-Carousel/ReviewsCarousel'

export default function Home() {
  return (
    <>
      <Hero />
      <main className='max-w-[1920px] mx-auto min-h-screen'>
        <SectionOne />
        <NewsCarousel />
        <SectionThree />
        <CategoriesCarousel />
        <SectionFive />
        <ReviewsCarousel />
      </main>
    </>
  )
}
