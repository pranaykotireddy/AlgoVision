import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { askAI } from "../utils/askAI";
import { FaRobot, FaPaperPlane, FaSpinner, FaMagic } from "react-icons/fa";

export default function ChatPanel({ code, language }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm your **DSA tutor**. Ask me anything about your code or any algorithm.\n\nTry clicking **Explain my code** to get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (text, isExplain = false) => {
    if (!text.trim() && !isExplain) return;

    const userMsg = isExplain ? "Explain my code" : text;
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setLoading(true);

    const res = await askAI({
      prompt: isExplain
        ? "Explain this code step by step in a friendly ChatGPT-style. Cover what it does, how it works, and why it matters."
        : text,
      code: isExplain ? code : undefined,
      context: isExplain ? language.label : undefined,
    });

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: res.answer },
    ]);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-full bg-card border border-white/10 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaRobot className="text-accent" />
          <span>AI Tutor</span>
        </div>
        <button
          onClick={() => sendMessage("", true)}
          disabled={loading}
          className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-accent/20 text-accent2 hover:bg-accent/30 transition-all disabled:opacity-50"
        >
          <FaMagic /> Explain my code
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-auto p-4 space-y-3 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] px-3 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-accent text-white"
                  : "bg-black/40 text-gray-200 border border-white/10"
              }`}
            >
              {msg.role === "user" ? (
                <div className="whitespace-pre-wrap">{msg.content}</div>
              ) : (
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0 leading-relaxed">
                          {children}
                        </p>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-white font-semibold">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="text-accent2">{children}</em>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 mb-2 space-y-1">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-5 mb-2 space-y-1">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed">{children}</li>
                      ),
                      code: ({ inline, children }) =>
                        inline ? (
                          <code className="bg-accent/20 text-accent2 px-1 py-0.5 rounded text-xs font-mono">
                            {children}
                          </code>
                        ) : (
                          <pre className="bg-black/60 border border-white/10 rounded-md p-2 my-2 overflow-x-auto">
                            <code className="text-green-300 text-xs font-mono">
                              {children}
                            </code>
                          </pre>
                        ),
                      h1: ({ children }) => (
                        <h1 className="text-base font-bold mb-2">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-sm font-bold mb-1.5 mt-2">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-sm font-semibold mb-1 mt-2">
                          {children}
                        </h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-2 border-accent pl-3 italic text-gray-400 my-2">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 text-gray-400 border border-white/10 text-xs">
              <FaSpinner className="animate-spin" /> Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t border-white/10 bg-black/20"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a doubt..."
          disabled={loading}
          className="flex-1 bg-bg border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-accent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="p-2 rounded-lg bg-accent hover:bg-accent/80 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
}