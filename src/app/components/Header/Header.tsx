"use client";

import React, { useEffect, useRef, useState } from "react";

// --- SVG Icons (for a self-contained component) ---
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const menuItems = ["Matches", "Statistics", "Teams", "News"];

const Navigation = ({ isMobile }) => {
  return (
    <nav>
      <ul
        className={`flex items-center gap-6 ${
          isMobile
            ? "flex-col gap-8 text-3xl"
            : "flex-row text-base"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-medium text-gray-200 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const headerRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);


  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-lg text-white"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-2xl font-bold tracking-wider">
            FootBall
          </a>

          <div className="hidden md:flex items-center gap-8">
            <Navigation isMobile={false} />
            <div className="flex items-center gap-4">
              <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'w-48' : 'w-0'}`}>
                 <input
                    ref={searchInputRef}
                    name="chooseTeam"
                    className={`border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none transition-all duration-300 ${isSearchOpen ? 'w-full p-1 opacity-100' : 'w-0 p-0 opacity-0'}`}
                    placeholder="Choose Your Team..."
                    onBlur={() => setIsSearchOpen(false)}
                 />
              </div>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 transition-transform duration-300 hover:scale-110"
                aria-label="Toggle search"
              >
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <div className={`w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>
      
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-opacity duration-500 ease-in-out
                   flex flex-col items-center justify-center
                   ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <Navigation isMobile={true} />
      </div>
    </>
  );
};

export default Header;