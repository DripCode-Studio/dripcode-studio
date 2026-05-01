"use client";

import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <header className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative bg-[#161616] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-linear-to-b from-[#161616]/60 to-[#161616]/80"></div>
      <motion.div
        className="max-w-300 mx-auto w-full flex flex-col gap-4 relative z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-[clamp(4rem,7vw,6.5rem)] font-['EKBaumerHeadline',sans-serif] font-bold italic leading-none tracking-tight mt-8 -ml-1">
          Votre studio{" "}
          <span className="font-['PMingLiU',serif] font-normal not-italic inline-block -translate-y-2">
            créatif
          </span>
        </h1>
        <h2 className="font-['EKBaumerHeadline',sans-serif] font-medium text-3xl mt-20 -mb-2 text-white">
          Transforme ton idée en réalité
        </h2>
        <p className="max-w-150 text-[1.1rem] text-[#e3e3e3]">
          Nous sommes un studio créatif ⚓ basé entre le Canada et Bruxelles,
          spécialisé dans la création de projets modernes et performants qui
          aident les entreprises à prospérer dans le monde numérique. Notre
          mission est de fournir des solutions propres, évolutives, alliant
          style et performance au premier plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-10">
          <a
            href="https://calendly.com/dripcodestudio/30min"
            target="_blank"
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
      </motion.div>
    </header>
  );
}
