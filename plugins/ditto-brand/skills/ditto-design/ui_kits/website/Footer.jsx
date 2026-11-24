// Ditto footer — newsletter + link columns + bottom bar
const FOOT_COLS = [
  { h: "Frameworks", items: ["EcoVadis", "CSRD", "ISO 14001", "Other Frameworks"] },
  { h: "Solutions", items: ["Management System", "Questionnaire Automation", "Artificial Intelligence", "Supplier Questionnaire"] },
  { h: "Customers", items: ["SME and ETI", "Large Companies", "All Case Studies"] },
  { h: "Resources", items: ["Blog", "Actus RSE", "Guides", "Events"] },
  { h: "About Us", items: ["Manifesto", "Careers"] },
];

function Footer() {
  return (
    <footer style={{ background: "var(--tan)" }}>
      {/* Newsletter */}
      <div style={{ maxWidth: 1344, margin: "0 auto", padding: "48px 48px 0" }}>
        <div style={{ background: "var(--tan-600)", borderRadius: 30, padding: "48px 56px", display: "flex",
          alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--navy)", maxWidth: 520 }}>
            Updates, insights, and hot takes&mdash;all on our Substack
          </div>
          <EmailCapture cta="Sign up" placeholder="Your email" />
        </div>
      </div>
      {/* Columns */}
      <div style={{ maxWidth: 1344, margin: "0 auto", padding: "64px 48px 0", display: "flex", gap: 48, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 240px", minWidth: 200 }}>
          <DittoLogo height={32} />
          <p style={{ fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--navy)", marginTop: 20, maxWidth: 260 }}>
            Your CSR and compliance platform, with a dedicated coach.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            {[
              { k: "in", p: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V21h-4V8zm6.5 0h3.8v1.78h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V21H7V8z" },
              { k: "x", p: "M13.5 10.3 21.4 1h-1.9l-6.86 8.06L7.2 1H1l8.28 12.2L1 23h1.9l7.24-8.5L15.8 23H22l-8.5-12.7zm-2.56 3.01-.84-1.2L3.6 2.5h2.9l5.4 7.7.84 1.2 7 10h-2.9l-5.7-8.1z" },
              { k: "fb", p: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" },
            ].map((s) => (
              <div key={s.k} style={{ width: 40, height: 40, borderRadius: 999, background: "var(--tan-600)",
                display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#130E30"><path d={s.p}/></svg>
              </div>
            ))}
          </div>
        </div>
        {FOOT_COLS.map((c) => (
          <div key={c.h} style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 140 }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--navy)", letterSpacing: "-0.01em" }}>{c.h}</div>
            {c.items.map((it) => (
              <a key={it} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-2)",
                textDecoration: "none", letterSpacing: "-0.01em" }}>{it}</a>
            ))}
          </div>
        ))}
      </div>
      {/* Bottom */}
      <div style={{ maxWidth: 1344, margin: "0 auto", padding: "48px 48px 40px", display: "flex", gap: 20,
        borderTop: "1px solid var(--border-tan)", marginTop: 48, alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-3)" }}>&copy; Ditto 2025</span>
        <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-3)", textDecoration: "none", marginLeft: "auto" }}>Terms</a>
        <a href="#" style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-3)", textDecoration: "none" }}>Privacy</a>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
