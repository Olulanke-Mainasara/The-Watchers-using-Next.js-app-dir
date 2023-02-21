import Hero from './Components/sections/Hero'
import SectionOne from './Components/sections/SectionOne'
import NewsCarousel from './Components/features/News-Carousel/NewsCarousel'
import SectionThree from './Components/sections/SectionThree'
import CategoriesCarousel from './Components/features/Categories-Carousel/CategoriesCarousel'
import SectionFive from './Components/sections/SectionFive'
import ReviewsCarousel from './Components/features/Reviews-Carousel/ReviewsCarousel'


export default function Home() {
  return (
    <>
      <Hero />
      <main>
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
