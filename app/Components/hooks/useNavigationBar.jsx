import { useState, useEffect } from "react";
import {
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function useNavigationBar(toggleFunction) {
    const [navMenu, setMenu] = useState("allIL:-right-full");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [prevScrollCounter, setPrevScrollCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [themeIcon, setThemeIcon] = useState(faSun);

    function setTheTheme() {
      if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        setThemeIcon(faSun);
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        setThemeIcon(faMoon);
      }
    }

    useEffect(() => {
      if (prevScrollCounter == 0) {
        setPrevScrollPos(window.scrollY);
        setPrevScrollCounter((prevValue) => prevValue + 1);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollPos = window.scrollY;

      // Check if the user is scrolling up or down
      if (currentScrollPos < prevScrollPos && !visible) {
        // The user is scrolling up
        setVisible(true);
      } else if (currentScrollPos > prevScrollPos && visible) {
        // The user is scrolling down
        setVisible(false);
      }

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    function openMenu() {
      setMenu("allIL:right-0");
    }

    function closeMenu() {
      setMenu("allIL:-right-full");
    }

    function handleSearch() {
      toggleFunction();
    }

    return {navMenu, visible, themeIcon, setTheTheme, openMenu, closeMenu, handleSearch}
}

export default useNavigationBar