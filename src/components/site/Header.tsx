import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fa-logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-nav"
          : "bg-[#0f172a]/50 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-[68px]">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="FA Accounting FZ LLC logo"
            className="h-9 w-9 object-contain rounded-lg bg-white p-0.5 ring-1 ring-white/10 group-hover:ring-[#6366f1]/60 transition-all duration-300"
          />
          <div className="leading-tight">
            <div className="font-semibold text-white text-[14px] tracking-tight">FA Accounting</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/35">FZ-LLC</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-white/55 hover:text-white/90 rounded-lg hover:bg-white/[0.06] transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 btn-gold px-5 py-2.5 text-sm rounded-lg font-semibold"
          >
            Free Consultation
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors duration-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0f172a]/96 backdrop-blur-xl">
          <div className="container-prose py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] font-medium transition-all duration-200 text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 btn-gold px-4 py-3.5 text-sm rounded-lg text-center font-semibold"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
