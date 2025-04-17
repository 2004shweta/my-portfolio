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

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FullStackDev />
      <Services />
      <MyWork />
      <Contact />
      <Footer />

      {isChatOpen && <ChatBot onClose={toggleChat} />}
      <ChatToggleButton toggle={toggleChat} /> {/* 👈 Floating chat button */}
    </div>
  );
};

export default App;
