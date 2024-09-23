import React from "react";

import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import Fire from "../../assets/fire.png";
import Star from "../../assets/star.png";
import Party from "../../assets/partying-face.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Movie Explorer</h1>

      <div className='navbar_links'>
        <DarkMode />
        <NavLink to='/'>
          Popular
          <img src={Fire} alt='Fire Emoji' className='navbar_emoji' />
        </NavLink>
        <NavLink to='/top_rated'>
          Top Rated
          <img src={Star} alt='Star Emoji' className='navbar_emoji' />
        </NavLink>
        <NavLink to='/upcoming'>
          New Movies
          <img
            src={Party}
            alt='Party Emoji'
            className='navbar_emoji'
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
