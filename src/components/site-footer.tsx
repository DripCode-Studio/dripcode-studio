"use client";

import { motion } from "framer-motion";

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
          © 2026 DripCode Studio.
          <br />
          Branding • Design • Code
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row gap-12 sm:gap-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>
    </footer>
  );
}
