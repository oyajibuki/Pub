// DancePage.jsx — Dance time schedule
const SCHEDULE = [
  { time:'18:00〜18:30', event:'オープニングショー',   performers:'全キャスト',            type:'dance' },
  { time:'19:00〜19:20', event:'フリータイム♪',        performers:'—',                     type:'free'  },
  { time:'19:30〜20:00', event:'ソロダンス',            performers:'キャスト①',             type:'dance' },
  { time:'20:00〜20:15', event:'カラオケタイム',        performers:'キャスト②',             type:'free'  },
  { time:'20:30〜21:00', event:'グループダンスショー',  performers:'キャスト①②③',          type:'dance' },
  { time:'21:00〜21:20', event:'フリータイム♪',        performers:'—',                     type:'free'  },
  { time:'22:30〜23:00', event:'クロージングショー',   performers:'全キャスト',            type:'dance' },
];

function DancePage() {
  return (
    <div style={{ paddingTop:80, minHeight:'100vh', background:T.bg }}>
      <Section>
        <SectionHeading
          label="DANCE TIME"
          title="ダンスタイム時間割"
          sub="毎晩熱いショーをお届けします。お好みの時間に合わせてご来店ください。"
        />

        <div style={{ maxWidth:700, margin:'0 auto' }}>
          {SCHEDULE.map((row, i) => (
            <div key={i} style={{
              display:'flex', alignItems:'center', gap:20,
              padding:'18px 0',
              borderBottom:`1px solid ${T.borderS}`,
            }}>
              {/* Time dot */}
              <div style={{ position:'relative', width:12, flexShrink:0 }}>
                <div style={{
                  width:10, height:10, borderRadius:'50%',
                  background: row.type==='dance' ? T.rose : T.gold,
                  border:`2px solid ${row.type==='dance' ? 'rgba(232,105,138,0.4)' : 'rgba(212,160,48,0.4)'}`,
                  boxShadow:`0 0 8px ${row.type==='dance' ? 'rgba(232,105,138,0.4)' : 'rgba(212,160,48,0.3)'}`,
                }} />
              </div>
              {/* Time */}
              <div style={{ fontFamily:"'Shippori Mincho',serif", fontSize:15, color:T.text, minWidth:150, flexShrink:0 }}>
                {row.time}
              </div>
              {/* Event */}
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
                  <span style={{ fontSize:14, color:T.text, fontFamily:"'Noto Sans JP',sans-serif", fontWeight:500 }}>
                    {row.event}
                  </span>
                  <Badge variant={row.type==='dance' ? 'rose' : 'gold'}>
                    {row.type==='dance' ? 'ダンス' : 'フリー'}
                  </Badge>
                </div>
                <div style={{ fontSize:12, color:T.textMute }}>出演：{row.performers}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:40, padding:'20px 28px', background:T.surface,
          border:`1px solid ${T.border}`, borderRadius:12, maxWidth:700, margin:'40px auto 0',
          display:'flex', gap:24, flexWrap:'wrap', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:10,height:10,borderRadius:'50%', background:T.rose, boxShadow:'0 0 8px rgba(232,105,138,0.5)' }} />
            <span style={{ fontSize:12, color:T.textSub }}>ダンスショー</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:10,height:10,borderRadius:'50%', background:T.gold, boxShadow:'0 0 8px rgba(212,160,48,0.5)' }} />
            <span style={{ fontSize:12, color:T.textSub }}>フリータイム（自由なひとときを）</span>
          </div>
          <p style={{ fontSize:11, color:T.textMute, lineHeight:1.7, flex:'1 0 200px' }}>
            ※ スケジュールは予告なく変更になる場合があります。
          </p>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { DancePage });
