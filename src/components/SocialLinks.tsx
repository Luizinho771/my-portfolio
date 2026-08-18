import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/Luizinho771",
    icon: "/icons/Github.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/luizpaulo771/",
    icon: "/icons/Linkedin.png",
    alt: "LinkedIn",
  },
  {
    href: "https://instagram.com/1zpaulo/",
    icon: "/icons/Instagram.png",
    alt: "Instagram",
  },
];

type SocialLinksProps = {
  direction?: "row" | "column";
  size?: number;
};

export default function SocialLinks({
  direction = "row",
  size = 48,
}: SocialLinksProps) {
  return (
    <div
      className={`flex items-center justify-center gap-6 ${
        direction === "column" ? "flex-col" : ""
      }`}
    >
      {socialLinks.map(({ href, icon, alt }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
        >
          <Image
            src={icon}
            alt={alt}
            width={size}
            height={size}
            className="social-icon"
          />
        </a>
      ))}
    </div>
  );
}
