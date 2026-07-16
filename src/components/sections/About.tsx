import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-light">About</h2>
        <p className="mt-6 leading-relaxed text-text/90">
          Hi, I&apos;m Luiz Paulo. This section is a placeholder — real content
          coming from the Figma design.
        </p>
      </Reveal>
    </section>
  );
}
