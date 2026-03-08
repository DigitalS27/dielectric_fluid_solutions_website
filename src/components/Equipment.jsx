const instruments = [
  {
    image: '/images/dga_instrument.png',
    name: 'Gas Chromatograph',
    purpose: 'Dissolved Gas Analysis (DGA)',
    description:
      'High-sensitivity gas chromatograph for detection of fault gases including hydrogen, methane, ethylene, acetylene, and carbon oxides.',
  },
  {
    image: '/images/hplc_instrument.png',
    name: 'HPLC System',
    purpose: 'Furfural Analysis',
    description:
      'High-performance liquid chromatography system for precise quantification of furanic compounds indicating cellulose degradation.',
  },
  {
    image: '/images/kv_instrument.png',
    name: 'Breakdown Voltage Tester',
    purpose: 'Dielectric Strength',
    description:
      'Automated oil test set for measuring the breakdown voltage of insulating oils in accordance with IEC 60156.',
  },
  {
    image: '/images/moisture_instrument.png',
    name: 'Karl Fischer Titrator',
    purpose: 'Moisture Determination',
    description:
      'Metrohm coulometric Karl Fischer titrator for accurate measurement of trace moisture levels in transformer oil.',
  },
  {
    image: '/images/acid_instrument.jpg',
    name: 'Potentiometric Titrator',
    purpose: 'Acidity / Neutralisation Number',
    description:
      'Metrohm Titrino plus for automated potentiometric titration, determining the acid content of insulating oils.',
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="equipment section">
      <div className="container">
        <h2 className="section__title section__title--center">Our Equipment</h2>
        <p className="section__subtitle">
          We invest in precision instrumentation from leading manufacturers to ensure
          the highest quality results for every sample.
        </p>
        <div className="equipment__grid">
          {instruments.map((inst) => (
            <div className="equipment-card" key={inst.name}>
              <div className="equipment-card__img">
                <img src={inst.image} alt={inst.name} />
              </div>
              <div className="equipment-card__body">
                <h3>{inst.name}</h3>
                <span className="equipment-card__purpose">{inst.purpose}</span>
                <p>{inst.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
