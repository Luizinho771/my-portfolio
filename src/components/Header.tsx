"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggles from "@/components/ThemeToggles";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
] as const;

export const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function Header() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#about" className="flex items-center gap-3">
          <Image
            src="/icons/icon.png"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          <span
            className={`text-sm font-bold tracking-widest transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            LUIZ PAULO
          </span>
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden gap-6 text-sm sm:flex">
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
          <ThemeToggles />
        </div>
      </nav>
    </header>
  );
}
