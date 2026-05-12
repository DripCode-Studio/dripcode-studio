import Image from "next/image";

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Nos services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export function SiteNavbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 z-[100] transition-all duration-300 py-4">
      <a href="#" className="h-20 md:h-[100px] flex items-center">
        <Image
          src="/assets/main-logo.svg"
          alt="DripCode Studio Logo"
          width={220}
          height={80}
          className="h-full w-auto"
          priority
        />
      </a>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:flex gap-10 bg-[#282828]/70 backdrop-blur-md px-10 py-4 items-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-['EKBaumerHeadline',sans-serif] font-normal text-xs uppercase tracking-[0.15em] relative pb-1 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}
