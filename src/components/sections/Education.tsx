import Reveal from "@/components/Reveal";

const EDUCATION = [
  {
    title: "Graduation in Computing Science At University Católica de Pernambuco",
    period: "2019-2026",
    description: null,
    highlight: null,
  },
  {
    title: "Back-end Developer at Oracle Innovation School",
    period: "2023",
    description: "quick description about journey, challenges, etc.",
    highlight: {
      name: "Project Title",
      details: "things about it, tech used, etc.",
    },
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-32">
      <Reveal>
        <h2 className="border-b-2 border-tertiary pb-2 text-center text-3xl">
          Education
        </h2>
      </Reveal>
      <div className="mt-10 flex flex-col gap-6">
        {EDUCATION.map(({ title, period, description, highlight }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="group bg-surface p-6 text-surface-text">
              <h3 className="text-tertiary">{title}</h3>
              <p className="mt-1 text-xs text-surface-text/60">{period}</p>
              {(description || highlight) && (
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    {description && (
                      <p className="mt-4 text-sm text-surface-text/80">
                        {description}
                      </p>
                    )}
                    {highlight && (
                      <div className="mt-3 text-sm">
                        <p className="text-tertiary">▹ {highlight.name}</p>
                        <p className="mt-1 text-surface-text/70">
                          {highlight.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
