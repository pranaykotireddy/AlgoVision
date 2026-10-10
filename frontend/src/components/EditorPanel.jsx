import Editor from "@monaco-editor/react";
import { LANGUAGES } from "../data/languages";

export default function EditorPanel({
  language,
  onLanguageChange,
  code,
  onCodeChange,
}) {
  return (
    <div className="flex flex-col h-full bg-card border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Language:</span>
          <select
            value={language.id}
            onChange={(e) => {
              const found = LANGUAGES.find((l) => l.id === e.target.value);
              if (found) onLanguageChange(found);
            }}
            className="bg-bg border border-white/20 text-sm px-3 py-1 rounded-md text-white outline-none focus:border-accent"
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <span className="text-xs text-gray-500 font-mono">
          main.{language.id}
        </span>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={language.monaco}
          value={code}
          onChange={(v) => onCodeChange(v || "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "JetBrains Mono, monospace",
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 },
            automaticLayout: true,
            tabSize: 4,
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  );
}
