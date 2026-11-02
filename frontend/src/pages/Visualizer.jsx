import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import DSAScene3D from "../components/DSAScene3D"; 
import MiniCompiler from "../components/MiniCompiler";
import { ALGORITHMS } from "../utils/sortingAlgorithms";
import axios from "axios";
import { 
  FaPlay, FaPause, FaStepForward, FaRedo, 
  FaCode, FaRandom, FaRobot, FaSpinner
} from "react-icons/fa";
import Editor, { useMonaco } from "@monaco-editor/react";

// 🔥 Define the default code for EACH language
const LANGUAGES = [
  { 
    id: "python", 
    label: "Python", 
    monaco: "python", 
    defaultCode: `# Print a list to visualize\nprint([5, 2, 9, 1, 7, 3, 8, 4, 6, 10])` 
  },
  { 
    id: "javascript", 
    label: "JavaScript", 
    monaco: "javascript", 
    defaultCode: `// Print a list to visualize\nconsole.log([5, 2, 9, 1, 7, 3, 8, 4, 6, 10]);` 
  },
  { 
    id: "cpp", 
    label: "C++", 
    monaco: "cpp", 
    defaultCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 2, 9, 1, 7, 3, 8, 4, 6, 10};\n    cout << "Array: ";\n    for (int i = 0; i < 10; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}` 
  },
  { 
    id: "java", 
    label: "Java", 
    monaco: "java", 
    defaultCode: `public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 2, 9, 1, 7, 3, 8, 4, 6, 10};\n        System.out.print("Array: ");\n        for (int n : arr) System.out.print(n + " ");\n        System.out.println();\n    }\n}` 
  },
];

const DEFAULT_ARRAY = [5, 2, 9, 1, 7, 3, 8, 4, 6, 10];

const VISUALIZER_TYPES = [
  { id: "sorting", label: "1. Sorting Race" },
  { id: "array", label: "2. Array Blocks" },
  { id: "sliding-window", label: "3. Sliding Window" },
  { id: "two-pointers", label: "4. Two Pointers" },
  { id: "binary-search", label: "5. Binary Search" },
  { id: "hashing", label: "6. HashMap Buckets" },
  { id: "kadane", label: "7. Kadane's Sum" },
  { id: "linked-list", label: "8. Linked List" },
  { id: "recursion", label: "9. Recursion Stack" },
  { id: "stack", label: "10. Stack Push-Pop" },
];

function randomArray(size = 10, max = 20) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
}

export default function Visualizer() {
  const location = useLocation();
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const decorationsRef = useRef([]);

  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]); 
  const [visualizerType, setVisualizerType] = useState("sorting"); 
  const [code, setCode] = useState(location.state?.code || LANGUAGES[0].defaultCode);
  
  const [algorithm] = useState("bubble");
  const [array, setArray] = useState(DEFAULT_ARRAY);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);

  const [aiExplanation, setAiExplanation] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const [leftWidth, setLeftWidth] = useState(40);
  const [topHeight, setTopHeight] = useState(60);
  const [isDraggingX, setIsDraggingX] = useState(false);
  const [isDraggingY, setIsDraggingY] = useState(false);
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);

  const playRef = useRef(null);

  // Generate steps when array changes
  useEffect(() => {
    if (visualizerType === "sorting") {
      const gen = ALGORITHMS[algorithm].generator;
      const newSteps = gen(array);
      setSteps(newSteps);
      setCurrentStep(0);
      setIsPlaying(false);
    }
  }, [array, algorithm, visualizerType]);

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) {
      if (playRef.current) clearTimeout(playRef.current);
      return;
    }
    if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }
    playRef.current = setTimeout(() => {
      setCurrentStep((s) => s + 1);
    }, speed);
    return () => clearTimeout(playRef.current);
  }, [isPlaying, currentStep, steps, speed]);

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

  const handlePlayPause = () => {
    if (currentStep >= steps.length - 1) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((p) => !p);
    }
  };

  const handleStep = () => {
    setIsPlaying(false);
    setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setAiExplanation("");
  };

  const handleShuffle = () => {
    setArray(randomArray());
    setIsPlaying(false);
  };

  const handleVisualizeArray = (newArray) => {
    setArray(newArray);
    setIsPlaying(false);
  };

  const handleExplainWithAI = async () => {
    setAiLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/explain", { code });
      if (Array.isArray(res.data)) setAiExplanation(res.data);
    } catch (err) {
        console.warn("AI Explain failed, using fallback");
        const lines = code.split("\n");
        setAiExplanation(lines.map((line, idx) => ({ line: idx + 1, explanation: line.trim() || "(empty)" })));
    }
    setAiLoading(false);
  };

  const currentState = steps[currentStep] || { array, comparing: null, swapped: null };
  const progress = steps.length > 1 ? ((currentStep + 1) / steps.length) * 100 : 0;
  const isDone = currentStep >= steps.length - 1;

  return (
    <div className="pt-24 px-4 pb-4 h-screen flex flex-col max-w-[2000px] mx-auto select-none">
      
      {/* Top Bar */}
      <div className="bg-card border border-white/10 rounded-xl p-3 mb-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-4">
          
          {/* 🔥 LANGUAGE DROPDOWN */}
          <select
            value={selectedLang.id}
            onChange={(e) => {
              const newLang = LANGUAGES.find(l => l.id === e.target.value);
              setSelectedLang(newLang);       // Changes the Monaco syntax highlighter
              setCode(newLang.defaultCode);   // Loads the default code for that language
            }}
            className="bg-bg border border-white/20 text-sm px-3 py-1.5 rounded-lg text-white font-semibold"
          >
            {LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>{lang.label}</option>
            ))}
          </select>

          {/* VISUALIZER DROPDOWN */}
          <select
            value={visualizerType}
            onChange={(e) => setVisualizerType(e.target.value)}
            className="bg-bg border border-white/20 text-sm px-3 py-1.5 rounded-lg text-accent2 font-semibold"
          >
            {VISUALIZER_TYPES.map((type) => (
              <option key={type.id} value={type.id}>{type.label}</option>
            ))}
          </select>

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
            <button onClick={handleShuffle} className="px-3 py-1.5 rounded-lg border border-white/20 text-sm">
              <FaRandom />
            </button>
          </div>

          <div className="flex items-center gap-2 w-48">
            <span className="text-xs text-gray-400">Speed</span>
            <input
              type="range" min="100" max="1000" step="100"
              value={1100 - speed}
              onChange={(e) => setSpeed(1100 - parseInt(e.target.value))}
              className="flex-1 accent-accent"
            />
          </div>
        </div>

        <div className="text-xs text-gray-400 font-mono">
          Step {currentStep + 1} / {steps.length}
        </div>
      </div>

      {/* Main Layout */}
      <div ref={containerRef} className="flex-1 min-h-0 flex flex-row gap-0">
        
        <div ref={leftPanelRef} style={{ width: `${leftWidth}%` }} className="flex flex-col min-h-0 pr-2 gap-2">
          
          <div style={{ height: `${topHeight}%` }} className="bg-card border border-white/10 rounded-xl overflow-hidden flex flex-col">
            <div className="bg-black/30 px-4 py-2 border-b border-white/10 flex items-center gap-2 text-sm text-gray-300">
              <FaCode /> Source Code ({selectedLang.label})
            </div>
            <div className="flex-1 min-h-0">
              <Editor
                height="100%"
                language={selectedLang.monaco} // 🔥 Dynamic syntax highlighting based on dropdown
                value={code}
                onChange={(val) => setCode(val || "")}
                onMount={(editor) => { editorRef.current = editor; }}
                theme="vs-dark"
                options={{ readOnly: false, minimap: { enabled: false }, fontSize: 13 }}
              />
            </div>
          </div>

          <div onMouseDown={() => setIsDraggingY(true)} className="h-2 w-full flex items-center justify-center cursor-row-resize hover:bg-white/10 rounded-md">
            <div className="w-16 h-1 bg-gray-600 rounded-full" />
          </div>

          {/* Compiler Panel */}
          <div className="h-1/3 bg-card border border-white/10 rounded-xl overflow-hidden">
            <MiniCompiler 
              code={code} 
              language={selectedLang.id} 
              onVisualize={handleVisualizeArray} 
            />
          </div>

          {/* AI Explanation Panel */}
          <div className="flex-1 bg-card border border-white/10 rounded-xl flex flex-col overflow-hidden">
            <div className="bg-black/30 px-4 py-2 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-accent">
                <FaRobot /> AI Explanation
              </div>
              <button onClick={handleExplainWithAI} disabled={aiLoading} className="text-xs px-3 py-1 bg-accent/20 text-accent2 rounded-md hover:bg-accent/30 flex items-center gap-1 transition-all">
                {aiLoading ? <FaSpinner className="animate-spin" /> : "Explain"}
              </button>
            </div>
            <div className="p-4 overflow-auto text-sm text-gray-300 font-sans">
              {Array.isArray(aiExplanation) ? (
                aiExplanation.map((step, i) => (
                  <div key={i} className="mb-2">
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

        {/* 3D VISUALIZER SCENE */}
        <div className="flex-1 bg-card border border-white/10 rounded-xl overflow-hidden relative">
          <DSAScene3D
            type={visualizerType}
            array={currentState.array || array}
            comparing={currentState.comparing}
            swapped={currentState.swapped}
          />
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <div className="h-full bg-gradient-to-r from-accent to-accent2 transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>

      </div>
    </div>
  );
}