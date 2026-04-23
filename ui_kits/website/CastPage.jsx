// CastPage.jsx — Cast member grid
const { useState } = React;

const CAST = [
  { name:'マリア',      origin:'セブ島出身',   specialty:'ダンス・歌',  badge:'人気No.1', badgeVariant:'rose',  hue:0   },
  { name:'アンジェラ',  origin:'マニラ出身',   specialty:'カラオケ',    badge:'新人',     badgeVariant:'gold',  hue:25  },
  { name:'ソフィア',    origin:'ダバオ出身',   specialty:'ダンス',      badge:'常連人気', badgeVariant:'rose',  hue:50  },
  { name:'イザベル',    origin:'セブ島出身',   specialty:'おしゃべり',  badge:null,       badgeVariant:'coral', hue:75  },
  { name:'クリスティン',origin:'マニラ出身',   specialty:'ダンス・MC',  badge:'リーダー', badgeVariant:'gold',  hue:100 },
  { name:'ジャネット',  origin:'マカティ出身', specialty:'歌・ピアノ',  badge:'新人',     badgeVariant:'gold',  hue:125 },
  { name:'ローズ',      origin:'セブ島出身',   specialty:'ダンス',      badge:null,       badgeVariant:'rose',  hue:150 },
  { name:'ミシェル',    origin:'マニラ出身',   specialty:'カラオケ・MC', badge:'人気',    badgeVariant:'rose',  hue:175 },
  { name:'サラ',        origin:'ダバオ出身',   specialty:'歌',          badge:null,       badgeVariant:'coral', hue:200 },
  { name:'ニコール',    origin:'セブ島出身',   specialty:'ダンス・歌',  badge:'新人',     badgeVariant:'gold',  hue:225 },
  { name:'ジェシカ',    origin:'マニラ出身',   specialty:'おしゃべり',  badge:null,       badgeVariant:'coral', hue:250 },
  { name:'レイチェル',  origin:'セブ島出身',   specialty:'ダンス',      badge:'常連人気', badgeVariant:'rose',  hue:275 },
  { name:'ビアンカ',    origin:'マカティ出身', specialty:'カラオケ',    badge:'新人',     badgeVariant:'gold',  hue:300 },
  { name:'エミリー',    origin:'マニラ出身',   specialty:'歌・MC',      badge:null,       badgeVariant:'coral', hue:325 },
  { name:'クロエ',      origin:'セブ島出身',   specialty:'ダンス',      badge:'人気',     badgeVariant:'rose',  hue:350 },
];

function CastPage() {
  const [filter, setFilter] = useState('全員');

  const cast = filter === '全員'  ? CAST
    : filter === '新人'           ? CAST.filter(c => c.badge === '新人')
    : CAST.filter(c => c.specialty.includes(filter));

  const filterBtns = ['全員', 'ダンス', '歌', '新人'];

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'transparent' }}>
      <Section>
        <SectionHeading
          label="CAST MEMBERS"
          title="キャスト一覧"
          sub="全員があなたの「明るいパートナー」です。お気に入りのキャストを指名できます。"
        />

        {/* Filter tabs */}
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginBottom:40, flexWrap:'wrap' }}>
          {filterBtns.map(f => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  fontFamily:"'Noto Sans JP',sans-serif", fontSize:14, fontWeight: active ? 700 : 500,
                  padding:'9px 24px', borderRadius:999, cursor:'pointer',
                  border: `2px solid ${active ? '#ffffff' : 'rgba(0,56,168,0.5)'}`,
                  background: active ? '#ffffff' : 'rgba(4,10,28,0.75)',
                  color: active ? '#0a1628' : '#c8d8e8',
                  backdropFilter: 'blur(6px)',
                  transition:'all 0.2s', letterSpacing:'0.05em',
                  boxShadow: active ? '0 2px 12px rgba(255,255,255,0.2)' : 'none',
                }}
              >{f}</button>
            );
          })}
        </div>

        {/* Grid */}
        <div style={{ display:'flex', gap:20, flexWrap:'wrap', justifyContent:'center' }}>
          {cast.map((c, i) => (
            <CastCard key={c.name} {...c} />
          ))}
        </div>

        {/* Note */}
        <div style={{
          background: 'rgba(0,20,50,0.7)', border: '1px solid rgba(0,56,168,0.35)',
          borderRadius: 10, padding: '18px 24px', marginTop: 40,
          fontSize: 13, color: '#c8d8e8', lineHeight: 2,
          fontFamily: "'Noto Sans JP',sans-serif",
        }}>
          ※ キャストの出勤状況は日により異なります。詳しくはお電話でご確認ください。<br />
          ※ 指名料はセット料金に含まれています。
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { CastPage });
