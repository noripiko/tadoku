import { Story } from './types';
import { A1_STORIES } from './stories/a1';
import { A2_STORIES } from './stories/a2';
import { B1_STORIES } from './stories/b1';
import { B2_STORIES } from './stories/b2';
import { FAIRYTALE_STORIES } from './stories/fairytales';

export { B2_STORIES, FAIRYTALE_STORIES };

export const C1_STORIES: Story[] = [
  {
    id: 'c1-anatomie-feierabend',
    level: 'C1',
    title: 'Die Phänomenologie des Feierabends',
    titleJa: '「フライアーベント」の現象学',
    subtitle: 'Eine soziokulturelle Expedition in das heiligste Refugium des deutschen Werktätigen',
    subtitleJa: '仕事と生活を峻厳に切り離す、ドイツ固有の時間哲学を巡る考察',
    genre: 'Philosophy',
    genreJa: '哲学・エッセイ風ストーリー',
    wordCount: 624,
    readingTimeMinutes: 6,
    image: '/images/story_buergeramt_coffee_1791322005511.jpg',
    summaryJa: '外国人社会学者アルジュンがフランクフルトの金融街で観察した、ドイツ社会における最も厳格で神聖な概念「Feierabend（仕事終わりの夕べ）」。いかなる業務メールも立ち入れない結界が生まれる瞬間を、ユーモアと鋭敏な筆致で描く。',
    paragraphs: [
      {
        id: 1,
        german: 'Es existieren im deutschen Sprachschatz Begrifflichkeiten von geradezu metaphysischer Wucht, deren semantische Vielschichtigkeit sich jedem Versuch einer oberflächlichen Übersetzung widersetzt: »Waldeinsamkeit«, »Weltschmerz« oder eben jene sakrosankte Zäsur des Werktages: der »Feierabend«. Für den unbedarften Beobachter mag es sich vordergründig lediglich um das banale Ende der vertraglich geschuldeten Arbeitszeit handeln. In Wahrheit jedoch markiert der Feierabend den rituellen Übertritt von der profanen Sphäre der ökonomischen Verwertbarkeit in ein inviolables Refugium bürgerlicher Autonomie.',
        japanese: 'ドイツ語の語彙には、表層的な翻訳の試みをことごとく退ける、ほとんど形而上学的な重みを持った概念が存在します。「森の孤独（Waldeinsamkeit）」「世界苦（Weltschmerz）」、そして平日の神聖にして不可侵の断絶点である「フライアーベント（Feierabend）」です。事情を知らない観察者にとっては、それは表面上、契約上の労働時間のありふれた終了に過ぎないように見えるかもしれません。しかし実際には、フライアーベントとは経済的利用可能性という俗世の領域から、市民的自律の不可侵の避難所への儀式的な移行を告げるものなのです。'
      },
      {
        id: 2,
        german: 'Doktor Arjun Mehta, ein indischer Anthropologe im Gastsemester an der Goethe-Universität, richtete sein Observatorium im siebzehnten Stockwerk eines gläsernen Bankenturms in Frankfurt am Main ein. Sein Forschungsgegenstand: die exakte Sekunde, in der die Transformation einsetzt. Um Punkt siebzehn Uhr null null geschieht etwas Unerhörtes. Wie von einer unsichtbaren Partitur dirigiert, verstummt das unablässige Hämmern auf den ergonomischen Tastaturen. Bildschirme verdunkeln sich im Synchronklang, und eine beklemmende Stille senkt sich über den Großraum.',
        japanese: 'フランクフルト・アム・マインのゲーテ大学で客員学期を過ごすインド人人類学者アルジュン・メータ博士は、ガラス張りの銀行タワーの17階に観察拠点を構えました。彼の研究対象は、その変容が起こる正確な一秒でした。17時00分ジャスト、前代未聞の光景が展開します。目に見えない楽譜に指揮されたかのように、人間工学キーボードを激しく打つ音がぴたりと止まります。画面が一斉に暗転し、大部屋のオフィスに厳粛な静寂が降り立ちます。'
      },
      {
        id: 3,
        german: '»Schönen Feierabend allerseits«, murmelt Herr Dr. Krüger, während er seine Aktentasche schließt. Dieser Satz ist keineswegs eine unverbindliche Höflichkeitsfloskel; er ist eine rechtlich wie ontologisch bindende Deklaration. Ab diesem Moment verwandelt sich das Smartphone in ein nutzloses Brikett. Wer es wagt, um siebzehn Uhr fünfzehn eine dienstliche E-Mail mit der Dringlichkeitsstufe »Hoch« zu versenden, begeht keinen bloßen Fauxpas – er verletzt ein kulturelles Tabu, das tiefer verwurzelt ist als das bayerische Reinheitsgebot für Bier.',
        japanese: '「皆さん、良いフライアーベントを」とクリューガー博士がビジネスバッグを閉じながら呟きます。この一言は決して形式的な社交辞令ではありません。法的かつ存在論的な効力を持つ宣言なのです。この瞬間から、スマートフォンは使い道のないブリケット（ただの塊）へと姿を変えます。17時15分に「至急」マークを付けた業務メールを送信する愚を冒す者は、単なるマナー違反にとどまらず、ビールの醸造純粋令よりも深く根付いた文化的タブーを踏みにじることになります。'
      },
      {
        id: 4,
        german: 'Auf den Mainwiesen beobachtete Mehta die metamorphosierten Gestalten: Krawatten wurden gelockert, ein zischendes »Plopp« entwich den Bügelverschlussflaschen regionaler Brauereien, und auf Picknickdecken entfaltete sich das schlichte Ritual des »Abendbrots« – Roggenbrot, Schnittkäse und Essiggurken. Hier gab es kein Geschwätz über Quartalszahlen mehr. Der Feierabend ist die gelebte Antithesis zur modernen Leistungsgesellschaft; er ist der triumphale Sieg des Seins über das Tun.',
        japanese: 'マイン川の河川敷で、メータ博士は変貌を遂げた人々を観察しました。ネクタイは緩められ、地元の醸造所のスイングトップ瓶からシュワッと「ポンッ」という音が響き、ピクニックシートの上には「アーベントブロート（夕餉のパン）」の質素な儀式——ライ麦パン、スライスチーズ、ピクルス——が繰り広げられます。そこにはもはや四半期業績の無駄口など存在しません。フライアーベントとは現代の業績至上社会に対する生きた対立命題（アンチテーゼ）であり、「為すこと（Doing）」に対する「在ること（Being）」の凱歌なのです。'
      }
    ],
    fullTranslationJa: [
      'ドイツ語の語彙には、表層的な翻訳の試みをことごとく退ける、ほとんど形而上学的な重みを持った概念が存在します。「森の孤独」「世界苦」、そして平日の神聖にして不可侵の断絶点である「フライアーベント（仕事終わりの夕べ）」です。事情を知らない観察者にとっては、それは表面上、契約上の労働時間のありふれた終了に過ぎないように見えるかもしれません。しかし実際には、フライアーベントとは経済的利用可能性という俗世の領域から、市民的自律の不可侵の避難所への儀式的な移行を告げるものなのです。',
      'フランクフルト・アム・マインのゲーテ大学で客員学期を過ごすインド人人類学者アルジュン・メータ博士は、ガラス張りの銀行タワーの17階に観察拠点を構えました。彼の研究対象は、その変容が起こる正確な一秒でした。17時00分ジャスト、前代未聞の光景が展開します。目に見えない楽譜に指揮されたかのように、人間工学キーボードを激しく打つ音がぴたりと止まります。画面が一斉に暗転し、大部屋のオフィスに厳粛な静寂が降り立ちます。',
      '「皆さん、良いフライアーベントを」とクリューガー博士がビジネスバッグを閉じながら呟きます。この一言は決して形式的な社交辞令ではありません。法的かつ存在論的な効力を持つ宣言なのです。この瞬間から、スマートフォンは使い道のないただの塊へと姿を変えます。17時15分に「至急」マークを付けた業務メールを送信する愚を冒す者は、単なるマナー違反にとどまらず、ビールの醸造純粋令よりも深く根付いた文化的タブーを踏みにじることになります。',
      'マイン川の河川敷で、メータ博士は変貌を遂げた人々を観察しました。ネクタイは緩められ、地元の醸造所のスイングトップ瓶からシュワッとポンという音が響き、ピクニックシートの上には質素な夕餉——ライ麦パン、スライスチーズ、ピクルス——が繰り広げられます。そこにはもはや四半期業績の無駄口など存在しません。フライアーベントとは現代の業績至上社会に対する生きた対立命題であり、「為すこと」に対する「在ること」の凱歌なのです。'
    ],
    vocabulary: [
      { german: 'der Feierabend', article: 'der', pos: 'Substantiv', japanese: '仕事終わりの自由時間、夕方の終業' },
      { german: 'sakrosankt', pos: 'Adjektiv', japanese: '神聖にして侵すべからざる、絶対的な' },
      { german: 'das Refugium', article: 'das', pos: 'Substantiv', japanese: '避難所、隠れ家、聖域' },
      { german: 'die Zäsur', article: 'die', pos: 'Substantiv', japanese: '切れ目、断絶、節目' },
      { german: 'das Abendbrot', article: 'das', pos: 'Substantiv', japanese: '冷たい夕食（パン、チーズ、ハム等の簡素なドイツの伝統夕食）' },
      { german: 'die Antithesis (Antithese)', article: 'die', pos: 'Substantiv', japanese: '正反対、対立命題' }
    ],
    culturalNote: {
      title: 'Feierabendと労働文化',
      content: 'ドイツでは「Feierabend」や週末に業務連絡をしないことが労働法および労働協約（Betriebsvereinbarung）でも厳格に守られており、燃え尽き症候群を防ぐ文化的防波堤となっています。'
    }
  },
  {
    id: 'c1-manuskript-leipzig',
    level: 'C1',
    title: 'Das Manuskript des unzuverlässigen Übersetzers',
    titleJa: '信用ならざる翻訳者の手稿',
    subtitle: 'Ein literarisches Rätsel zwischen den barocken Antiquariaten von Leipzig',
    subtitleJa: '翻訳されたテクストが書店の空間幾何学を狂わせ始める',
    genre: 'Mystery',
    genreJa: '文学・ミステリー',
    wordCount: 654,
    readingTimeMinutes: 7,
    image: '/images/story_dachshund_munich_1791322052585.jpg',
    summaryJa: '書籍と見本市の街ライプツィヒ。老舗古書店「キルヒホッフ」の店主は、所在不明のボヘミアの幻視詩人の原稿をドイツ語に訳した手稿を買い取る。しかしその本が棚に収まるたび、書架の番号と街の路地が密かに再構成されていき…。',
    paragraphs: [
      {
        id: 1,
        german: 'Leipzig im Spätherbst ist eine Stadt aus feuchtem Porphyr, Buchdruckerschwärze und melancholischem Hall. In den verwinkelten Gassen rund um die Thomaskirche residiert das Antiquariat Kirchhoff, eine Kathedrale des gedruckten Wortes, in der sich Folianten bis unter die stuckverzierte Decke türmen. Hier verbrachte Anselm Kirchhoff sein Dasein inmitten des Geruchs von verrottendem Leim und edlem Ziegenleder, bis an jenem nebligen Novembernachmittag ein Bündel eng beschriebener Pergamentseiten seinen Schreibtisch erreichte.',
        japanese: '晩秋のライプツィヒは、湿った斑岩、印刷インク、そして物悲しい残響から成る街です。トーマス教会の周囲に入り組んだ小路に、活字の殿堂たる古書店「キルヒホッフ」が佇んでいます。そこでは漆喰装飾の天井近くまで大型本が積み上がっています。糊の朽ちる匂いと上質な山羊革の香りに囲まれて日々を過ごしていたアンゼルム・キルヒホッフの机に、ある霧深い11月の午後、細密な文字で埋め尽くされた羊皮紙の手稿の束が届きました。'
      },
      {
        id: 2,
        german: 'Das Manuskript trug den Titel »Die Topographie der Zwischenräume« und stammte angeblich von einem obskuren Prager Übersetzer namens Vanecek. Die Besonderheit lag nicht in der Dichtung selbst, sondern in den beigelegten Randglossen. Vanecek hatte den fremdsprachigen Urtext nicht wortgetreu übertragen, sondern – so seine eigenwillige philologische These – dessen verborgene tektonische Kräfte freigesetzt. »Jedes ins Deutsche gefügte Substantiv«, so notierte er mit eisengalliger Tinte, »verändert unweigerlich die Statik der Wirklichkeit.«',
        japanese: '手稿には『間隙の地誌学』という表題が掲げられ、ヴァネチェクという名の知られざるプラハの翻訳者によるものとされていました。特異だったのは詩そのものではなく、添えられた欄外注記（余白の覚書）でした。ヴァネチェクは外国語の原典を逐語訳したのではなく、彼独自の風変わりな文献学的命題によれば、テクストの隠された地殻変動的な力を解放したというのです。「ドイツ語に組み入れられた名詞のすべては」と彼は没食子インクで記していました。「否応なく現実の静力学（力学的平衡）を変容させる。」'
      },
      {
        id: 3,
        german: 'Kirchhoff hielt dies zunächst für die verzeihliche Hybris eines eccentrichen Literaten. Doch als er das Werk ins Regal unter der Signatur »Philosophie / Sprachkritik« einordnete, vernahm er ein leises Knirschen der Holzdielen. Die Distanz zwischen Regal sieben und Regal acht betrug plötzlich nicht mehr anderthalb Meter, sondern dehnte sich spürbar aus. Bücher, die am Vortag noch alphabetisch sortiert waren, gruppierten sich nach klanglichen Resonanzen: Celan rückte an Cioran heran, Hölderlin lehnte sich an Hebel.',
        japanese: 'キルヒホッフは最初、これを風変わりな文人の赦すべき傲慢（ヒュブリス）だと受け流しました。しかし彼がその手稿を「哲学／言語批判」の分類番号のもと棚に収めたとき、床板のかすかな軋みが耳に届きました。第7棚と第8棚のあいだの間隔が、突如として従来の1.5メートルではなくなり、目に見えて広がっていたのです。前日まではアルファベット順に並んでいた書物が、音の響きによって再編されていました——ツェランがシオランの隣へと寄り添い、ヘルダーリンがヘーベルへと寄りかかっていたのです。'
      },
      {
        id: 4,
        german: 'Als er am Abend die schwere Eingangstür verriegelte und durch die Leipziger Altstadt eilte, stellte er fest, dass auch die Straßenschilder ihren Sinn verschoben hatten. Die Wörter formten die Topographie der Welt neu. Kirchhoff lächelte im Nieselregen: Er hatte kein Buch gekauft, sondern einen Schlüssel zur lebendigen Architektur des Denkens.',
        japanese: '夕刻、彼が重い入り口の扉に鍵をかけ、ライプツィヒ旧市街を足早に歩いたとき、通りの道路標識までもが密かに意味をずらしていることに気付きました。言葉が世界の地誌を新たに編み直していたのです。霧雨の中でキルヒホッフは微笑みました。彼が買い取ったのは単なる本ではなく、思考の生きた建築への鍵だったのです。'
      }
    ],
    fullTranslationJa: [
      '晩秋のライプツィヒは、湿った斑岩、印刷インク、そして物悲しい残響から成る街です。トーマス教会の周囲に入り組んだ小路に、活字の殿堂たる古書店「キルヒホッフ」が佇んでいます。そこでは漆喰装飾の天井近くまで大型本が積み上がっています。糊の朽ちる匂いと上質な山羊革の香りに囲まれて日々を過ごしていたアンゼルム・キルヒホッフの机に、ある霧深い11月の午後、細密な文字で埋め尽くされた羊皮紙の手稿の束が届きました。',
      '手稿には『間隙の地誌学』という表題が掲げられ、ヴァネチェクという名の知られざるプラハの翻訳者によるものとされていました。特異だったのは詩そのものではなく、添えられた欄外注記でした。ヴァネチェクは外国語の原典を逐語訳したのではなく、彼独自の風変わりな文献学的命題によれば、テクストの隠された地殻変動的な力を解放したというのです。「ドイツ語に組み入れられた名詞のすべては」と彼は没食子インクで記していました。「否応なく現実の静力学を変容させる。」',
      'キルヒホッフは最初、これを風変わりな文人の赦すべき傲慢だと受け流しました。しかし彼がその手稿を「哲学／言語批判」の分類番号のもと棚に収めたとき、床板のかすかな軋みが耳に届きました。第7棚と第8棚のあいだの間隔が、突如として従来の1.5メートルではなくなり、目に見えて広がっていたのです。前日まではアルファベット順に並んでいた書物が、音の響きによって再編されていました——ツェランがシオランの隣へと寄り添い、ヘルダーリンがヘーベルへと寄りかかっていたのです。',
      '夕刻、彼が重い入り口の扉に鍵をかけ、ライプツィヒ旧市街を足早に歩いたとき、通りの道路標識までもが密かに意味をずらしていることに気付きました。言葉が世界の地誌を新たに編み直していたのです。霧雨の中でキルヒホッフは微笑みました。彼が買い取ったのは単なる本ではなく、思考の生きた建築への鍵だったのです。'
    ],
    vocabulary: [
      { german: 'das Antiquariat', article: 'das', pos: 'Substantiv', japanese: '古書店、古書籍商' },
      { german: 'die Randglosse', article: 'die', pos: 'Substantiv', japanese: '欄外注記、余白の注記' },
      { german: 'die Statik', article: 'die', pos: 'Substantiv', japanese: '静力学、構造力学的平衡' },
      { german: 'die Hybris', article: 'die', pos: 'Substantiv', japanese: '傲慢、過度の自負' },
      { german: 'die Topographie', article: 'die', pos: 'Substantiv', japanese: '地誌、地形学、空間配置' }
    ],
    culturalNote: {
      title: '書籍の街ライプツィヒ',
      content: 'ライプツィヒはドイツの書籍印刷・出版の歴史的中心地であり、毎年春に開催される「ライプツィヒ・ブックフェア」と読書祭りは読書愛好家の聖地です。'
    }
  }
];

