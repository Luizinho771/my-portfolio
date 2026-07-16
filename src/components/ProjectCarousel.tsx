"use client";

import { useState } from "react";
import type { Project } from "@/lib/github";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div>
      <div className="relative mx-auto max-w-3xl">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface p-4 transition-opacity hover:opacity-90"
        >
          {/* GitHub's generated social-preview card for the repo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://opengraph.githubassets.com/1/${project.url.replace("https://github.com/", "")}`}
            alt={`Preview of ${project.name}`}
            className="w-full"
            loading="lazy"
          />
        </a>
        <div className="bg-tertiary p-6 sm:absolute sm:-bottom-8 sm:right-0 sm:max-w-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:underline"
          >
            {project.name}
          </a>
          {project.description && (
            <p className="mt-2 text-sm text-white/80">{project.description}</p>
          )}
          <div className="mt-3 flex gap-4 text-xs text-white/60">
            {project.language && <span>{project.language}</span>}
            {project.stars > 0 && <span>★ {project.stars}</span>}
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center gap-3">
        {projects.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActive(i)}
            aria-label={`Show project ${p.name}`}
            aria-current={i === active}
            className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
              i === active ? "bg-light" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
