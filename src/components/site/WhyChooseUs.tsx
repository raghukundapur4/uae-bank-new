import { GraduationCap, Zap, Globe2, Headphones } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Certified Experts", desc: "Professional accountants with deep, proven cross-industry expertise." },
  { icon: Zap, title: "Fast & Accurate", desc: "Swift turnarounds with precision — quality never compromised." },
  { icon: Globe2, title: "UAE Compliance", desc: "Always updated with FTA, VAT, and Corporate Tax regulations." },
  { icon: Headphones, title: "Dedicated Support", desc: "Personal advisors who truly understand your business." },
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="py-24 text-white relative overflow-hidden"
      style={{ background: "#0f172a" }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)" }}
      />

      <div className="container-prose relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="section-label"
            style={{
              color: "#818cf8",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            Why Choose Us
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            The Standard for Premium Accounting
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Excellence in every engagement, confidence in every decision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-7 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(99,102,241,0.30)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
              }}
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl icon-gold">
                  <it.icon size={20} />
                </div>
                <div>
                  <div
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "rgba(129,140,248,0.7)" }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="font-semibold text-white text-base leading-snug">{it.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mt-2">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
