import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import About from "./sections/About";
import Contact from "./sections/Contact";
import "./Portfolio.css";

export default function Portfolio() {
  const [section, setSection] = useState("home");

  return (
    <div className="pf">
      <Sidebar section={section} setSection={setSection} />

      <main className="pf-main">
        {section === "home"     && <Home onNavigate={setSection} />}
        {section === "projects" && <Projects />}
        {section === "stack"    && <Stack />}
        {section === "about"    && <About />}
        {section === "contact"  && <Contact />}
      </main>
    </div>
  );
}
