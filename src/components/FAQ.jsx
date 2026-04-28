import { useState } from 'react';

const faqGroups = [
  {
    category: 'About the laboratory',
    items: [
      {
        q: 'Is your laboratory SANAS accredited?',
        a: (
          <p>
            Yes. Dielectric Fluid Solutions is accredited by the South African National
            Accreditation System (SANAS) under ISO/IEC 17025:2017, facility number T1060.
            This accreditation confirms our technical competence, impartiality, and
            consistent operation to internationally recognised standards.
          </p>
        ),
      },
      {
        q: 'Is your lab associated with any other company, or wholly independent?',
        a: (
          <p>
            We are wholly independent. We are not owned by, nor commercially linked to,
            any oil supplier, transformer OEM, refurbisher or service provider — so the
            results we deliver carry no commercial bias.
          </p>
        ),
      },
      {
        q: 'Do you test samples from across the African continent?',
        a: (
          <p>
            Yes. We routinely receive and test samples couriered in from outside South
            Africa. Get in touch with sample volumes, voltage class and origin and we'll
            advise on the best sampling kit and courier route.
          </p>
        ),
      },
      {
        q: 'Do we get online access to our reports?',
        a: (
          <p>
            Yes. Clients receive online access to their report archive — historical
            results, trend graphs and downloadable PDFs — alongside email delivery of
            each new report.
          </p>
        ),
      },
      {
        q: 'Where is your laboratory located?',
        a: (
          <p>
            Our laboratory is located at Unit 2, Protea Industrial Park, Protea Street,
            Aureus, Randfontein, Gauteng, South Africa. We serve clients across South
            Africa and the broader African continent.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Background',
    items: [
      {
        q: 'What is transformer oil testing and why does it matter on a mine?',
        a: (
          <p>
            Transformer oil is both an insulator and a coolant. Once it absorbs moisture,
            oxidises, or starts breaking down from internal faults, the transformer is on
            borrowed time. Routine oil testing tells you the condition of the oil{' '}
            <em>and</em> gives early warning of faults inside the tank (overheating,
            partial discharge, arcing) — usually months before a trip or failure. On a
            mine, where an unplanned transformer failure can stop a shaft, mill or
            section, oil testing is the cheapest insurance you can buy.
          </p>
        ),
      },
      {
        q: 'Which standards do you test to?',
        a: (
          <>
            <p>We test to the standards a mining EE or COP will expect to see on the report:</p>
            <ul>
              <li><strong>SANS 60422 / IEC 60422</strong> — in-service mineral oil maintenance and condition limits</li>
              <li><strong>IEC 60156</strong> — breakdown voltage (BDV)</li>
              <li><strong>IEC 60814</strong> — moisture content (Karl Fischer, ppm water)</li>
              <li><strong>IEC 60567 / ASTM D3612</strong> — dissolved gas analysis (DGA) sampling and testing</li>
              <li><strong>IEC 60599</strong> — interpretation of DGA results (Duval triangles, key gas, ratios)</li>
              <li><strong>IEC 62535 / IEC 61619</strong> — corrosive sulphur and PCB screening</li>
            </ul>
            <p>The report references the exact clause used, so it stands up in an audit.</p>
          </>
        ),
      },
    ],
  },
  {
    category: 'Sampling',
    items: [
      {
        q: 'How often should we sample?',
        a: (
          <>
            <p>A practical mining schedule that aligns with SANS 60422:</p>
            <ul>
              <li><strong>Critical / large units</strong> (≥ 5 MVA, shaft winders, mill drives, main intake transformers): <strong>DGA every 6 months</strong>, full oil quality (BDV, moisture, acidity, IFT, colour, DDF) <strong>annually</strong>.</li>
              <li><strong>Standard distribution and section transformers</strong>: full oil quality <strong>annually</strong>, DGA at least <strong>annually</strong> or whenever a unit is suspect.</li>
              <li><strong>New or recently repaired units</strong>: sample at commissioning, <strong>3 months later</strong>, then fall into the routine cycle.</li>
              <li><strong>After any electrical event</strong> (through-fault, lightning strike, protection operation, abnormal noise, gas relay alarm): sample immediately.</li>
            </ul>
          </>
        ),
      },
      {
        q: 'How do I take a sample correctly?',
        a: (
          <>
            <p>A bad sample gives a misleading report. The basics:</p>
            <ol>
              <li><strong>Use the bottom drain valve</strong> for routine oil quality samples — that is where moisture and sediment settle.</li>
              <li><strong>Use the dedicated DGA sampling point</strong> (or the bottom valve if none) and a <strong>glass syringe or sealed metal can</strong> for DGA. Plastic bottles let dissolved gases escape — the result is meaningless.</li>
              <li><strong>Flush 1–2 litres</strong> through the valve before filling the sample container, into a separate waste bottle.</li>
              <li><strong>Fill slowly</strong> to avoid creating bubbles. For DGA, exclude all air — no headspace.</li>
              <li><strong>Sample with the transformer in service</strong> if safe to do so (running temperature, oil circulating). If not, sample as soon after shut-down as practical.</li>
              <li><strong>Label immediately</strong>: site, transformer ID, serial number, MVA, voltage, top oil temperature, ambient, date, time, sampler's name.</li>
              <li><strong>Keep upright, out of direct sun</strong>, and courier within <strong>48 hours</strong>.</li>
            </ol>
            <p>We supply sample kits (bottle, syringe, labels, chain-of-custody form) on request.</p>
          </>
        ),
      },
      {
        q: 'How much oil do you need?',
        a: (
          <ul>
            <li><strong>Routine oil quality (BDV, moisture, acidity, etc.):</strong> 1 litre in a clean amber glass bottle.</li>
            <li><strong>DGA only:</strong> 50–100 ml in a glass syringe or sealed metal can.</li>
            <li><strong>Full suite + furans + PCB:</strong> 1.5 litres.</li>
          </ul>
        ),
      },
      {
        q: 'Is sampling safe with the transformer energised?',
        a: (
          <p>
            Yes, provided the unit has a sampling valve designed for live sampling, the
            foreman has authorised it, the sampler is competent and wearing arc-rated PPE,
            and a second person is in attendance. If there is <strong>any</strong> doubt
            — gas relay alarm, recent fault, audible discharge, oil leaking — <strong>do
            not sample live</strong>. Isolate first.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Tests and what they mean',
    items: [
      {
        q: 'What’s the difference between an "oil quality" test and DGA?',
        a: (
          <p>
            Oil quality tells you the condition of the oil itself — is it still a good
            insulator and coolant. DGA tells you what is happening{' '}
            <strong>inside the transformer</strong> by measuring the gases dissolved in
            the oil. You want both. Oil quality answers "must I dry, filter or replace
            this oil?" DGA answers "is this transformer developing a fault?"
          </p>
        ),
      },
      {
        q: 'What’s in a standard oil quality report?',
        a: (
          <>
            <div className="faq-item__table-wrap">
              <table className="faq-item__table">
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>What it tells you</th>
                    <th>Typical action limit (in-service, ≤ 72.5 kV)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Breakdown voltage (BDV)</td><td>Dielectric strength of the oil</td><td>&lt; 50 kV → investigate; &lt; 40 kV → recondition</td></tr>
                  <tr><td>Moisture (Karl Fischer, ppm)</td><td>Water in the oil</td><td>&gt; 30 ppm → investigate; &gt; 40 ppm → recondition</td></tr>
                  <tr><td>Acidity (mg KOH/g)</td><td>Oxidation / ageing</td><td>&gt; 0.15 → poor; &gt; 0.3 → bad</td></tr>
                  <tr><td>Interfacial tension (IFT, mN/m)</td><td>Sludge precursors</td><td>&lt; 25 → poor</td></tr>
                  <tr><td>Dielectric dissipation factor (tan δ)</td><td>Polar contaminants</td><td>&gt; 0.1 at 90 °C → poor</td></tr>
                  <tr><td>Colour</td><td>Quick visual ageing indicator</td><td>Darkening trend matters more than absolute value</td></tr>
                  <tr><td>Flash point</td><td>Volatile contamination</td><td>Drop &gt; 5 °C from baseline → investigate</td></tr>
                </tbody>
              </table>
            </div>
            <p>Limits tighten at higher voltages — the report flags your unit against the correct SANS 60422 voltage class.</p>
          </>
        ),
      },
      {
        q: 'What does the DGA tell me, in plain language?',
        a: (
          <>
            <p>Each gas points to a different kind of fault:</p>
            <ul>
              <li><strong>Hydrogen (H₂)</strong> — partial discharge / corona</li>
              <li><strong>Methane (CH₄), ethane (C₂H₆)</strong> — low-temperature thermal faults (&lt; 300 °C)</li>
              <li><strong>Ethylene (C₂H₄)</strong> — high-temperature thermal faults (&gt; 700 °C, hot spots)</li>
              <li><strong>Acetylene (C₂H₂)</strong> — <strong>arcing</strong>. Treat as serious. Any measurable C₂H₂ on a transformer that has never had one before warrants a follow-up sample.</li>
              <li><strong>Carbon monoxide (CO), carbon dioxide (CO₂)</strong> — paper insulation degradation. Rising CO with rising furans = the windings are ageing.</li>
            </ul>
            <p>The lab applies IEC 60599 ratios and the <strong>Duval triangle</strong> to classify the fault. The report says, in plain English, what kind of fault is most likely (e.g. "T2 — thermal fault 300–700 °C") and what to do next.</p>
          </>
        ),
      },
      {
        q: 'What’s a furan test and when do I need it?',
        a: (
          <>
            <p>Furans (especially 2-FAL) come from the breakdown of the paper insulation on the windings. You can't replace paper without rewinding. Order a furan test when:</p>
            <ul>
              <li>the transformer is <strong>&gt; 15 years old</strong>, or</li>
              <li>CO and CO₂ are climbing, or</li>
              <li>you're deciding whether to refurbish or replace.</li>
            </ul>
          </>
        ),
      },
      {
        q: 'Do you test for PCBs?',
        a: (
          <p>
            Yes. Any oil topped up before the late 1980s, or of unknown history, should
            be screened. We do an L2000 / GC screen and issue a certificate suitable for
            waste disposal and DMRE compliance.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Results, turnaround and cost',
    items: [
      {
        q: 'How long does it take?',
        a: (
          <>
            <ul>
              <li>Routine oil quality: <strong>3–5 working days</strong> from receipt.</li>
              <li>DGA: <strong>2–3 working days</strong>.</li>
              <li><strong>Emergency / fault investigation:</strong> 24 hours, by arrangement, for a surcharge.</li>
            </ul>
            <p>Couriers from remote sites add 1–2 days — factor that in.</p>
          </>
        ),
      },
      {
        q: 'How are results delivered?',
        a: (
          <p>
            PDF report by email, with raw data, comparison to SANS 60422 limits, trend
            graph against previous samples on the same unit, and a plain-language
            recommendation (continue service / re-sample / recondition / investigate /
            remove from service). Clients also have online access to their full report
            archive.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Acting on the results',
    items: [
      {
        q: 'The report says "recondition the oil." What does that mean?',
        a: (
          <p>
            The oil itself is still serviceable but needs to be dried and filtered
            (typically by hot oil filtration / vacuum dehydration on site). The
            transformer doesn't have to be taken out of service for long. Reconditioning
            is far cheaper than an oil change.
          </p>
        ),
      },
      {
        q: 'The report says "remove from service." What now?',
        a: (
          <p>
            This is reserved for cases where the oil <strong>and/or</strong> the gas
            pattern indicate the transformer is unsafe to keep running — for example,
            rising acetylene, BDV well below limit with confirmed moisture, or a sudden
            DGA shift. Isolate the unit, do not energise, and call us — we'll usually
            recommend an immediate re-sample to confirm, and an inspection by your
            transformer OEM or a qualified repairer.
          </p>
        ),
      },
      {
        q: 'Acetylene appeared in the latest DGA. Is the transformer about to explode?',
        a: (
          <>
            <p>Not necessarily — but it has to be taken seriously. Acetylene means arcing somewhere in the tank. Steps:</p>
            <ol>
              <li>Re-sample within 24–48 hours to confirm and check the trend.</li>
              <li>Reduce load if possible.</li>
              <li>Check Buchholz / gas relay; do not reset without sampling the gas.</li>
              <li>If acetylene is rising sample-to-sample, plan an outage.</li>
            </ol>
          </>
        ),
      },
      {
        q: 'How do I read the trend?',
        a: (
          <p>
            What matters is the <strong>rate of change</strong>, not a single number. A
            unit with 25 ppm H₂ that has been sitting at 25 ppm for five years is far
            less concerning than one that went from 5 to 25 ppm in three months. The
            report shows trend graphs for exactly this reason — keep the historical
            samples on file and always send the previous report number with new samples
            so we can plot it for you.
          </p>
        ),
      },
    ],
  },
  {
    category: 'Logistics',
    items: [
      {
        q: 'Can you sample on site?',
        a: (
          <p>
            Yes. We run scheduled site visits across Gauteng and to mines on request
            elsewhere in South Africa and the region. For a fleet of more than ten
            transformers, an on-site sampling and condition-monitoring contract usually
            works out cheaper than crew time + courier + sample kits.
          </p>
        ),
      },
    ],
  },
];

export default function FAQ() {
  const [openKeys, setOpenKeys] = useState(() => new Set(['0-0']));

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <h2 className="section__title section__title--center">Frequently Asked Questions</h2>
        <p className="section__subtitle">
          Practical answers about transformer oil testing, sampling, results,
          and what to do with them.
        </p>

        {faqGroups.map((group, gi) => (
          <div className="faq__group" key={group.category}>
            <h3 className="faq__group-title">{group.category}</h3>
            <div className="faq__list">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const isOpen = openKeys.has(key);
                return (
                  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.q}>
                    <button
                      className="faq-item__question"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                    >
                      <span>{item.q}</span>
                      <span className="faq-item__icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${key}`}
                      className="faq-item__answer"
                      role="region"
                      hidden={!isOpen}
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <p className="faq__disclaimer">
          This FAQ is a quick guide and does not replace SANS 60422, the OEM's manual,
          or your mine's COP for electrical maintenance. When in doubt, sample more often, not less.
        </p>
      </div>
    </section>
  );
}
