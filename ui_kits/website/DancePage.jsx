// DancePage.jsx — Dance time schedule
const SCHEDULE = [
  { time:'18:00〜18:30', event:'オープニングショー',   performers:'全キャスト',       type:'dance' },
  { time:'19:00〜19:20', event:'フリータイム♪',        performers:'—',                type:'free'  },
  { time:'19:30〜20:00', event:'ソロダンス',            performers:'キャスト①',        type:'dance' },
  { time:'20:00〜20:15', event:'カラオケタイム',        performers:'キャスト②',        type:'free'  },
  { time:'20:30〜21:00', event:'グループダンスショー',  performers:'キャスト①②③',     type:'dance' },
  { time:'21:00〜21:20', event:'フリータイム♪',        performers:'—',                type:'free'  },
  { time:'22:30〜23:00', event:'クロージングショー',    performers:'全キャスト',       type:'dance' },
];

function DancePage() {
  const darkBox = {
    background: 'rgba(4,10,28,0.88)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(0,56,168,0.4)',
    borderRadius: 12,
    padding: '24px 28px',
  };

  return (
    <div style={{ paddingTop:80, minHeight:'100vh', background:'transparent' }}>
      <section style={{ padding:'80px 40px', maxWidth:1100, margin:'0 auto' }} className="section-inner" >
        <SectionHeading
          label="DANCE TIME"
          title="ダンスタイム時間割"
          sub="毎晩熱いショーをお届けします。お好みの時間に合わせてご来店ください。"
        />

        {/* Schedule list */}
        <div style={{ maxWidth:700, margin:'0 auto', ...darkBox }}>
          {SCHEDULE.map((row, i) => {
            const dotColor = row.type==='dance' ? '#CE1126' : '#FCD116';
            const dotShadow = row.type==='dance' ? '0 0 8px rgba(206,17,38,0.6)' : '0 0 8px rgba(252,209,22,0.5)';
            return (
              <div key={i} className="sched-row">
                {/* Mobile: dot+time on one line; Desktop: dot | time | event */}
                <div className="sched-time-row">
                  <div className="sched-dot" style={{ background: dotColor, boxShadow: dotShadow }} />
                  <div className="sched-time">{row.time}</div>
                </div>
                <div className="sched-event">
                  <div className="sched-event-top">
                    <span className="sched-event-name">{row.event}</span>
                    <Badge variant={row.type==='dance' ? 'rose' : 'gold'}>
                      {row.type==='dance' ? 'ダンス' : 'フリー'}
                    </Badge>
                  </div>
                  <div className="sched-performers">出演：{row.performers}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ maxWidth:700, margin:'16px auto 0', ...darkBox, display:'flex', gap:24, flexWrap:'wrap', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:10,height:10,borderRadius:'50%', background:'#CE1126', boxShadow:'0 0 8px rgba(206,17,38,0.6)' }} />
            <span style={{ fontSize:13, color:'#c8d8e8', fontFamily:"'Noto Sans JP',sans-serif" }}>ダンスショー</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:10,height:10,borderRadius:'50%', background:'#FCD116', boxShadow:'0 0 8px rgba(252,209,22,0.5)' }} />
            <span style={{ fontSize:13, color:'#c8d8e8', fontFamily:"'Noto Sans JP',sans-serif" }}>フリータイム</span>
          </div>
          <p style={{ fontSize:12, color:'#8aa4be', lineHeight:1.7, flex:'1 0 200px', fontFamily:"'Noto Sans JP',sans-serif" }}>
            ※ スケジュールは予告なく変更になる場合があります。
          </p>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { DancePage });
