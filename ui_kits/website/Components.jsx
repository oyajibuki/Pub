// Club Starlight — Shared Components
// Load with <script type="text/babel" src="Components.jsx">

const { useState, useEffect, useRef } = React;

/* ── Tokens ──────────────────────────────────────────────── */
// Philippine flag palette — adapted for dark nightclub aesthetic
const T = {
  bg:      '#0a1628',          // dark navy overlay
  surface: 'rgba(10,22,40,0.82)',  // card surface
  raised:  'rgba(0,30,60,0.75)',   // elevated
  gold:    '#ffffff',          // white (readable)
  goldL:   '#e8eaf6',
  goldLL:  '#f0f4ff',
  rose:    '#CE1126',          // Philippine red (softened)
  coral:   '#f07a5a',
  blue:    '#0038A8',          // Philippine royal blue (lightened)
  blueL:   '#4a7fd4',
  text:    '#f0eee8',
  textSub: '#c8d8e8',
  textMute:'#8aa4be',
  border:  'rgba(0,56,168,0.45)',
  borderS: 'rgba(0,56,168,0.20)',
};

/* ── Nav ─────────────────────────────────────────────────── */
function Nav({ page, onNav }) {
  const links = [
    { id:'home',    label:'ホーム'     },
    { id:'pricing', label:'料金'       },
    { id:'cast',    label:'キャスト'   },
    { id:'dance',   label:'ダンスタイム'},
    { id:'access',  label:'アクセス'   },
  ];
  return (
    <nav className="site-nav">
      <img src="./logo.png" alt="Club Starlight" onClick={() => onNav('home')} className="nav-logo" />
      <div className="nav-links">
        {links.map(l => (
          <span key={l.id} className={'nav-link' + (page===l.id ? ' active' : '')} onClick={() => onNav(l.id)}>{l.label}</span>
        ))}
      </div>
      <button className="nav-cta" onClick={() => onNav('access')}>ご予約</button>
    </nav>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  const s = {
    wrap: { background:'rgba(8,16,40,0.92)', borderTop:`1px solid ${T.border}`, padding:'40px 40px 24px', textAlign:'center' },
    logo: { fontFamily:"'Shippori Mincho',serif", fontSize:20, fontWeight:700, color:T.text, marginBottom:8 },
    logoSpan: { color:T.gold },
    sub: { fontSize:12, color:T.textMute, marginBottom:20, lineHeight:1.9 },
    divider: { borderTop:`1px solid ${T.borderS}`, marginBottom:16 },
    copy: { fontSize:11, color:T.textMute },
  };
  return (
    <footer style={s.wrap}>
      <div style={s.logo}>Club <span style={s.logoSpan}>Starlight</span></div>
      <p style={s.sub}>神奈川県平塚市紅谷町16-2 平塚西口会館3F<br />営業時間 18:00〜23:00（年中無休）<br />ご来店をお待ちしております 🌸</p>
      <div style={s.divider} />
      <p style={s.copy}>© 2025 Club Starlight. All rights reserved.</p>
    </footer>
  );
}

/* ── Section Wrapper ─────────────────────────────────────── */
function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding:'80px 40px', maxWidth:1100, margin:'0 auto', ...style }}>
      {children}
    </section>
  );
}

/* ── Section Heading ─────────────────────────────────────── */
function SectionHeading({ label, title, sub }) {
  return (
    <div className="section-heading" style={{
      textAlign:'center', marginBottom:48,
      background:'rgba(4,10,28,0.82)', backdropFilter:'blur(8px)',
      borderRadius:12, padding:'28px 32px',
      border:'1px solid rgba(0,56,168,0.3)',
    }}>
      <p style={{ fontSize:11, color:'#7eb8f7', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:12, fontFamily:"'Noto Sans JP',sans-serif" }}>{label}</p>
      <h2 style={{ fontFamily:"'Shippori Mincho',serif", fontSize:36, fontWeight:600, color:'#ffffff', lineHeight:1.3, marginBottom:sub?12:0, textShadow:'0 2px 12px rgba(0,0,0,0.5)' }}>{title}</h2>
      {sub && <p style={{ fontSize:14, color:'#c8d8e8', lineHeight:1.9 }}>{sub}</p>}
    </div>
  );
}

/* ── Gold Divider ────────────────────────────────────────── */
function GoldDivider() {
  return <div style={{ height:1, background:`linear-gradient(90deg, transparent, ${T.gold}, transparent)`, opacity:0.4, margin:'0' }} />;
}

/* ── Badge ───────────────────────────────────────────────── */
function Badge({ children, variant='rose' }) {
  const colors = {
    rose:  { color:T.rose,  bg:'rgba(232,105,138,0.14)', border:'rgba(232,105,138,0.3)' },
    gold:  { color:T.gold,  bg:'rgba(212,160,48,0.14)',  border:'rgba(212,160,48,0.28)' },
    coral: { color:T.coral, bg:'rgba(240,160,122,0.14)', border:'rgba(240,160,122,0.3)' },
  };
  const c = colors[variant] || colors.rose;
  return (
    <span style={{ display:'inline-block', fontSize:10, fontWeight:500, padding:'2px 9px', borderRadius:999,
      color:c.color, background:c.bg, border:`1px solid ${c.border}`,
      fontFamily:"'Noto Sans JP',sans-serif", letterSpacing:'0.05em' }}>
      {children}
    </span>
  );
}

