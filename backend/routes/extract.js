import express from "express";

const router = express.Router();

const SYSTEM_PROMPT = `You are a JSON API. Read the code and extract the array.
Return ONLY valid JSON like this:
{"array": [1, 2, 3], "algorithm": "bubble"}
Do NOT include markdown, code blocks, or any text.`;

router.post("/", async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "code is required" });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", 
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Code:\n${code}` },
        ],
        temperature: 0.1,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "API error");

    let text = data.choices[0].message.content;
    
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;
    if (start === -1 || end === 0) throw new Error("No JSON found in response");
    
    const jsonStr = text.substring(start, end);
    const parsed = JSON.parse(jsonStr);
    
    res.json(parsed);
  } catch (err) {
    console.error("Extract error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;