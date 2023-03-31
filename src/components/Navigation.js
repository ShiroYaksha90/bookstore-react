import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Nav = () => (
  <nav className="navbar">
    <h1 className="nav-title">Bookstore CMS</h1>
    <ul className="links-list">
      <li>
        <NavLink to="/">
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink to="./categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
