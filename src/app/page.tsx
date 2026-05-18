import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteNavbar } from "@/components/site-navbar";
import { ServicesSplit } from "@/components/services-split";
import { TeaserSection } from "@/components/teaser-section";

export default function Home() {
  return (
    <div className="bg-[#161616] text-white font-sans overflow-x-hidden">
      <SiteNavbar />
      <SiteHeader />
      <AboutSection />
      <ServicesSplit />
      <TeaserSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
