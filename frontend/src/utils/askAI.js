const BACKEND_URL = "http://localhost:5000/api/chat";

export async function askAI({ prompt, code, context = "" }) {
  let userMessage = "";

  if (code && code.trim().length > 0) {
    userMessage += `Here's my ${context || ""} code:\n\n`;
    userMessage += "```\n" + code + "\n```\n\n";
    userMessage += `${prompt}\n\n`;
    userMessage += "Explain it now in a friendly, structured, ChatGPT-style way.";
  } else {
    userMessage = prompt;
  }

  try {
    const res = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content;
    return { success: true, answer: text || "No response" };
  } catch (err) {
    return { success: false, answer: `AI error: ${err.message}` };
  }
}