"use client";

import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalFloatingButton() {
  const initialized = useRef(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "cal-mobile-only";
    style.textContent = `@media (min-width: 768px) { iframe[data-cal-namespace="30min"], [id*="cal-floating"], [data-cal-namespace="30min"] { display: none !important; } }`;
    document.head.appendChild(style);

    const initCal = async () => {
      if (initialized.current || window.innerWidth >= 768) return;
      initialized.current = true;
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "dripcode-studio/30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        buttonColor: "#ED5B53",
        buttonText: "Prendre rendez-vous",
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    initCal();
    window.addEventListener("resize", initCal);
    return () => {
      window.removeEventListener("resize", initCal);
      const el = document.getElementById("cal-mobile-only");
      if (el) el.remove();
    };
  }, []);

  return null;
}
