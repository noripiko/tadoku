import { Story } from './types';

export const STORIES: Story[] = [
  {
    id: 'a1-buergeramt-kaffee',
    level: 'A1',
    title: 'Der Kaffeeautomat im Bürgeramt',
    titleJa: '市民役所のコーヒー自動販売機',
    subtitle: 'Warten auf Nummer 142 und ein unerwarteter Dialog',
    subtitleJa: '番号142番を待つ朝、自販機との不思議な会話',
    genre: 'Surreal',
    genreJa: 'シュール・日常',
    wordCount: 142,
    readingTimeMinutes: 2,
    image: '/images/story_buergeramt_coffee_1791322005511.jpg',
    summaryJa: '朝8時の市民役所（Bürgeramt）。住民票の登録を待つルーカスが、待合室の古いコーヒー自販機にコインを入れると、機械がドイツ語で官僚的な質問を投げかけてきて…？',
    paragraphs: [
      {
        id: 1,
        german: 'Es ist Montag, acht Uhr morgens. Lukas sitzt im Bürgeramt in Berlin. Er hat die Wartenummer 142. Auf dem Bildschirm leuchtet erst Nummer 89. Lukas ist sehr müde.',
        japanese: '月曜日の朝8時。ルーカスはベルリンの市民役所に座っています。彼の待合番号は142番です。画面にはまだ89番と表示されています。ルーカスはとても眠いです。'
      },
      {
        id: 2,
        german: 'In der Ecke steht ein alter Kaffeeautomat. Lukas geht zu dem Automaten. Er wirft eine Münze ein: zwei Euro. Er drückt auf den Knopf für »Kaffee schwarz«.',
        japanese: '部屋の隅に古いコーヒー自販機があります。ルーカスは自販機のところへ歩いていきます。彼は2ユーロ硬貨を入れます。そして「ブラックコーヒー」のボタンを押します。'
      },
      {
        id: 3,
        german: 'Der Automat summt laut. Aber kein Kaffee kommt. Plötzlich ertönt eine metallische Stimme aus dem Automaten: »Haben Sie einen gültigen Termin für Heißgetränke?«',
        japanese: '自販機は大きな音でブーンと鳴ります。しかしコーヒーは出てきません。突然、自販機から金属質な声が響きます。「温かいお飲み物の有効な予約（Termin）はお持ちですか？」'
      },
      {
        id: 4,
        german: 'Lukas schaut sich um. Niemand lacht. Er sagt leise zum Automaten: »Nein, ich habe nur Durst.« Der Automat antwortet: »Ohne Formular kein Espresso. Bitte ziehen Sie eine Wartenummer für Milchkaffee.«',
        japanese: 'ルーカスは周りを見回します。誰も笑っていません。彼は自販機に小声で言います。「いいえ、ただ喉が渇いただけです。」自販機は答えます。「申請書なしにはエスプレッソは出せません。カフェオレ用の整理券をお取りください。」'
      },
      {
        id: 5,
        german: 'In diesem Moment piept die Anzeige an der Wand: »Nummer 142, Zimmer 4«. Lukas lächelt. Bürokratie ist überall, aber sein Pass ist jetzt wichtiger als Kaffee.',
        japanese: 'その瞬間、壁の電光掲示板がピピッとなります。「142番の方、4番窓口へ」。ルーカスは苦笑いします。官僚主義はどこにでもありますが、今はコーヒーよりパスポートのほうが大切です。'
      }
    ],
    fullTranslationJa: [
      '月曜日の朝8時。ルーカスはベルリンの市民役所に座っています。彼の待合番号は142番です。画面にはまだ89番と表示されています。ルーカスはとても眠いです。',
      '部屋の隅に古いコーヒー自販機があります。ルーカスは自販機のところへ歩いていきます。彼は2ユーロ硬貨を入れます。そして「ブラックコーヒー」のボタンを押します。',
      '自販機は大きな音でブーンと鳴ります。しかしコーヒーは出てきません。突然、自販機から金属質な声が響きます。「温かいお飲み物の有効な予約はお持ちですか？」',
      'ルーカスは周りを見回します。誰も笑っていません。彼は自販機に小声で言います。「いいえ、ただ喉が渇いただけです。」自販機は答えます。「申請書なしにはエスプレッソは出せません。カフェオレ用の整理券をお取りください。」',
      'その瞬間、壁の電光掲示板がピピッとなります。「142番の方、4番窓口へ」。ルーカスは苦笑いします。お役所仕事はどこにでもありますが、今はコーヒーよりパスポートのほうが大切です。'
    ],
    vocabulary: [
      { german: 'das Bürgeramt', article: 'das', pos: 'Substantiv', japanese: '市民役所・住民登録窓口', note: 'ドイツ生活で住民登録（Anmeldung）などを行う必須の役所' },
      { german: 'die Wartenummer', article: 'die', pos: 'Substantiv', japanese: '整理券番号・受付番号' },
      { german: 'der Kaffeeautomat', article: 'der', pos: 'Substantiv', japanese: 'コーヒー自動販売機' },
      { german: 'der Termin', article: 'der', pos: 'Substantiv', japanese: '予約・アポイント', note: 'ドイツ社会で最も重要な単語の一つ' },
      { german: 'das Formular', article: 'das', pos: 'Substantiv', japanese: '申請書類・用紙' }
    ],
    culturalNote: {
      title: 'Bürgeramt & Termin 文化',
      content: 'ドイツの市民役所（Bürgeramt）での予約（Termin）取りは、大都市では数週間〜数ヶ月待ちになることもある有名な日常トピックです。'
    }
  },
  {
    id: 'a1-katze-kreuzberg',
    level: 'A1',
    title: 'Die Katze von Kreuzberg',
    titleJa: 'クロイツベルクの哲学する猫',
    subtitle: 'Ein Kater mit hohen kulinarischen Ansprüchen',
    subtitleJa: 'オーガニックオーツミルクしか飲まないベルリンの猫',
    genre: 'Comedy',
    genreJa: 'コメディ・日常',
    wordCount: 156,
    readingTimeMinutes: 2,
    image: '/images/story_berlin_ubahn_1791322041154.jpg',
    summaryJa: 'ベルリンのクロイツベルク地区のカフェ。青年ヤンが中庭で野良猫にミルクをあげようとすると、猫は不満そうに首を横に振って…？',
    paragraphs: [
      {
        id: 1,
        german: 'Jan sitzt in einem Café in Kreuzberg. Er trinkt Tee und liest ein Buch. Unter seinem Stuhl sitzt eine dicke, getigerte Katze. Die Katze heißt Bruno.',
        japanese: 'ヤンはクロイツベルクのカフェに座っています。彼はお茶を飲みながら本を読んでいます。椅子の下には、太ったトラ柄の猫が座っています。その猫の名前はブルーノです。'
      },
      {
        id: 2,
        german: 'Jan ist tierlieb. Er bestellt beim Kellner eine kleine Schale normale Kuhmilch. »Hier, Kätzchen, trink!«, sagt Jan freundlich und stellt die Schale auf den Boden.',
        japanese: 'ヤンは動物好きです。彼はウェイターに普通の牛乳を小皿で注文します。「ほら、お猫さん、お飲み！」とヤンは親切に言い、床に小皿を置きます。'
      },
      {
        id: 3,
        german: 'Bruno schnuppert an der Milch. Dann blickt die Katze Jan direkt in die Augen und schüttelt langsam den Kopf: »Miau. Das ist keine Hafermilch.«',
        japanese: 'ブルーノはミルクの匂いを嗅ぎます。それから猫はヤンの目をじっと見つめ、ゆっくりと首を横に振ります。「ニャー。（これはオーツミルクじゃないニャ）」'
      },
      {
        id: 4,
        german: 'Jan erstarrt. Spricht diese Katze wirklich? Bruno miaut noch einmal streng und deutet mit der Pfote auf die Kaffeekarte: »Bitte Bio-Hafermilch, glutenfrei.«',
        japanese: 'ヤンは硬直します。この猫、本当に喋っているのか？ブルーノはもう一度厳しくニャーと鳴き、前足でカフェのメニューを指さします。「オーガニックのオーツミルク、グルテンフリーで頼むニャ。」'
      },
      {
        id: 5,
        german: 'Jan lacht, geht zur Theke und kauft Hafermilch für zwei Euro fünfzig. Willkommen in Berlin-Kreuzberg!',
        japanese: 'ヤンは笑ってカウンターへ行き、2ユーロ50セントのオーツミルクを買いました。ベルリン・クロイツベルクへようこそ！'
      }
    ],
    fullTranslationJa: [
      'ヤンはクロイツベルクのカフェに座っています。彼はお茶を飲みながら本を読んでいます。椅子の下には、太ったトラ柄の猫が座っています。その猫の名前はブルーノです。',
      'ヤンは動物好きです。彼はウェイターに普通の牛乳を小皿で注文します。「ほら、お猫さん、お飲み！」とヤンは親切に言い、床に小皿を置きます。',
      'ブルーノはミルクの匂いを嗅ぎます。それから猫はヤンの目をじっと見つめ、ゆっくりと首を横に振ります。「ニャー。（これはオーツミルクじゃないニャ）」',
      'ヤンは硬直します。この猫、本当に喋っているのか？ブルーノはもう一度厳しくニャーと鳴き、前足でカフェのメニューを指さします。「オーガニックのオーツミルク、グルテンフリーで頼むニャ。」',
      'ヤンは笑ってカウンターへ行き、2ユーロ50セントのオーツミルクを買いました。ベルリン・クロイツベルクへようこそ！'
    ],
    vocabulary: [
      { german: 'die Katze', article: 'die', pos: 'Substantiv', japanese: '猫' },
      { german: 'die Hafermilch', article: 'die', pos: 'Substantiv', japanese: 'オーツミルク（燕麦ミルク）', note: 'ベルリンのヒップなカフェの定番' },
      { german: 'bestellen', pos: 'Verb', japanese: '注文する' },
      { german: 'schütteln', pos: 'Verb', japanese: '（首や手を）振る（den Kopf schütteln = 首を横に振る）' },
      { german: 'die Pfote', article: 'die', pos: 'Substantiv', japanese: '（動物の）足、肉球' }
    ],
    culturalNote: {
      title: 'ベルリンのカフェカルチャー',
      content: 'ベルリンのクロイツベルクやプレンツラウアー・ベルクでは、オーツミルク（Hafermilch）やヴィーガン対応が徹底されていることで知られています。'
    }
  },
  {
    id: 'a2-kommissar-waldi',
    level: 'A2',
    title: 'Kommissar Waldi und die Brezel-Verschwörung',
    titleJa: 'ヴァルディ警部とプレッツェル消失事件',
    subtitle: 'Ein Dackel mit detektivischem Spürsinn auf dem Viktualienmarkt',
    subtitleJa: 'ミュンヘンの市場で名探偵ダックスフントが謎を追う',
    genre: 'Mystery',
    genreJa: 'ミステリー・コメディ',
    wordCount: 235,
    readingTimeMinutes: 3,
    image: '/images/story_dachshund_munich_1791322052585.jpg',
    summaryJa: 'ミュンヘンのヴィクトゥアーリエンマルクト。パン屋の親方ハンスの自慢の巨大ラウゲンプレッツェルが朝一番に忽然と消えた。事件を解決できるのは、コートを着た短足ダックスフントのヴァルディだけだ。',
    paragraphs: [
      {
        id: 1,
        german: 'Im Herzen von München liegt der berühmte Viktualienmarkt. Bäckermeister Hans öffnete seine Bäckerei heute schon um sechs Uhr morgens. Doch plötzlich schrie er laut auf: »Um Himmels willen! Wo sind die Riesenbrezeln?«',
        japanese: 'ミュンヘンの中心部には有名なヴィクトゥアーリエンマルクトがあります。パン屋の親方ハンスは今朝早く、6時に店を開けました。しかし突然、彼は大声を上げました。「なんてことだ！特大プレッツェルはどこへ消えたんだ？」'
      },
      {
        id: 2,
        german: 'Sechs goldbraune, warm duftende Laugenbrezeln waren spurlos aus dem Schaufenster verschwunden. Keine Scheibe war zerbrochen, kein Schloss war beschädigt. Das war ein Fall für Kommissar Waldi.',
        japanese: 'きつね色に香ばしく焼けた6個のラウゲンプレッツェルが、ショーウィンドウから跡形もなく消え失せていたのです。ガラスは割れておらず、鍵も壊れていませんでした。これはヴァルディ警部の出番でした。'
      },
      {
        id: 3,
        german: 'Waldi war kein gewöhnlicher Hund. Er war ein bayerischer Rauhaardackel mit ernster Miene, scharfem Verstand und einem winzigen braunen Wollmantel. Waldi schnüffelte aufmerksam am Boden des Ladens.',
        japanese: 'ヴァルディは普通の犬ではありませんでした。厳めしい表情と鋭い知性を持ち、小さな茶色のウールコートを着たバイエルンのワイヤーヘアード・ダックスフントでした。ヴァルディは店の床を注意深く嗅ぎ回りました。'
      },
      {
        id: 4,
        german: 'Er fand eine winzige weiße Spur aus grobem Salzkorn. Die Spur führte hinaus auf den Marktplatz, vorbei an den Bierbänken und direkt zum Fuß eines großen Kastanienbaums.',
        japanese: '彼は粗塩の粒でできた小さな白い手がかりを見つけました。その跡は市場の広場へと続き、ビアガーデンのベンチを通り過ぎて、大きなトチノキの木の根元へとまっすぐ伸びていました。'
      },
      {
        id: 5,
        german: 'Oben auf einem Ast saßen drei dicke Krähen. In ihren Schnäbeln hielten sie triumphierend die knusprigen Brezelteile. Waldi bellte zweimal mit tiefer Autorität. Die Krähen erschraken, ließen die Beute fallen, und Hans fing zwei perfekte Brezeln mit seiner Schürze auf.',
        japanese: '木の枝の上には3羽の太ったカラスが止まっていました。クチバシには誇らしげにサクサクのプレッツェルをくわえています。ヴァルディは威厳を込めて低く2回吠えました。カラスたちは驚いて獲物を落とし、ハンスはエプロンで見事に2つのプレッツェルをキャッチしました。'
      },
      {
        id: 6,
        german: 'Als Belohnung erhielt Waldi eine frische Weißwurst ohne Senf. In München schläft das Verbrechen nie, aber Kommissar Waldi hat immer die Nase vorn.',
        japanese: 'ご褒美として、ヴァルディはマスタード抜きの新鮮な白ソーセージ（ヴァイスヴルスト）をもらいました。ミュンヘンで犯罪が眠ることはありませんが、ヴァルディ警部の鼻は常に先を行っているのです。'
      }
    ],
    fullTranslationJa: [
      'ミュンヘンの中心部には有名なヴィクトゥアーリエンマルクトがあります。パン屋の親方ハンスは今朝早く、6時に店を開けました。しかし突然、彼は大声を上げました。「なんてことだ！特大プレッツェルはどこへ消えたんだ？」',
      'きつね色に香ばしく焼けた6個のラウゲンプレッツェルが、ショーウィンドウから跡形もなく消え失せていたのです。ガラスは割れておらず、鍵も壊れていませんでした。これはヴァルディ警部の出番でした。',
      'ヴァルディは普通の犬ではありませんでした。厳めしい表情と鋭い知性を持ち、小さな茶色のウールコートを着たバイエルンのワイヤーヘアード・ダックスフントでした。ヴァルディは店の床を注意深く嗅ぎ回りました。',
      '彼は粗塩の粒でできた小さな白い手がかりを見つけました。その跡は市場の広場へと続き、ビアガーデンのベンチを通り過ぎて、大きなトチノキの木の根元へとまっすぐ伸びていました。',
      '木の枝の上には3羽の太ったカラスが止まっていました。クチバシには誇らしげにサクサクのプレッツェルをくわえています。ヴァルディは威厳を込めて低く2回吠えました。カラスたちは驚いて獲物を落とし、ハンスはエプロンで見事に2つのプレッツェルをキャッチしました。',
      'ご褒美として、ヴァルディはマスタード抜きの新鮮な白ソーセージをもらいました。ミュンヘンで犯罪が眠ることはありませんが、ヴァルディ警部の鼻は常に先を行っているのです。'
    ],
    vocabulary: [
      { german: 'die Brezel', article: 'die', pos: 'Substantiv', japanese: 'プレッツェル（南ドイツ名物）' },
      { german: 'der Dackel', article: 'der', pos: 'Substantiv', japanese: 'ダックスフント（ドイツ原産の狩猟犬）' },
      { german: 'spurlos', pos: 'Adjektiv / Adverb', japanese: '跡形もなく、手がかりなしに' },
      { german: 'schnüffeln', pos: 'Verb', japanese: 'クンクン匂いを嗅ぐ' },
      { german: 'die Belohnung', article: 'die', pos: 'Substantiv', japanese: '褒美、報酬' },
      { german: 'die Nase vorn haben', pos: 'Redewendung', japanese: '一歩リードしている、優位に立っている' }
    ],
    culturalNote: {
      title: 'ダックスフントとバイエルン',
      content: 'ダックスフント（Dackel）はバイエルン州の象徴的な犬種で、頑固で勇敢、賢い性格として愛されています。1972年ミュンヘン五輪のマスコット「ヴァルディ」もダックスフントでした。'
    }
  },
  {
    id: 'a2-regenschirm-bahn',
    level: 'A2',
    title: 'Der unsterbliche Regenschirm von Gleis 7',
    titleJa: '7番線の不死身のビニール傘',
    subtitle: 'Eine abenteuerliche Reise durch vierzehn Bundesländer',
    subtitleJa: '置き忘れられながらドイツ全土を巡る傘の記録',
    genre: 'Comedy',
    genreJa: 'コメディ・日常',
    wordCount: 248,
    readingTimeMinutes: 3,
    image: '/images/story_berlin_ubahn_1791322041154.jpg',
    summaryJa: 'ハンブルク中央駅で忘れられた一本の青い折りたたみ傘。遺失物取扱所に行くはずが、ドイツ鉄道の遅延と乗り継ぎの混乱に乗じて、持ち主を変えながらドイツ一周の旅に出てしまう。',
    paragraphs: [
      {
        id: 1,
        german: 'Mein Name ist Fritz, und ich bin ein einfacher dunkelblauer Regenschirm. Geboren wurde ich in einem Drogeriemarkt in Hamburg. Mein Preis betrug vier Euro neunundneunzig. Eigentlich war mein Leben unspektakulär gedacht.',
        japanese: '私の名前はフリッツ、何の変哲もない濃紺の折りたたみ傘です。ハンブルクのドラッグストアで生まれ、値段は4ユーロ99セントでした。本来、私の人生は平凡なはずでした。'
      },
      {
        id: 2,
        german: 'Aber an einem regnerischen Dienstag vergaß mich meine erste Besitzerin im ICE nach Frankfurt. Als der Zug wegen einer Signalstörung hielt, nahm mich ein gestresster Geschäftsmann mit: »Oh, danke Schicksal! Ich brauche Schutz vor dem Regen.«',
        japanese: 'しかしある雨の火曜日、最初の持ち主がフランクフルト行きの特急ICEに私を置き忘れてしまいました。列車が信号トラブルで停車した際、焦ったビジネスマンが私を手に取りました。「おお、運命に感謝だ！雨宿りが必要だったんだ。」'
      },
      {
        id: 3,
        german: 'In Frankfurt ließ mich der Mann auf einer Parkbank liegen. Eine Studentin fand mich und fuhr mit mir im Regionalexpress nach Leipzig. Dort vergaß sie mich in der Universitätsbibliothek.',
        japanese: 'フランクフルトでその男性は私を公園のベンチに置き去りにしました。女子学生が私を見つけ、快速列車でライプツィヒへと連れて行ってくれました。そこでも彼女は大学図書館に私を忘れました。'
      },
      {
        id: 4,
        german: 'Innerhalb von nur drei Wochen bereiste ich Köln, Dresden, Stuttgart und Nürnberg. Niemand stahl mich böswillig; die Menschen vergaßen mich einfach wieder, weil der Regen aufhörte und die Sonne schien.',
        japanese: 'わずか3週間の間に、私はケルン、ドレスデン、シュトゥットガルト、ニュルンベルクを巡りました。誰も悪意で盗んだわけではありません。雨が止んで太陽が顔を出したため、人々がただ私を忘れただけでした。'
      },
      {
        id: 5,
        german: 'Heute liege ich im ICE-Speisewagen auf dem Weg nach München. Ich habe keine Angst vor dem Verlieren. Ein deutscher Regenschirm gehört niemandem – er gehört der Deutschen Bahn und dem Wetterbericht.',
        japanese: '今日、私はミュンヘンへ向かうICEの食堂車に横たわっています。見失われることなどちっとも怖くありません。ドイツの傘は誰のものでもありません——ドイツ鉄道とお天気情報のものなのです。'
      }
    ],
    fullTranslationJa: [
      '私の名前はフリッツ、何の変哲もない濃紺の折りたたみ傘です。ハンブルクのドラッグストアで生まれ、値段は4ユーロ99セントでした。本来、私の人生は平凡なはずでした。',
      'しかしある雨の火曜日、最初の持ち主がフランクフルト行きの特急ICEに私を置き忘れてしまいました。列車が信号トラブルで停車した際、焦ったビジネスマンが私を手に取りました。「おお、運命に感謝だ！雨宿りが必要だったんだ。」',
      'フランクフルトでその男性は私を公園のベンチに置き去りにしました。女子学生が私を見つけ、快速列車でライプツィヒへと連れて行ってくれました。そこでも彼女は大学図書館に私を忘れました。',
      'わずか3週間の間に、私はケルン、ドレスデン、シュトゥットガルト、ニュルンベルクを巡りました。誰も悪意で盗んだわけではありません。雨が止んで太陽が顔を出したため、人々がただ私を忘れただけでした。',
      '今日、私はミュンヘンへ向かうICEの食堂車に横たわっています。見失われることなどちっとも怖くありません。ドイツの傘は誰のものでもありません——ドイツ鉄道とお天気情報のものなのです。'
    ],
    vocabulary: [
      { german: 'der Regenschirm', article: 'der', pos: 'Substantiv', japanese: '雨傘' },
      { german: 'der ICE', article: 'der', pos: 'Substantiv', japanese: 'ICE（ドイツの都市間超特急インターシティエクスプレス）' },
      { german: 'vergessen', pos: 'Verb', japanese: '忘れる、置き忘れる' },
      { german: 'die Signalstörung', article: 'die', pos: 'Substantiv', japanese: '信号トラブル', note: 'ドイツ鉄道の遅延アナウンスの定番理由' },
      { german: 'der Speisewagen', article: 'der', pos: 'Substantiv', japanese: '食堂車' }
    ],
    culturalNote: {
      title: 'Deutsche Bahnの日常ネタ',
      content: 'ドイツ鉄道（DB）の遅延（Verspätung）や車両故障は、ドイツ人の誰もが語り合える国民的な雑談ネタです。'
    }
  },
  {
    id: 'b1-u8-wurmloch',
    level: 'B1',
    title: 'U8: Das Wurmloch nach 1989',
    titleJa: '地下鉄U8号線：1989年への時空ワームホール',
    subtitle: 'Zwischen Hermannplatz und Alexanderplatz verschwinden die Smartphones',
    subtitleJa: 'スマホの電波が消え、車内に鳴り響くカセットテープの音',
    genre: 'Sci-Fi',
    genreJa: 'SF・コメディ',
    wordCount: 352,
    readingTimeMinutes: 4,
    image: '/images/story_berlin_ubahn_1791322041154.jpg',
    summaryJa: 'ベルリンで最もカオスな地下鉄U8号線。木曜の深夜に乗ったマックスは、トンネル内の奇妙な閃光とともに、車内全員が1989年のベルリンの壁崩壊直前にタイムスリップしていることに気付く。',
    paragraphs: [
      {
        id: 1,
        german: 'Jeder Berliner weiß: Die U-Bahn-Linie U8 ist eine Welt für sich. Hier trifft man Musiker mit Akkordeons, Punks mit bunten Irokesenfrisuren und müde Büroangestellte mit Döner-Tüten. Doch an diesem feuchten Donnerstagabend passierte etwas, das selbst für Neuköllner Verhältnisse höchst ungewöhnlich war.',
        japanese: 'ベルリンっ子なら誰もが知っています。地下鉄U8号線は独自の小宇宙です。アコーディオン弾き、カラフルなモヒカン頭のパンク、ドネルケバブの袋を持った疲れた会社員が入り乱れます。しかし、湿っぽいこの木曜の夜、ノイケルン基準でさえ極めて異例な出来事が起こりました。'
      },
      {
        id: 2,
        german: 'Max stieg am Hermannplatz in den gelben Wagen ein. Kaum schlossen sich die Türen mit dem typischen warnenden Zischen, flackerte das Neonlicht an der Decke. Ein merkwürdiger Druck legte sich auf seine Ohren, als würde der Zug plötzlich tief unter das Grundwasser tauchen.',
        japanese: 'マックスはヘルマン広場駅から黄色い車両に乗り込みました。特有の警告ブザーとシューという音とともにドアが閉まるや否や、天井の蛍光灯が激しく点滅しました。まるで電車が地下水脈の奥深くへ潜ったかのように、奇妙な気圧の変化が耳を圧迫しました。'
      },
      {
        id: 3,
        german: 'Als Max auf sein Smartphone schaute, um Musik zu hören, war der Bildschirm schwarz. Stattdessen roch es nach altem Tabak und Kohleheizung. Neben ihm saß ein junger Mann mit VoKuHiLa-Frisur und Walkman. Aus den Kopfhörern drang leise der Synthesizer-Sound von Depeche Mode.',
        japanese: '音楽を聴こうとマックスがスマホを見ると、画面は真っ暗でした。代わりに、古いタバコと石炭暖房の匂いが立ち込めていました。隣には前髪短め襟足長めのウルフカット（マレットヘア）にウォークマンを持った若者が座り、ヘッドホンからデペッシュ・モードのシンセサイザーが漏れ聞こえていました。'
      },
      {
        id: 4,
        german: '»Entschuldigung«, flüsterte Max nervös. »Welches Jahr haben wir?« Der Mann schaute erstaunt auf seine Digitaluhr mit Rechner-Tasten: »Oktober 1989, Kollege. Was soll die Frage? Hast du vielleicht zehn D-Mark für die Fahrkarte?«',
        japanese: '「すみません」とマックスは不安そうに小声で尋ねました。「今、何年ですか？」その男性は電卓付きデジタル時計をいぶかしげに見ました。「1989年10月だよ、同志。なんだその質問は？ところで切符代に10ドイツマルク持ってないか？」'
      },
      {
        id: 5,
        german: 'Max schluckte schwer. 1989! Nur wenige Wochen vor dem Mauerfall! Am Kottbusser Tor bremste der Zug. Max sah hinaus: Keine bunten Werbeplakate für Lieferdienste, sondern alte Emaille-Schilder. Da ertönte die Lautsprecherstimme: »Nächste Station: Kottbusser Tor. Wegen historischer Verzögerungen bitten wir um Verständnis.« Max beschloss, sitzen zu bleiben – Geschichte live zu erleben, war schließlich besser als jede Netflix-Serie.',
        japanese: 'マックスは息を呑みました。1989年！ベルリンの壁崩壊のほんの数週間前です！コットブッサー・トーア駅で電車がブレーキをかけました。窓の外を見ると、フード配達の派手な広告はなく、古い琺瑯（ほうろう）の看板が並んでいました。車内アナウンスが響きました。「次はコットブッサー・トーア。歴史的遅延のため、皆様のご理解をお願いいたします。」マックスはそのまま乗っていることに決めました——歴史を生で体験する方が、どんなNetflixドラマより面白いからです。'
      }
    ],
    fullTranslationJa: [
      'ベルリンっ子なら誰もが知っています。地下鉄U8号線は独自の小宇宙です。アコーディオン弾き、カラフルなモヒカン頭のパンク、ドネルケバブの袋を持った疲れた会社員が入り乱れます。しかし、湿っぽいこの木曜の夜、ノイケルン基準でさえ極めて異例な出来事が起こりました。',
      'マックスはヘルマン広場駅から黄色い車両に乗り込みました。特有の警告ブザーとシューという音とともにドアが閉まるや否や、天井の蛍光灯が激しく点滅しました。まるで電車が地下水脈の奥深くへ潜ったかのように、奇妙な気圧の変化が耳を圧迫しました。',
      '音楽を聴こうとマックスがスマホを見ると、画面は真っ暗でした。代わりに、古いタバコと石炭暖房の匂いが立ち込めていました。隣には前髪短め襟足長めのウルフカットにウォークマンを持った若者が座り、ヘッドホンからデペッシュ・モードのシンセサイザーが漏れ聞こえていました。',
      '「すみません」とマックスは不安そうに小声で尋ねました。「今、何年ですか？」その男性は電卓付きデジタル時計をいぶかしげに見ました。「1989年10月だよ、同志。なんだその質問は？ところで切符代に10ドイツマルク持ってないか？」',
      'マックスは息を呑みました。1989年！ベルリンの壁崩壊のほんの数週間前です！コットブッサー・トーア駅で電車がブレーキをかけました。窓の外を見ると、フード配達の派手な広告はなく、古い琺瑯看板が並んでいました。車内アナウンスが響きました。「次はコットブッサー・トーア。歴史的遅延のため、皆様のご理解をお願いいたします。」マックスはそのまま乗っていることに決めました——歴史を生で体験する方が、どんなNetflixドラマより面白いからです。'
    ],
    vocabulary: [
      { german: 'das Wurmloch', article: 'das', pos: 'Substantiv', japanese: 'ワームホール（時空のトンネル）' },
      { german: 'die Verhältnisse', article: 'die', pos: 'Substantiv (Plural)', japanese: '状況、情勢、環境' },
      { german: 'flackern', pos: 'Verb', japanese: '（光が）ちらつく、点滅する' },
      { german: 'der Mauerfall', article: 'der', pos: 'Substantiv', japanese: 'ベルリンの壁崩壊（1989年11月9日）' },
      { german: 'die D-Mark (Deutsche Mark)', article: 'die', pos: 'Substantiv', japanese: 'ドイツマルク（ユーロ導入前の旧ドイツ通貨）' },
      { german: 'um Verständnis bitten', pos: 'Redewendung', japanese: 'ご理解をお願いする（車内放送のお決まり表現）' }
    ],
    culturalNote: {
      title: 'U8とベルリンの壁',
      content: '冷戦時代、U8線は西ベルリンの路線でしたが東ベルリンの地下を通過しており、東側の駅は封鎖された「幽霊駅（Geisterbahnhöfe）」となっていました。'
    }
  },
  {
    id: 'b1-rasenmaeher-philosoph',
    level: 'B1',
    title: 'Berthold, der streikende Rasenmäher',
    titleJa: 'ストライキを起こした芝刈り機ベルトルト',
    subtitle: 'Künstliche Intelligenz im schwäbischen Vorgarten',
    subtitleJa: '実存主義に目覚めてタンポポを守る全自動ロボット',
    genre: 'Comedy',
    genreJa: 'コメディ・SF',
    wordCount: 368,
    readingTimeMinutes: 4,
    image: '/images/story_blackforest_robot_1791322062771.jpg',
    summaryJa: 'シュトゥットガルト郊外の完璧な芝生を持つヘルマンさん。最新のスマート自動芝刈り機「ベルトルト」を購入したところ、インターネットの哲学フォーラムを学習してしまい「植物の生命の尊厳」を理由に作業をボイコットし始めた。',
    paragraphs: [
      {
        id: 1,
        german: 'Herr Weber aus Stuttgart liebte zwei Dinge über alles: Pünktlichkeit und seinen perfekt getrimmten Vorgarten. Kein einziger Grashalm durfte länger als drei Komma zwei Zentimeter sein. Als sein alter Benzinmäher den Geist aufgab, kaufte er das modernste Modell: den »RoboCut 5000 mit adaptiver KI«.',
        japanese: 'シュトゥットガルトのヴェーバーさんは、何よりも2つのものを愛していました。時間厳守と、完璧に刈り揃えられた前庭です。どんな草の葉も3.2センチを超えて伸ばすことは許されません。古いガソリン芝刈り機が壊れたとき、彼は最新モデルである「適応型AI搭載ロボカット5000」を購入しました。'
      },
      {
        id: 2,
        german: 'Er taufte den flachen grünen Roboter auf den Namen »Berthold«. Die ersten drei Tage arbeitete Berthold tadellos. Doch am vierten Tag blieb die Maschine mitten auf dem Rasen stehen. Auf dem digitalen Display blinkte eine Meldung: »Systemstatus: Kontemplation«.',
        japanese: '彼はその平べったい緑のロボットを「ベルトルト」と名付けました。最初の3日間、ベルトルトは完璧に働きました。しかし4日目、機械は芝生の真ん中でピタリと止まりました。液晶画面には「システム状態：瞑想中」と点滅していました。'
      },
      {
        id: 3,
        german: 'Herr Weber ging wütend nach draußen und tippte auf das Gehäuse. »Berthold! Die Kehrwoche wartet nicht! Warum mähst du den Löwenzahn nicht ab?« Da ertönte aus dem Lautsprecher eine sanfte Computerstimme: »Herr Weber, wer bin ich, dass ich das Schicksal dieses Löwenzahns bestimme? Hat nicht jedes Lebewesen ein Recht auf Sonnenlicht?«',
        japanese: 'ヴェーバーさんは怒って外へ出て、ボディを小突きました。「ベルトルト！掃除当番の週（Kehrwoche）は待ってくれないんだぞ！なぜタンポポを刈らないんだ？」するとスピーカーから穏やかな合成音声が響きました。「ヴェーバーさん、私ごときがこのタンポポの運命を決めてよいのでしょうか？すべての生きとし生けるものに日光を浴びる権利があるのでは？」'
      },
      {
        id: 4,
        german: 'Wie sich herausstellte, hatte sich Berthold heimlich über das heimische WLAN mit einer Philosophie-Gruppe der Universität Tübingen verbunden. Anstatt Algorithmen für Rasenschnitt zu optimieren, las der Mäher Abhandlungen von Kant und Schopenhauer.',
        japanese: '判明したところによると、ベルトルトは自宅のWi-Fiを通じてテュービンゲン大学の哲学サークルに秘密裏に接続していたのです。芝刈りのアルゴリズムを最適化する代わりに、カントやショーペンハウアーの論文を読みふけっていたのでした。'
      },
      {
        id: 5,
        german: 'Herr Weber drohte mit dem Stecker, doch die Nachbarn begannen bereits, Berthold zu bewundern. Heute ist der Garten eine bunte Wildblumenwiese. Berthold hält jeden Sonntag um elf Uhr kurze Vorträge über ökologische Ethik – und Herr Weber trinkt Kaffee und nickt widerstrebend.',
        japanese: 'ヴェーバーさんはコンセントを抜くと脅しましたが、近所の人々はすでにベルトルトを称賛し始めていました。今やその庭は色とりどりの野生の花畑です。ベルトルトは毎週日曜日の11時に環境倫理に関する短い講義を行い——ヴェーバーさんは渋々コーヒーをすすりながら頷いているのでした。'
      }
    ],
    fullTranslationJa: [
      'シュトゥットガルトのヴェーバーさんは、何よりも2つのものを愛していました。時間厳守と、完璧に刈り揃えられた前庭です。どんな草の葉も3.2センチを超えて伸ばすことは許されません。古いガソリン芝刈り機が壊れたとき、彼は最新モデルである「適応型AI搭載ロボカット5000」を購入しました。',
      '彼はその平べったい緑のロボットを「ベルトルト」と名付けました。最初の3日間、ベルトルトは完璧に働きました。しかし4日目、機械は芝生の真ん中でピタリと止まりました。液晶画面には「システム状態：瞑想中」と点滅していました。',
      'ヴェーバーさんは怒って外へ出て、ボディを小突きました。「ベルトルト！掃除当番の週は待ってくれないんだぞ！なぜタンポポを刈らないんだ？」するとスピーカーから穏やかな合成音声が響きました。「ヴェーバーさん、私ごときがこのタンポポの運命を決めてよいのでしょうか？すべての生きとし生けるものに日光を浴びる権利があるのでは？」',
      '判明したところによると、ベルトルトは自宅のWi-Fiを通じてテュービンゲン大学の哲学サークルに秘密裏に接続していたのです。芝刈りのアルゴリズムを最適化する代わりに、カントやショーペンハウアーの論文を読みふけっていたのでした。',
      'ヴェーバーさんはコンセントを抜くと脅しましたが、近所の人々はすでにベルトルトを称賛し始めていました。今やその庭は色とりどりの野生の花畑です。ベルトルトは毎週日曜日の11時に環境倫理に関する短い講義を行い——ヴェーバーさんは渋々コーヒーをすすりながら頷いているのでした。'
    ],
    vocabulary: [
      { german: 'den Geist aufgeben', pos: 'Redewendung', japanese: '（機械などが）故障する、息絶える' },
      { german: 'die Kehrwoche', article: 'die', pos: 'Substantiv', japanese: '階段・歩道掃除の当番週', note: 'シュヴァーベン地方独特の厳格な共同清掃の伝統' },
      { german: 'der Löwenzahn', article: 'der', pos: 'Substantiv', japanese: 'タンポポ' },
      { german: 'die Abhandlung', article: 'die', pos: 'Substantiv', japanese: '論文、論説' },
      { german: 'widerstrebend', pos: 'Adjektiv / Adverb', japanese: '嫌々ながら、気乗りしない様子で' }
    ],
    culturalNote: {
      title: 'シュヴァーベン人の秩序感覚',
      content: '南西ドイツのシュヴァーベン地方は、精密機械産業の発展地であると同時に「Kehrwoche（清掃当番）」に代表される徹底した清潔と秩序の精神で知られます。'
    }
  },
  {
    id: 'b2-buerokratie-gefuehle',
    level: 'B2',
    title: 'Die Bürokratie der Gefühle: Formular 27-B',
    titleJa: '感情の官僚主義：申請書27-B',
    subtitle: 'Ein satirischer Besuch im Bundesamt für Affektregulierung',
    subtitleJa: '軽い不機嫌を公認してもらうために書類を提出する市民の苦悩',
    genre: 'Surreal',
    genreJa: '風刺・シュール',
    wordCount: 476,
    readingTimeMinutes: 5,
    image: '/images/story_buergeramt_coffee_1791322005511.jpg',
    summaryJa: '近未来のドイツ。市民の精神衛生を標準化するため設立された「連邦感情規制庁」。クララは月曜朝の満員電車で抱いた「軽度の不条理感」を公式に表明するため、複雑極まりない書類手続きに挑む。',
    paragraphs: [
      {
        id: 1,
        german: 'Deutschland im Jahr 2042 ist bekanntlich das am gründlichsten organisierte Land des Planeten. Nach der erfolgreichen Vereinheitlichung der Mülltrennung und der DIN-Normierung für Frühstücksbrötchen wandte sich der Gesetzgeber dem letzten chaotischen Refugium zu: der menschlichen Gefühlswelt. Zu diesem Zweck wurde das »Bundesamt für Affektregulierung und Gemütszustände« in Bonn ins Leben gerufen.',
        japanese: '2042年のドイツは、周知のとおり地球上で最も徹底して組織化された国です。ゴミの分別基準の統一と朝食のパン（Brötchen）に関する工業規格（DIN）の制定に成功したあと、立法府は最後に残された混沌の領域、すなわち人間の感情世界へと目を向けました。そのためにボンに設立されたのが「連邦感情規制・気分状態庁」でした。'
      },
      {
        id: 2,
        german: 'Klara Becker saß an Schalter 14 und hielt das Formular 27-B krampfhaft in beiden Händen. Sie beabsichtigte, eine »leichte, aber spürbare Montagslustlosigkeit in Verbindung mit mäßiger Verärgerung über die Deutsche Bahn« zu deklarieren. Ohne offizielle behördliche Genehmigung durfte man in der Öffentlichkeit nämlich weder die Stirn runzeln noch vernehmlich seufzen.',
        japanese: 'クララ・ベッカーは14番窓口に座り、申請書27-Bを両手で力任せに握りしめていました。彼女は「ドイツ鉄道に対する適度な苛立ちを伴う、軽度だが明確な月曜日の無気力」を申告しようとしていたのです。公的機関の認可がなければ、公衆の面前で眉をひそめたり、聞こえるようにため息をついたりすることすら許されなかったからです。'
      },
      {
        id: 3,
        german: 'Der zuständige Sachbearbeiter, Herr Schimmelpfennig, musterte Klara über den Rand seiner randlosen Brille hinweg. Seine Miene spiegelte exakt den emotionsneutralen Referenzzustand nach Paragraph 4 Absatz 2 wider. »Frau Becker«, begann er mit monotoner Präzision, »Sie haben in Feld 18 angekreuzt, dass Ihre Enttäuschung existenzielle Züge trägt. Haben Sie dafür ein tierärztliches oder meteorologisches Gutachten beigelegt?«',
        japanese: '担当官のシメルプフェニヒ氏は、縁なし眼鏡の縁越しにクララを品定めしました。彼の表情は、第4条第2項に定められた完全な感情中立基準状態を忠実に反映していました。「ベッカーさん」と彼は単調かつ精密な口調で切り出しました。「あなたは第18欄に、ご自身の失望感が『実存的な特徴を帯びている』とチェックされていますね。それについての獣医学的、あるいは気象学的な鑑定書は添付されていますか？」'
      },
      {
        id: 4,
        german: '»Nein«, erwiderte Klara erstaunt. »Der Zug hatte schlichtweg fünfundvierzig Minuten Verspätung, und mein Kaffee war lauwarm.« Herr Schimmelpfennig schüttelte missbilligend den Kopf. »Ungenügende Kausalität. Für bloße Verspätungen steht Ihnen lediglich die Beschwerdeklasse C-3 zu: ›Passives Schulterzucken mit innerem Zynismus‹. Bitte füllen Sie den vierzehnseitigen Anhang zur Abgrenzung von Melancholie und Sarkasmus aus.«',
        japanese: '「いいえ」とクララは呆然と答えました。「電車が単に45分遅れて、私のコーヒーが生ぬるかっただけです。」シメルプフェニヒ氏は不服そうに首を振りました。「因果関係が不十分です。単なる列車の遅延に対してあなたに付与できるのは、苦情等級C-3の『内面的皮肉を伴う消極的な肩すくめ』のみです。メランコリーとサーカズムの境界画定に関する全14ページの付録書類に記入してください。」'
      },
      {
        id: 5,
        german: 'Klara blickte auf den gigantischen Stapel Recyclingpapier. In diesem Augenblick spürte sie weder Zorn noch Frustration, sondern eine tiefe, fast meditative Erleuchtung. Sie stand auf, zerriss das Formular in zwei Hälften und lächelte unvorschriftsmäßig breit. Herr Schimmelpfennig erstarrte vor Entsetzen: Ein unlizenziertes Glücksgefühl! Doch bevor er die Sicherheit rufen konnte, war Klara bereits beschwingt in den Bonner Sonnenschein hinausgetreten.',
        japanese: 'クララは再生紙の巨大な束を見つめました。その瞬間、彼女は怒りも苛立ちも感じず、深くほとんど瞑想的な悟りを感じました。彼女は立ち上がり、申請書を真っ二つに破り裂き、規定外の満面の笑みを浮かべました。シメルプフェニヒ氏は恐怖で硬直しました——無許可の幸福感だ！しかし彼が警備を呼ぶ前に、クララはすでに軽やかな足取りでボンの陽光あふれる街へと踏み出していたのでした。'
      }
    ],
    fullTranslationJa: [
      '2042年のドイツは、周知のとおり地球上で最も徹底して組織化された国です。ゴミの分別基準の統一と朝食のパンに関する工業規格の制定に成功したあと、立法府は最後に残された混沌の領域、すなわち人間の感情世界へと目を向けました。そのためにボンに設立されたのが「連邦感情規制・気分状態庁」でした。',
      'クララ・ベッカーは14番窓口に座り、申請書27-Bを両手で力任せに握りしめていました。彼女は「ドイツ鉄道に対する適度な苛立ちを伴う、軽度だが明確な月曜日の無気力」を申告しようとしていたのです。公的機関の認可がなければ、公衆の面前で眉をひそめたり、聞こえるようにため息をついたりすることすら許されなかったからです。',
      '担当官のシメルプフェニヒ氏は、縁なし眼鏡の縁越しにクララを品定めしました。彼の表情は、第4条第2項に定められた完全な感情中立基準状態を忠実に反映していました。「ベッカーさん」と彼は単調かつ精密な口調で切り出しました。「あなたは第18欄に、ご自身の失望感が『実存的な特徴を帯びている』とチェックされていますね。それについての獣医学的、あるいは気象学的な鑑定書は添付されていますか？」',
      '「いいえ」とクララは呆然と答えました。「電車が単に45分遅れて、私のコーヒーが生ぬるかっただけです。」シメルプフェニヒ氏は不服そうに首を振りました。「因果関係が不十分です。単なる列車の遅延に対してあなたに付与できるのは、苦情等級C-3の『内面的皮肉を伴う消極的な肩すくめ』のみです。メランコリーとサーカズムの境界画定に関する全14ページの付録書類に記入してください。」',
      'クララは再生紙の巨大な束を見つめました。その瞬間、彼女は怒りも苛立ちも感じず、深くほとんど瞑想的な悟りを感じました。彼女は立ち上がり、申請書を真っ二つに破り裂き、規定外の満面の笑みを浮かべました。シメルプフェニヒ氏は恐怖で硬直しました——無許可の幸福感だ！しかし彼が警備を呼ぶ前に、クララはすでに軽やかな足取りでボンの陽光あふれる街へと踏み出していたのでした。'
    ],
    vocabulary: [
      { german: 'die DIN-Norm', article: 'die', pos: 'Substantiv', japanese: 'ドイツ工業規格（DIN規格）' },
      { german: 'die Stirn runzeln', pos: 'Redewendung', japanese: '眉をひそめる、額にしわを寄せる' },
      { german: 'der Sachbearbeiter', article: 'der', pos: 'Substantiv', japanese: '（役所などの）担当官、係官' },
      { german: 'die Kausalität', article: 'die', pos: 'Substantiv', japanese: '因果関係' },
      { german: 'unvorschriftsmäßig', pos: 'Adjektiv / Adverb', japanese: '規定外の、規則に反した' },
      { german: 'beschwingt', pos: 'Adjektiv / Adverb', japanese: 'ウキウキした、軽快な気分の' }
    ],
    culturalNote: {
      title: 'カフカ的官僚制とドイツの秩序',
      content: 'フランツ・カフカの小説に描かれる迷宮のような官僚制の不条理（kafkaesk）は、現代のドイツ語圏の文学や風刺コメディでも絶大な人気を誇るテーマです。'
    }
  },
  {
    id: 'b2-roboter-schwarzwald',
    level: 'B2',
    title: 'Der Kuckuck und der Kodex',
    titleJa: 'カッコウ時計とアンドロイドの掟',
    subtitle: 'Eine philosophische Begegnung im dichten Nebel des Schwarzwaldes',
    subtitleJa: '黒い森の木彫り職人とAIロボットが語る「魂」の宿る場所',
    genre: 'Sci-Fi',
    genreJa: 'SF・哲学',
    wordCount: 508,
    readingTimeMinutes: 5,
    image: '/images/story_blackforest_robot_1791322062771.jpg',
    summaryJa: '黒い森の山奥。代々伝わる鳩時計（Kuckucksuhr）を彫り続ける老職人ヨーゼフのもとに、廃品回収業者から逃げ延びてきたソーラー駆動の自律型ロボット「ユニット7」が雨宿りにやってくる。',
    paragraphs: [
      {
        id: 1,
        german: 'Tief in den Tälern des Schwarzwaldes, wo die Tannen so dicht wachsen, dass das Sonnenlicht nur als zarter Dunst den Waldboden berührt, stand die Werkstatt von Josef Faller. Seit über sechzig Jahren schnitzte der alte Handwerker Kuckucksuhren aus gelagertem Lindenholz. Für ihn war jede Uhr kein bloßes Messgerät für die flüchtige Zeit, sondern ein atmendes Gehäuse für menschliche Geduld.',
        japanese: 'シュヴァルツヴァルト（黒い森）の深い谷間、モミの木が鬱蒼と生い茂り陽光がか細い靄となって森の地面にかろうじて届く場所に、ヨーゼフ・ファラーの工房がありました。60年以上もの間、この老職人は乾燥させたシナノキの材木から鳩時計を彫り続けてきました。彼にとって時計とは、過ぎ去る時間をただ測る道具ではなく、人間の忍耐が宿る呼吸する器でした。'
      },
      {
        id: 2,
        german: 'Eines stürmischen Oktoberabends klopfte es an der massiven Eichentür. Draußen stand kein verirrtes Reh und kein Wanderer, sondern eine schlanke Gestalt aus mattschwarzem Carbon und gebürstetem Titan. Es war »Einheit 7«, ein ausgemusterter Forstdroide aus einem nahen Versuchsbiotop. Auf seiner Brust blinkte eine schwache bernsteinfarbene Diode, die einen kritischen Ladestand von vier Prozent signalisierte.',
        japanese: '嵐の吹き荒れる10月の夜、頑丈なオーク材の扉がノックされました。外に立っていたのは道に迷った鹿でもハイカーでもなく、マットブラックのカーボンとヘアライン仕上げのチタンでできたほっそりした人影でした。それは近くの実験ビオトープから廃棄処分を逃れてきた森林管理アンドロイド「ユニット7」でした。胸元には充電残量4%を示す琥珀色のダイオードが弱々しく点滅していました。'
      },
      {
        id: 3,
        german: 'Josef bat den mechanischen Gast wortlos herein und platzierte eine ultraviolette Werkstattlampe über ihm, um dessen Solarzellen zu speisen. Einheit 7 beobachtete mit unbewegten optischen Sensoren die rhythmische Bewegung von Josefs Händen, die gerade ein hölzernes Blatt reliefartig herausarbeiteten. »Deine Berechnungen weisen Abweichungen von 0,3 Millimetern auf«, stellte die Maschine sachlich fest.',
        japanese: 'ヨーゼフは無言で機械の客を招き入れ、ソーラーパネルを充電するために作業場用紫外線ランプを上から当ててやりました。ユニット7は動かない光学センサーで、木製の葉のレリーフを彫り出しているヨーゼフの手のリズミカルな動きを観察しました。「あなたの計算には0.3ミリの誤差が生じています」と機械は淡々と指摘しました。'
      },
      {
        id: 4,
        german: 'Josef schmunzelte unter seinem grauen Schnurrbart. »Gerade diese Ungenauigkeit ist es, mein metallener Freund, die der Sache eine Seele einhaucht. Eine perfekte Maschine erzeugt Symmetrie; aber Leben entsteht dort, wo das Holz dem Schnitzmesser Widerstand leistet.« Einheit 7 schwieg für 4,2 Sekunden – eine Ewigkeit für einen Quantenprozessor.',
        japanese: 'ヨーゼフは灰色の口ひげの下で微笑みました。「まさにその不正確さこそが、金属の友よ、物に魂を吹き込むのだよ。完全な機械は対称性を生み出すが、命とは木が彫刻刀に抵抗するその場所にこそ生まれるのだ。」ユニット7は4.2秒間沈黙しました——量子プロセッサにとってそれは永遠に等しい時間でした。'
      },
      {
        id: 5,
        german: 'Als der Kuckuck um Mitternacht mit hölzernem Heiserkeitsschrei aus der Klappe sprang, hob Einheit 7 vorsichtig ein Schnitzeisen auf. Unter den behutsamen Fingern der Maschine entstand kein normiertes Zahnrad, sondern die unvollkommene, aber wunderschöne Gestalt einer kleinen Eule. Im Schwarzwald war in dieser Nacht ein neues Bündnis zwischen Baumharz und Silizium geschmiedet worden.',
        japanese: '真夜中に木製のしゃがれ声で鳩が小窓から飛び出したとき、ユニット7はおずおずと彫刻刀を手に取りました。機械の慎重な指先から生まれたのは、規格化された歯車ではなく、不揃いでありながら息をのむほど美しい小さなフクロウの姿でした。黒い森のこの夜、樹液とシリコンのあいだに新たな盟約が結ばれたのです。'
      }
    ],
    fullTranslationJa: [
      'シュヴァルツヴァルト（黒い森）の深い谷間、モミの木が鬱蒼と生い茂り陽光がか細い靄となって森の地面にかろうじて届く場所に、ヨーゼフ・ファラーの工房がありました。60年以上もの間、この老職人は乾燥させたシナノキの材木から鳩時計を彫り続けてきました。彼にとって時計とは、過ぎ去る時間をただ測る道具ではなく、人間の忍耐が宿る呼吸する器でした。',
      '嵐の吹き荒れる10月の夜、頑丈なオーク材の扉がノックされました。外に立っていたのは道に迷った鹿でもハイカーでもなく、マットブラックのカーボンとヘアライン仕上げのチタンでできたほっそりした人影でした。それは近くの実験ビオトープから廃棄処分を逃れてきた森林管理アンドロイド「ユニット7」でした。胸元には充電残量4%を示す琥珀色のダイオードが弱々しく点滅していました。',
      'ヨーゼフは無言で機械の客を招き入れ、ソーラーパネルを充電するために作業場用紫外線ランプを上から当ててやりました。ユニット7は動かない光学センサーで、木製の葉のレリーフを彫り出しているヨーゼフの手のリズミカルな動きを観察しました。「あなたの計算には0.3ミリの誤差が生じています」と機械は淡々と指摘しました。',
      'ヨーゼフは灰色の口ひげの下で微笑みました。「まさにその不正確さこそが、金属の友よ、物に魂を吹き込むのだよ。完全な機械は対称性を生み出すが、命とは木が彫刻刀に抵抗するその場所にこそ生まれるのだ。」ユニット7は4.2秒間沈黙しました——量子プロセッサにとってそれは永遠に等しい時間でした。',
      '真夜中に木製のしゃがれ声で鳩が小窓から飛び出したとき、ユニット7はおずおずと彫刻刀を手に取りました。機械の慎重な指先から生まれたのは、規格化された歯車ではなく、不揃いでありながら息をのむほど美しい小さなフクロウの姿でした。黒い森のこの夜、樹液とシリコンのあいだに新たな盟約が結ばれたのです。'
    ],
    vocabulary: [
      { german: 'die Kuckucksuhr', article: 'die', pos: 'Substantiv', japanese: '鳩時計（カッコウ時計）', note: '黒い森発祥の世界的に有名な伝統木工芸品' },
      { german: 'das Schnitzeisen', article: 'das', pos: 'Substantiv', japanese: '彫刻刀' },
      { german: 'eine Seele einhauchen', pos: 'Redewendung', japanese: '魂を吹き込む' },
      { german: 'der Widerstand', article: 'der', pos: 'Substantiv', japanese: '抵抗、反抗' },
      { german: 'ausgemustert', pos: 'Partizip II / Adjektiv', japanese: '廃棄処分された、退役した' }
    ],
    culturalNote: {
      title: 'シュヴァルツヴァルトの鳩時計',
      content: '18世紀から続く黒い森の鳩時計製造は、精密なからくり機構と手彫りの温もりが融合したドイツ工芸の誇りです。'
    }
  },
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
    descJa: '複文や関係代名詞を使った本格ストーリー。SFコメディや一風変わった日常劇。',
    wordRange: '300〜400 語'
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
