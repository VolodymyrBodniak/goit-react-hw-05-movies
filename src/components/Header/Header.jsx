import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerStyles.css';

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
    </div>
  );
};
export default Header;
