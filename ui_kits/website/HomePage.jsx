// HomePage.jsx — Hero + intro for Club Rosa
const { useState } = React;

function HomePage({ onNav }) {
  const heroStyle = {
    minHeight: '100vh',
    background: `linear-gradient(180deg, rgba(4,10,28,0.82) 0%, rgba(4,10,28,0.68) 50%, rgba(4,10,28,0.85) 100%)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', paddingTop: 64,
  };

  const taglineStyle = {
    fontFamily: "'Noto Sans JP',sans-serif",
    fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: '#7eb8f7', marginBottom: 20,
  };
  const h1Style = {
    fontFamily: "'Shippori Mincho',serif",
    fontSize: 64, fontWeight: 700, color: '#ffffff',
    lineHeight: 1.15, marginBottom: 24, textAlign: 'center',
    textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
  };
  // className applied below for mobile override
  const subStyle = {
    fontFamily: "'Noto Sans JP',sans-serif",
    fontSize: 15, color: '#d8e8f4', lineHeight: 1.9,
    textAlign: 'center', maxWidth: 480, marginBottom: 40,
    textShadow: '0 1px 8px rgba(0,0,0,0.7)',
  };
  const ctaRow = { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' };
  const statsRow = {
    display: 'flex', gap: 40, justifyContent: 'center', marginTop: 60,
    padding: '28px 40px',
    background: 'rgba(4,10,28,0.85)',
    backdropFilter: 'blur(12px)',
    border: `1px solid rgba(0,56,168,0.5)`,
    borderRadius: 16, flexWrap: 'wrap',
  };
  const stat = (num, unit, label) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>
        {num}<span style={{ fontSize: 16, color: '#7eb8f7', marginLeft: 2 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 11, color: '#8aa4be', marginTop: 4, letterSpacing: '0.08em', fontFamily: "'Noto Sans JP',sans-serif" }}>{label}</div>
    </div>
  );

  // SVG icons — no emoji
  const icons = [
    {
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7eb8f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>
        </svg>
      ),
      title: 'アットホーム', desc: 'まるでおうちのような居心地のよさ'
    },
    {
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7eb8f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/><path d="M14.5 9a2.5 2.5 0 00-5 0c0 1.5 1 2.5 2.5 3 1.5.5 2.5 1.5 2.5 3a2.5 2.5 0 01-5 0"/><line x1="12" y1="6.5" x2="12" y2="7.5"/><line x1="12" y1="16.5" x2="12" y2="17.5"/>
        </svg>
      ),
      title: '明朗会計', desc: '料金は明確。追加費用ゼロ'
    },
    {
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7eb8f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
        </svg>
      ),
      title: 'ショータイム', desc: '毎晩ライブダンスショー無料'
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={heroStyle}>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 700 }}>
          <p style={taglineStyle}>WELCOME TO CLUB STARLIGHT</p>
          <h1 style={h1Style} className="hero-h1">
            今夜も笑顔で<br />
            <span style={{ color: '#FCD116', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>お迎えします</span>
          </h1>
          <p style={subStyle} className="hero-sub">
            神奈川県平塚市、JR平塚駅から徒歩1分。<br />
            フィリピン出身のキャストが皆さまのひとときを盛り上げます。<br />
            明朗会計でご安心ください。
          </p>
          <div style={ctaRow}>
            <Btn variant="primary" onClick={() => onNav('cast')}>キャスト一覧を見る</Btn>
            <Btn variant="secondary" onClick={() => onNav('pricing')}>料金・プランを見る</Btn>
          </div>

          <div style={statsRow} className="stats-row">
            {stat('18:00', '〜', '営業開始')}
            <div style={{ width: 1, background: 'rgba(0,56,168,0.5)', alignSelf: 'stretch' }} />
            {stat('23:00', '', 'クローズ')}
            <div style={{ width: 1, background: 'rgba(0,56,168,0.5)', alignSelf: 'stretch' }} />
            {stat('平塚', '', '神奈川県')}
            <div style={{ width: 1, background: 'rgba(0,56,168,0.5)', alignSelf: 'stretch' }} />
            {stat('年中', '無休', '')}
          </div>
        </div>
      </div>

      {/* About strip */}
      <div style={{ background: 'rgba(4,10,28,0.88)', borderTop: `1px solid rgba(0,56,168,0.4)`, borderBottom: `1px solid rgba(0,56,168,0.4)` }}>
        <Section style={{ padding: '56px 40px' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <p style={{ fontSize: 11, color: '#7eb8f7', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Noto Sans JP',sans-serif" }}>ABOUT US</p>
              <h2 style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 28, color: '#ffffff', fontWeight: 600, lineHeight: 1.4, marginBottom: 16 }}>
                全員があなたの<br />「明るいパートナー」です
              </h2>
              <p style={{ fontSize: 14, color: '#c8d8e8', lineHeight: 1.9 }}>
                Club Starlightはフィリピン出身のキャストが在籍する、<br />
                アットホームなパブです。初めての方も安心して<br />
                ご来店いただけます。隠れた費用は一切ありません。
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 260, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {icons.map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(0,30,60,0.75)', border: `1px solid rgba(0,56,168,0.45)`, borderRadius: 10,
                  padding: '20px 18px', flex: '1 0 130px',
                }}>
                  <div style={{ marginBottom: 10 }}>{item.svg}</div>
                  <div style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 15, color: '#ffffff', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: '#8aa4be', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

Object.assign(window, { HomePage });
