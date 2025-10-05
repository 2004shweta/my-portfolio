import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import FullStackDev from './Components/FullStackDev/FullStackDev';
import Certificates from './Components/Certificates/Certificates';
import OpenToWork from './Components/OpenToWork/OpenToWork';
import MyWork from './Components/MyWork/MyWork';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FullStackDev />
      <MyWork />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
      <OpenToWork />
    </div>
  );
};

export default App;
