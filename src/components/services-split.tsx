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

function ServiceItem({
  id,
  title,
  desc,
  theme,
}: {
  id: string;
  title: string;
  desc: string;
  theme: "drip" | "code";
}) {
  const isDrip = theme === "drip";
  return (
    <div
      className={`group grid grid-cols-[48px_1fr] items-start gap-0 py-7 px-6 md:px-12 border-b border-white/10 relative cursor-default transition-colors duration-200 hover:bg-white/[0.025]`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-[2px] origin-bottom scale-y-0 transition-transform duration-300 ${
          isDrip ? "bg-[#ED5B53]" : "bg-[#7B9FFF]"
        } group-hover:scale-y-100`}
      />
      <span
        className={`font-mono text-[10px] font-bold tracking-[0.05em] pt-[3px] transition-colors duration-250 ${
          isDrip
            ? "text-[#ED5B53]/35 group-hover:text-[#ED5B53]"
            : "text-[#7B9FFF]/35 group-hover:text-[#7B9FFF]"
        }`}
      >
        {id}
      </span>
      <div>
        <p
          className={`font-['EKBaumerHeadline',sans-serif] text-base font-bold transition-colors duration-250 ${
            isDrip
              ? "text-white group-hover:text-[#ED5B53]"
              : "text-white group-hover:text-[#7B9FFF]"
          }`}
        >
          {title}
        </p>
        <p className="text-[13px] leading-[1.7] text-white/42 font-light mt-[7px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function ServicesSplit() {
  return (
    <section id="services" className="bg-[#161616] text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 md:px-16 pt-20 md:pt-28 pb-0 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10"
      >
        <div>
          <p className="font-mono text-[11px] tracking-[0.22em] text-white/38 uppercase flex items-center gap-2.5 mb-4">
            <span className="inline-block w-7 h-px bg-[#ED5B53]" />
            Nos Services
          </p>
          <h2 className="font-['EKBaumerHeadline',sans-serif] text-[clamp(40px,6vw,80px)] font-bold leading-[0.92] tracking-[-0.03em]">
            Deux
            <br />
            piliers.
            <br />
            <span className="text-[#ED5B53]">Un studio.</span>
          </h2>
        </div>
        <p className="max-w-[340px] text-[15px] leading-[1.75] text-white/38 font-light self-start md:self-end pb-2">
          Entre direction artistique et architecture logicielle, DripCode Studio
          construit des expériences numériques qui durent — élégantes,
          performantes, évolutives.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mx-6 md:mx-16 mt-16 h-px bg-white/10 relative"
      >
        <span className="absolute right-0 top-[-7px] bg-[#161616] pl-3 font-mono text-[10px] text-white/38">
          {/* /* nos services */}
        </span>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mx-6 md:mx-16 grid grid-cols-1 md:grid-cols-2 border-x border-white/10"
      >
        {/* LEFT: DRIP */}
        <div className="border-b md:border-b-0 md:border-r border-white/10 relative">
          <div className="p-6 md:px-12 md:py-12 pb-8 md:pb-10 border-b border-white/10 relative overflow-hidden group/pillar">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_20%_50%,rgba(237,91,83,0.07)_0%,transparent_70%)] group-hover/pillar:opacity-100" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase px-3 py-1 rounded-[2px] mb-6 bg-[#ED5B53]/10 text-[#ED5B53] border border-[#ED5B53]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ED5B53]" />
                L&apos;artisan visuel
              </div>
              <h3 className="font-['EKBaumerHeadline',sans-serif] text-[clamp(32px,4vw,42px)] font-bold leading-none tracking-[-0.02em] text-[#ED5B53] mb-3">
                Drip/
              </h3>
              <p className="font-['EKBaumerHeadline',sans-serif] text-[13px] font-normal text-white/38 tracking-[0.04em] uppercase mb-4">
                Artisan
              </p>
              <p className="text-[14px] leading-[1.7] text-white/50 font-light max-w-[88%]">
                Direction artistique, graphisme et productions audiovisuelles.
                L&apos;essence même de l&apos;esthétique.
              </p>
            </div>
          </div>
          {dripServices.map((s) => (
            <ServiceItem key={s.id} {...s} theme="drip" />
          ))}
        </div>

        {/* RIGHT: CODE */}
        <div className="relative">
          <div className="p-6 md:px-12 md:py-12 pb-8 md:pb-10 border-b border-white/10 relative overflow-hidden group/pillar">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_80%_50%,rgba(123,159,255,0.10)_0%,transparent_70%)] group-hover/pillar:opacity-100" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase px-3 py-1 rounded-[2px] mb-6 bg-[#7B9FFF]/12 text-[#7B9FFF] border border-[#7B9FFF]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B9FFF]" />
                L&apos;architecte technique
              </div>
              <h3 className="font-mono text-[clamp(28px,3.5vw,34px)] font-bold leading-none text-[#7B9FFF] mb-3">
                &lt;Code&gt;
              </h3>
              <p className="font-['EKBaumerHeadline',sans-serif] text-[13px] font-normal text-white/38 tracking-[0.04em] uppercase mb-4">
                Architecte
              </p>
              <p className="text-[14px] leading-[1.7] text-white/50 font-light max-w-[88%]">
                Développement fullstack, solutions SaaS et cybersécurité.
                Construire l&apos;architecture de demain.
              </p>
            </div>
          </div>
          {codeServices.map((s) => (
            <ServiceItem key={s.id} {...s} theme="code" />
          ))}
        </div>
      </motion.div>

      {/* Footer band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="mx-6 md:mx-16 border border-white/10 border-t-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 md:px-12 py-6"
      >
        <span className="font-['EKBaumerHeadline',sans-serif] text-[13px] font-bold tracking-[0.06em] uppercase text-white/28">
          Branding · Design · Code · Déploiement
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-[#ED5B53] text-[#161616] font-['EKBaumerHeadline',sans-serif] font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-[1px] hover:bg-white transition-colors duration-200 hover:-translate-y-[1px] no-underline"
        >
          Discutons de votre projet
          <svg
            viewBox="0 0 14 14"
            fill="none"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              d="M1 7h12M7 1l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>

      {/* Corner label */}
      <div className="mx-6 md:mx-16 flex justify-end px-0 pt-3 pb-20">
        <span className="font-mono text-[10px] text-white/18 tracking-[0.1em]">
          DripCode Studio © {new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
}
