const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

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

    console.log("FULL RESPONSE:", data);

    if (data.error) {
      return res.json({ reply: data.error.message });
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      "No response from AI";

    res.json({ reply });

  } catch (err) {
    console.log(err);
    res.status(500).json({ reply: "Server error" });
  }
});

module.exports = router;