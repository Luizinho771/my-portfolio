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

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center">
      {socialLinks.map(({ href, icon, alt }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 transition-opacity hover:opacity-70"
        >
          <Image src={icon} alt={alt} width={48} height={48} />
        </a>
      ))}
    </div>
  );
}
