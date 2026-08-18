import SocialLinks from "@/components/SocialLinks";

export default function SocialSidebar() {
  return (
    <aside className="fixed bottom-6 left-4 z-40 hidden lg:block">
      <SocialLinks direction="column" size={28} />
    </aside>
  );
}
