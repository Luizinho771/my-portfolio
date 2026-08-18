"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/* Placeholder entries matching the Figma mock — swap for real experience */
const JOBS = [
  {
    company: "Empresa 1",
    role: "Junior Front-end Developer",
    period: "May 2013 - Dec 2023",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusgmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusgmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusgmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    company: "Empresa 2",
    role: "Role at Empresa 2",
    period: "Period",
    bullets: ["Placeholder — real content coming soon."],
  },
  {
    company: "Empresa 3",
    role: "Role at Empresa 3",
    period: "Period",
    bullets: ["Placeholder — real content coming soon."],
  },
  {
    company: "Empresa 4",
    role: "Role at Empresa 4",
    period: "Period",
    bullets: ["Placeholder — real content coming soon."],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <section id="experience" className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6">
      <Reveal>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex shrink-0 flex-row gap-1 overflow-x-auto sm:flex-col sm:gap-4" role="tablist">
            {JOBS.map(({ company }, i) => (
              <button
                key={company}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`cursor-pointer whitespace-nowrap px-3 py-2 text-left text-sm transition-colors sm:border-r-2 ${
                  i === active
                    ? "border-tertiary text-text"
                    : "border-text/20 text-text/50 hover:text-light"
                }`}
              >
                {company}
              </button>
            ))}
          </div>
          <div className="min-h-56 flex-1">
            <h3 className="text-xl">{job.role}</h3>
            <p className="mt-1 text-sm text-light">{job.period}</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-text/80">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-light">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
