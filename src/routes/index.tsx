import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FA Accounting Services FZ-LLC | Accounting, VAT & Corporate Tax in UAE" },
      { name: "description", content: "Trusted accounting, VAT, corporate tax, ICV and business setup services in Abu Dhabi, UAE. Get a free consultation today." },
      { name: "keywords", content: "Accounting Services UAE, VAT UAE, Corporate Tax UAE, Bookkeeping Abu Dhabi, ICV Certification, Business Setup UAE" },
      { property: "og:title", content: "FA Accounting Services — Trusted Accounting & Tax Partner in UAE" },
      { property: "og:description", content: "Professional financial solutions for businesses and startups in the UAE." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" />
    </main>
  );
}
