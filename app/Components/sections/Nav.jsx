"use client";

import React from "react";
import Link from "next/link";
import useNavigationBar from "../hooks/useNavigationBar";
import useStore from "../providers/navStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faChevronRight,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const { navMenu, visible, openMenu, closeMenu } = useNavigationBar();
  const { toggleSearch, dark, toggleDark } = useStore();

  return (
    <nav
      className={`fixed top-0 left-0 z-30 ${
        visible ? "" : "allIL:opacity-0"
      } allIL:duration-300 h-16 w-screen bg-black dark:bg-gray-800/0 backdrop-blur-lg`}
    >
      <div className="h-full mx-auto flex items-center justify-between px-10 sm:px-5 xs:px-3 iphone5:px-3 xtraSmall:px-2">
        <Link
          href="/"
          className="flex items-center text-2xl text-white transition-colors duration-700 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-700 after:content-[''] hover:text-gray-400 hover:after:scale-x-100 allT:text-lg allIL:hover:after:w-0"
        >
          <img
            src="/The Universe 2.jpg"
            className="w-10 h-10 rounded-full"
            alt="The Watchers Logo"
          />
          <span>The Watchers.</span>
        </Link>

        <ul
          className={`flex items-center text-white gap-20 allIL:absolute allIL:top-0 allIL:h-screen allIL:w-full allIL:flex-col allIL:justify-center allEMT:gap-12 allIL:bg-black duration-500 ${navMenu}`}
        >
          <li>
            <Link
              href="/"
              className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-white after:duration-500 after:content-[''] after:scale-x-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110"
            >
              Our categories
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="relative allLM:text-2xl after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:duration-500 after:content-[''] hover:transition-transform hover:after:scale-x-110"
            >
              Contact
            </Link>
          </li>

          <button
            title="Close navigation menu"
            onClick={closeMenu}
            className="text-white text-3xl absolute top-14 iphone5:top-7 left-1/2 -translate-x-1/2 laptop:hidden"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>

          <button
            title="Theme"
            onClick={toggleDark}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl allLM:text-3xl allLM:w-12 allLM:h-12 text-gray-800 bg-white laptop:hidden"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>

          <div className="flex gap-10 allT:gap-5 items-center laptop:hidden">
            <button
              title="Start reading"
              className="rounded-3xl bg-white px-5 py-3 text-black text-3xl transition-colors duration-300 allEMT:text-lg"
            >
              Start reading
            </button>

            <button
              type="Log in"
              className="py-2 px-3 allLM:text-2xl text-white allEMT:text-lg"
            >
              Log in <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </ul>

        <button
          title="Search"
          className="laptop:hidden w-10 h-10 flex items-center justify-center text-xl text-white"
          onClick={() => {
            toggleSearch();
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <button
          title="Open navigation menu"
          onClick={openMenu}
          className="laptop:hidden text-white text-2xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="flex gap-6 items-center allIL:hidden">
          <button
            title="Theme"
            onClick={toggleDark}
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} />
          </button>

          <button
            title="Search"
            className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white"
            onClick={() => {
              toggleSearch();
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button
            type="Log in"
            className="py-2 px-3 text-white hover:text-black hover:bg-white duration-500 rounded-lg"
          >
            Log in <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
