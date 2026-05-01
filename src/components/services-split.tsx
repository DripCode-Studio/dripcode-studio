"use client";

import { motion } from "framer-motion";

const dripServices = [
  "Visual Branding",
  "Direction Artistique",
  "Design Editorial",
  "Motion & Audiovisuel",
];

const codeServices = [
  "Site Web & Landing Pages",
  "Applications Web / SaaS",
  "Cybersécurité",
  "Hébergement & Déploiement",
];

export function ServicesSplit() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <motion.article
        className="split-side bg-[#FFD600] text-[#161616] flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-transform duration-500 ease-out min-h-[50vh]"
        whileHover={{ scale: 1.02, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
      >
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-['PMingLiU',serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            Drip/{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Artisan
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg max-w-[400px] opacity-90">
            Direction artistique, graphisme et productions audiovisuelles.
            L&apos;essence même de l&apos;esthétique.
          </p>
          <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
            {dripServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.article>

      <motion.article
        className="split-side bg-[#304CD3] text-white flex flex-col justify-center p-8 md:p-16 relative overflow-hidden transition-transform duration-500 ease-out min-h-[50vh]"
        whileHover={{ scale: 1.02, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
      >
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-['Zabal',sans-serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            &lt;Code&gt;{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Architecte
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg max-w-[400px] opacity-90">
            Développement fullstack, solutions SaaS et cybersécurité. Construire
            l&apos;architecture de demain.
          </p>
          <ul className="mt-12 list-none font-sans text-xl font-medium leading-loose">
            {codeServices.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 before:content-[''] before:block before:w-6 before:h-px before:bg-current"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.article>
    </section>
  );
}
