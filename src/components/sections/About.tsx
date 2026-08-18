import Reveal from "@/components/Reveal";

/* Scattered doodle pattern for the About Me band, recreated from the Figma tile:
   outline circles, triangles, diamonds, arcs, brackets, bolts, slashes, dots */
const doodlePattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='220'%3E%3Cg fill='none' stroke='%23ffb6c1' stroke-opacity='0.22' stroke-width='1.3'%3E%3Ccircle cx='36' cy='14' r='6'/%3E%3Cpath d='M96 6l7 14h-14z'/%3E%3Cpath d='M160 10l-8 12'/%3E%3Ccircle cx='222' cy='18' r='6'/%3E%3Cpath d='M14 52l6-10'/%3E%3Cpath d='M62 44l6 10-12 2z'/%3E%3Crect x='118' y='40' width='9' height='9' transform='rotate(45 122 44)'/%3E%3Cpath d='M186 46h12'/%3E%3Cpath d='M244 40l-3 12'/%3E%3Cpath d='M28 84a8 8 0 0 1 14-4'/%3E%3Cpath d='M88 78l4 7-8 1z'/%3E%3Cpath d='M138 90l8-14'/%3E%3Cpath d='M196 76a7 7 0 0 0-2 12'/%3E%3Cpath d='M236 88v-12l8 6z'/%3E%3Cpath d='M12 118l10 2-6 8z'/%3E%3Cpath d='M66 124v-12h5'/%3E%3Ccircle cx='122' cy='120' r='4'/%3E%3Cpath d='M172 112l4-3-1 5 4-2-5 8'/%3E%3Cpath d='M226 118l-10 8'/%3E%3Cpath d='M40 158l-2 12h8'/%3E%3Crect x='94' y='152' width='6' height='13' transform='rotate(20 97 158)'/%3E%3Cpath d='M148 162a8 8 0 0 1 12-6'/%3E%3Cpath d='M200 150l7 12h-14z'/%3E%3Ccircle cx='250' cy='162' r='3'/%3E%3Cpath d='M20 198l8-10'/%3E%3Ccircle cx='74' cy='196' r='6'/%3E%3Cpath d='M128 190l4-3-1 5 4-2-5 8'/%3E%3Crect x='176' y='190' width='9' height='9' transform='rotate(45 180 194)'/%3E%3Cpath d='M232 200h12'/%3E%3C/g%3E%3Cg fill='%23ffb6c1' fill-opacity='0.2'%3E%3Ccircle cx='68' cy='20' r='1.6'/%3E%3Ccircle cx='140' cy='28' r='1.6'/%3E%3Ccircle cx='200' cy='58' r='1.6'/%3E%3Ccircle cx='50' cy='102' r='1.6'/%3E%3Ccircle cx='110' cy='142' r='1.6'/%3E%3Ccircle cx='246' cy='130' r='1.6'/%3E%3Ccircle cx='158' cy='206' r='1.6'/%3E%3Ccircle cx='16' cy='160' r='1.6'/%3E%3C/g%3E%3C/svg%3E")`;

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
        className="w-full py-24"
        style={{ backgroundColor: "#a02348", backgroundImage: doodlePattern }}
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
