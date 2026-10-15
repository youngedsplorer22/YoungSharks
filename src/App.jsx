import { useState } from "react";
import { ArrowRight, Menu, X, Lightbulb, Cog, UsersRound, Rocket } from "lucide-react";
import "./styles.css";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Join", href: "#whyjoin" },
  { label: "Host School", href: "#hostschool" },
  { label: "FAQs", href: "#faqs" },
];
const principles = [
  { icon: Lightbulb, title: "Curiosity", text: "Ask bigger questions." },
  { icon: Cog, title: "Skills", text: "Learn by doing." },
  { icon: UsersRound, title: "Community", text: "Grow with peers." },
  { icon: Rocket, title: "Real impact", text: "Ideas for a brighter tomorrow." },
];
function Brand() {
  return (
    <a className="brand" href="#home" aria-label="YoungSharks home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 48" role="img">
          <path d="M34 2C23 9 19 18 21 27c7-6 15-7 23-4-5-6-8-13-10-21Z" fill="currentColor" />
          <path d="M8 31c13-8 27-8 43-1-14-1-24 2-33 9-4-2-7-4-10-8Z" fill="currentColor" />
          <path d="M2 41c14-7 29-7 45-1-13 0-25 3-35 7-4-1-7-3-10-6Z" fill="currentColor" />
        </svg>
      </span>
    </a>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <section className="hero" id="home">
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
              ))}
              <a className="nav-cta" href="#contact" onClick={closeMenu}>
                Contact Us <ArrowRight size={16} strokeWidth={2.2} />
              </a>
            </nav>
          </div>
        </header>
        <div className="hero-content">
          <div className="hero-details">
            <span className="hero-detail">
              <span className="detail-icon">▦</span>
              14–18 December 2026
            </span>
            <span className="hero-detail">
              <span className="detail-icon">♟</span>
              Ages 10–18
            </span>
            <span className="hero-detail">
              <span className="detail-icon">⌖</span>
              Mumbai, India
            </span>
          </div>
          <h1 className="hero-title">
            Young<span>Sharks</span>
          </h1>
          <h2 className="hero-subtitle">
            Where Ideas Learn to Swim
          </h2>
          <p className="hero-description">
            A 5-day national bootcamp for young entrepreneurs.<br />
            Build business acumen, develop bold ideas,<br /> 
            and pitch your innovations to industry judges.<br />
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="hero-button">
              Register Here <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <footer id="contact">
        <Brand />
        <p>Where Ideas Learn to Swim.</p>
        <a href="mailto:hello@youngsharks.in">Let’s start a conversation <ArrowRight size={16} /></a>
      </footer>
      <span id="impact" className="anchor-target" />
      <span id="partners" className="anchor-target" />
      <span id="faqs" className="anchor-target" />
    </main>
  );
}