export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/lab_logo.png" alt="Dielectric Fluid Solutions" className="footer__logo" />
            <p>
              Specialist transformer oil testing laboratory, SANAS-accredited
              under ISO/IEC 17025:2017.
            </p>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => scrollTo(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>About</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')}>Services</a></li>
              <li><a href="#equipment" onClick={(e) => scrollTo(e, 'equipment')}>Equipment</a></li>
              <li><a href="#accreditation" onClick={(e) => scrollTo(e, 'accreditation')}>Accreditation</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer__services">
            <h4>Testing Services</h4>
            <ul>
              <li>Breakdown Voltage</li>
              <li>Moisture Content</li>
              <li>Dissolved Gas Analysis</li>
              <li>Acidity / Neutralisation</li>
              <li>Furfural Analysis</li>
              <li>Inhibitor Content</li>
            </ul>
          </div>
          <div className="footer__accred">
            <h4>Accreditations</h4>
            <div className="footer__badges">
              <img src="/images/SANAS_logo.png" alt="SANAS T1060" />
              <img src="/images/iso9001_certified.png" alt="ISO 9001:2015" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Dielectric Fluid Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
