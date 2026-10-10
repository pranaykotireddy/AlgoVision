/**
 * Multi-provider AI caller with automatic fallback.
 * Tries Pollinations first, then falls back to other free endpoints.
 */

export async function askAI({ prompt, code, context = "" }) {
  const fullPrompt = buildPrompt({ prompt, code, context });

  // Provider 1: Pollinations (usually reliable, sometimes rate-limited)
  try {
    const res = await fetch(
      `https://text.pollinations.ai/${encodeURIComponent(fullPrompt)}`,
      { method: "GET" }
    );
    if (res.ok) {
      const text = await res.text();
      if (text && text.trim().length > 5) {
        return { success: true, answer: text.trim() };
      }
    }
  } catch (e) {
    console.warn("Pollinations failed:", e.message);
  }

  // Provider 2: Pollinations POST API (different endpoint)
  try {
    const res = await fetch("https://text.pollinations.ai/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are a friendly DSA tutor. Explain in simple language. Keep answers under 200 words. Plain text only.",
          },
          { role: "user", content: fullPrompt },
        ],
        model: "openai",
      }),
    });
    if (res.ok) {
      const text = await res.text();
      if (text && text.trim().length > 5) {
        return { success: true, answer: text.trim() };
      }
    }
  } catch (e) {
    console.warn("Pollinations POST failed:", e.message);
  }

  // Provider 3: DuckDuckGo AI Chat (unofficial, works often)
  try {
    const res = await fetch(
      `https://api.duckduckgo.com/?q=${encodeURIComponent(fullPrompt)}&format=json&no_html=1`
    );
    if (res.ok) {
      const data = await res.json();
      if (data.AbstractText) {
        return { success: true, answer: data.AbstractText };
      }
    }
  } catch (e) {
    console.warn("DDG failed:", e.message);
  }

  // All failed
  return {
    success: false,
    answer:
      "The AI service is temporarily unavailable. Please try again in a few seconds.\n\nTip: The free tiers of these APIs are often rate-limited. Wait 30 seconds and retry.",
  };
}

function buildPrompt({ prompt, code, context }) {
  return `You are a friendly DSA (Data Structures & Algorithms) tutor.

Rules:
- Explain in simple, beginner-friendly language
- Keep answers short and focused (under 200 words)
- If code is provided, reference specific lines
- Plain text only, no markdown

${context ? `Context: ${context}\n` : ""}
${code ? `Here is my code:\n${code}\n` : ""}

User question: ${prompt}

Answer:`;
}