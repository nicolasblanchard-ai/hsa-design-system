const { useState } = React;

function ds(name) {
  for (const k of Object.getOwnPropertyNames(window)) {
    let v; try { v = window[k]; } catch (e) { continue; }
    if (v && typeof v === "object" && typeof v[name] === "function") return v[name];
  }
  return function Missing() { return null; };
}
const Button = ds("Button"), Eyebrow = ds("Eyebrow"), Bullet = ds("Bullet"), Chip = ds("Chip");
const Card = ds("Card"), StatCard = ds("StatCard"), AudienceCard = ds("AudienceCard");
const Input = ds("Input"), Select = ds("Select"), Logo = ds("Logo"), CubeWatermark = ds("CubeWatermark");

const BASE = "../../";
const MARGIN = { maxWidth: 1200, margin: "0 auto", padding: "0 40px" };

function Header({ onApply }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 10, background: "var(--white)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ height: 7, background: "var(--green)" }} />
      <div style={{ ...MARGIN, display: "flex", alignItems: "center", gap: 36, padding: "18px 40px", flexWrap: "wrap" }}>
        <Logo lockup="oneline-black" height={26} base={BASE} />
        <a href="#program" style={{ fontWeight: 600, color: "var(--text-primary)" }}>Program</a>
        <a href="#partners">Partners</a>
        <a href="#apply">Startups</a>
        <a href="#apply">About</a>
        <Button variant="cta" size="s" style={{ marginLeft: "auto" }} onClick={onApply}>Apply now</Button>
      </div>
    </header>
  );
}

function Hero({ onApply }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)" }}>
      <img src={BASE + "assets/cubes/02-green.svg"} alt="" style={{ position: "absolute", right: -120, top: -60, width: 620, opacity: 0.45, pointerEvents: "none" }} />
      <div style={{ ...MARGIN, padding: "88px 40px 72px", position: "relative" }}>
        <Eyebrow>Batch 4 · applications open</Eyebrow>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-web-h1)", fontWeight: 600, lineHeight: 0.98, margin: "24px 0 0", maxWidth: 780 }}>
          Turning deep tech into investor-ready businesses.
        </h1>
        <p style={{ fontSize: 22, lineHeight: 1.45, color: "var(--text-body)", maxWidth: 640, marginTop: 24 }}>
          A scholarship and benefits package, 1:1 coaching from world-class experts, and direct connections to investors — rooted in the entrepreneurial ecosystem of St.Gallen.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
          <Button variant="cta" onClick={onApply}>Join the waitlist</Button>
          <Button variant="outline" onClick={() => document.getElementById("partners").scrollTo}>For partners</Button>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <Chip tone="outline" marker>Deep-Tech</Chip>
          <Chip tone="outline" marker>2 Cohorts / Year</Chip>
          <Chip tone="outline" marker>Investor-Ready</Chip>
        </div>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section id="program" style={{ ...MARGIN, padding: "72px 40px" }}>
      <Eyebrow>What we offer</Eyebrow>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-web-h2)", fontWeight: 600, lineHeight: 1, margin: "20px 0 32px" }}>
        Ninety days from lab to raise.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        <Card variant="accent" index="01" title="Funding">A batch scholarship to join, plus follow-on capital — CHF 15k and up to 200k.</Card>
        <Card variant="accent" index="02" title="Experts">1:1 coaching from operators, mentors and investors across the ecosystem.</Card>
        <Card variant="accent" index="03" title="Investor-ready">The narrative, metrics and data room that close a CHF 1–10m round.</Card>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 20 }}>
        <StatCard value="3" label="cohorts delivered" />
        <StatCard value="16–20" label="companies / year" />
        <StatCard value="~400" label="applications / year" />
        <StatCard value="50%+" label="applications from abroad" />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" style={{ background: "var(--surface-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ ...MARGIN, padding: "72px 40px" }}>
        <Eyebrow>Why partner</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-web-h2)", fontWeight: 600, lineHeight: 1, margin: "20px 0 32px" }}>
          One pipeline, three kinds of partner.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, alignItems: "stretch" }}>
          <AudienceCard label="For investors" title="Vetted dealflow">
            <Bullet size={12}>First look at 16–20 investor-ready companies a year.</Bullet>
            <Bullet size={12}>Co-invest with diligence already done.</Bullet>
          </AudienceCard>
          <AudienceCard label="For corporates" title="Innovation access">
            <Bullet size={12}>Early access to emerging deep-tech.</Bullet>
            <Bullet size={12}>Run pilots with vetted teams in your domain.</Bullet>
          </AudienceCard>
          <AudienceCard label="For ecosystem" title="Regional champions">
            <Bullet size={12}>Turn regional research into companies that stay.</Bullet>
            <Bullet size={12}>Retain scientific talent and spin-offs.</Bullet>
          </AudienceCard>
        </div>
      </div>
    </section>
  );
}

function Apply({ sent, onSend }) {
  return (
    <section id="apply" style={{ ...MARGIN, padding: "72px 40px" }}>
      <div style={{ position: "relative", overflow: "hidden", background: "var(--navy)", borderRadius: "var(--radius-card)", padding: "48px 44px" }}>
        <CubeWatermark cube="03" size={340} opacity={0.15} base={BASE} />
        <div style={{ position: "relative", maxWidth: 720 }}>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)" }}>Join the waitlist</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 600, lineHeight: 1.02, color: "var(--on-navy)", margin: "14px 0 10px" }}>
            Applications for the next batch open in spring.
          </h2>
          <p style={{ fontSize: 19, color: "var(--on-navy-body)", margin: "0 0 28px" }}>Get early access and program updates.</p>
          {sent ? (
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "rgba(84,247,190,.16)", border: "1px solid #2C6B54", borderRadius: "var(--radius-button)", padding: "16px 22px", color: "var(--green)", fontSize: 19, fontWeight: 600 }}>
              You're on the list. We'll be in touch.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); onSend(); }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14, alignItems: "end", background: "var(--white)", padding: 20, borderRadius: "var(--radius-band)" }}
            >
              <Input label="Startup name" placeholder="Acme Photonics AG" required />
              <Input label="Email" type="email" placeholder="founder@acme.ch" required />
              <Select label="Stage" options={["Pre-seed", "Seed", "Series A"]} />
              <Button variant="cta" type="submit">Join the waitlist</Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }}>
      <div style={{ ...MARGIN, padding: "40px", display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
        <Logo lockup="oneline-white" height={22} base={BASE} />
        <span style={{ color: "var(--on-navy-muted)", fontSize: 16 }}>Acceleration through access</span>
        <span style={{ marginLeft: "auto", color: "var(--green)", fontSize: 16 }}>hsgstartaccelerator.org</span>
      </div>
    </footer>
  );
}

function Home() {
  const [sent, setSent] = useState(false);
  const apply = () => document.getElementById("apply").scrollTo;
  return (
    <div>
      <Header onApply={apply} />
      <Hero onApply={apply} />
      <Program />
      <Partners />
      <Apply sent={sent} onSend={() => setSent(true)} />
      <Footer />
    </div>
  );
}

window.Home = Home;
