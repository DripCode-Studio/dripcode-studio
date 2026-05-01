"use client";

import { useEffect } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteNavbar } from "@/components/site-navbar";
import { ServicesSplit } from "@/components/services-split";
import { TeaserSection } from "@/components/teaser-section";

export default function Home() {
  useEffect(() => {
    const splitSides = document.querySelectorAll(
      ".split-side",
    ) as NodeListOf<HTMLElement>;

    const hoverHandlers = Array.from(splitSides).map((side) => {
      const handleEnter = () => {
        side.style.flex = "1.1";
        side.style.zIndex = "10";
      };

      const handleLeave = () => {
        side.style.flex = "1";
        side.style.zIndex = "1";
      };

      side.addEventListener("mouseenter", handleEnter);
      side.addEventListener("mouseleave", handleLeave);

      return { side, handleEnter, handleLeave };
    });

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      hoverHandlers.forEach(({ side, handleEnter, handleLeave }) => {
        side.removeEventListener("mouseenter", handleEnter);
        side.removeEventListener("mouseleave", handleLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#161616] text-white font-sans overflow-x-hidden">
      <SiteNavbar />
      <SiteHeader />
      <ServicesSplit />
      <TeaserSection />
      <SiteFooter />
    </div>
  );
}
