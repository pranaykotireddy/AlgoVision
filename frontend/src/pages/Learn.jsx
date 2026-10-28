import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TOPICS, CATEGORIES, DIFFICULTIES } from "../data/topics";
import { FaArrowRight } from "react-icons/fa";

const DIFFICULTY_COLORS = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function Learn() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = TOPICS.filter((topic) => {
    if (categoryFilter !== "All" && topic.category !== categoryFilter) return false;
    if (difficultyFilter !== "All" && topic.difficulty !== difficultyFilter)
      return false;
    if (
      search &&
      !topic.title.toLowerCase().includes(search.toLowerCase()) &&
      !topic.shortDesc.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="pt-24 px-6 pb-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2">
          Learn{" "}
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            DSA
          </span>
        </h1>
        <p className="text-gray-400">
          Master data structures & algorithms with clear explanations, code
          examples, and interview notes.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search topics..."
          className="px-4 py-2 rounded-lg bg-card border border-white/10 text-sm outline-none focus:border-accent min-w-[220px]"
        />

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400">Category:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                categoryFilter === cat
                  ? "bg-accent text-white"
                  : "bg-card border border-white/10 text-gray-300 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400">Difficulty:</span>
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficultyFilter(d)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                difficultyFilter === d
                  ? "bg-accent text-white"
                  : "bg-card border border-white/10 text-gray-300 hover:bg-white/5"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Topic grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((topic, i) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Link
              to={`/learn/${topic.id}`}
              className="block p-6 rounded-2xl bg-card border border-white/10 hover:border-accent/50 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{topic.icon}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-md border ${DIFFICULTY_COLORS[topic.difficulty]}`}
                >
                  {topic.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-1 group-hover:text-accent2 transition-colors">
                {topic.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">{topic.category}</p>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {topic.shortDesc}
              </p>

              <div className="flex items-center gap-1 text-xs text-accent2">
                Start learning <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          No topics match your filters.
        </div>
      )}
    </div>
  );
}