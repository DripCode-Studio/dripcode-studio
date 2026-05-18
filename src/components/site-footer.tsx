"use client";

import { motion } from "framer-motion";

const usefulLinks = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Nos services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/dripcodestudio/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dripcodestudio" },
  { label: "X (Twitter)", href: "https://twitter.com/dripcodestudio" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#161616]">
      <div className="px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-['EKBaumerHeadline',sans-serif] mb-4">
              DripCode
              <br />
              Studio.
            </h2>
            <p className="text-[#e3e3e3] text-sm leading-relaxed max-w-sm">
              Branding &bull; Design &bull; Code
              <br />
              Des solutions &eacute;l&eacute;gantes et performantes pour vos
              projets numériques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] block mb-4">
              Liens utiles
            </span>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#e3e3e3] hover:text-[#ED5B53] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] block mb-4">
              Réseaux sociaux
            </span>
            <ul className="space-y-3 mb-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    className="text-sm text-[#e3e3e3] hover:text-[#ED5B53] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <span className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] block mb-4">
              Rendez-vous
            </span>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://calendly.com/dripcodestudio/30min"
                  target="_blank"
                  className="text-sm text-[#ED5B53] underline underline-offset-4 hover:text-[#ED5B53]/80 transition-colors font-medium"
                >
                  Prendre rendez-vous
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] block mb-4">
              Légal
            </span>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#e3e3e3] hover:text-[#ED5B53] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[#e3e3e3]">
            &copy; {new Date().getFullYear()}{" "}
            <span>DripCode Studio. Tous droits r&eacute;serv&eacute;s.</span>
          </p>
          <p className="text-xs text-white/40">
            Con&ccedil;u et d&eacute;velopp&eacute; par DripCode Studio
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
