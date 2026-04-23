// CastPage.jsx — Cast member grid
const { useState } = React;

const CAST = [
  { name:'マリア',    origin:'セブ島出身', specialty:'ダンス・歌', badge:'人気No.1', badgeVariant:'rose',  hue:0   },
  { name:'アンジェラ',origin:'マニラ出身', specialty:'カラオケ',   badge:'新人',     badgeVariant:'gold',  hue:30  },
  { name:'ソフィア',  origin:'ダバオ出身', specialty:'ダンス',     badge:'常連人気', badgeVariant:'rose',  hue:60  },
  { name:'イザベル',  origin:'セブ島出身', specialty:'おしゃべり', badge:null,       badgeVariant:'coral', hue:90  },
  { name:'クリスティン',origin:'マニラ出身',specialty:'ダンス・MC',badge:'リーダー', badgeVariant:'gold',  hue:120 },
  { name:'ジャネット',origin:'マカティ出身',specialty:'歌・ピアノ',badge:'新人',     badgeVariant:'gold',  hue:150 },
];

function CastPage() {
  const [selected, setSelected] = useState(null);
  const cast = selected
    ? CAST.filter(c => c.name.includes(selected) || c.specialty.includes(selected) || selected === 'all')
    : CAST;

  const filterBtns = ['全員', 'ダンス', '歌', '新人'];

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: T.bg }}>
      <Section>
        <SectionHeading
          label="CAST MEMBERS"
          title="キャスト一覧"
          sub="全員があなたの「おねえさん」です。お気に入りのキャストを指名できます。"
        />

        {/* Filter */}
        <div style={{ display:'flex', gap:10, justifyContent:'center', marginBottom:40, flexWrap:'wrap' }}>
          {filterBtns.map(f => (
            <button
              key={f}
              onClick={() => setSelected(selected === f ? null : f)}
              style={{
                fontFamily:"'Noto Sans JP',sans-serif", fontSize:12, fontWeight:500,
                padding:'7px 20px', borderRadius:999, cursor:'pointer',
                border:`1px solid ${selected===f ? T.gold : T.border}`,
                background: selected===f ? T.gold : 'transparent',
                color: selected===f ? T.bg : T.textSub,
                transition:'all 0.2s', letterSpacing:'0.05em',
              }}
            >{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:'flex', gap:20, flexWrap:'wrap', justifyContent:'center' }}>
          {CAST.map((c, i) => (
            <CastCard key={i} {...c} />
          ))}
        </div>

        {/* Note */}
        <p style={{
          textAlign:'center', fontSize:12, color:T.textMute, marginTop:40, lineHeight:1.9,
          fontFamily:"'Noto Sans JP',sans-serif",
        }}>
          ※ キャストの出勤状況は日により異なります。詳しくはお電話でご確認ください。<br />
          ※ 指名料はセット料金に含まれています。
        </p>
      </Section>
    </div>
  );
}

Object.assign(window, { CastPage });
