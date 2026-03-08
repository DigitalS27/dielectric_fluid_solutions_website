export default function ThisIsUs() {
  const values = [
    {
      name: 'Experienced Chemists',
      description:
        'Our team of qualified chemists brings years of expertise in dielectric fluid analysis, ensuring accurate and reliable results for every sample.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      name: 'Skilled Technicians',
      description:
        'Our laboratory technicians are trained to operate state-of-the-art instrumentation with precision, maintaining the highest standards in every test we perform.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      name: 'Quality Focused',
      description:
        'As a SANAS-accredited facility, quality is at the core of everything we do. We are committed to continuous improvement and upholding ISO 17025:2017 standards.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      name: 'Client Partnerships',
      description:
        'We work closely with utilities, industrial operators, and maintenance contractors to deliver insights that protect and extend the life of critical electrical assets.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
  ];

  const gallery = [
    { src: '/images/lab_entrance.jpg', alt: 'DFS Laboratory entrance' },
    { src: '/images/WhatsApp Image 2025-07-24 at 09.41.23.jpg', alt: 'DFS Laboratory' },
    { src: '/images/acid_instrument.jpg', alt: 'Laboratory instrument' },
  ];

  return (
    <section id="this-is-us" className="this-is-us section section--alt">
      <div className="container">
        <h2 className="section__title section__title--center">This Is Us</h2>
        <p className="section__subtitle">
          Meet the people and values behind Dielectric Fluid Solutions — a dedicated team driven by precision, integrity, and a passion for excellence.
        </p>
        <div className="this-is-us__grid">
          {values.map((item) => (
            <div key={item.name} className="this-is-us__card">
              <div className="this-is-us__icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="this-is-us__gallery">
          <h3 className="this-is-us__gallery-title">Our Laboratory</h3>
          <div className="this-is-us__gallery-grid">
            {gallery.map((img) => (
              <div key={img.src} className="this-is-us__gallery-item">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
