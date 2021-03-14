import React from "react";

const Header = () => {
  return (
    <header className="flex-row px-1 space-between">
      <h2>
        <a href="/">Chandler Green</a>
      </h2>

      <nav>
        <ul className="flex-row ">
          <li className="mx-2">
            <a href="#about">About</a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
