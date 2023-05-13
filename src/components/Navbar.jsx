import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <h1 class="title">Marvel</h1>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
