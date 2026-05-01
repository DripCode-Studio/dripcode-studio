"use client";

import { motion } from "framer-motion";

export function TeaserSection() {
  return (
    <section
      id="studio"
      className="py-32 px-8 md:px-16 bg-[#161616] flex items-center justify-center text-center relative min-h-[80vh]"
    >
      <motion.div
        className="max-w-200"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-[#ED5B53] font-['Zabal',sans-serif] uppercase text-sm tracking-[2px] mb-4 inline-block border border-[#ED5B53] px-4 py-2 rounded-full">
          À venir : Partie 2
        </div>
        <h2 className="text-[clamp(3rem,5vw,5rem)] font-['EKBaumerHeadline',sans-serif] font-medium mb-8 leading-tight">
          Ateliers Créatifs
        </h2>
        <p className="text-xl text-[#e3e3e3]">
          Des containers aménagés au style authentique Dripcode studio. Des
          espaces conçus pour connecter, créer et collaborer, disponibles à
          l&apos;achat pour entreprises, ASBL et PME.
        </p>
      </motion.div>
    </section>
  );
}
