import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavLinks = [
  'News',
  'Gigs',
  'Music',
  'Videos',
  'Gallery',
];

const NavLink = ({ title }) => (
  <li>
    <Link to={`/${title}`}>{title}</Link>
  </li>
)

const NavBar = () => (
  <nav className="navbar">
    <ul>
      {NavLinks.map((link) => <NavLink title={link} />)}
    </ul>
  </nav>
)

export default NavBar;
