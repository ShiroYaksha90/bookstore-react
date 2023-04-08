import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import '../styles/Navigation.css';

const Nav = () => (
  <nav className="navbar">
    <div className="links-container">
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
    </div>
    <div className="icon">
      <BsPersonCircle />
    </div>
  </nav>
);

export default Nav;
