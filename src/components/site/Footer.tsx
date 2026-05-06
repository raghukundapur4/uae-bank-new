import { Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import logo from "@/assets/fa-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ background: "#0f172a" }}>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-60" />

      {/* Top indigo line */}
      <div
        className="relative h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)" }}
      />

      <div className="container-prose py-18 pt-16 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="FA Accounting FZ LLC logo"
                className="h-10 w-10 object-contain rounded-lg bg-white p-0.5"
              />
              <div>
                <div className="font-bold text-white text-[15px] tracking-tight">FA Accounting Services</div>
                <div className="text-[9px] uppercase tracking-widest text-white/35 mt-0.5">FZ-LLC</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-[1.8]">
              Premium accounting, tax and advisory services trusted by businesses across the UAE.
              Built on accuracy, integrity and compliance.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-lg grid place-items-center transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#6366f1";
                    (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider" style={{ color: "#06b6d4" }}>Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Why Us", "#why"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a
                    href={h}
                    className="hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group font-medium"
                  >
                    <span
                      className="h-px rounded-full transition-all duration-300 group-hover:w-2.5"
                      style={{ width: 0, background: "#06b6d4" }}
                    />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider" style={{ color: "#06b6d4" }}>Get in Touch</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                <a href="mailto:info@faaccountings.com" className="hover:text-white transition-colors duration-200 font-medium">
                  info@faaccountings.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#06b6d4" }} />
                <span className="font-medium">Tourist Club, Abu Dhabi, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>© {new Date().getFullYear()} FA Accounting Services FZ-LLC. All rights reserved.</div>
          <div>Crafted with precision in Abu Dhabi.</div>
        </div>
      </div>
    </footer>
  );
}
