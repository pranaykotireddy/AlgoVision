import express from "express";

const router = express.Router();

const API_KEY = "bf1872420111e4f238fe7eb19819adca";
const API_URL = "https://api.onlinecompiler.io/api/run-code-sync/";

// Map frontend IDs to OnlineCompiler.io compiler IDs
const COMPILERS = {
  python: "python-3.14",
  javascript: "nodejs-24",
  cpp: "cpp-gcc-13",
  java: "java-21",
  c: "c-gcc-13",
  go: "go-1.22",
  rust: "rust-1.75",
};

router.post("/", async (req, res) => {
  const { language, code, stdin } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "language and code are required" });
  }

  const compiler = COMPILERS[language] || COMPILERS.python;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_KEY,
      },
      body: JSON.stringify({
        compiler: compiler,
        code: code,
        input: stdin || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Compiler API error:", data);
      return res.status(response.status).json({
        error: data.message || "Compiler API error",
      });
    }

    res.json(data);
  } catch (err) {
    console.error("Backend compiler error:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

export default router;