import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import Learn from "./pages/Learn";
import Visualizer from "./pages/Visualizer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/visualizer" element={<Visualizer />} />
      </Routes>
    </div>
  );
}
