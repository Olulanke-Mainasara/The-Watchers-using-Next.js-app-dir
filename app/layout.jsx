import "./globals.css";
import Nav from "./Components/sections/Nav";
import Footer from "./Components/sections/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <div className="alphaContainer allIL:h-auto">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
