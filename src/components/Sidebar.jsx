import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { ME } from "../data/content";
import { NAV } from "../data/config";
import { useTheme } from "../hooks/useTheme";

export default function Sidebar({ section, onNavigate }) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const activeIndex = Math.max(0, NAV.findIndex((n) => n.id === section));

  function navigate(id) {
    onNavigate(id);
    setOpen(false);
  }

  return (
    <>
      <button
        className="pf-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>

      {open && <div className="pf-overlay" onClick={() => setOpen(false)} />}

      <aside className={`pf-sidebar${open ? " open" : ""}`}>
        <div className="pf-brand">
          <div className="pf-brand-mark">
            <span className="pf-brand-pulse" />
          </div>
          <div className="pf-brand-text">
            <span className="pf-brand-name">{ME.name}</span>
            <span className="pf-brand-role">{ME.role}</span>
          </div>
        </div>

        <nav className="pf-nav" style={{ "--active-index": activeIndex }}>
          <span className="pf-nav-rail" aria-hidden />
          {NAV.map((n, i) => (
            <button
              key={n.id}
              className={`pf-nav-item ${section === n.id ? "active" : ""}`}
              aria-current={section === n.id ? "page" : undefined}
              onClick={() => navigate(n.id)}
            >
              <span className="pf-nav-num">{String(i).padStart(2, "0")}</span>
              <span>{n.label}</span>
            </button>
          ))}
        </nav>

        <div className="pf-sidebar-footer">
          <div className="pf-status-line">
            <span className="pf-status-dot" />
            <span>disponible para proyectos</span>
          </div>
          <div className="pf-footer-row">
            <div className="pf-social">
              {ME.social.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" title={s.label}>
                  <s.Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <button
              type="button"
              className="pf-theme-btn"
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
            >
              {theme === "dark" ? <Sun size={16} strokeWidth={1.6} /> : <Moon size={16} strokeWidth={1.6} />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
