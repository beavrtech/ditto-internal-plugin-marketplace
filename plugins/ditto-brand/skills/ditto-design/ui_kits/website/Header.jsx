// Ditto marketing header — logo, nav with mega-menu, log in + Get Started
const { useState: useStateH } = React;

const NAV = [
  { label: "Frameworks", items: [
    { icon: "leaf", t: "EcoVadis", d: "Prepare for the EcoVadis assessment" },
    { icon: "file-text", t: "CSRD", d: "Centralize your data and collaborate" },
    { icon: "cloud", t: "CDP", d: "Carbon Disclosure Project reporting" },
    { icon: "badge-check", t: "ISO 14001", d: "Environmental management systems" },
  ]},
  { label: "Solutions", items: [
    { icon: "sparkles", t: "Your AI-powered CSR co-pilot", d: "Answer questionnaires in a flash" },
    { icon: "message-square-quote", t: "Respond to compliance requests", d: "RFPs and assessments, automated" },
    { icon: "scale", t: "Engage your supply chain", d: "Bring partners into sustainability" },
  ]},
  { label: "Customers", items: null },
  { label: "Resources", items: null },
];

function MegaItem({ icon, t, d }) {
  const [h, setH] = useStateH(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "flex", gap: 12, padding: "12px 14px", borderRadius: 14, cursor: "pointer",
        background: h ? "var(--tan-200)" : "transparent", transition: "background .15s" }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--tan-500)", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name={icon} size={20} color="var(--navy)" />
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--navy)" }}>{t}</div>
        <div style={{ fontSize: 12.5, color: "var(--fg-2)", letterSpacing: "-0.01em", lineHeight: 1.35, marginTop: 2 }}>{d}</div>
      </div>
    </div>
  );
}

function Header({ onGetStarted }) {
  const [open, setOpen] = useStateH(null);
  return (
    <header onMouseLeave={() => setOpen(null)}
      style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--tan)", borderBottom: "1px solid var(--border-tan)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", height: 80, padding: "0 48px", boxSizing: "border-box",
        display: "flex", alignItems: "center", gap: 40 }}>
        <DittoLogo height={30} />
        <nav style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
          {NAV.map((n) => (
            <div key={n.label} onMouseEnter={() => setOpen(n.items ? n.label : null)}
              style={{ position: "relative" }}>
              <button style={{ ...BTN_BASE, height: 44, padding: "0 16px",
                background: open === n.label ? "rgba(19,14,48,.06)" : "transparent", color: "var(--navy)" }}>
                {n.label}{n.items && <Icon name="chevron-down" size={16} />}
              </button>
            </div>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Button variant="tertiary">Log in</Button>
          <Button variant="secondary" onClick={onGetStarted}>Get Started</Button>
        </div>
      </div>

      {NAV.filter((n) => n.items && open === n.label).map((n) => (
        <div key={n.label} style={{ position: "absolute", left: 0, right: 0, top: 80, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 380, background: "var(--bg-surface-cream)", borderRadius: 24, boxShadow: "var(--shadow-lg)",
            padding: 12, marginTop: 8 }}>
            {n.items.map((it) => <MegaItem key={it.t} {...it} />)}
          </div>
        </div>
      ))}
    </header>
  );
}
Object.assign(window, { Header });
