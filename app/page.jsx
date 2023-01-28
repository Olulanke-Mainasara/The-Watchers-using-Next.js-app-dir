import { Inter } from '@next/font/google'
import Nav from './Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Nav />
      <header className='h-screen flex justify-center items-center'>
        <h1>Hello Next 13</h1>
      </header>
    </main>
  )
}
