import { useState } from "react";
import { runCode } from "../utils/runCode";
import axios from "axios";
import { FaPlay, FaSpinner, FaCheckCircle, FaTimesCircle, FaTerminal, FaCube } from "react-icons/fa";

export default function MiniCompiler({ code, language, onVisualize }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setResult(null);
    const res = await runCode({ languageId: language, code });
    setResult(res);
    setLoading(false);
  };

  const handleVisualizeClick = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/extract", { code });
      if (data.array && data.array.length > 0) {
        onVisualize(data.array);
      } else {
        alert("AI couldn't find an array in this code.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to analyze code.");
    }
  };

  return (
    <div className="h-full flex flex-col bg-bg rounded-lg border border-white/5 overflow-hidden">
      <div className="bg-black/30 px-4 py-2 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaTerminal className="text-accent2" /> Output
        </div>
        <div className="flex items-center gap-2">
          {!loading && result && (
            <span className={`flex items-center gap-1 text-xs ${result.success ? 'text-green-400' : 'text-red-400'}`}>
              {result.success ? <FaCheckCircle /> : <FaTimesCircle />}
              {result.success ? 'Success' : 'Error'}
            </span>
          )}
          <button 
            onClick={handleVisualizeClick}
            className="flex items-center gap-1 text-xs px-3 py-1 bg-accent2/20 text-accent2 rounded-md hover:bg-accent2/30 transition-all"
          >
            <FaCube /> Visualize
          </button>
          <button 
            id="mini-compiler-run"
            onClick={handleRun} 
            disabled={loading}
            className="flex items-center gap-1 text-xs px-3 py-1 bg-accent text-white rounded-md hover:bg-accent/80 disabled:opacity-50"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaPlay />} Run
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {loading && <div className="text-gray-500">Executing code...</div>}
        {!loading && !result && <div className="text-gray-500">Click Run to execute the code.</div>}
        {!loading && result && (
          <>
            {result.stdout && <pre className="text-green-300 whitespace-pre-wrap mb-2">{result.stdout}</pre>}
            {result.stderr && <pre className="text-red-400 whitespace-pre-wrap mb-2">{result.stderr}</pre>}
            {!result.stdout && !result.stderr && <div className="text-gray-500">(No output)</div>}
          </>
        )}
      </div>
    </div>
  );
}