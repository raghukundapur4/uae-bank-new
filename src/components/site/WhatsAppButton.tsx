const NUMBER = "971500000000";
const MSG = encodeURIComponent("Hello, I need accounting services");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${NUMBER}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:shadow-2xl hover:scale-125 hover:-translate-y-2 transition-all duration-300 group"
      style={{ boxShadow: "0 8px 28px -4px rgba(37, 211, 102, 0.45)" }}
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      <svg viewBox="0 0 32 32" className="w-8 h-8 relative" fill="currentColor" aria-hidden>
        <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.39.71 4.617 1.928 6.49L4 29l7.71-1.89A11.94 11.94 0 0016.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm6.95 16.86c-.297.83-1.732 1.589-2.388 1.677-.61.082-1.38.117-2.226-.14-.514-.158-1.176-.376-2.024-.74-3.563-1.535-5.89-5.13-6.067-5.366-.178-.236-1.452-1.93-1.452-3.683 0-1.752.918-2.612 1.243-2.967.326-.355.71-.444.948-.444s.474.003.681.013c.218.011.51-.083.797.61.297.71 1.01 2.46 1.099 2.638.089.178.148.385.03.622-.118.236-.178.385-.355.591-.178.207-.374.464-.534.622-.178.178-.363.37-.156.726.207.355.92 1.519 1.976 2.461 1.357 1.21 2.502 1.585 2.857 1.763.355.178.563.148.77-.089.207-.236.888-1.038 1.124-1.394.236-.355.473-.296.799-.178.326.119 2.07.977 2.425 1.155.355.178.592.266.681.414.089.148.089.858-.207 1.689z" />
      </svg>
    </a>
  );
}
