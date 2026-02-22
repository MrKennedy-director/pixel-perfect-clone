import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-[1168px] px-6 lg:px-0">
        <div className="flex items-center justify-between h-[89px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <FactFindersLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[11px] font-bold uppercase tracking-[1.164px] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/get-started"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full gradient-brand text-primary-foreground text-sm font-bold shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <button
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[11px] font-bold uppercase tracking-[1.164px] text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="mt-2 flex items-center justify-center px-6 py-2.5 rounded-full gradient-brand text-primary-foreground text-sm font-bold shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function FactFindersLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="url(#logo-gradient)" />
        <text x="7" y="26" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif" fill="white">F</text>
        <circle cx="26" cy="10" r="4" fill="white" fillOpacity="0.4" />
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#296DDC" />
            <stop offset="0.545" stopColor="#13A9E4" />
            <stop offset="1" stopColor="#8AECB3" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-primary font-bold text-lg leading-tight">Fact Finders Pro</span>
    </div>
  );
}
