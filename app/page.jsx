import { Inter } from '@next/font/google'
import Header from './Components/Header'
import Nav from './Components/Nav'
import SectionOne from './Components/SectionOne'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='max-w-[1920px] mx-auto min-h-screen'>
      <Nav />
      <Header />
      <SectionOne />
    </main>
  )
}
