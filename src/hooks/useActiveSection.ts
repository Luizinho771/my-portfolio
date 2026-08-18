"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 * The rootMargin shrinks the observation area to a horizontal band around
 * the middle of the viewport, so exactly one section "wins" at a time.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
