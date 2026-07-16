import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/luizpaulo771/",
    icon: "/icons/Linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/Luizinho771",
    icon: "/icons/Github.png",
    alt: "GitHub",
  },
  {
    href: "https://instagram.com/1zpaulo/",
    icon: "/icons/Instagram.png",
    alt: "Instagram",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex h-[80vh] items-center justify-center">
        <p>This site is under construction. Please check back soon!</p>
      </main>
      <footer className="flex flex-col items-center gap-4 p-4 text-center">
        <p>While you wait check my other links:</p>
        <div className="flex items-center justify-center">
          {socialLinks.map(({ href, icon, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4"
            >
              <Image src={icon} alt={alt} width={48} height={48} />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
