import React from "react";
import "./navigation.css";


const menuItems = ["ჩვენს შესახებ", "მატჩები", "სტატისტიკა", "გუნდები", "ახალი ამბები", "კონტაქტი"];

interface NavigationProps {
  isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile }) => {
  return (
    <nav>
      <ul
        className={`flex items-center ${
          isMobile
            ? "flex-col gap-10"
            : "flex-row gap-12"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link text-lg md:text-lg lg:text-lg text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;