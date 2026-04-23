// HomePage.jsx — Hero + intro for Club Rosa
const { useState } = React;

function HomePage({ onNav }) {
  const heroStyle = {
    minHeight: '100vh',
    background: `radial-gradient(ellipse at 60% 40%, #0d2240 0%, #08101e 60%, #040c18 100%)`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', paddingTop: 64,
  };
  // Decorative circles
  const circle = (size, top, left, color) => ({
    position: 'absolute', width: size, height: size, borderRadius: '50%',
    top, left,
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    pointerEvents: 'none',
  });

  const taglineStyle = {
    fontFamily: "'Noto Sans JP',sans-serif",
    fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
    color: T.gold, marginBottom: 20,
  };
  const h1Style = {
    fontFamily: "'Shippori Mincho',serif",
    fontSize: 64, fontWeight: 700, color: T.text,
    lineHeight: 1.15, marginBottom: 24, textAlign: 'center',
  };
  const subStyle = {
    fontFamily: "'Noto Sans JP',sans-serif",
    fontSize: 16, color: T.textSub, lineHeight: 1.9,
    textAlign: 'center', maxWidth: 480, marginBottom: 40,
  };
  const ctaRow = { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' };
  const statsRow = {
    display: 'flex', gap: 40, justifyContent: 'center', marginTop: 60,
    padding: '28px 40px',
    background: 'rgba(30,18,48,0.7)',
    backdropFilter: 'blur(8px)',
    border: `1px solid ${T.border}`,
    borderRadius: 16, flexWrap: 'wrap',
  };
  const stat = (num, unit, label) => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: T.goldLL, lineHeight: 1 }}>
        {num}<span style={{ fontSize: 16, color: T.gold, marginLeft: 2 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 11, color: T.textMute, marginTop: 4, letterSpacing: '0.08em', fontFamily: "'Noto Sans JP',sans-serif" }}>{label}</div>
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <div style={heroStyle}>
        <div style={circle(400, '-80px', '-60px', 'rgba(212,160,48,0.07)')} />
        <div style={circle(600, '30%', '55%', 'rgba(232,105,138,0.06)')} />
        <div style={circle(300, '60%', '-5%', 'rgba(212,160,48,0.05)')} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: 700 }}>
          <p style={taglineStyle}>WELCOME TO CLUB STARLIGHT</p>
          <h1 style={h1Style}>
            今夜も笑顔で<br />
            <span style={{ color: T.gold }}>お迎えします</span>
          </h1>
          <p style={subStyle}>
            神奈川県平塚市、JR平塚駅から徒歩1分。<br />
            フィリピン出身のキャストが皆さまのひとときを盛り上げます。<br />
            明朗会計でご安心ください。
          </p>
          <div style={ctaRow}>
            <Btn variant="primary" onClick={() => onNav('cast')}>キャスト一覧を見る</Btn>
            <Btn variant="secondary" onClick={() => onNav('pricing')}>料金・プランを見る</Btn>
          </div>

          <div style={statsRow}>
            {stat('18:00', '〜', '営業開始')}
            <div style={{ width: 1, background: T.border, alignSelf: 'stretch' }} />
            {stat('23:00', '', 'クローズ')}
            <div style={{ width: 1, background: T.border, alignSelf: 'stretch' }} />
            {stat('平塚', '', '神奈川県')}
            <div style={{ width: 1, background: T.border, alignSelf: 'stretch' }} />
            {stat('月', '休', '定休日')}
          </div>
        </div>
      </div>

      {/* About strip */}
      <div style={{ background: T.surface, borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
        <Section style={{ padding: '56px 40px' }}>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <p style={{ fontSize: 11, color: T.gold, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12, fontFamily: "'Noto Sans JP',sans-serif" }}>ABOUT US</p>
              <h2 style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 28, color: T.text, fontWeight: 600, lineHeight: 1.4, marginBottom: 16 }}>
                全員があなたの<br />「おねえさん」です
              </h2>
              <p style={{ fontSize: 14, color: T.textSub, lineHeight: 1.9 }}>
                Club Rosaはフィリピン出身のキャストが在籍する、<br />
                アットホームなパブです。初めての方も安心して<br />
                ご来店いただけます。隠れた費用は一切ありません。
              </p>
            </div>
            <div style={{ flex: 1, minWidth: 260, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { icon: '🏠', title: 'アットホーム', desc: 'まるでおうちのような居心地のよさ' },
                { icon: '💴', title: '明朗会計', desc: '料金は明確。追加費用ゼロ' },
                { icon: '💃', title: 'ダンスタイム', desc: '毎晩ライブショーをお届け' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: T.raised, border: `1px solid ${T.border}`, borderRadius: 10,
                  padding: '16px 18px', flex: '1 0 130px',
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 15, color: T.text, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: T.textMute, lineHeight: 1.7 }}>{item.desc}</div>
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
