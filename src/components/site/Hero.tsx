import heroImg from "@/assets/hero-finance.png";
import { ArrowRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)" }}
      />

      <div className="container-prose grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left col */}
        <div className="animate-fade-up space-y-9">
          <span
            className="section-label"
            style={{
              color: "#818cf8",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#818cf8" }} />
            UAE Trusted Partner
          </span>

          <div>
            <h1
              className="text-5xl md:text-6xl lg:text-[3.8rem] font-extrabold leading-[1.08] text-white"
            >
              Your Trusted{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Accounting & Tax
              </span>{" "}
              Partner in UAE
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
              Professional financial solutions for businesses and startups — built on accuracy,
              integrity and deep UAE compliance expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="group btn-gold px-7 py-3.5 text-sm rounded-lg font-semibold"
            >
              Get Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              className="btn-outline-light px-7 py-3.5 text-sm rounded-lg font-medium"
            >
              <PhoneCall size={16} /> Contact Us
            </a>
          </div>

          {/* Stats */}
          <div
            className="pt-9 grid grid-cols-3 gap-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { k: "500+", v: "Clients Served" },
              { k: "10+", v: "Years Expertise" },
              { k: "100%", v: "Compliance Rate" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-3xl md:text-4xl font-bold text-white">{s.k}</div>
                <div className="text-xs text-slate-500 mt-1.5 uppercase tracking-wider font-medium">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — hero image */}
        <div className="relative animate-fade-in hidden lg:flex items-center justify-center">
          <div
            className="absolute inset-10 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
          />
          <img
            src={heroImg}
            alt="3D illustration of financial growth, charts and investments"
            className="relative w-full max-w-[440px] mx-auto animate-float drop-shadow-2xl"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
