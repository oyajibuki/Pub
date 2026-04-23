// PricingPage.jsx
function PricingPage() {
  const cardStyle = {
    background: 'rgba(4,10,28,0.88)',
    border: '1px solid rgba(0,56,168,0.5)',
    borderRadius: 12,
    padding: '28px 32px',
    backdropFilter: 'blur(8px)',
  };
  const labelStyle = {
    fontSize: 10, color: '#7eb8f7', letterSpacing: '0.18em',
    textTransform: 'uppercase', fontFamily: "'Noto Sans JP',sans-serif",
    marginBottom: 6,
  };
  const priceStyle = {
    fontFamily: "'Playfair Display',serif",
    fontSize: 48, fontWeight: 700, color: '#ffffff', lineHeight: 1,
  };
  const rowStyle = {
    display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4,
  };
  const noteStyle = {
    background: 'rgba(0,20,50,0.7)',
    border: '1px solid rgba(0,56,168,0.35)',
    borderRadius: 10, padding: '20px 24px', marginTop: 40,
    fontSize: 13, color: '#c8d8e8', lineHeight: 2,
    fontFamily: "'Noto Sans JP',sans-serif",
  };

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'transparent' }}>
      <Section>
        <SectionHeading
          label="PRICING"
          title="料金"
          sub="明朗会計でご安心ください。表示価格がすべてです。"
        />

        {/* Main price */}
        <div style={{ ...cardStyle, marginBottom: 20, borderColor: 'rgba(206,17,38,0.6)', boxShadow: '0 0 32px rgba(0,56,168,0.2), 0 8px 32px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <div>
              <p style={labelStyle}>セット料金（1時間）</p>
              <div style={rowStyle}>
                <span style={priceStyle}>¥8,000</span>
                <span style={{ fontSize: 14, color: '#8aa4be' }}>税込</span>
              </div>
              <p style={{ fontSize: 13, color: '#c8d8e8', marginTop: 8, fontFamily: "'Noto Sans JP',sans-serif", lineHeight: 1.8 }}>
                焼酎飲み放題 ／ 指名料込み
              </p>
            </div>
            <div>
              <p style={labelStyle}>延長（1時間ごと）</p>
              <div style={rowStyle}>
                <span style={{ ...priceStyle, fontSize: 36 }}>¥8,000</span>
                <span style={{ fontSize: 14, color: '#8aa4be' }}>税込</span>
              </div>
              <p style={{ fontSize: 13, color: '#c8d8e8', marginTop: 8, fontFamily: "'Noto Sans JP',sans-serif", lineHeight: 1.8 }}>
                1時間単位 / 指名料込み
              </p>
            </div>
          </div>
        </div>

        {/* Other charges */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {[
            { label: 'ガールズドリンク', price: '¥1,000', note: 'ワンドリンク' },
            { label: 'カラオケ', price: '¥200', note: '1曲 / 現金のみ' },
            { label: 'ショータイム', price: '無料', note: '毎晩開催' },
            { label: 'ボトルキープ', price: 'なし', note: '' },
          ].map(({ label, price, note }, i) => (
            <div key={i} style={{ ...cardStyle, flex: '1 0 160px' }}>
              <p style={labelStyle}>{label}</p>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: '#ffffff', lineHeight: 1, marginBottom: note ? 4 : 0 }}>{price}</p>
              {note && <p style={{ fontSize: 11, color: '#8aa4be', fontFamily: "'Noto Sans JP',sans-serif", marginTop: 4 }}>{note}</p>}
            </div>
          ))}
        </div>

        {/* Notes */}
        <div style={noteStyle}>
          ※ 料金はすべて税込です。<br />
          ※ ご不明な点はお気軽にお問い合わせください。
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { PricingPage });
