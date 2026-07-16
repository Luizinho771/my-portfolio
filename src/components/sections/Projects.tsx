import Reveal from "@/components/Reveal";
import { getProjects, GITHUB_PROFILE_URL } from "@/lib/github";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-light">Projects</h2>
      </Reveal>
      {projects.length === 0 ? (
        <Reveal>
          <p className="mt-8 text-text/70">
            Check out my work on{" "}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, description, url, language, stars }, i) => (
            <Reveal key={name} delay={i * 0.1}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-lg border border-secondary bg-primary/50 p-6 transition-colors hover:border-tertiary"
              >
                <h3 className="text-xl font-semibold">{name}</h3>
                {description && (
                  <p className="mt-2 text-sm text-text/70">{description}</p>
                )}
                <div className="mt-4 flex gap-4 text-xs text-text/50">
                  {language && <span>{language}</span>}
                  {stars > 0 && <span>★ {stars}</span>}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
