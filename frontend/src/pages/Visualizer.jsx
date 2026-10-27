import { useState, useEffect, useRef, useCallback } from "react";
import SortVisualizer3D from "../components/SortVisualizer3D";
import { ALGORITHMS } from "../utils/sortingAlgorithms";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaRedo,
  FaRandom,
} from "react-icons/fa";

const DEFAULT_ARRAY = [5, 2, 9, 1, 7, 3, 8, 4, 6, 10];

function randomArray(size = 10, max = 20) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * max) + 1
  );
}

export default function Visualizer() {
  const [algorithm, setAlgorithm] = useState("bubble");
  const [array, setArray] = useState(DEFAULT_ARRAY);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300); // ms per step

  const playRef = useRef(null);

  // Regenerate steps whenever array or algorithm changes
  useEffect(() => {
    const gen = ALGORITHMS[algorithm].generator;
    const newSteps = gen(array);
    setSteps(newSteps);
    setCurrentStep(0);
    setIsPlaying(false);
  }, [array, algorithm]);

  // Auto-advance when playing
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
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }, speed);

    return () => clearTimeout(playRef.current);
  }, [isPlaying, currentStep, steps, speed]);

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
  };

  const handleShuffle = () => {
    setArray(randomArray());
    setIsPlaying(false);
  };

  const handleArraySizeChange = (size) => {
    setArray(randomArray(size, size * 2));
  };

  const currentState = steps[currentStep] || { array, comparing: null, swapped: null };
  const progress = steps.length > 1 ? ((currentStep + 1) / steps.length) * 100 : 0;
  const isDone = currentStep >= steps.length - 1;

  return (
    <div className="pt-24 px-6 pb-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          3D <span className="text-accent2">Visualizer</span>
        </h1>
        <p className="text-sm text-gray-400">
          Watch sorting algorithms come alive. Drag to rotate, scroll to zoom.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-card border border-white/10 rounded-xl p-4 mb-4 space-y-4">
        {/* Row 1: Algorithm + Array size */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Algorithm:</span>
            <select
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              className="bg-bg border border-white/20 text-sm px-3 py-1 rounded-md text-white outline-none focus:border-accent"
            >
              {Object.entries(ALGORITHMS).map(([key, algo]) => (
                <option key={key} value={key}>
                  {algo.name} ({algo.complexity})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">Size:</span>
            <select
              value={currentState.array.length}
              onChange={(e) => handleArraySizeChange(parseInt(e.target.value))}
              className="bg-bg border border-white/20 text-sm px-3 py-1 rounded-md text-white outline-none focus:border-accent"
            >
              {[5, 8, 10, 12, 15, 20].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <span className="text-xs text-gray-400 whitespace-nowrap">
              Speed:
            </span>
            <input
              type="range"
              min="50"
              max="1000"
              step="50"
              value={1050 - speed}
              onChange={(e) => setSpeed(1050 - parseInt(e.target.value))}
              className="flex-1 accent-accent"
            />
            <span className="text-xs text-gray-500 w-12">
              {1050 - speed}ms
            </span>
          </div>
        </div>

        {/* Row 2: Playback buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-accent hover:bg-accent/80 font-semibold text-sm transition-all"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            {isPlaying ? "Pause" : isDone ? "Replay" : "Play"}
          </button>

          <button
            onClick={handleStep}
            disabled={isDone}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 text-sm transition-all disabled:opacity-50"
          >
            <FaStepForward /> Step
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 text-sm transition-all"
          >
            <FaRedo /> Reset
          </button>

          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 text-sm transition-all"
          >
            <FaRandom /> Shuffle
          </button>

          <div className="ml-auto text-xs text-gray-400 font-mono">
            Step {currentStep + 1} / {steps.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent2 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="bg-card border border-white/10 rounded-xl overflow-hidden h-[calc(100vh-380px)] min-h-[400px]">
        <SortVisualizer3D
          array={currentState.array}
          comparing={currentState.comparing}
          swapped={currentState.swapped}
        />
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-accent" /> Default
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-yellow-400" /> Comparing
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-red-500" /> Swapping
        </div>
      </div>
    </div>
  );
}