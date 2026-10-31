import React from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-white p-6 text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-400">Oops! Something broke.</h1>
          <p className="text-gray-400 mb-6 max-w-md">
            There's a glitch in this page. Don't worry, your progress is safe.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 bg-accent hover:bg-accent/80 rounded-lg font-semibold"
            >
              Refresh Page
            </button>
            <Link
              to="/learn"
              className="px-5 py-2 border border-white/20 hover:bg-white/5 rounded-lg font-semibold"
            >
              Back to Learn
            </Link>
          </div>
          <pre className="mt-8 text-xs text-red-300 bg-black/40 p-4 rounded max-w-2xl overflow-auto">
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}