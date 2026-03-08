export default function Accreditation() {
  return (
    <section id="accreditation" className="accreditation section section--alt">
      <div className="container">
        <h2 className="section__title section__title--center">Accreditation &amp; Quality</h2>
        <p className="section__subtitle">
          Our commitment to quality is validated by independent accreditation bodies,
          ensuring every result we deliver meets the highest international standards.
        </p>
        <div className="accreditation__grid">
          <div className="accreditation-card">
            <img src="/images/SANAS_logo.png" alt="SANAS Accredited Testing Laboratory T1060" />
            <h3>SANAS Accredited</h3>
            <p>
              Accredited by the South African National Accreditation System (SANAS) as a
              testing laboratory under <strong>ISO/IEC 17025:2017</strong>. Facility number
              <strong> T1060</strong>. This accreditation confirms our technical competence,
              impartiality, and consistent operation in line with internationally recognised standards.
            </p>
          </div>
          <div className="accreditation-card">
            <img src="/images/iso9001_certified.png" alt="ISO 9001:2015 Certified" />
            <h3>ISO 9001:2015</h3>
            <p>
              Our quality management system is certified to ISO 9001:2015, demonstrating
              our commitment to continual improvement, customer satisfaction, and process-driven
              excellence across all laboratory operations.
            </p>
          </div>
        </div>
        <div className="accreditation__note">
          <p>
            Our accreditation scope covers a comprehensive range of transformer oil tests
            performed to IEC standards. Contact us for a full copy of our scope of accreditation.
          </p>
        </div>
      </div>
    </section>
  );
}
