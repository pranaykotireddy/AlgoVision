import express from "express";

const router = express.Router();

const SYSTEM_PROMPT = `You are a code execution tracer.
Read the user's code and simulate its execution step-by-step.
Return a JSON array of "frames". Each frame represents a single line execution.

Each frame MUST have:
- "line": the 1-based line number being executed (integer)
- "array": the current state of the main array (array of numbers). If no array exists, return [].
- "variables": an object of all current variables (e.g. {"i": 0, "max": 5})
- "output": the console output up to this point (string)
- "description": a short sentence explaining what happened

Example for:
arr = [5, 2]
max = arr[0]
for i in range(1, 2):
  if arr[i] > max:
    max = arr[i]
print("Done")

Return:
[
  {"line": 1, "array": [5,2], "variables": {"arr": [5,2]}, "output": "", "description": "Initialize array"},
  {"line": 2, "array": [5,2], "variables": {"arr": [5,2], "max": 5}, "output": "", "description": "Set max to first element"},
  {"line": 3, "array": [5,2], "variables": {"arr": [5,2], "max": 5, "i": 1}, "output": "", "description": "Loop i=1"},
  {"line": 4, "array": [5,2], "variables": {"arr": [5,2], "max": 5, "i": 1}, "output": "", "description": "Compare arr[1] > max"},
  {"line": 5, "array": [5,2], "variables": {"arr": [5,2], "max": 5, "i": 1}, "output": "", "description": "Condition false, skip"},
  {"line": 6, "array": [5,2], "variables": {"arr": [5,2], "max": 5, "i": 1}, "output": "Done\\n", "description": "Print Done"}
]

Return ONLY valid JSON, no markdown. Ensure the JSON is a flat array of objects.`;

router.post("/", async (req, res) => {
  const { code, language } = req.body;

  if (!code) return res.status(400).json({ error: "Code required" });

  try {
    // Use Groq to simulate
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // You can change this to whatever model works best for you
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Language: ${language || "python"}\n\nCode:\n${code}` },
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }, // Forces the AI to output valid JSON
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Groq API error");

    let text = data.choices[0].message.content;
    
    // Sometimes the AI wraps the array in an object like { "frames": [...] }
    // We clean up to ensure we grab the array
    let jsonStr = text.trim();
    if (jsonStr.startsWith("{") && jsonStr.includes("[")) {
      const start = jsonStr.indexOf("[");
      const end = jsonStr.lastIndexOf("]") + 1;
      jsonStr = jsonStr.substring(start, end);
    }

    const frames = JSON.parse(jsonStr);

    // If the AI returned an object with a "frames" key by mistake, extract it
    const finalFrames = Array.isArray(frames) ? frames : (frames.frames || []);

    res.json(finalFrames);
  } catch (err) {
    console.error("Trace error:", err);
    res.status(500).json({ error: err.message || "Failed to trace code" });
  }
});

export default router;