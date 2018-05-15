import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => (
  <nav className="menu">
    <Link to="/home">Home</Link>
    <Link to="/news">News</Link>
  </nav>
);

export default Navbar;
