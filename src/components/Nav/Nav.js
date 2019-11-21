import React from "react";
import { NavLink } from "react-router-dom";

const articleStyle = {
  color: "palevioletred"
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={articleStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeStyle={articleStyle}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={articleStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
