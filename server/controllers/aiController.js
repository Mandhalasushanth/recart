const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });

    res.status(200).json({
      reply:
        completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      message: "AI Error",
      error: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};