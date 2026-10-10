import { Link, useLocation } from "react-router-dom";
import { FaCode, FaBrain, FaCube, FaHome } from "react-icons/fa";

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/playground", label: "Playground", icon: <FaCode /> },
    { to: "/learn", label: "Learn", icon: <FaBrain /> },
    { to: "/visualizer", label: "Visualizer", icon: <FaCube /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-bg/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 text-xl font-bold">
          <span className="text-accent">Algo</span>
          <span className="text-accent2">Vision</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === link.to
                  ? "bg-accent/20 text-accent2"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.icon}
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
