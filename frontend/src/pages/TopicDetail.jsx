import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TOPICS } from "../data/topicsPart1";
import {
  FaArrowLeft,
  FaLightbulb,
  FaBookOpen,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const LANGS = ["python", "cpp", "java", "js"];
const LANG_LABELS = { python: "Python", cpp: "C++", java: "Java", js: "JavaScript" };

const DIFFICULTY_COLORS = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function TopicDetail() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === topicId);
  const [activeLang, setActiveLang] = useState("python");

  if (!topic) {
    return (
      <div className="pt-32 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
        <Link to="/learn" className="text-accent2 hover:underline">
          ← Back to all topics
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 pb-16 max-w-5xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate("/learn")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <FaArrowLeft /> Back to topics
      </button>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{topic.icon}</span>
          <div>
            <h1 className="text-3xl font-extrabold">{topic.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">{topic.category}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-md border ${DIFFICULTY_COLORS[topic.difficulty]}`}
              >
                {topic.difficulty}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-400">{topic.shortDesc}</p>
      </div>

      {/* Explanation */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaBookOpen className="text-accent" /> Explanation
        </h2>
        <div className="bg-card border border-white/10 rounded-xl p-6">
          <pre className="whitespace-pre-wrap text-sm text-gray-300 font-sans leading-relaxed">
            {topic.explanation}
          </pre>
        </div>
      </section>

      {/* Code examples */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaCode className="text-accent" /> Code Examples
        </h2>
        <div className="bg-card border border-white/10 rounded-xl overflow-hidden">
          <div className="flex border-b border-white/10 bg-black/30">
            {LANGS.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  activeLang === lang
                    ? "text-accent2 border-b-2 border-accent2"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {LANG_LABELS[lang]}
              </button>
            ))}
          </div>
          <pre className="p-4 text-sm font-mono text-green-300 overflow-x-auto">
            {topic.codeExamples[activeLang]}
          </pre>
        </div>
      </section>

      {/* Interview points */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaLightbulb className="text-yellow-400" /> Interview Important Points
        </h2>
        <div className="bg-card border border-white/10 rounded-xl p-6">
          <ul className="space-y-3">
            {topic.interviewPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 border-t border-white/10">
        <p className="text-gray-400 mb-4">
          Want to practice with AI explanation?
        </p>
        <Link
          to="/playground"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent/80 font-semibold transition-all"
        >
          Try in Playground →
        </Link>
      </section>
    </div>
  );
}