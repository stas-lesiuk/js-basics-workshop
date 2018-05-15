import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => (
  <nav className="menu">
    <NavLink to="/home" activeClassName="active">Home</NavLink>
    <NavLink to="/news" activeClassName="active">News</NavLink>
  </nav>
);

export default Navbar;
