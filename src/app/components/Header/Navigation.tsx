import React from "react";

const menuItems = ["Matches", "Statistic", "Teams", "News"];

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-2  md:flex-row md:gap-6 text-center">
        {menuItems.map((item) => (
          <li key={item} className="">
            <a
              href={item.toLocaleLowerCase()}
              className="hover:text-blue-700 transition-colors duration-200 md:text-2xl text-[16px]"
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
