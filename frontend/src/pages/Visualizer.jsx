import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CodeScene3D from "../components/CodeScene3D";
import MiniCompiler from "../components/MiniCompiler";
import axios from "axios"; 
import { 
  FaPlay, FaPause, FaStepForward, FaRedo, 
  FaCode, FaTerminal, FaSpinner, FaRobot
} from "react-icons/fa";
import Editor, { useMonaco } from "@monaco-editor/react";

const LANGUAGES = [
  { id: "python", label: "Python (Tracer)", monaco: "python", defaultCode: `# Print a list to visualize\narr = [5, 2, 9, 1, 7]\nmax_val = max(arr)\nprint("Max:", max_val)` },
];

export default function Visualizer() {
  const location = useLocation();
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const decorationsRef = useRef([]);

  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(location.state?.code || LANGUAGES[0].defaultCode);
  
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [isTracing, setIsTracing] = useState(false);
  
  const [aiExplanation, setAiExplanation] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const [leftWidth, setLeftWidth] = useState(40);
  const [topHeight, setTopHeight] = useState(60);
  const [isDraggingX, setIsDraggingX] = useState(false);
  const [isDraggingY, setIsDraggingY] = useState(false);
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);

  const playRef = useRef(null);
  const aiPlayRef = useRef(null);

  // Line highlight
  useEffect(() => {
    const activeLine = frames[currentFrame]?.line;
    if (editorRef.current && monaco && activeLine) {
      const decorations = [
        {
          range: new monaco.Range(activeLine, 1, activeLine, 1),
          options: { isWholeLine: true, className: "myLineDecoration" },
        },
      ];
      decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, decorations);
    } else if (editorRef.current && monaco) {
      decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, []);
    }
  }, [currentFrame, frames, monaco]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) {
      if (playRef.current) clearTimeout(playRef.current);
      return;
    }
    if (currentFrame >= frames.length - 1) {
      setIsPlaying(false);
      return;
    }
    playRef.current = setTimeout(() => {
      setCurrentFrame((c) => c + 1);
    }, speed);
    return () => clearTimeout(playRef.current);
  }, [isPlaying, currentFrame, frames, speed]);

  // Drag Resize
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggingX && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
        if (newWidth > 20 && newWidth < 80) setLeftWidth(newWidth);
      }
      if (isDraggingY && leftPanelRef.current) {
        const rect = leftPanelRef.current.getBoundingClientRect();
        const newHeight = ((e.clientY - rect.top) / rect.height) * 100;
        if (newHeight > 20 && newHeight < 80) setTopHeight(newHeight);
      }
    };
    const handleMouseUp = () => {
      setIsDraggingX(false);
      setIsDraggingY(false);
    };
    if (isDraggingX || isDraggingY) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingX, isDraggingY]);

  const handleTrace = async () => {
    setIsTracing(true);
    setFrames([]);
    setCurrentFrame(0);
    setIsPlaying(false);

    try {
      const res = await axios.post("http://localhost:5000/api/trace", { code, language: selectedLang.id });
      setFrames(res.data);
      setIsPlaying(true);
    } catch (err) {
      alert("Trace failed. Check backend terminal for errors.");
      console.error(err);
    }
    setIsTracing(false);
  };

  const handlePlayPause = () => {
    if (frames.length === 0) return handleTrace();
    if (currentFrame >= frames.length - 1) {
      setCurrentFrame(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((p) => !p);
    }
  };

  const handleStep = () => {
    if (frames.length === 0) return handleTrace();
    setIsPlaying(false);
    setCurrentFrame((c) => Math.min(c + 1, frames.length - 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentFrame(0);
    setAiExplanation("");
    if (aiPlayRef.current) clearInterval(aiPlayRef.current);
  };

  const handleExplainWithAI = async () => {
    setAiLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/explain", { code });
      if (Array.isArray(res.data)) setAiExplanation(res.data);
    } catch (err) {
      const lines = code.split("\n");
      setAiExplanation(lines.map((line, idx) => ({ line: idx + 1, explanation: line.trim() || "(empty)" })));
    }
    setAiLoading(false);
  };

  const handleRunCode = () => {
    const runBtn = document.getElementById("mini-compiler-run");
    if (runBtn) runBtn.click();
  };

  const handleVisualizeArray = (newArray) => {
    setFrames([{ line: 1, variables: { arr: newArray }, output: "" }]);
    setCurrentFrame(0);
    setIsPlaying(false);
    setAiExplanation("");
  };

  const currentState = frames[currentFrame] || { line: 0, variables: {}, output: "" };
  
  let currentArray = currentState.array;
  if (!currentArray && currentState.variables) {
    const arrKey = Object.keys(currentState.variables).find(k => Array.isArray(currentState.variables[k]));
    if (arrKey) currentArray = currentState.variables[arrKey];
  }

  const progress = frames.length > 1 ? ((currentFrame + 1) / frames.length) * 100 : 0;
  const isDone = currentFrame >= frames.length - 1;

  return (
    <div className="pt-24 px-4 pb-4 h-screen flex flex-col max-w-[2000px] mx-auto select-none">
      
      {/* Top Bar (NO CUSTOM INPUT) */}
      <div className="bg-card border border-white/10 rounded-xl p-3 mb-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-4">
          <select value={selectedLang.id} className="bg-bg border border-white/20 text-sm px-3 py-1.5 rounded-lg text-white font-semibold">
            {LANGUAGES.map((lang) => <option key={lang.id} value={lang.id}>{lang.label}</option>)}
          </select>

          <button onClick={handleTrace} disabled={isTracing} className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-accent2/50 text-accent2 hover:bg-accent2/10 text-sm font-semibold">
            {isTracing ? <FaSpinner className="animate-spin" /> : <FaTerminal />} Trace Code
          </button>

          <div className="flex items-center gap-2">
            <button onClick={handlePlayPause} className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-white text-sm font-semibold">
              {isPlaying ? <FaPause /> : <FaPlay />} {isPlaying ? "Pause" : isDone ? "Replay" : "Play"}
            </button>
            <button onClick={handleStep} disabled={isDone} className="px-3 py-1.5 rounded-lg border border-white/20 text-sm">
              <FaStepForward />
            </button>
            <button onClick={handleReset} className="px-3 py-1.5 rounded-lg border border-white/20 text-sm">
              <FaRedo />
            </button>
          </div>

          <div className="flex items-center gap-2 w-48">
            <span className="text-xs text-gray-400">Speed</span>
            <input type="range" min="100" max="1000" step="100" value={1100 - speed} onChange={(e) => setSpeed(1100 - parseInt(e.target.value))} className="flex-1 accent-accent" />
          </div>
        </div>

        <div className="text-xs text-gray-400 font-mono">
          Step {frames.length > 0 ? currentFrame + 1 : 0} / {frames.length}
        </div>
      </div>

      {/* Main Layout */}
      <div ref={containerRef} className="flex-1 min-h-0 flex flex-row gap-0">
        
        <div ref={leftPanelRef} style={{ width: `${leftWidth}%` }} className="flex flex-col min-h-0 pr-2 gap-2">
          
          <div style={{ height: `${topHeight}%` }} className="bg-card border border-white/10 rounded-xl overflow-hidden flex flex-col">
            <div className="bg-black/30 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-300"><FaCode /> Source Code</div>
              <button onClick={handleRunCode} className="flex items-center gap-1 text-xs px-3 py-1 bg-accent text-white rounded-md">
                <FaPlay /> Run
              </button>
            </div>
            <div className="flex-1 min-h-0">
              <Editor height="100%" language={selectedLang.monaco} value={code} onChange={(val) => setCode(val || "")} onMount={(editor) => { editorRef.current = editor; }} theme="vs-dark" options={{ readOnly: false, minimap: { enabled: false }, fontSize: 13 }} />
            </div>
          </div>

          <div onMouseDown={() => setIsDraggingY(true)} className="h-2 w-full flex items-center justify-center cursor-row-resize hover:bg-white/10 rounded-md">
            <div className="w-16 h-1 bg-gray-600 rounded-full" />
          </div>

          <div className="h-1/4 bg-card border border-white/10 rounded-xl overflow-hidden">
            <MiniCompiler code={code} language={selectedLang.id} onVisualize={handleVisualizeArray} />
          </div>

          <div className="flex-1 bg-card border border-white/10 rounded-xl flex flex-col overflow-hidden">
            <div className="bg-black/30 px-4 py-2 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-accent"><FaRobot /> AI Explanation</div>
              <button onClick={handleExplainWithAI} disabled={aiLoading} className="text-xs px-3 py-1 bg-accent/20 text-accent2 rounded-md">
                {aiLoading ? <FaSpinner className="animate-spin" /> : "Explain"}
              </button>
            </div>
            <div className="p-4 overflow-auto text-sm text-gray-300 font-sans">
              {Array.isArray(aiExplanation) ? (
                aiExplanation.map((step, i) => (
                  <div key={i} className={`p-2 rounded-lg mb-2 ${currentState.line === step.line ? 'bg-accent/20 border-l-4 border-accent' : 'border-l-4 border-transparent'}`}>
                    <span className="font-bold text-accent2 text-xs">Line {step.line}</span>
                    <p className="mt-1">{step.explanation}</p>
                  </div>
                ))
              ) : (
                "Click 'Explain' to get a line-by-line AI explanation."
              )}
            </div>
          </div>
        </div>

        <div onMouseDown={() => setIsDraggingX(true)} className="w-2 flex items-center justify-center cursor-col-resize hover:bg-white/10 rounded-md">
          <div className="h-16 w-1 bg-gray-600 rounded-full" />
        </div>

        <div className="flex-1 bg-card border border-white/10 rounded-xl overflow-hidden relative flex flex-col">
          <div className="flex-1 relative">
            <CodeScene3D variables={currentState.variables} array={currentArray} activeLine={currentState.line} />
          </div>
          
          <div className="h-1/3 flex border-t border-white/10 bg-black/30">
            <div className="w-1/2 border-r border-white/10 p-4 overflow-auto font-mono text-xs">
              <div className="text-gray-400 mb-2">Variables</div>
              {Object.entries(currentState.variables || {}).map(([k, v]) => (
                <div key={k} className="flex gap-2 mb-1">
                  <span className="text-accent2">{k}:</span>
                  <span className="text-white">{JSON.stringify(v)}</span>
                </div>
              ))}
            </div>
            <div className="w-1/2 p-4 overflow-auto font-mono text-xs text-green-300 whitespace-pre-wrap">
              <div className="text-gray-400 mb-2">Console</div>
              {currentState.output || "(no output)"}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <div className="h-full bg-gradient-to-r from-accent to-accent2 transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>

      </div>
    </div>
  );
}