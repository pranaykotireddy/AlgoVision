import {
  FaTerminal,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function OutputPanel({
  result,
  loading,
  stdin,
  onStdinChange,
}) {
  return (
    <div className="flex flex-col h-full bg-card border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <FaTerminal className="text-accent2" />
          <span>Output</span>
        </div>
        {loading && (
          <span className="flex items-center gap-2 text-xs text-gray-400">
            <FaSpinner className="animate-spin" /> Running...
          </span>
        )}
        {!loading && result && (
          <span
            className={`flex items-center gap-2 text-xs ${
              result.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {result.success ? <FaCheckCircle /> : <FaTimesCircle />}
            {result.success ? "Success" : "Error"}
          </span>
        )}
      </div>

      <div className="px-4 py-2 border-b border-white/10 bg-black/20">
        <div className="text-xs text-gray-500 mb-1">
          Custom Input (stdin) — optional
        </div>
        <textarea
          value={stdin}
          onChange={(e) => onStdinChange(e.target.value)}
          placeholder="Input for your program..."
          rows={2}
          className="w-full bg-bg border border-white/10 rounded-md px-3 py-2 text-sm font-mono text-white outline-none focus:border-accent resize-none"
        />
      </div>

      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {loading && <div className="text-gray-500">Executing your code...</div>}

        {!loading && !result && (
          <div className="text-gray-500">
            Click <span className="text-accent">Run</span> to see output here.
          </div>
        )}

        {!loading && result && (
          <>
            {result.stdout && (
              <pre className="text-green-300 whitespace-pre-wrap mb-3">
                {result.stdout}
              </pre>
            )}
            {result.stderr && (
              <pre className="text-red-400 whitespace-pre-wrap mb-3">
                {result.stderr}
              </pre>
            )}
            {!result.stdout && !result.stderr && (
              <div className="text-gray-500">(no output)</div>
            )}
            <div className="text-xs text-gray-600 mt-4 pt-3 border-t border-white/10">
              Exit code: {result.exitCode ?? "—"}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
