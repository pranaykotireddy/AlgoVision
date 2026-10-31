export default function ComplexityPanel({ algorithm }) {
  return (
    <div className="p-4 space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-400">Time</span>
        <span className="text-accent2 font-mono">{algorithm.timeComplexity}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Space</span>
        <span className="text-accent2 font-mono">{algorithm.spaceComplexity}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Best Case</span>
        <span className="text-green-400 font-mono">{algorithm.bestCase}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Worst Case</span>
        <span className="text-red-400 font-mono">{algorithm.worstCase}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Stable</span>
        <span className={algorithm.stable ? "text-green-400" : "text-red-400"}>
          {algorithm.stable ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
}