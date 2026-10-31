import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TOPICS } from "../data/topics";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaArrowLeft,
  FaLightbulb,
  FaBookOpen,
  FaCode,
  FaCheckCircle,
  FaChartLine,
  FaListUl,
  FaExternalLinkAlt,
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
      <button
        onClick={() => navigate("/learn")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <FaArrowLeft /> Back to topics
      </button>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{topic.icon || "📚"}</span>
          <div>
            <h1 className="text-3xl font-extrabold">{topic.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500">{topic.category}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-md border ${DIFFICULTY_COLORS[topic.difficulty] || "bg-gray-500/20 text-gray-400"}`}
              >
                {topic.difficulty || "Unknown"}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-lg">{topic.shortDesc || "No description available."}</p>
      </div>

      {/* Deep Theory / Concept */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaBookOpen className="text-accent" /> Core Concepts
        </h2>
        <div className="bg-card border border-white/10 rounded-xl p-8 relative">
          <div className="prose prose-invert max-w-none text-gray-300">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                strong: ({node, ...props}) => <strong className="font-semibold text-accent2" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-300" {...props} />,
                code: ({node, inline, className, children, ...props}) => {
                  return !inline ? (
                    <div className="bg-black/60 border border-white/10 rounded-lg p-4 my-4 overflow-x-auto">
                      <code className="text-green-300 text-sm font-mono" {...props}>
                        {children}
                      </code>
                    </div>
                  ) : (
                    <code className="bg-white/10 text-accent2 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {topic.theory || topic.explanation || "Detailed theory coming soon..."}
            </ReactMarkdown>
          </div>

          {/* CONCEPT LINK FOR EXTRA INFO */}
          {topic.tutorialLink && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <a 
                href={topic.tutorialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent2 hover:text-accent transition-colors"
              >
                <FaExternalLinkAlt size={12} />
                Read more about {topic.title.replace(/^\d+\.\s*/, '')} on GeeksforGeeks
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Complexity Table */}
      {topic.complexity && Array.isArray(topic.complexity) && topic.complexity.length > 0 && (
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
            <FaChartLine className="text-accent2" /> Complexity Analysis
          </h2>
          <div className="bg-card border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-black/30 text-gray-400 border-b border-white/10">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {topic.complexity.map((c, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium">{c.op}</td>
                    <td className="px-4 py-3 text-accent2 font-mono">{c.time}</td>
                    <td className="px-4 py-3 text-gray-500 font-mono">{c.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Code Examples */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaCode className="text-accent" /> Code Implementation
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
            {topic.codeExamples?.[activeLang] || "// Code coming soon"}
          </pre>
        </div>
      </section>

      {/* Practice Problems */}
      {topic.problems && (
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
            <FaListUl className="text-accent2" /> Practice Problems
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Easy", "Medium", "Hard"].map((level) => (
              topic.problems[level] && topic.problems[level].length > 0 && (
                <div key={level} className="bg-card border border-white/10 rounded-xl p-5">
                  <h3 className={`text-sm font-bold mb-3 ${level === 'Easy' ? 'text-green-400' : level === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                    {level}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {topic.problems[level].map((prob, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 text-[10px]">▶</span> {prob}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Interview points */}
      <section className="mb-10">
        <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
          <FaLightbulb className="text-yellow-400" /> Interview Important Points
        </h2>
        <div className="bg-card border border-white/10 rounded-xl p-6">
          {topic.interviewPoints && topic.interviewPoints.length > 0 ? (
            <ul className="space-y-3">
              {topic.interviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm">Interview tips coming soon.</p>
          )}
        </div>
      </section>
    </div>
  );
}