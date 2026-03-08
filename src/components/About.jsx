export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__image">
            <img src="/images/lab_entrance.jpg" alt="Dielectric Fluid Solutions laboratory" />
          </div>
          <div className="about__text">
            <h2 className="section__title">About Dielectric Fluid Solutions</h2>
            <p>
              Dielectric Fluid Solutions is a specialist transformer oil testing laboratory
              committed to delivering precise, dependable analytical results. Our team of
              experienced chemists and technicians use state-of-the-art instrumentation to
              evaluate the condition of insulating oils used in power transformers, switchgear,
              and other high-voltage equipment.
            </p>
            <p>
              As a SANAS-accredited facility (ISO 17025:2017), every test we perform meets
              the highest international standards for quality and technical competence. We help
              utilities, industrial operators, and maintenance contractors make informed
              decisions about the health and longevity of their electrical assets.
            </p>
            <div className="about__stats">
              <div className="stat">
                <span className="stat__number">ISO 17025</span>
                <span className="stat__label">Accredited</span>
              </div>
              <div className="stat">
                <span className="stat__number">SANAS</span>
                <span className="stat__label">Approved Lab</span>
              </div>
              <div className="stat">
                <span className="stat__number">Fast</span>
                <span className="stat__label">Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
