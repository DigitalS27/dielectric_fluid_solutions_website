export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Trusted Transformer Oil Testing</h1>
        <p>
          SANAS-accredited laboratory delivering accurate, reliable dielectric fluid analysis
          to protect your critical power infrastructure.
        </p>
        <div className="hero__actions">
          <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="btn">
            Our Services
          </a>
          <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn btn--outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
