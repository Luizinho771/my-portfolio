import CosmicBackground from "@/components/CosmicBackground";
import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <Header />
      <SocialSidebar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
      </main>
      <footer className="flex flex-col items-center gap-4 p-6 text-center text-sm text-text/50">
        <div className="lg:hidden">
          <SocialLinks size={28} />
        </div>
        © {new Date().getFullYear()} Luiz Paulo
      </footer>
    </>
  );
}
