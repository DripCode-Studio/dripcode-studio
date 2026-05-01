"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // 1. Hover effect for Drip/Code columns
    const splitSides = document.querySelectorAll(
      ".split-side",
    ) as NodeListOf<HTMLElement>;

    splitSides.forEach((side) => {
      side.addEventListener("mouseenter", () => {
        side.style.flex = "1.1";
        side.style.zIndex = "10";
      });

      side.addEventListener("mouseleave", () => {
        side.style.flex = "1";
        side.style.zIndex = "1";
      });
    });

    // 2. Fade-in on scroll for elements
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tailwind classes for visible state
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Initial state for fade-in elements
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="bg-[#161616] text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 z-100 transition-all duration-300 py-4">
        <a href="#" className="h-20 md:h-25 flex items-center">
          <Image
            src="/text%20logo%20SVG/Logo%20texte+rouge%20blanc.svg"
            alt="DripCode Studio Logo"
            className="h-full w-auto"
          />
        </a>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:flex gap-10 bg-[#282828]/70 backdrop-blur-md px-10 py-4 items-center">
          {["Accueil", "Nos services", "Studio", "Avis", "Contact"].map(
            (item, i) => (
              <a
                key={i}
                href={
                  item === "Accueil"
                    ? "#"
                    : `#${item.toLowerCase().replace(" nos ", "").split(" ")[0]}`
                }
                className="font-['EKBaumerHeadline',sans-serif] font-normal text-xs uppercase tracking-[0.15em] relative pb-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22, 22, 22, 0.6), rgba(22, 22, 22, 0.8)), url('/assets/images/hero-bg.jpg')",
        }}
      >
        <div className="max-w-300 mx-auto w-full flex flex-col gap-4 relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="text-[clamp(4rem,7vw,6.5rem)] font-['EKBaumerHeadline',sans-serif] font-bold italic leading-none tracking-tight mt-8 -ml-1">
            Votre studio{" "}
            <span className="font-['PMingLiU',serif] font-normal not-italic inline-block -translate-y-2">
              créatif
            </span>
          </h1>
          <h2 className="font-['EKBaumerHeadline',sans-serif] font-medium text-3xl mt-20 -mb-2 text-white">
            Transforme ton idée en réalité
          </h2>
          <p className="max-w-200 text-[1.1rem] text-[#e3e3e3]">
            Nous sommes un studio créatif ⚓ basé entre le Canada et Bruxelles,
            spécialisé dans la création de projets modernes et performants qui
            aident les entreprises à prospérer dans le monde numérique. Notre
            mission est de fournir des solutions propres, évolutives, alliant
            style et performance au premier plan.
          </p>
          <div className="flex gap-6 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 font-bold text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300 bg-[#ED5B53] text-white border border-[#ED5B53] hover:bg-transparent hover:text-[#ED5B53] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(237,91,83,0.3)]"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-10 py-4 font-bold text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300 bg-transparent text-white border border-[#ED5B53] hover:bg-[#ED5B53]/10 hover:border-[#ED5B53] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(237,91,83,0.15)]"
            >
              Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Services Split Section */}
      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-2 min-h-screen"
      >
        {/* DRIP Side */}
        <article className="split-side side-drip bg-[#FFD600] text-[#161616] flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-500 ease-out min-h-[50vh]">
          <div className="relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-out">
            <h2 className="font-['PMingLiU',serif] text-[clamp(3rem,6vw,5rem)] leading-none">
              Drip/{" "}
              <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
                Artisan
              </span>
            </h2>
            <p className="mt-4 font-sans text-lg max-w-100 opacity-90">
              Direction artistique, graphisme et productions audiovisuelles.
              L'essence même de l'esthétique.
            </p>
            <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
              {[
                "Visual Branding",
                "Direction Artistique",
                "Design Editorial",
                "Motion & Audiovisuel",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* CODE Side */}
        <article className="split-side side-code bg-[#304CD3] text-white flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-500 ease-out min-h-[50vh]">
          <div className="relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
            <h2 className="font-['Zabal',sans-serif] text-[clamp(3rem,6vw,5rem)] leading-none">
              &lt;Code&gt;{" "}
              <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
                Architecte
              </span>
            </h2>
            <p className="mt-4 font-sans text-lg max-w-100 opacity-90">
              Développement fullstack, solutions SaaS et cybersécurité.
              Construire l'architecture de demain.
            </p>
            <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
              {[
                "Site Web & Landing Pages",
                "Applications Web / SaaS",
                "Cybersécurité",
                "Hébergement & Déploiement",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {/* Container Concepts Teaser */}
      <section
        id="studio"
        className="py-32 px-8 md:px-16 bg-[#161616] flex items-center justify-center text-center relative min-h-[80vh]"
      >
        <div className="max-w-200 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="text-[#ED5B53] font-['Zabal',sans-serif] uppercase text-sm tracking-[2px] mb-4 inline-block border border-[#ED5B53] px-4 py-2 rounded-full">
            À venir : Partie 2
          </div>
          <h2 className="text-[clamp(3rem,5vw,5rem)] font-['EKBaumerHeadline',sans-serif] font-medium mb-8 leading-tight">
            Ateliers
            <br />
            Créatifs
          </h2>
          <p className="text-xl text-[#e3e3e3]">
            Des containers aménagés au style authentique Dripcode studio. Des
            espaces conçus pour connecter, créer et collaborer, disponibles à
            l'achat pour entreprises, ASBL et PME.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="p-8 md:p-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0"
      >
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <h2 className="text-3xl font-['EKBaumerHeadline',sans-serif] mb-4">
            DripCode
            <br />
            Studio.
          </h2>
          <p className="text-[#e3e3e3] mt-4">
            © 2026 DripCode Studio.
            <br />
            Branding • Design • Code
          </p>
        </div>
        <div className="flex gap-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out">
          <div className="flex flex-col gap-2">
            <span className="font-bold mb-2 text-[#e3e3e3]">Réseaux</span>
            <a href="#" className="hover:text-[#ED5B53] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#ED5B53] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#ED5B53] transition-colors">
              Twitter
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold mb-2 text-[#e3e3e3]">Contact</span>
            <a
              href="mailto:hello@dripcode.studio"
              className="hover:text-[#ED5B53] transition-colors"
            >
              hello@dripcode.studio
            </a>
            <a href="#" className="hover:text-[#ED5B53] transition-colors">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
