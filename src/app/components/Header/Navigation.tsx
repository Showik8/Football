import React from "react";

const menuItems = {
  "ჩვენს შესახებ": "about",
  "მატჩები": "matches",
  "სტატისტიკა": "statistics",
  "გუნდები": "teams",
  "ახალი ამბები": "news",
  "კონტაქტი": "contact",
};

interface NavigationProps {
  isMobile: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isMobile }) => {
  return (
    <nav>
      <ul
        className={`flex items-center ${
          isMobile ? "flex-col gap-10" : "flex-row gap-12"
        }`}
      >
        {Object.entries(menuItems).map(([item, link]) => (
          <li key={item}>
            <a
              href={link}
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
