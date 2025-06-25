import React, { useState, useEffect } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#home' },
    { name: 'Certificates', link: '#certificates' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' },
    { name: 'Contact', link: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-greeting">
        <span className="emoji">{'</>'}</span>
      </div>

      <img src={menu_open} alt='Open Menu' className='nav-mob-open' onClick={() => setIsMenuOpen(true)} />

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <span
          className='nav-mob-close'
          onClick={() => setIsMenuOpen(false)}
          style={{fontSize: 26, color: 'var(--text-color)', cursor: 'pointer', background: 'var(--card-background)', borderRadius: '50%', padding: 3, border: '1px solid var(--border-color)', position: 'absolute', top: 20, left: 20, zIndex: 1001}}
        >
          ×
        </span>

        {menuItems.map((item, index) => (
          <li key={index} className={menu === item.name.toLowerCase() ? 'active' : ''}>
            <AnchorLink className='anchor-link' offset={50} href={item.link}>
              <p onClick={() => setMenu(item.name.toLowerCase())}>{item.name}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
