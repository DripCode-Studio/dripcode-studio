"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Nos services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 md:px-16 z-100 transition-all duration-300 py-4 bg-[#161616]/60 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <a
        href="#"
        className="flex items-center relative z-10 overflow-hidden rounded-2xl h-20 md:h-22.5"
      >
        <Image
          src="/assets/main-logo.svg"
          alt="DripCode Studio Logo"
          width={220}
          height={80}
          className="h-full w-auto object-cover"
          priority
        />
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex md:hidden flex-col gap-1.5 p-2 z-110 relative"
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div className="hidden md:flex gap-10 bg-[#282828]/70 backdrop-blur-md px-10 py-4 items-center absolute top-0 left-1/2 -translate-x-1/2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="font-['EKBaumerHeadline',sans-serif] font-normal text-xs uppercase tracking-[0.15em] relative pb-1 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#161616]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden z-100"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * i,
                  duration: 0.4,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="font-['EKBaumerHeadline',sans-serif] text-3xl uppercase tracking-widest hover:text-[#ED5B53] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
