import './globals.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='dark:bg-black'>
        <Nav />
        <div className='alphaContainer allIL:h-auto'>
          {children}
          <Footer />
        </div>  
      </body>
    </html>
  )
}
