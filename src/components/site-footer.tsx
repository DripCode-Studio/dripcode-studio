"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
          © {new Date().getFullYear()} DripCode Studio tous droits réservés.
        </p>
        <p className="text-[#e3e3e3] mt-4">Branding • Design • Code</p>
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
          <Link
            href="https://www.instagram.com/dripcodestudio/"
            target="_blank"
            className="hover:text-[#ED5B53] transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/dripcodestudio"
            target="_blank"
            className="hover:text-[#ED5B53] transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/dripcodestudio"
            target="_blank"
            className="hover:text-[#ED5B53] transition-colors"
          >
            Twitter
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold mb-2 text-[#e3e3e3]">Contact</span>
          <a
            href="mailto:dripcodestudio@gmail.com"
            className="hover:text-[#ED5B53] transition-colors"
          >
            dripcodestudio@gmail.com
          </a>
          <a
            href="https://calendly.com/dripcodestudio/30min"
            target="_blank"
            className="hover:text-[#ED5B53] transition-colors"
          >
            Prendre rendez-vous
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
