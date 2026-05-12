"use client";

import { motion } from "framer-motion";

const dripServices = [
  {
    id: "01",
    title: "Visual Branding",
    desc: "Identité visuelle complète, logos, chartes graphiques et brand guidelines pour une marque forte et cohérente.",
  },
  {
    id: "02",
    title: "Direction Artistique",
    desc: "Conception créative sur-mesure, moodboards et univers visuels qui racontent votre histoire.",
  },
  {
    id: "03",
    title: "Design Editorial",
    desc: "Mise en page sophistiquée pour print, magazines, rapports annuels et présentations impactantes.",
  },
  {
    id: "04",
    title: "Motion & Audiovisuel",
    desc: "Animations dynamiques, vidéos engageantes et motion design pour capter l'attention.",
  },
];

const codeServices = [
  {
    id: "01",
    title: "Site Web & Landing Pages",
    desc: "Sites vitrines, e-commerce et pages à forte conversion, optimisés pour la performance et le SEO.",
  },
  {
    id: "02",
    title: "Applications Web / SaaS",
    desc: "Plateformes sur-mesure, dashboards interactifs et outils SaaS pensés pour l'évolutivité.",
  },
  {
    id: "03",
    title: "Cybersécurité",
    desc: "Audit de vulnérabilité, sécurisation des infrastructures et mise en conformité RGPD.",
  },
  {
    id: "04",
    title: "Hébergement & Déploiement",
    desc: "Infrastructure cloud scalable, CI/CD automatisé et maintenance continue 24/7.",
  },
];

function ServiceCard({
  id,
  title,
  desc,
  theme,
  index,
}: {
  id: string;
  title: string;
  desc: string;
  theme: "drip" | "code";
  index: number;
}) {
  const isDrip = theme === "drip";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-500 ${
        isDrip
          ? "bg-[#161616]/10 hover:bg-[#161616]/20"
          : "bg-white/5 hover:bg-white/10"
      }`}
    >
      <div className="flex items-start gap-5">
        <span
          className={`font-['Zabal',sans-serif] text-3xl font-bold leading-none mt-1 ${
            isDrip ? "text-[#161616]/30" : "text-white/20"
          }`}
        >
          {id}
        </span>
        <div className="flex-1">
          <h3
            className={`text-xl font-bold mb-2 ${
              isDrip ? "font-sans" : "font-['Zabal',sans-serif]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              isDrip ? "text-[#161616]/70" : "text-white/60"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
          isDrip ? "bg-[#161616]/30" : "bg-white/30"
        }`}
      ></div>
    </motion.div>
  );
}

export function ServicesSplit() {
  return (
    <section
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen"
    >
      <motion.article className="bg-[#FFD600] text-[#161616] flex flex-col justify-center p-8 md:p-16 relative overflow-hidden min-h-[50vh]">
        <motion.div
          className="relative z-10 max-w-lg"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-['PMingLiU',serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            Drip/{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Artisan
            </span>
          </h2>
          <p className="mt-4 font-sans text-base max-w-[400px] opacity-80">
            Direction artistique, graphisme et productions audiovisuelles.
            L&apos;essence même de l&apos;esthétique.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 relative z-10">
          {dripServices.map((s, i) => (
            <ServiceCard key={s.id} {...s} theme="drip" index={i} />
          ))}
        </div>
      </motion.article>

      <motion.article className="bg-[#304CD3] text-white flex flex-col justify-center p-8 md:p-16 relative overflow-hidden min-h-[50vh]">
        <motion.div
          className="relative z-10 max-w-lg"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-['Zabal',sans-serif] text-[clamp(3rem,6vw,5rem)] leading-none">
            &lt;Code&gt;{" "}
            <span className="font-sans text-[0.4em] font-normal opacity-90 align-middle ml-2">
              Architecte
            </span>
          </h2>
          <p className="mt-4 font-sans text-base max-w-[400px] opacity-80">
            Développement fullstack, solutions SaaS et cybersécurité. Construire
            l&apos;architecture de demain.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 relative z-10">
          {codeServices.map((s, i) => (
            <ServiceCard key={s.id} {...s} theme="code" index={i} />
          ))}
        </div>
      </motion.article>
    </section>
  );
}
