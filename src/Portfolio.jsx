import { useNavigate, useLocation, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import About from "./sections/About";
import Contact from "./sections/Contact";
import { NAV } from "./data/config";
import "./Portfolio.css";

export default function Portfolio() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const activeNav = NAV.find((n) => n.path === location.pathname) ?? NAV[0];

  function navigateTo(id) {
    const nav = NAV.find((n) => n.id === id);
    if (nav) navigate(nav.path);
  }

  return (
    <div className="pf">
      <Sidebar section={activeNav.id} onNavigate={navigateTo} />

      <main className="pf-main">
        <Routes>
          <Route path="/"         element={<Home onNavigate={navigateTo} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack"    element={<Stack />} />
          <Route path="/about"    element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="*"         element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
