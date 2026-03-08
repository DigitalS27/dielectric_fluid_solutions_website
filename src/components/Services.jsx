const services = [
  {
    icon: '⚡',
    title: 'Breakdown Voltage (BDV)',
    description:
      'Determines the dielectric strength of insulating oil — a key indicator of the oil\'s ability to withstand electrical stress without failure.',
    standard: 'IEC 60156',
  },
  {
    icon: '💧',
    title: 'Moisture Content',
    description:
      'Coulometric Karl Fischer titration to accurately quantify dissolved water in transformer oil, which degrades insulation performance.',
    standard: 'IEC 60814',
  },
  {
    icon: '🔬',
    title: 'Dissolved Gas Analysis (DGA)',
    description:
      'Gas chromatography to detect and quantify fault gases dissolved in oil, enabling early identification of thermal and electrical faults.',
    standard: 'IEC 60567',
  },
  {
    icon: '🧪',
    title: 'Acidity (Neutralisation Number)',
    description:
      'Potentiometric titration to measure acidic compounds in oil that cause corrosion and accelerate ageing of insulation materials.',
    standard: 'IEC 62021',
  },
  {
    icon: '📊',
    title: 'Furfural & Related Compounds',
    description:
      'HPLC analysis of furanic compounds to assess the degree of degradation of cellulose insulation within the transformer.',
    standard: 'IEC 61198',
  },
  {
    icon: '🛡️',
    title: 'Inhibitor Content (DBPC)',
    description:
      'Determines the remaining concentration of antioxidant inhibitor, helping plan oil reclamation and treatment schedules.',
    standard: 'IEC 60666',
  },
];

export default function Services() {
  return (
    <section id="services" className="services section section--alt">
      <div className="container">
        <h2 className="section__title section__title--center">Our Testing Services</h2>
        <p className="section__subtitle">
          Comprehensive analytical testing performed to international IEC standards,
          backed by SANAS accreditation under ISO 17025:2017.
        </p>
        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-card__icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="service-card__standard">{s.standard}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
