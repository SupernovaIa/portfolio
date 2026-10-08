import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "pf-theme";

// Dark is the default; a saved choice is applied by an inline script in index.html before paint.
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") ?? "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
      return next;
    });
  }, []);

  return { theme, toggle };
}
