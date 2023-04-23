import React, { useState } from "react";
import "./header.css";

import { AiFillAppstore } from "react-icons/ai";

import { Link } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const menuBar = () => {
    setShowMediaIcons(true);
  };
  const crossHandler = () => {
    setShowMediaIcons(false);
  };
  return (
    <div className="main_header">
      <header>
        <img
          src="https://woxro.com/public/assets/png/woxrologo.png"
          alt="woxro logo"
        />
        <span onClick={menuBar} class="material-symbols-outlined">
          menu
        </span>
      </header>

      <nav className={showMediaIcons ? "show navMenu" : "navMenu"}>
        <span onClick={crossHandler} class="material-symbols-outlined">
          close
        </span>

        <Link to={"/"}>Home</Link>
        <a href="https://woxro.com/aboutus">About Us</a>
        <a href="https://woxro.com/service">Services</a>
        <a href="https://woxro.com/technology">Technology</a>
        <a href="https://woxro.com/careers">Careers</a>
        <a href="https://woxro.com/blog">Blogs</a>
        <a href="https://woxro.com/ourworks">Our Works</a>
        <a href="https://woxro.com/contactus">Contact us</a>
      </nav>
    </div>
  );
};

export default Header;
