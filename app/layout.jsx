"use client";

import "./globals.css";
import Nav from "./Components/sections/Nav";
import Footer from "./Components/sections/Footer";
import Splash from "./Components/features/Splash-Screen/Splash";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [height, setHeight] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(setHeight("allIL:h-auto"), 2100);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <html lang="en" className="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <div className={`alphaContainer overflow-hidden ${height}`}>
          <Splash />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
