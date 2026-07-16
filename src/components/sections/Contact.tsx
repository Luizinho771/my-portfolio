import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <Reveal className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-light">Contact</h2>
        <p className="text-text/90">Find me on:</p>
        <SocialLinks />
      </Reveal>
    </section>
  );
}
