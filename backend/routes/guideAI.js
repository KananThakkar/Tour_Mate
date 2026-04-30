const Chat = require("../models/Chat");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message, userId } = req.body;

    // 🔹 Call OpenRouter AI
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "TourMate App"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct",
        messages: [
          { role: "system", content: "You are a helpful Indian tour guide." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      data?.error?.message ||
      "No response from AI";

    // 🔹 SAVE TO DB
    let chat = await Chat.findOne({ userId });

    if (!chat) {
      chat = new Chat({ userId, messages: [] });
    }

    chat.messages.push({ type: "user", text: message });
    chat.messages.push({ type: "bot", text: reply });

    // limit messages
    if (chat.messages.length > 100) {
      chat.messages = chat.messages.slice(-100);
    }

    await chat.save();

    res.json({ reply });

  } catch (err) {
    console.log(err);
    res.status(500).json({ reply: "Server error" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.params.userId });

    if (!chat) return res.json({ messages: [] });

    res.json({ messages: chat.messages });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;