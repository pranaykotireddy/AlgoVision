import { useState } from "react";
import EditorPanel from "../components/EditorPanel";
import OutputPanel from "../components/OutputPanel";
import { LANGUAGES } from "../data/languages";
import { runCode } from "../utils/runCode";
import { FaPlay, FaTrash } from "react-icons/fa";

export default function Playground() {
  const [language, setLanguage] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].defaultCode);
  const [stdin, setStdin] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(lang.defaultCode);
    setResult(null);
  };

  const handleRun = async () => {
    setLoading(true);
    setResult(null);
    const res = await runCode({
      languageId: language.id,
      version: language.version,
      code,
      stdin,
    });
    setResult(res);
    setLoading(false);
  };

  const handleClear = () => {
    setCode("");
    setResult(null);
    setStdin("");
  };

  return (
    <div className="pt-24 px-6 pb-6 max-w-[1600px] mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold">
            Code <span className="text-accent2">Playground</span>
          </h1>
          <p className="text-sm text-gray-400">
            Write, run, and test your code in 7+ languages.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 text-sm transition-all"
          >
            <FaTrash /> Clear
          </button>
          <button
            onClick={handleRun}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-accent hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold transition-all"
          >
            <FaPlay /> {loading ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 h-[calc(100vh-220px)]">
        <EditorPanel
          language={language}
          onLanguageChange={handleLanguageChange}
          code={code}
          onCodeChange={setCode}
        />
        <OutputPanel
          result={result}
          loading={loading}
          stdin={stdin}
          onStdinChange={setStdin}
        />
      </div>
    </div>
  );
}
