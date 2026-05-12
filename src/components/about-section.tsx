"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "années d'expérience" },
  { value: "10+", label: "projets livrés" },
  { value: "5+", label: "clients satisfaits" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 md:px-16 bg-[#161616]">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-[#ED5B53] font-['Zabal',sans-serif] uppercase text-sm tracking-[2px] mb-4 inline-block border border-[#ED5B53] px-4 py-2 rounded-full">
              À propos
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-['EKBaumerHeadline',sans-serif] font-bold italic leading-none mt-8">
              L&apos;agence où le <span className="text-[#FFD600]">design</span>{" "}
              rencontre le <span className="text-[#304CD3]">code</span>
            </h2>
            <div className="mt-12 w-16 h-px bg-[#ED5B53]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-[#e3e3e3] leading-relaxed">
              DripCode Studio accompagne les entreprises, marques et projets
              ambitieux dans la création d&apos;expériences numériques modernes.
            </p>
            <p className="text-lg text-[#e3e3e3] leading-relaxed">
              Entre direction artistique, développement logiciel et innovation
              digitale, nous concevons des solutions élégantes et performantes
              pensées pour évoluer avec les besoins de nos clients.
            </p>
            <motion.div
              className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-['Zabal',sans-serif] font-bold text-[#FFD600] block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-sm text-[#e3e3e3] mt-2 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="https://calendly.com/dripcodestudio/30min"
            target="_blank"
            className="inline-flex items-center justify-center px-10 py-4 font-bold text-sm uppercase tracking-[0.15em] rounded-full transition-all duration-300 bg-[#ED5B53] text-white border border-[#ED5B53] hover:bg-transparent hover:text-[#ED5B53] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(237,91,83,0.3)]"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
