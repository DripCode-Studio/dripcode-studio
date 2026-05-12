"use client";

import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dripcodestudio/",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dripcodestudio",
    icon: <LinkedInIcon />,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/dripcodestudio",
    icon: <TwitterIcon />,
  },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="p-8 md:p-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-['EKBaumerHeadline',sans-serif] mb-4">
          DripCode
          <br />
          Studio.
        </h2>
        <p className="text-[#e3e3e3] mt-4">
          &copy; {new Date().getFullYear()}{" "}
          <span>DripCode Studio tous droits r&eacute;serv&eacute;s.</span>
        </p>
        <p className="text-[#e3e3e3] mt-4">
          Branding &bull; Design &bull; Code
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-12 sm:gap-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col gap-3">
          <span className="font-bold mb-1 text-[#e3e3e3] uppercase text-xs tracking-[2px]">
            R&eacute;seaux
          </span>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-[#ED5B53] hover:border-[#ED5B53] transition-all duration-300 hover:-translate-y-1"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-bold mb-1 text-[#e3e3e3] uppercase text-xs tracking-[2px]">
            Contact
          </span>
          <a
            href="mailto:dripcodestudio@gmail.com"
            className="flex items-center gap-3 text-[#e3e3e3] hover:text-[#ED5B53] transition-colors text-sm"
          >
            <Mail size={16} />
            dripcodestudio@gmail.com
          </a>
          <a
            href="https://calendly.com/dripcodestudio/30min"
            target="_blank"
            className="flex items-center gap-3 text-[#e3e3e3] hover:text-[#ED5B53] transition-colors text-sm"
          >
            <Calendar size={16} />
            Prendre rendez-vous
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
