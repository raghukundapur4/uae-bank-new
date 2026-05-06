import { ShieldCheck, Award, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle bg tint */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)" }}
      />

      <div className="container-prose grid lg:grid-cols-2 gap-20 items-start relative z-10">
        {/* Left */}
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="section-label">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
              Precision, Integrity &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UAE Compliance
              </span>
              .{" "}
            </h2>
          </div>

          <div className="space-y-4 text-[#64748b] text-base leading-[1.85]">
            <p>
              FA Accounting Services FZ-LLC is a leading Abu Dhabi based accounting and tax
              advisory firm. We help startups, SMEs, and established enterprises stay compliant,
              optimize their finances, and grow with confidence.
            </p>
            <p>
              Headquartered in the Tourist Club area, Abu Dhabi, our team combines deep regional
              knowledge with international standards — delivering accurate, timely, and trustworthy
              financial services tailored to your business.
            </p>
          </div>

          {/* Feature chips */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: ShieldCheck, label: "Trust & Accuracy" },
              { icon: Award, label: "10+ Years Experience" },
              { icon: Users, label: "Client-First Approach" },
              { icon: Zap, label: "Fast & Efficient" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100"
              >
                <div className="w-8 h-8 rounded-lg icon-gold flex-shrink-0">
                  <item.icon size={15} />
                </div>
                <span className="font-semibold text-[#0f172a] text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {[
            { icon: ShieldCheck, title: "Full Compliance", desc: "FTA, VAT and Corporate Tax — done right, every time." },
            { icon: Award, title: "Expert Team", desc: "Certified accountants with proven cross-industry experience." },
            { icon: Users, title: "Personal Support", desc: "Dedicated advisors who understand your business goals." },
            { icon: Zap, title: "Fast Service", desc: "Quick turnarounds without compromising on precision." },
          ].map((c, i) => (
            <div key={i} className="group card-premium p-6 space-y-4">
              <div className="w-11 h-11 rounded-xl icon-gold">
                <c.icon size={19} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] text-[0.95rem]">{c.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mt-1.5">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
