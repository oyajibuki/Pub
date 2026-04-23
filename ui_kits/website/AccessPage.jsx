// AccessPage.jsx — Hours, location, contact
function AccessPage() {
  const rows = [
    ['営業時間', '18:00〜23:00'],
    ['定休日', '年中無休'],
    ['住所', '神奈川県平塚市紅谷町16-2 平塚西口会館3F'],
    ['最寄り駅', 'JR東海道本線「平塚駅」徒歩1分'],
    ['電話番号', '0463-22-7799'],
    ['Instagram', '@starlight_hiratsuka'],
  ];

  const darkBox = {
    background: 'rgba(4,10,28,0.88)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(0,56,168,0.4)',
    borderRadius: 12,
  };

  return (
    <div style={{ paddingTop:80, minHeight:'100vh', background:'transparent' }}>
      <Section>
        <SectionHeading
          label="ACCESS"
          title="アクセス・お問い合わせ"
          sub="お気軽にお電話・SNSでお問い合わせください。"
        />

        <div style={{ display:'flex', gap:32, flexWrap:'wrap' }}>
          {/* Info table */}
          <div style={{ flex:'1 0 280px', ...darkBox, overflow:'hidden' }}>
            {rows.map(([k,v],i) => (
              <div key={i} style={{
                display:'flex', borderBottom: i<rows.length-1 ? '1px solid rgba(0,56,168,0.25)' : 'none',
              }}>
                <div style={{
                  width:120, flexShrink:0, padding:'16px 18px',
                  fontSize:13, color:'#7eb8f7', letterSpacing:'0.05em',
                  fontFamily:"'Noto Sans JP',sans-serif", lineHeight:1.7, fontWeight:500,
                }}>{k}</div>
                <div style={{ padding:'16px 18px', fontSize:15, color:'#ffffff', lineHeight:1.7, fontFamily:"'Noto Sans JP',sans-serif" }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Storefront */}
          <div style={{ flex:'1 0 280px', ...darkBox, overflow:'hidden', minHeight:260 }}>
            <img src="./storefront.png" alt="スターライト外観"
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          </div>
        </div>

        {/* Notes */}
        <div style={{
          background: 'rgba(4,10,28,0.82)', border: '1px solid rgba(0,56,168,0.35)',
          borderRadius: 10, padding: '20px 24px', marginTop: 32,
          fontSize: 14, color: '#c8d8e8', lineHeight: 2,
          fontFamily: "'Noto Sans JP',sans-serif",
        }}>
          ※ キャストの出勤状況は日により異なります。詳しくはお電話でご確認ください。<br />
          ※ 指名料はセット料金に含まれています。
        </div>

        {/* CTA */}
        <div style={{
          textAlign:'center', marginTop:32,
          background: 'rgba(4,10,28,0.82)', border: '1px solid rgba(0,56,168,0.35)',
          borderRadius: 12, padding: '32px 24px',
        }}>
          <p style={{ fontSize:16, color:'#ffffff', marginBottom:24, lineHeight:2,
            fontFamily:"'Noto Sans JP',sans-serif", fontWeight:500 }}>
            お気軽にお電話・SNSでお問い合わせください。<br />
            <span style={{ fontSize:14, color:'#c8d8e8', fontWeight:400 }}>ご来店をお待ちしております。</span>
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
