import NewsCarousel from './Components/NewsCarousel'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SectionFive from './Components/SectionFive'
import SectionOne from './Components/SectionOne'
import SectionThree from './Components/SectionThree'

export default function Home() {
  return (
    <main className='max-w-[1920px] mx-auto min-h-screen'>
      <Nav />
      <Header />
      <SectionOne />
      <NewsCarousel />
      <SectionThree />
      <SectionFive />
    </main>
  )
}
