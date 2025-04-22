// // import React, { useState } from 'react';
// // import './Navbar.css';
// // import logo from '../../assets/logo.svg';
// // import underline from '../../assets/nav_underline.svg';
// // import AnchorLink from 'react-anchor-link-smooth-scroll';
// // import menu_open from '../../assets/menu_open.svg';
// // import menu_close from '../../assets/menu_close.svg';

// // const Navbar = () => {
// //   const [menu, setMenu] = useState('home');
// //   const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu open/close state

// //   const menuItems = [
// //     { name: 'Home', link: '#home' },
// //     { name: 'About', link: '#about' },
// //     { name: 'Services', link: '#services' },
// //     { name: 'Portfolio', link: '#work' },
// //     { name: 'Contact', link: '#contact' }
// //   ];

// //   const openMenu = () => {
// //     setIsMenuOpen(true); // Open the menu
// //   };

// //   const closeMenu = () => {
// //     setIsMenuOpen(false); // Close the menu
// //   };

// //   return (
// //     <div className='navbar'>
// //       {/* <img src={logo} alt='Logo' /> */}
// //       <img src={menu_open} alt='Open Menu' className='nav-mob-open' onClick={openMenu} />
      
// //       <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
// //         <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close' />
        
// //         {menuItems.map((item, index) => (
// //           <li key={index}>
// //             <AnchorLink className='anchor-link' offset={50} href={item.link}>
// //               <p onClick={() => setMenu(item.name.toLowerCase())}>{item.name}</p>
// //             </AnchorLink>
// //             {menu === item.name.toLowerCase() && <img src={underline} alt='Underline' />}
// //           </li>
// //         ))}
// //       </ul>

// //       <div className='nav-connect'>Connect With Me</div>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/menu_open.svg';
// import menu_close from '../../assets/menu_close.svg';

// const Navbar = () => {
//   const [menu, setMenu] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [greeting, setGreeting] = useState('');
//   const [time, setTime] = useState('');
//   const [emoji, setEmoji] = useState('☀️');

//   const menuItems = [
//     { name: 'Home', link: '#home' },
//     { name: 'About', link: '#about' },
//     { name: 'Services', link: '#services' },
//     { name: 'Portfolio', link: '#work' },
//     { name: 'Contact', link: '#contact' }
//   ];

//   const openMenu = () => setIsMenuOpen(true);
//   const closeMenu = () => setIsMenuOpen(false);

//   useEffect(() => {
//     const updateGreeting = () => {
//       const hour = new Date().getHours();
//       if (hour < 12) {
//         setGreeting('Good Morning');
//         setEmoji('☀️');
//       } else if (hour < 18) {
//         setGreeting('Good Afternoon');
//         setEmoji('🌤️');
//       } else {
//         setGreeting('Good Evening');
//         setEmoji('🌙');
//       }
//     };

//     const updateTime = () => {
//       const now = new Date();
//       setTime(now.toLocaleTimeString());
//     };

//     updateGreeting();
//     updateTime();
//     const timeInterval = setInterval(updateTime, 1000);

//     return () => clearInterval(timeInterval);
//   }, []);

//   return (
//     <div className='navbar'>
//       <div className="nav-greeting">
//         <span className="emoji">{emoji}</span> Hello, {greeting}! 
//         <span className="clock">🕒 {time}</span>
//       </div>

//       <img src={menu_open} alt='Open Menu' className='nav-mob-open' onClick={openMenu} />
      
//       <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//         <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close' />
        
//         {menuItems.map((item, index) => (
//           <li key={index}>
//             <AnchorLink className='anchor-link' offset={50} href={item.link}>
//               <p onClick={() => setMenu(item.name.toLowerCase())}>{item.name}</p>
//             </AnchorLink>
//             {menu === item.name.toLowerCase() && <img src={underline} alt='Underline' />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('☀️');
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Portfolio', link: '#work' },
    { name: 'Certificates', link: '#certificates' },
    { name: 'Contact', link: '#contact' }
  ];

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
        setEmoji('</>');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
        setEmoji('</>');
      } else {
        setGreeting('Good Evening');
        setEmoji('</>');
      }
    };

    updateGreeting();
  }, []);

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
        <span className="emoji">{emoji}</span> Hello, {greeting}!
      </div>

      <img src={menu_open} alt='Open Menu' className='nav-mob-open' onClick={() => setIsMenuOpen(true)} />

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <img src={menu_close} onClick={() => setIsMenuOpen(false)} alt='Close Menu' className='nav-mob-close' />

        {menuItems.map((item, index) => (
          <li key={index}>
            <AnchorLink className='anchor-link' offset={50} href={item.link}>
              <p onClick={() => setMenu(item.name.toLowerCase())}>{item.name}</p>
            </AnchorLink>
            {menu === item.name.toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
