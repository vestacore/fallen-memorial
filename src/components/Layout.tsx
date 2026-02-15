import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrokenRings from "./BrokenRings";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Memorial" },
  { to: "/about", label: "About" },
  { to: "/statistics", label: "Statistics" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <BrokenRings size="sm" />
            <span className="font-serif text-sm tracking-widest uppercase text-muted-foreground group-hover:text-foreground transition-colors">
              Memorial
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm tracking-wider uppercase ${
                      location.pathname === link.to
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1 pt-[73px]">{children}</main>

      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto text-center">
          <BrokenRings size="sm" className="mx-auto mb-4" />
          <p className="text-xs text-muted-foreground tracking-wider uppercase mb-2">
            The Games They'll Never Play
          </p>
          <p className="text-xs text-muted-foreground/60">
            A memorial to Ukrainian athletes and coaches killed during the war. 
            Their dreams of Olympic glory were stolen — but their names will not be forgotten.
          </p>
        </div>
      </footer>
    </div>
  );
}
