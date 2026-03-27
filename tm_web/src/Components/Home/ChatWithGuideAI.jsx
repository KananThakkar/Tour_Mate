import React, { useState, useEffect, useRef } from "react";
import "./ChatWithGuideAI.css";
import ReactMarkdown from "react-markdown";

const GuideAI = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // 🔽 Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { type: "user", text: message };
    setChat(prev => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/guideAI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      const botMsg = { type: "bot", text: data.reply || "No response" };
      setChat(prev => [...prev, botMsg]);

    } catch (err) {
      console.log(err);
      setChat(prev => [...prev, { type: "bot", text: "Error fetching response ❌" }]);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <div className="chat-container">

      <h2>Guide AI</h2>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={msg.type === "user" ? "user-msg" : "bot-msg"}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}

        {/* ⏳ Typing indicator */}
        {loading && <div className="bot-msg">Typing...</div>}

        {/* 🔽 Auto scroll anchor */}
        <div ref={chatEndRef}></div>
      </div>

      <div className="input-box">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about anything..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default GuideAI;