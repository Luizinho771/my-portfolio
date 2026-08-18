"use client";

import { useState } from "react";

/**
 * Two independent toggles, each persisted and applied as a data-* attribute
 * on <html>. A blocking inline script in the root layout applies both before
 * first paint, so initial state can be read straight off <html> on the client.
 * Monospace is the design default; the toggle switches to the sans/casual cut.
 */
export default function ThemeToggles() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark"
  );
  const [mono, setMono] = useState(
    () =>
      typeof document === "undefined" ||
      document.documentElement.dataset.mono !== "off"
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const toggleMono = () => {
    const next = !mono;
    setMono(next);
    document.documentElement.dataset.mono = next ? "on" : "off";
    localStorage.setItem("mono", next ? "on" : "off");
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={toggleTheme}
        className="cursor-pointer text-text/70 transition-colors hover:text-light"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        suppressHydrationWarning
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
      <button
        onClick={toggleMono}
        className="cursor-pointer text-text/70 transition-colors hover:text-light"
        aria-pressed={!mono}
        aria-label="Toggle sans-serif font"
        suppressHydrationWarning
      >
        {mono ? "Sans" : "Mono"}
      </button>
    </div>
  );
}
