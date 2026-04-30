const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: String,
  messages: [
    {
      type: { type: String }, // "user" or "bot"
      text: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = mongoose.model("Chat", chatSchema);