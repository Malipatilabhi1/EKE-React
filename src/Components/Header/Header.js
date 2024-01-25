
import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import jkLogo from '../../assets/JKTech_Logo.png';
import './Header.css';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed-header">
      <img src={jkLogo} alt="Stylized atom" className='jkImage' height="60" />
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* Add other header content as needed */}
    </header>
  );
};

export default Header;
