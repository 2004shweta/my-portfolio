import React, { useState } from "react";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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

    const key = Object.keys(responses).find((k) => userMessage.toLowerCase().includes(k));
    const botReply = key ? responses[key] : "Sorry, I didn't get that. Ask me about my skills, projects, or contact info.";

    setMessages([
      ...messages,
      { type: "user", text: userMessage },
      { type: "bot", text: botReply },
    ]);
    setInput("");
  };

  return (
    <div style={styles.chatWindow}>
      <div style={styles.header}>
        <span>🤖Any Query</span>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
      </div>
      <div style={styles.messages}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.type === "user" ? "right" : "left", margin: "8px 0" }}>
            <div style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: "12px",
              background: "linear-gradient(90deg, #ff004c -5.09%, #ff1d61 106.28%)",
              color: "#fff",
              maxWidth: "80%",
              wordWrap: "break-word",
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          style={styles.input}
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} style={styles.sendBtn}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatWindow: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    color: "#fff",
  },
  header: {
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "10px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    backgroundColor: "#333",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #444",
    backgroundColor: "#2a2a2a",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ff1d61",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
  sendBtn: {
    marginLeft: "8px",
    padding: "8px 12px",
    borderRadius: "5px",
    background: "linear-gradient(90deg, #ff004c -5.09%, #ff1d61 106.28%)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default ChatBot;
