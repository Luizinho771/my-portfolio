"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function Header() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold">
          Luiz Paulo
        </a>
        <ul className="flex gap-6">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors hover:text-light ${
                  activeSection === id ? "text-light" : "text-text/70"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
