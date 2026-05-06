import {
  BookOpen, Receipt, FileBarChart, BadgeCheck, Briefcase, Building2, Landmark, Ship,
} from "lucide-react";

const services = [
  { icon: BookOpen, title: "Bookkeeping & Accounting", desc: "Accurate day-to-day books, reconciliations and ledger management." },
  { icon: Receipt, title: "VAT Services", desc: "Registration, filing, and full FTA-compliant VAT advisory." },
  { icon: FileBarChart, title: "Financial Reporting", desc: "IFRS-aligned statements that empower confident decisions." },
  { icon: BadgeCheck, title: "ICV Certification Support", desc: "End-to-end ICV scoring guidance to win more UAE tenders." },
  { icon: Briefcase, title: "Advisory Services", desc: "Strategic financial advice tailored to your growth stage." },
  { icon: Building2, title: "Business Setup", desc: "Mainland & free zone company formation with full assistance." },
  { icon: Landmark, title: "Corporate Tax", desc: "UAE Corporate Tax registration, planning and compliance." },
  { icon: Ship, title: "Custom Clearance Services", desc: "Smooth import/export documentation and customs handling." },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative" style={{ background: "#f8fafc" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />

      <div className="container-prose">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Our Services</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
            Comprehensive Financial Solutions
          </h2>
          <p className="mt-5 text-[#64748b] text-lg leading-relaxed">
            From bookkeeping to corporate tax strategy — everything your business needs
            delivered with precision and expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group card-premium p-6 space-y-5">
              <div className="w-12 h-12 rounded-xl icon-gold">
                <s.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] text-[0.95rem] leading-snug">{s.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
    </section>
  );
}
