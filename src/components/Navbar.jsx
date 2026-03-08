import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'this-is-us', label: 'This Is Us' },
    { id: 'services', label: 'Services' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'accreditation', label: 'Accreditation' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" onClick={(e) => handleNav(e, 'home')} className="navbar__logo">
          <img src="/images/lab_logo.png" alt="Dielectric Fluid Solutions" />
        </a>
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={(e) => handleNav(e, l.id)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-wrap">
            <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="btn btn--sm">
              Request a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
