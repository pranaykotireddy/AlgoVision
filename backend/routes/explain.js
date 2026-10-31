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
      .filter((id) => !id.includes("whisper") && !id.includes("guard"));
    return AVAILABLE_MODELS;
  } catch (err) {
    return [];
  }
}

fetchAvailableModels();

// 🔥 PROMPT FOR JSON LINE-BY-LINE
const SYSTEM_PROMPT = `You are a DSA Visualizer AI. Read the provided code and return ONLY a JSON array of steps.
Each step must have:
- "line": The 1-based line number in the code (integer)
- "explanation": A short, simple explanation of what happens on that line.

Example format:
[
  {"line": 1, "explanation": "This defines a function find_max that takes an array."},
  {"line": 2, "explanation": "This initializes the maximum value to the first element."}
]

Do NOT include markdown, code blocks, or any text outside the JSON array.`;

router.post("/", async (req, res) => {
  const { code } = req.body;

  if (!code) return res.status(400).json({ error: "code is required" });

  if (AVAILABLE_MODELS.length === 0) {
    await fetchAvailableModels();
  }
  if (AVAILABLE_MODELS.length === 0) {
    return res.status(500).json({ error: "No models available." });
  }

  for (const model of AVAILABLE_MODELS) {
    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `Code:\n${code}` },
          ],
          temperature: 0.1,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        let text = data.choices[0].message.content;
        
        // 🔥 Safety Net: Extract only the JSON part
        const start = text.indexOf("[");
        const end = text.lastIndexOf("]") + 1;
        if (start === -1 || end === 0) throw new Error("No JSON found in response");
        
        const jsonStr = text.substring(start, end);
        const parsed = JSON.parse(jsonStr);
        
        return res.json(parsed);
      }
    } catch (err) {
      // Try next model
    }
  }

  res.status(500).json({ error: "All models failed to return valid JSON." });
});

export default router;