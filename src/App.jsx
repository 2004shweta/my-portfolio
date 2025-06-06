import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import FullStackDev from './Components/FullStackDev/FullStackDev';
import ChatBot from './Components/ChatBot/ChatBot';
import ChatToggleButton from './Components/ChatBot/ChatToggleButton'; // 👈 Import the toggle button
import Certificates from './Components/Certificates/Certificates';
import OpenToWork from './Components/OpenToWork/OpenToWork';
import Experience from './Components/Experience/Experience';



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
      <Services />
      <Experience />
      <MyWork />
      <Certificates />
      <Contact />
      <Footer />
    
      {isChatOpen && <ChatBot onClose={toggleChat} />}
      <ChatToggleButton toggle={toggleChat} /> {/* 👈 Floating chat button */}
      <OpenToWork />
    </div>
  );
};

export default App;
