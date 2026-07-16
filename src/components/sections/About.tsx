import Reveal from "@/components/Reveal";

/* Scattered doodle pattern for the About Me band, matching the Figma texture */
const doodlePattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.12'%3E%3Ccircle cx='20' cy='28' r='3'/%3E%3Cpath d='M70 12l6 10h-12z'/%3E%3Cpath d='M110 40h10M115 35v10'/%3E%3Crect x='30' y='90' width='7' height='7' transform='rotate(45 33 93)'/%3E%3Cpath d='M90 100l8 8M98 100l-8 8'/%3E%3Ccircle cx='125' cy='120' r='2.5'/%3E%3Cpath d='M10 125l5 8h-10z'/%3E%3C/g%3E%3C/svg%3E")`;

export default function About() {
  return (
    <section id="about">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 pt-24 lg:flex-row lg:items-center lg:gap-20">
        <Reveal>
          <p className="text-sm text-text/80">Hi, my name is</p>
          <h1 className="mt-4 text-6xl font-light leading-none tracking-tight sm:text-8xl">
            LUIZ
            <br />
            PAULO
          </h1>
        </Reveal>
        <Reveal delay={0.15} className="max-w-md">
          <h2 className="text-2xl text-text/90">sub title</h2>
          <p className="mt-4 text-sm leading-relaxed text-text/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>
      </div>

      <div
        className="w-full bg-secondary py-24"
        style={{ backgroundImage: doodlePattern }}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <Reveal className="flex gap-6">
            <div className="w-1 shrink-0 self-stretch bg-light" />
            <h2 className="text-3xl leading-snug">
              About
              <br />
              Me
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex aspect-square w-56 items-center justify-center border border-white/20 bg-tertiary/40 sm:w-64">
              <span className="-rotate-45 text-white/80">picture here</span>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="max-w-xl flex-1">
            <h3 className="text-2xl">Sub title</h3>
            <ul className="mt-2 flex gap-6 text-sm text-white/90">
              <li>◇ Destaque 1</li>
              <li>◇ Destaque 1</li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-white/80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
