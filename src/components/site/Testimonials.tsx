import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Mansoori",
    role: "CEO, Mansoori Trading LLC",
    initials: "AA",
    quote: "FA Accounting transformed our finance operations. Their VAT advisory alone saved us countless hours and headaches.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Bloom Boutique",
    initials: "PS",
    quote: "From business setup to monthly bookkeeping — they've been an exceptional partner. Highly recommended for SMEs in UAE.",
  },
  {
    name: "Mohammed Khalid",
    role: "Director, KH Logistics",
    initials: "MK",
    quote: "Their corporate tax guidance was clear, proactive and on point. True professionals with deep UAE knowledge.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)" }}
      />

      <div className="container-prose relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
            Trusted by Leading Businesses
          </h2>
          <p className="mt-5 text-[#64748b] text-lg leading-relaxed">
            See what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="group card-premium p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#374151] leading-[1.75] text-[0.96rem] flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <figcaption
                className="mt-7 pt-6 flex items-center gap-3.5"
                style={{ borderTop: "1px solid #f1f5f9" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a] text-sm">{t.name}</div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
