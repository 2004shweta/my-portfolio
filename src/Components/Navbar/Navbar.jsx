import React, { useState, useEffect } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
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
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <AnchorLink className='anchor-link' offset={50} href={item.link}>
              <p>{item.name}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
