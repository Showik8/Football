"use client";
import Carousel from "./Carousel";
import Navigation from "./Navigation";

import React from "react";

const Header: React.FC = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1440;
  const isPhone = width < 760;

  return (
    <header className="w-screen  flex  flex-col items-center  bg-linear-to-r from-blue-700 to-cyan-700  text-white p-6 md:w-screen   gap-10 md:items-center">
      <div className="flex w-screen justify-between px-5">
        <h1 className="text-xl font-bold  md:mb-0">FootBall</h1>

        <Navigation />

        {!isPhone && (
          <input
            name="choose Team"
            className="border-2 border-white p-2 rounded-2xl outline-0 "
            placeholder="Choose Your Team"
          ></input>
        )}
      </div>

      <Carousel />
    </header>
  );
};

export default Header;
