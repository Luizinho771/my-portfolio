import Reveal from "@/components/Reveal";
import ProjectCarousel from "@/components/ProjectCarousel";
import { getProjects, GITHUB_PROFILE_URL } from "@/lib/github";

/* Soft pink nebula clouds approximating the Figma background */
const nebulaBackground = {
  backgroundColor: "var(--secondary)",
  backgroundImage: [
    "radial-gradient(ellipse 45% 35% at 15% 25%, rgba(255, 214, 224, 0.55), transparent)",
    "radial-gradient(ellipse 35% 30% at 85% 70%, rgba(255, 214, 224, 0.45), transparent)",
    "radial-gradient(ellipse 55% 45% at 50% 95%, rgba(225, 117, 100, 0.35), transparent)",
    "radial-gradient(ellipse 40% 30% at 70% 15%, rgba(135, 35, 65, 0.8), transparent)",
  ].join(", "),
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-24" style={nebulaBackground}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="inline-block bg-tertiary px-3 py-1 text-2xl">
            Things that I build
          </h2>
        </Reveal>
        <div className="mt-12">
          {projects.length === 0 ? (
            <Reveal>
              <p className="text-white/80">
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
            <Reveal>
              <ProjectCarousel projects={projects} />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
