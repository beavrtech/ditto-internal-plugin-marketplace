// Ditto feature sections — stat band, alternating feature rows
function StatBand() {
  const stats = [
    { n: "4×", l: "faster to compliance" },
    { n: "30+", l: "frameworks supported" },
    { n: "100%", l: "audit-ready data" },
  ];
  return (
    <section style={{ background: "var(--tan)", padding: "40px 48px 96px" }}>
      <div style={{ maxWidth: 1344, margin: "0 auto", display: "flex", justifyContent: "center", gap: 96, flexWrap: "wrap" }}>
        {stats.map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div className="text-numeral" style={{ fontSize: 72, color: "var(--navy)" }}>{s.n}</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--fg-2)", letterSpacing: "-0.02em", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionIntro({ title, sub }) {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: 20, padding: "0 48px" }}>
      <h2 className="h2" style={{ margin: 0 }}>{title}</h2>
      {sub && <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.02em", color: "var(--navy)" }}>{sub}</p>}
    </div>
  );
}

function FeatureRow({ eyebrow, title, body, img, flip }) {
  const text = (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
        textTransform: "uppercase", color: "var(--fg-2)" }}>{eyebrow}</span>
      <h3 className="h3" style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.5, letterSpacing: "-0.02em", color: "var(--fg-2)" }}>{body}</p>
      <div style={{ marginTop: 8 }}><Button variant="secondary" icon="arrow-right">Learn more</Button></div>
    </div>
  );
  const image = (
    <div style={{ flex: 1, borderRadius: 24, overflow: "hidden", border: "1px solid var(--navy)", aspectRatio: "16/11",
      background: `url(${img}) center/cover no-repeat` }} />
  );
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 48px", display: "flex", gap: 64, alignItems: "stretch" }}>
      {flip ? <>{image}{text}</> : <>{text}{image}</>}
    </div>
  );
}

function Features() {
  return (
    <section style={{ background: "var(--tan)", paddingBottom: 48 }}>
      <SectionIntro
        title={"Compliance data, insights, and tools\u2014all in one platform"}
        sub="Ditto is your team's central command for CSR and compliance. It uses AI, software, and embedded expertise to help you structure your initiatives, satisfy your partners, and maximize your impact." />
      <div style={{ maxWidth: 1200, margin: "48px auto 0", padding: "0 48px" }}>
        <div style={{ borderRadius: 32, overflow: "hidden", border: "1px solid var(--navy)", height: 320,
          background: "url(../../assets/feature-platform.jpg) center/cover no-repeat" }} />
      </div>
      <FeatureRow eyebrow="Knowledge"
        title="A central place for all your CSR knowledge"
        body="Centralize policies, evidence, and reporting in one source of truth—so your whole team works from the same data, every framework, every year."
        img="../../assets/feature-questionnaire.jpg" />
      <FeatureRow eyebrow="Intelligence" flip
        title="Ask Ditto for insights and areas to improve"
        body="Ditto uses AI to understand your unique data in the context of industry best practices and frameworks, so it can answer questions and surface recommendations proactively."
        img="../../assets/feature-expertise.jpg" />
    </section>
  );
}
Object.assign(window, { Features, StatBand, SectionIntro, FeatureRow });
