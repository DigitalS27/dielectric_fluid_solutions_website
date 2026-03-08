export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title section__title--center">Contact Us</h2>
        <p className="section__subtitle">
          Ready to submit a sample or need a quote? Get in touch — our team is here to help.
        </p>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+27 (0) XX XXX XXXX</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@dielectricfluidsolutions.co.za</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>South Africa</p>
              </div>
            </div>
            <div className="contact__lab-photo">
              <img src="/images/WhatsApp Image 2025-07-24 at 09.41.23.jpg" alt="DFS Laboratory" />
            </div>
          </div>
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="you@company.co.za" required />
            </div>
            <div className="form__group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Your company name" />
            </div>
            <div className="form__group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your testing requirements..." required />
            </div>
            <button type="submit" className="btn btn--full">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
