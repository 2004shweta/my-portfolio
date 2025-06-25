import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import FullStackDev from './Components/FullStackDev/FullStackDev';
// import ChatBot from './Components/ChatBot/ChatBot';
// import ChatToggleButton from './Components/ChatBot/ChatToggleButton';
import Certificates from './Components/Certificates/Certificates';
import OpenToWork from './Components/OpenToWork/OpenToWork';
import MyWork from './Components/MyWork/MyWork';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };
 

  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <FullStackDev />
      <MyWork />
      <Experience />
      {/* <Services /> */}
      {/* <Experience /> */}
      {/* <MyWork /> */}
      <Certificates />
      <Contact />
      <Footer />
      {/* {isChatOpen && <ChatBot onClose={toggleChat} />}
      <ChatToggleButton toggle={toggleChat} />  */}
      <OpenToWork />
    </div>
  );
};

export default App;
