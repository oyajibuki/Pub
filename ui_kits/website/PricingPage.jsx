// PricingPage.jsx — Clear pricing plans
const PLANS = [
  {
    label:'スタンダード', duration:'60分',
    price:8000, priceNote:'飲み放題込み',
    features:['ソフトドリンク飲み放題','指名料込み','延長 30分 ¥2,000'],
    highlighted: false,
  },
  {
    label:'プレミアム', duration:'90分',
    price:10000, priceNote:'飲み放題込み',
    features:['アルコール飲み放題','指名料込み','ショータイム優先席','延長 30分 ¥2,000'],
    highlighted: true,
  },
  {
    label:'VIP', duration:'120分',
    price:15000, priceNote:'飲み放題込み',
    features:['アルコール飲み放題','キャスト全員と交流','VIPシート確約','延長 30分 ¥2,000','記念撮影サービス'],
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <div style={{ paddingTop:80, minHeight:'100vh', background:T.bg }}>
      <Section>
        <SectionHeading
          label="PRICING"
          title="料金・プラン"
          sub="明朗会計でご安心ください。表示価格がすべてです。隠れた追加費用は一切ございません。"
        />

        {/* Plans */}
        <div style={{ display:'flex', gap:20, flexWrap:'wrap', alignItems:'flex-start' }}>
          {PLANS.map((p,i) => <PriceCard key={i} {...p} />)}
        </div>

        {/* Other charges */}
        <div style={{
          marginTop:40, background:T.surface,
          border:`1px solid ${T.border}`, borderRadius:12, padding:'28px 32px',
        }}>
          <p style={{ fontSize:11, color:T.gold, letterSpacing:'0.15em', textTransform:'uppercase',
            fontFamily:"'Noto Sans JP',sans-serif", marginBottom:16 }}>その他の料金</p>
          <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
            {[
              ['ボトルキープ', '¥3,000〜'],
              ['チャーム（おつまみ）', '¥500〜'],
              ['カラオケ', '無料'],
              ['席料', '無料'],
              ['消費税', '表示価格込み'],
            ].map(([k,v],i) => (
              <div key={i} style={{ flex:'1 0 140px' }}>
                <div style={{ fontSize:11, color:T.textMute, marginBottom:2, fontFamily:"'Noto Sans JP',sans-serif" }}>{k}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:T.goldLL }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ textAlign:'center', fontSize:12, color:T.textMute, marginTop:24, lineHeight:1.9,
          fontFamily:"'Noto Sans JP',sans-serif" }}>
          ※ 料金はすべて税込です。｜ご不明な点はお気軽にお問い合わせください。
        </p>
      </Section>
    </div>
  );
}

Object.assign(window, { PricingPage });
