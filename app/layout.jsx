"use client";

import { useEffect, useState } from "react";
import Nav from "./Components/sections/Nav";
import Footer from "./Components/sections/Footer";
import Splash from "./Components/features/Splash-Screen/Splash";
import Search from "./Components/features/Search/Search";
import "./globals.css";

export default function RootLayout({ children }) {
  const [height, setHeight] = useState("h-screen overflow-hidden");
  const [search, setSearch] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setHeight("h-auto overflow-scroll");
    }, 2500);
    return () => clearTimeout(timeOut);
  }, [height]);

  function toggleSearch() {
    setSearch(!search)
  }

  return (
    <html lang="en" className="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <div className={`${height}`}>
          <Splash />
          {/* <Search search={search} /> */}
          <Nav toggleSearch={toggleSearch} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