const a1Fairytales = FAIRYTALE_STORIES.filter((s) => s.level === 'A1');
const a2Fairytales = FAIRYTALE_STORIES.filter((s) => s.level === 'A2');
const b1Fairytales = FAIRYTALE_STORIES.filter((s) => s.level === 'B1');
const b2Fairytales = FAIRYTALE_STORIES.filter((s) => s.level === 'B2');

export const STORIES: Story[] = [
  ...A1_STORIES,
  ...a1Fairytales,
  ...A2_STORIES,
  ...a2Fairytales,
  ...B1_STORIES,
  ...b1Fairytales,
  ...B2_STORIES,
  ...b2Fairytales,
  ...C1_STORIES,
];

export const CEFR_DESCRIPTIONS: Record<string, { label: string; descJa: string; wordRange: string }> = {
  A1: {
    label: 'A1 · 初級（Einstieg）',
    descJa: '基本単語と現在形中心。日常生活のシュールでクスッと笑える会話。',
    wordRange: '100〜160 語'
  },
  A2: {
    label: 'A2 · 初中級（Grundlagen）',
    descJa: '過去形（現在完了・過去形）や接続詞を含むストーリー。探偵劇や旅のハプニング。',
    wordRange: '200〜280 語'
  },
  B1: {
    label: 'B1 · 中級（Mittelstufe I）',
    descJa: '複文や関係代名詞を使った本格ストーリー。日常劇から長編ドラマまで読み応え十分。',
    wordRange: '300〜700 語'
  },
  B2: {
    label: 'B2 · 上中級（Mittelstufe II）',
    descJa: '受動態・接続法・慣用句を含む深みのある文章。風刺、哲学対話、近未来SF。',
    wordRange: '450〜550 語'
  },
  C1: {
    label: 'C1 · 上級（Oberstufe）',
    descJa: '格調高い語彙と豊かな比喩表現。現代ドイツ文学・エッセイに匹敵する知的短編。',
    wordRange: '600〜700 語'
  }
};
