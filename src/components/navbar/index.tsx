"use client";

import Image from "next/image";
import style from "./navbar.module.css";
import { useEffect, useState } from "react";
import Button from "../Button/page";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-colors-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  // toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  // Add click handler for More button
  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  // Update click handler for outside clicks to include mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const toggleDiv = document.querySelector(`.${style.toggle_div}`);
      const moreButton = document.querySelector(`.${style.more_button}`);
      const mobileMenu = document.querySelector(`.${style.mobile_menu}`);
      const hamburger = document.querySelector(`.${style.hamburger}`);

      if (
        toggleDiv &&
        moreButton &&
        !toggleDiv.contains(event.target as Node) &&
        !moreButton.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }

      if (
        mobileMenu &&
        hamburger &&
        !mobileMenu.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={style.navbar}>
        {/* <a href="/" className={style.logo_link}> */}
          <a href="/" className={style.logo}>
            <Image
              src="/icons/logo.svg"
              height={20}
              width={20}
              alt="Logo"
              className={style.logo_icon}
            />
            <span className={style.logo_text}>Studio Z</span>
          </a>
        {/* </a> */}
        <div className={style["nav-links-toggle"]}>
          <div
            className={`${style["nav-links"]} ${
              isMobileMenuOpen ? style.mobile_menu_open : ""
            }`}
          >
            <a href="/services" className={style["nav-link"]}>
              Services
            </a>
            <a href="/about" className={style["nav-link"]}>
              Work
            </a>
            <a href="/contact" className={style["nav-link"]}>
              Studio
            </a>
            <a href="" className={style["nav-link"]}>
              Blog
            </a>
            <a
              href="#"
              className={`${style["nav-link"]} ${style.more_button}`}
              onClick={(e) => {
                e.preventDefault();
                toggleMore();
              }}
            >
              More
              <Image
                src="/icons/arrow-down.svg"
                height={20}
                width={20}
                alt="arrow"
                className={`${style.arrow_icon} ${
                  isMoreOpen ? style.arrow_rotate : ""
                }`}
              />
            </a>
            <Button label="Let's Talk" href="https://google.com" />
          </div>

          <span className={style.nav_seperator}></span>
          <button
            className={`${style["toggle-btn"]} ${
              darkMode ? style["dark-mode"] : ""
            }`}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            <div className={style["toggle-track"]}>
              <div className={style["toggle-icon"]}>
                <div className={style.sun}>
                  <Image
                    src="/icons/sun.svg"
                    height={20}
                    width={20}
                    alt="sun"
                    className={style.sun_icon}
                  />
                </div>
                <div className={style.moon}>
                  <Image
                    src="/icons/moon.svg"
                    height={20}
                    width={20}
                    alt="moon"
                    className={style.moon_icon}
                  />
                </div>
              </div>
            </div>
          </button>
          <button
            className={`${style.hamburger} ${
              isMobileMenuOpen ? style.hamburger_active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={style.hamburger_line}></span>
            <span className={style.hamburger_line}></span>
            <span className={style.hamburger_line}></span>
          </button>
        </div>

        {/* more drop down menu */}
        <div
          className={`${style.toggle_div} ${
            isMoreOpen ? style.toggle_div_open : ""
          }`}
        >
          <div className={style.toggle_div_inner}>
            <div className={style.toggle_div_left}>Left</div>
            <div className={style.toggle_div_right}>Rigth</div>
          </div>
        </div>

        {/* mobile dropdown menu */}
        {/* Mobile menu */}
        <div
          className={`${style.mobile_menu} ${
            isMobileMenuOpen ? style.mobile_menu_open : ""
          }`}
        >
          <div className={style.mobile_menu_inner}>
            <a href="/services" className={style["mobile-link"]}>
              Services
            </a>
            <a href="/work" className={style["mobile-link"]}>
              Work
            </a>
            <a href="/studio" className={style["mobile-link"]}>
              Studio
            </a>
            <a href="/blog" className={style["mobile-link"]}>
              Blog
            </a>
            <Button label="Let's Talk" href="https://google.com" />
          </div>
        </div>
      </nav>
    </>
  );
}
