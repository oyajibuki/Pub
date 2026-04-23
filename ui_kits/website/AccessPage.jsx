// AccessPage.jsx — Hours, location, contact
function AccessPage() {
  const rows = [
    ['営業時間', '18:00〜23:00'],
    ['定休日', '毎週月曜日'],
    ['住所', '神奈川県平塚市紅谷町16-2 平塚西口会館3F'],
    ['最寄り駅', 'JR東海道本線「平塚駅」徒歩1分'],
    ['電話番号', '0463-22-7799'],
    ['Instagram', '@starlight_hiratsuka'],
  ];

  return (
    <div style={{ paddingTop:80, minHeight:'100vh', background:T.bg }}>
      <Section>
        <SectionHeading
          label="ACCESS"
          title="アクセス・お問い合わせ"
          sub="お気軽にお電話・SNSでお問い合わせください。"
        />

        <div style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
          {/* Info table */}
          <div style={{ flex:'1 0 280px', background:T.surface, border:`1px solid ${T.border}`,
            borderRadius:12, overflow:'hidden', boxShadow:'inset 0 1px 0 rgba(212,160,48,0.12), 0 4px 24px rgba(0,0,0,0.35)' }}>
            {rows.map(([k,v],i) => (
              <div key={i} style={{
                display:'flex', borderBottom: i<rows.length-1 ? `1px solid ${T.borderS}` : 'none',
              }}>
                <div style={{ width:110, flexShrink:0, padding:'14px 16px',
                  fontSize:11, color:T.gold, letterSpacing:'0.08em',
                  fontFamily:"'Noto Sans JP',sans-serif", lineHeight:1.7 }}>{k}</div>
                <div style={{ padding:'14px 16px', fontSize:13, color:T.text, lineHeight:1.7 }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div style={{ flex:'1 0 280px', background:T.raised, border:`1px solid ${T.border}`,
            borderRadius:12, overflow:'hidden', minHeight:260 }}>
            <img src="../../assets/storefront.png" alt="スターライト外観"
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:48 }}>
          <p style={{ fontSize:14, color:T.textSub, marginBottom:20, lineHeight:1.9,
            fontFamily:"'Noto Sans JP',sans-serif" }}>
            ご予約・ご来店のご相談はお気軽にどうぞ。<br />ご来店をお待ちしております 🌸
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <Btn variant="primary">お電話でご予約</Btn>
            <Btn variant="secondary">Instagramを見る</Btn>
          </div>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { AccessPage });
