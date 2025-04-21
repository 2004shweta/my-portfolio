import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const responses = {
    "hello": "Hi there! How can I assist you today?",
    "hii": "Hi there! How can I assist you today?",
    "hey": "Hi there! How can I assist you today?",
    "who are you": "I'm Shweta, a passionate full stack developer!",
    "what are your skills": "MERN Stack, JavaScript, Node.js, MongoDB, React, Express.js",
    "projects": "I've built SkillXStream, Codo-File, Virtual Herbal Garden, and more!",
    "contact": "Email: shweta@example.com | LinkedIn: /shweta",
    "hobbies": "Coding, building web apps, and chess!",
    "tell me about yourself": "I'm a full stack developer with a passion for creating impactful web applications.",
    "what is your experience": "I have experience in building full stack applications using the MERN stack.",
    "why should we hire you": "I bring a strong technical skill set, a passion for problem-solving, and a commitment to delivering high-quality work.",
    "what are your strengths": "Problem-solving, adaptability, and a strong foundation in full stack development.",
    "what are your weaknesses": "I sometimes get too focused on perfecting details, but I'm working on balancing efficiency with quality.",
    "thank you": "You're welcome! Let me know if there's anything else I can help with.",
    "thanks": "You're welcome! Let me know if there's anything else I can help with.",
    "thankyou": "You're welcome! Let me know if there's anything else I can help with.",
  };

  const handleSend = () => {
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages([...messages, { type: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const key = Object.keys(responses).find((k) => userMessage.toLowerCase().includes(k));
      const botReply = key ? responses[key] : "Sorry, I didn't get that. Ask me about my skills, projects, or contact info.";
      
      setMessages(prev => [...prev, { type: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div style={styles.chatWindow} data-aos="fade-up">
      <div style={styles.header}>
        <div style={styles.titleContainer}>
          <span style={styles.title}>🤖 Chat Assistant</span>
          <span style={styles.subtitle}>Ask me anything!</span>
        </div>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
      </div>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            style={{
              ...styles.messageContainer,
              justifyContent: msg.type === "user" ? "flex-end" : "flex-start"
            }}
            data-aos={msg.type === "user" ? "fade-left" : "fade-right"}
          >
            <div style={{
              ...styles.message,
              background: msg.type === "user" 
                ? "linear-gradient(270deg, #1a1a1a -5.09%, #2a2a2a 106.28%)"
                : "#1a1a1a",
              border: msg.type === "user" ? "1px solid #2a2a2a" : "1px solid #2a2a2a"
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={styles.typingIndicator}>
            <span style={styles.typingDot}></span>
            <span style={styles.typingDot}></span>
            <span style={styles.typingDot}></span>
          </div>
        )}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} style={styles.sendBtn}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  chatWindow: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "350px",
    height: "500px",
    backgroundColor: "#000000",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    color: "#ffffff",
    border: "1px solid #2a2a2a",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#1a1a1a",
    padding: "15px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2a2a2a",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "12px",
    color: "#666666",
    marginTop: "4px",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#666666",
    fontSize: "24px",
    cursor: "pointer",
    padding: "0 5px",
    transition: "all 0.3s ease",
  },
  messages: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
    backgroundColor: "#121212",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageContainer: {
    display: "flex",
    width: "100%",
  },
  message: {
    padding: "12px 16px",
    borderRadius: "15px",
    maxWidth: "80%",
    wordWrap: "break-word",
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.4",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  typingIndicator: {
    display: "flex",
    gap: "4px",
    padding: "10px",
    justifyContent: "flex-start",
  },
  typingDot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#666666",
    borderRadius: "50%",
    animation: "typing 1s infinite",
  },
  inputArea: {
    display: "flex",
    padding: "15px",
    borderTop: "1px solid #2a2a2a",
    backgroundColor: "#1a1a1a",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    borderRadius: "25px",
    border: "1px solid #2a2a2a",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  sendBtn: {
    padding: "12px 20px",
    borderRadius: "25px",
    background: "linear-gradient(270deg, #1a1a1a -5.09%, #2a2a2a 106.28%)",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
};

export default ChatBot;
