"use client";

import { useEffect } from "react";
import Nav from "./Components/sections/Nav";
import Footer from "./Components/sections/Footer";
import Splash from "./Components/features/Splash-Screen/Splash";
import Search from "./Components/features/Search/Search";
import useStore from "./Components/providers/navStore";
import "./globals.css";

export default function RootLayout({ children }) {
  const { splash, dark, toggleSplash } = useStore();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      toggleSplash();
    }, 2500);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <html lang="en" className={`${dark ? "dark" : ""}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <div
          className={`${
            splash ? "h-screen overflow-hidden" : "h-auto overflow-scroll"
          }`}
        >
          <Splash />
          <Search />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
