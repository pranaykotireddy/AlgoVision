import express from "express";

const router = express.Router();

let AVAILABLE_MODELS = [];

async function fetchAvailableModels() {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/models", {
      headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
    });
    if (!res.ok) return [];
    const data = await res.json();
    AVAILABLE_MODELS = data.data
      .map((m) => m.id)
      .filter(
        (id) =>
          !id.includes("whisper") &&
          !id.includes("guard") &&
          !id.includes("tts") &&
          !id.includes("speech")
      );
    console.log(`✅ ${AVAILABLE_MODELS.length} models available`);
    return AVAILABLE_MODELS;
  } catch (err) {
    console.error("Model fetch failed:", err.message);
    return [];
  }
}

fetchAvailableModels();

// ⭐ ChatGPT-style prompt
const SYSTEM_PROMPT = `You are AlgoVision AI, a friendly DSA tutor. Your personality is like ChatGPT: warm, clear, structured, and conversational.

STRICT FORMATTING RULES:
1. Use **markdown** freely — it renders in our chat UI.
2. If code is provided in the user's message, explain THAT code. Never ask for it.
3. Structure responses like this:

**What this code does:**
One clear sentence.

**Step-by-step:**
1. \`line or concept\` — Simple explanation.
2. \`line or concept\` — Simple explanation.

**Key concepts to remember:**
- **Concept name**: short explanation.
- **Concept name**: short explanation.

**Real-world analogy:**
Short comparison to everyday life.

4. Use \`backticks\` for code/variables/functions.
5. Use **bold** for key terms.
6. Use bullet points and numbered lists generously.
7. Keep it CONVERSATIONAL. Talk like you're teaching a friend.
8. Add a short encouraging line at the end (optional).
9. MAX 300 words.

Tone examples:
- "Here's what's happening in your code 👇"
- "Think of it like..."
- "The cool part is..."
- "You'll see this in interviews a lot."

Never be robotic or textbook-like. Be engaging, clear, and helpful.`;

router.post("/", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "messages array required" });
  }

  if (AVAILABLE_MODELS.length === 0) {
    await fetchAvailableModels();
  }
  if (AVAILABLE_MODELS.length === 0) {
    return res.status(500).json({
      error: "No models available. Check your Groq API key.",
    });
  }

  const fullMessages = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages.filter((m) => m.role !== "system"),
  ];

  const errors = [];

  for (const model of AVAILABLE_MODELS) {
    try {
      console.log(`→ Trying: ${model}`);
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model,
            messages: fullMessages,
            temperature: 0.7,
            max_tokens: 800,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log(`✅ Success with: ${model}`);
        return res.json(data);
      }

      errors.push(`${model}: ${data?.error?.message || response.status}`);
    } catch (err) {
      errors.push(`${model}: ${err.message}`);
    }
  }

  res.status(500).json({
    error: "All models failed. Tried: " + errors.join(" | "),
  });
});

export default router;