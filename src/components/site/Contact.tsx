import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const services = [
  "Bookkeeping & Accounting",
  "VAT Services",
  "Financial Reporting",
  "ICV Certification Support",
  "Advisory Services",
  "Business Setup",
  "Corporate Tax",
  "Custom Clearance Services",
];

const TARGET_EMAIL = "info@faaccountings.com";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = `New Consultation Request — ${parsed.data.service}`;
    const body = `Name: ${parsed.data.name}%0D%0AEmail: ${parsed.data.email}%0D%0APhone: ${parsed.data.phone}%0D%0AService: ${parsed.data.service}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(parsed.data.message)}`;
    window.location.href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email app to send the message…");
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative" style={{ background: "#f8fafc" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
      <div
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)" }}
      />

      <div className="container-prose grid lg:grid-cols-5 gap-14 relative z-10">
        {/* Left — contact info */}
        <div className="lg:col-span-2 space-y-9">
          <div className="space-y-5">
            <span className="section-label">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
              Let's Talk About Your Business
            </h2>
          </div>

          <p className="text-[#64748b] text-base leading-relaxed">
            Get a free consultation with one of our financial experts. We'll respond within 24 hours.
          </p>

          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Our Office", value: "Tourist Club Area, Abu Dhabi, UAE", href: undefined },
              { icon: Mail, label: "Email Us", value: TARGET_EMAIL, href: `mailto:${TARGET_EMAIL}` },
              { icon: Phone, label: "Call Us", value: "+971 50 000 0000", href: "tel:+971500000000" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl icon-gold flex-shrink-0">
                  <Icon size={17} />
                </div>
                <div className="pt-0.5">
                  <div className="font-semibold text-[#0f172a] text-sm">{label}</div>
                  {href ? (
                    <a href={href} className="text-[#64748b] text-sm hover:text-[#6366f1] transition-colors duration-200 mt-1 block">
                      {value}
                    </a>
                  ) : (
                    <div className="text-[#64748b] text-sm mt-1">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 shadow-elegant"
          style={{ border: "1px solid #e2e8f0" }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" placeholder="John Doe" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            <Field label="Phone Number" name="phone" placeholder="+971 50 000 0000" />
            <div>
              <label className="block text-sm font-semibold text-[#0f172a] mb-2.5">Service Required</label>
              <select
                name="service"
                defaultValue=""
                className="w-full h-11 rounded-lg px-3.5 text-sm text-[#0f172a] bg-white cursor-pointer transition-all duration-200 font-medium"
                style={{
                  border: "1px solid #e2e8f0",
                  outline: "none",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold text-[#0f172a] mb-2.5">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us briefly about your needs…"
              className="w-full rounded-lg p-3.5 text-sm text-[#0f172a] bg-white resize-none font-medium placeholder:text-[#94a3b8] transition-all duration-200"
              style={{ border: "1px solid #e2e8f0", outline: "none" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 btn-gold px-8 py-3.5 text-sm rounded-lg font-semibold w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? "Sending…" : "Send Message"} <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#0f172a] mb-2.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full h-11 rounded-lg px-3.5 text-sm text-[#0f172a] bg-white font-medium placeholder:text-[#94a3b8] transition-all duration-200"
        style={{ border: "1px solid #e2e8f0", outline: "none" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}