/* ── Button ──────────────────────────────────────────────── */
function Btn({ children, variant='primary', onClick, style }) {
  const [hov, setHov] = useState(false);
  const variants = {
    primary: {
      background: hov ? T.blueL : T.blue, color:'#ffffff',
      border:'none', fontWeight:700,
    },
    secondary: {
      background:'transparent', color: hov ? T.goldL : T.gold,
      border:`1px solid ${hov ? T.goldL : T.gold}`, fontWeight:500,
    },
    ghost: {
      background:'transparent', color: hov ? T.text : T.textSub,
      border:`1px solid ${T.border}`, fontWeight:400,
    },
  };
  const v = variants[variant] || variants.primary;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily:"'Noto Sans JP',sans-serif", fontSize:14,
        padding:'11px 26px', borderRadius:8, cursor:'pointer',
        letterSpacing:'0.05em', transition:'all 0.2s',
        transform: hov ? 'translateY(-1px)' : 'none',
        ...v, ...style,
      }}
    >{children}</button>
  );
}

/* ── CastCard ────────────────────────────────────────────── */
function CastCard({ name, origin, specialty, badge, badgeVariant='rose', hue=0 }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:T.surface,
        border:`1px solid ${hov ? T.gold : T.border}`,
        borderRadius:12, overflow:'hidden',
        boxShadow: hov
          ? `0 0 20px rgba(0,56,168,0.5), 0 8px 32px rgba(0,0,0,0.5)`
          : '0 4px 24px rgba(0,0,0,0.4)',
        transform: hov ? 'scale(1.02)' : 'scale(1)',
        transition:'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
        cursor:'pointer', flex:'0 0 180px',
      }}
    >
      {/* Avatar placeholder */}
      <div style={{
        height:160, display:'flex', alignItems:'center', justifyContent:'center',
        background:`linear-gradient(135deg, hsl(${220+hue},60%,22%) 0%, hsl(${210+hue},55%,14%) 100%)`,
        fontSize:48, color:`hsla(${220+hue},70%,70%,0.5)`,
        userSelect:'none',
      }}>♪</div>
      <div style={{ padding:'14px 16px' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:4 }}>
          <span style={{ fontFamily:"'Shippori Mincho',serif", fontSize:18, color:T.text, fontWeight:500 }}>{name}</span>
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </div>
        <p style={{ fontSize:11, color:T.textMute, lineHeight:1.7 }}>{origin}</p>
        <p style={{ fontSize:12, color:T.textSub, marginTop:4 }}>{specialty}</p>
      </div>
    </div>
  );
}

/* ── PriceCard ───────────────────────────────────────────── */
function PriceCard({ label, duration, price, priceNote, features, highlighted }) {
  return (
    <div style={{
      background: highlighted ? T.raised : T.surface,
      border:`1px solid ${highlighted ? T.gold : T.border}`,
      borderRadius:12, padding:'28px 24px', flex:1,
      boxShadow: highlighted
        ? `0 0 28px rgba(0,56,168,0.4), 0 4px 24px rgba(0,0,0,0.5)`
        : '0 4px 20px rgba(0,0,0,0.4)',
      position:'relative',
    }}>
      {highlighted && (
        <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)',
          background:T.gold, color:T.bg, fontSize:10, fontWeight:700, padding:'3px 14px',
          borderRadius:999, letterSpacing:'0.1em', fontFamily:"'Noto Sans JP',sans-serif",
          whiteSpace:'nowrap' }}>人気プラン</div>
      )}
      <p style={{ fontSize:11, color:T.gold, letterSpacing:'0.15em', textTransform:'uppercase',
        fontFamily:"'Noto Sans JP',sans-serif", marginBottom:8 }}>{label}</p>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:38, fontWeight:700, color:T.goldLL, lineHeight:1 }}>
        ¥{price.toLocaleString()}
      </div>
      <p style={{ fontSize:12, color:T.textMute, margin:'4px 0 20px' }}>{duration} / {priceNote}</p>
      <ul style={{ listStyle:'none', padding:0, margin:'0 0 20px' }}>
        {features.map((f,i) => (
          <li key={i} style={{ fontSize:13, color:T.textSub, lineHeight:1.9, paddingLeft:16, position:'relative' }}>
            <span style={{ position:'absolute', left:0, color:T.gold, fontSize:10, top:5 }}>♪</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export all components globally
Object.assign(window, {
  Nav, Footer, Section, SectionHeading, GoldDivider, Badge, Btn, CastCard, PriceCard, T
});
