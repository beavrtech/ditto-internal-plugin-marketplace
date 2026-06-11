// Ditto testimonials carousel + CTA band
const { useState: useStateT } = React;

const QUOTES = [
  { q: "Ditto turned our EcoVadis renewal from a month of dread into a focused two-week sprint. The copilot just knew what to ask for.", a: "Camille Roux", r: "Head of CSR, Lumen Foods" },
  { q: "We answer supplier questionnaires in a fraction of the time now\u2014and the answers are consistent across every framework.", a: "Daniel Okafor", r: "Compliance Lead, Northwind" },
  { q: "It feels less like software and more like having a compliance expert on the team who never sleeps.", a: "Sofia Marchetti", r: "COO, Verde Manufacturing" },
];

function Testimonials() {
  const [i, setI] = useStateT(0);
  const t = QUOTES[i];
  return (
    <section style={{ background: "var(--tan)", padding: "96px 48px" }}>
      <h2 className="h2" style={{ textAlign: "center", margin: "0 0 48px" }}>What teams are saying</h2>
      <div style={{ maxWidth: 880, margin: "0 auto", background: "var(--bg-surface-cream)", borderRadius: 30,
        padding: "56px 64px", boxShadow: "var(--shadow-md)", textAlign: "center" }}>
        <Icon name="message-square-quote" size={32} color="var(--yellow-700)" />
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: 1.25, letterSpacing: "-0.01em",
          color: "var(--navy)", margin: "20px 0 32px" }}>"{t.q}"</p>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.02em" }}>{t.a}</div>
        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-2)", letterSpacing: "-0.01em" }}>{t.r}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
        {QUOTES.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Quote ${k + 1}`}
            style={{ width: k === i ? 28 : 10, height: 10, borderRadius: 999, border: "none", cursor: "pointer",
              background: k === i ? "var(--navy)" : "var(--tan-700)", transition: "all .2s" }} />
        ))}
      </div>
    </section>
  );
}

function CTABand({ onGetStarted }) {
  return (
    <section style={{ background: "var(--yellow)", padding: "96px 48px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <h2 className="h1" style={{ margin: 0, fontSize: 64 }}>Ready to get compliant? Ditto.</h2>
        <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 22, lineHeight: 1.35, letterSpacing: "-0.02em", color: "var(--navy)" }}>
          Turn your CSR program into a strategic advantage with a compliance copilot that's with you every step of the way.
        </p>
        <Button variant="primary" icon="arrow-right" onClick={onGetStarted}>Get Started</Button>
      </div>
    </section>
  );
}
Object.assign(window, { Testimonials, CTABand });
