// CastPage.jsx — Cast member grid

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
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: 'transparent' }}>
      <Section>
        <SectionHeading
          label="CAST MEMBERS"
          title="キャスト一覧"
          sub="全員があなたの「明るいパートナー」です。お気に入りのキャストを指名できます。"
        />

        {/* Grid */}
        <div style={{ display:'flex', gap:20, flexWrap:'wrap', justifyContent:'center' }}>
          {CAST.map((c) => (
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
