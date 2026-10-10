import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaCube, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Code Playground",
      desc: "Write & run code in 40+ languages instantly in your browser.",
      color: "from-purple-500 to-pink-500",
      link: "/playground",
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI Doubt Solver",
      desc: "Stuck? Ask the AI. Get simple explanations of any DSA concept.",
      color: "from-cyan-500 to-blue-500",
      link: "/learn",
    },
    {
      icon: <FaCube className="text-3xl" />,
      title: "3D Visualization",
      desc: "Watch algorithms come alive in interactive 3D. Learn 10x faster.",
      color: "from-green-500 to-emerald-500",
      link: "/visualizer",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-6">
      <section className="max-w-7xl mx-auto text-center py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-5xl md:text-7xl font-extrabold mb-6"
        >
          Learn DSA the{" "}
          <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
            Visual Way
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Run code, visualize algorithms in 3D, and solve doubts with AI —
          all in one platform built for learners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/playground"
            className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 rounded-lg font-semibold transition-all"
          >
            Start Coding <FaArrowRight />
          </Link>
          <Link
            to="/visualizer"
            className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/5 rounded-lg font-semibold transition-all"
          >
            Explore 3D Visuals
          </Link>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <Link
              to={f.link}
              className="block p-8 rounded-2xl bg-card border border-white/10 hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
