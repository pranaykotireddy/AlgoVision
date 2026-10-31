export default function VariableInspector({ variables }) {
  if (!variables || Object.keys(variables).length === 0) {
    return (
      <div className="text-sm text-gray-500 p-3">
        No active variables (algorithm finished or not started).
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 p-3">
      {Object.entries(variables).map(([key, val]) => (
        <div
          key={key}
          className="bg-accent/10 border border-accent/30 rounded-lg px-3 py-2"
        >
          <div className="text-xs text-accent2 font-mono">{key}</div>
          <div className="text-white text-lg font-bold">{val}</div>
        </div>
      ))}
    </div>
  );
}