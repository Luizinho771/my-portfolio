const placeholderProjects = [
  { name: "Project One", description: "Placeholder — GitHub API data lands here in a later phase." },
  { name: "Project Two", description: "Placeholder — GitHub API data lands here in a later phase." },
  { name: "Project Three", description: "Placeholder — GitHub API data lands here in a later phase." },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <h2 className="text-3xl font-bold text-light">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderProjects.map(({ name, description }) => (
          <article
            key={name}
            className="rounded-lg border border-secondary bg-primary/50 p-6 transition-colors hover:border-tertiary"
          >
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="mt-2 text-sm text-text/70">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
