import React from "react";

const ChatToggleButton = ({ toggle }) => {
  return (
    <button onClick={toggle} style={styles.button}>
      💬
    </button>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "rgb(10, 10, 10)",
    color: "white",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 999,
  },
};

export default ChatToggleButton;
