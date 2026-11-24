// Ditto hero — headline, subcopy, email capture, app screenshot
const { useState: useStateHero } = React;

function EmailCapture({ cta = "Get Started", placeholder = "Enter your work email", onSubmit }) {
  const [v, setV] = useStateHero("");
  return (
    <div style={{ display: "flex", width: 416, maxWidth: "100%", background: "var(--white)",
      border: "1px solid var(--border-tan)", borderRadius: 999, padding: "5px 5px 5px 20px", alignItems: "center" }}>
      <input value={v} onChange={(e) => setV(e.target.value)} placeholder={placeholder}
        style={{ flex: 1, border: "none", outline: "none", fontFamily: "var(--font-sans)", fontSize: 15,
          letterSpacing: "-0.02em", color: "var(--navy)", background: "transparent" }} />
      <button onClick={() => onSubmit && onSubmit(v)}
        style={{ height: 44, borderRadius: 999, background: "var(--navy)", color: "var(--tan)", border: "none",
          padding: "0 22px", fontSize: 15, fontFamily: "var(--font-sans)", letterSpacing: "-0.02em", cursor: "pointer", whiteSpace: "nowrap" }}>
        {cta}
      </button>
    </div>
  );
}

function Hero({ onSubmit }) {
  return (
    <section style={{ background: "var(--tan)", padding: "64px 48px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 24, textAlign: "center" }}>
        <h1 className="h1" style={{ margin: 0, maxWidth: 880 }}>Your CSR and compliance platform, with a dedicated coach</h1>
        <p style={{ margin: 0, maxWidth: 640, fontFamily: "var(--font-sans)", fontSize: 22, lineHeight: 1.25,
          letterSpacing: "-0.02em", color: "var(--navy)" }}>
          Ditto helps you level up your CSR practices and meet your partner requirements across frameworks like EcoVadis, ISO, CSRD, and CDP.
        </p>
        <EmailCapture onSubmit={onSubmit} />
      </div>
      <div style={{ maxWidth: 1200, margin: "48px auto 0", borderRadius: "24px 24px 0 0", overflow: "hidden",
        border: "1px solid var(--navy)", borderBottom: "none", boxShadow: "var(--shadow-lg)" }}>
        <img src="../../assets/hero-bg.png" alt="Ditto compliance dashboard" style={{ width: "100%", display: "block" }} />
      </div>
    </section>
  );
}
Object.assign(window, { Hero, EmailCapture });
