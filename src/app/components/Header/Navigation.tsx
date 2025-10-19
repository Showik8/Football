import React from "react";

const menuItems = ["Matches", "Statistic", "Teams", "News"];

const Navigation = () => {
  return (
    <nav>
      <ul 
        className="flex flex-col gap-8 md:flex-row md:gap-6 items-center"
      >
        {menuItems.map((item) => (
          <li key={item} className="">
            <a
              href={item.toLocaleLowerCase()}
              className="hover:text-blue-700 transition-colors duration-200 text-2xl md:text-lg"
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