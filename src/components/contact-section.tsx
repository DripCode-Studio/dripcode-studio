"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

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

export function ContactSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "start-project" });
      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-16 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-[#ED5B53] font-['Zabal',sans-serif] uppercase text-sm tracking-[2px] mb-4 inline-block border border-[#ED5B53] px-4 py-2 rounded-full">
            Contact
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-['EKBaumerHeadline',sans-serif] font-bold italic leading-none mt-6 mb-16">
            Parlons de votre <span className="text-[#ED5B53]">projet</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] mb-4">
                Informations
              </h3>
              <a
                href="mailto:dripcodestudio@gmail.com"
                className="flex items-center gap-3 text-[#e3e3e3] hover:text-[#ED5B53] transition-colors"
              >
                <Mail size={18} />
                dripcodestudio@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] mb-4">
                R&eacute;seaux sociaux
              </h3>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/70 hover:text-[#ED5B53] hover:border-[#ED5B53] transition-all duration-300 hover:-translate-y-1"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] mb-4">
                Services
              </h3>
              <ul className="text-[#e3e3e3] space-y-2">
                <li>Branding & Identit&eacute; visuelle</li>
                <li>Design UI/UX</li>
                <li>D&eacute;veloppement Web & Mobile</li>
                <li>Innovation digitale</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-bold uppercase text-xs tracking-[2px] text-[#e3e3e3] mb-6">
              Consultation créative & technologique – DripCode Studio
            </h3>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
              <Cal
                namespace="start-project"
                calLink="dripcode-studio/start-project"
                style={{ width: "100%", height: "450px", overflow: "auto" }}
                config={{
                  layout: "month_view",
                  useSlotsViewOnSmallScreen: "true",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
