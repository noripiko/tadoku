import { Story } from '../types';

const RAW_POE_STORIES: Omit<Story, 'fullTranslationJa'>[] = [
  {
    id: 'poe-schwarzer-kater',
    level: 'B2',
    title: 'Der schwarze Kater',
    titleJa: '黒猫（エドガー・アラン・ポー・長編完全版）',
    subtitle: 'Eine düstere Erzählung über Schuld, Wahnsinn und den unaufhaltsamen Abstieg eines Geistes',
    subtitleJa: '全5章・約1,820語。酒乱と狂気の奈落に堕ちた男を、静かに破滅へと追いつめる謎めいた黒猫の悪夢',
    genre: 'Mystery',
    genreJa: 'ゴシック・ホラー',
    wordCount: 1820,
    readingTimeMinutes: 16,
    image: '/images/story_blackforest_robot_1791322062771.jpg', // Utilizing matching dark moody asset
    summaryJa: '【長編・全5章】エドガー・アラン・ポーの不朽のゴシック傑作。心優しく動物好きだった主人公は、アルコールの深みに溺れるにつれ、異様な凶暴性と狂気へと囚われていく。愛猫プルートを自らの手で惨殺した罪悪感。その後、大火で全財産を失い、廃墟の壁に浮かび上がった首吊り猫の幻影。そして、胸に不気味な白斑を持つ第二の猫との出会いが、男の精神をさらに追い詰めていく。地下室での衝動的な殺人、そして完璧な隠蔽をあざ笑うかのように鳴り響く、壁の奥からの叫び声。人間の心の奥底に潜む「天邪鬼の心理（Perversity）」を描ききった傑作長編。',
    paragraphs: [
      // Kapitel I
      {
        id: 1,
        german: '【Kapitel I: Eine glückliche Jugend und die Liebe zu den Tieren】 Für die wildeste und zugleich banalste Geschichte, die ich hier niederzuschreiben wage, erwarte ich weder Glauben noch hoffe ich darauf. Doch ich werde morgen sterben, und heute möchte ich meine Seele entlasten. Seit meiner frühesten Kindheit war ich bekannt für die Milde und Sanftmut meines Charakters. Meine Herzensgüte war so auffällig, dass sie mich zum Gespött meiner Kameraden machte. Besonders ausgeprägt war meine Liebe zu den Tieren, und meine Eltern erlaubten mir daher den Besitz einer großen Auswahl von Lieblingen. Mit diesen verbrachte ich meine glücklichste Zeit, und nichts schenkte mir mehr Befriedigung, als sie zu füttern und zu pflegen.',
        japanese: '【第1章：幸福な青年期と動物たちへの愛】私がここに書き記そうとしている、最も奇妙で、かつ最もありふれた物語について、私は世間の信用を期待もしなければ、望みもしない。しかし、私は明日死ぬ身であり、今日は己の魂の重荷を降ろしておきたいのだ。幼少の頃から、私はその穏やかで優しい性格で知られていた。私の優しさは際立っており、友人たちからからかいの対象にされるほどだった。とりわけ動物に対する愛情は深く、両親は私に多種多様なペットを飼うことを許してくれた。私は彼らと最も幸福な時間を過ごし、彼らに餌を与え、世話をすることほど私に満足感を与えてくれるものはなかった。'
      },
      {
        id: 2,
        german: 'Ich heiratete früh und war glücklich, in meiner Frau ein Gemüt zu finden, das dem meinen nicht unähnlich war. Da sie meine Vorliebe für Haustiere teilte, versäumte sie keine Gelegenheit, die angenehmsten Arten anzuschaffen. Wir hatten Vögel, Goldfische, einen schönen Hund, Kaninchen, einen kleinen Affen und eine Katze. Diese Katze war ein bemerkenswert schönes, großes Tier, völlig schwarz und von einer erstaunlichen Klugheit. Wenn von ihrem Verstand die Rede war, vergaß meine Frau, die im Grunde nicht abergläubisch war, nie, auf den alten Volksglauben hinzudeuten, demzufolge alle schwarzen Katzen verkleidete Hexen seien.',
        japanese: '私は早くに結婚し、妻が自分とよく似た気性の持ち主であることに幸福を感じていた。彼女も私のペット好きを共有していたため、魅力的な動物たちを手に入れる機会を逃さなかった。私たちは鳥、金魚、美しい犬、ウサギ、小さな猿、そして一匹の猫を飼っていた。この猫は際立って美しく、巨大で、全身が漆黒で、驚くほど賢い動物だった。その知性の話になると、根は決して迷信深くなかった妻も、すべての黒猫は魔女の化身であるという古い民間伝承を引き合いに出すことを忘れなかった。'
      },
      {
        id: 3,
        german: 'Pluto – so hieß der Kater – war mein erklärter Liebling und mein ständiger Spielgefährte. Ich allein fütterte ihn, und er folgte mir wie mein Schatten auf Schritt und Tritt durch das Haus. Es war mir kaum möglich, ihn daran zu hindern, mir selbst durch die Straßen zu folgen. Unsere Freundschaft dauerte in dieser Weise mehrere Jahre an, während derer sich mein allgemeines Wesen und mein Charakter – durch den Einfluss des Teufels Alkohol, ich schäme mich, es zu gestehen – zum Schlechteren veränderten.',
        japanese: 'プルート——それがその猫の名だった——は、私の一番のお気に入りであり、常に一緒に遊ぶ仲間だった。私だけが彼に餌を与え、彼は家の中で私の影のようにどこまでもついて回った。通りを歩くときでさえ、彼がついてくるのを止めるのが困難なほどだった。私たちの友情はこのような形で数年間続いたが、その間に私の全般的な性質と性格は——恥ずかしながら告白するが、悪魔の酒の力によって——最悪の方向へと変化してしまったのだ。'
      },
      // Kapitel II
      {
        id: 4,
        german: '【Kapitel II: Das schleichende Gift des Alkohols und der erste Graus】 Ich wurde von Tag zu Tag düsterer, reizbarer und rücksichtsloser gegenüber den Gefühlen anderer. Ich erlaubte mir, eine grobe Sprache gegen meine Frau zu gebrauchen, und ging schließlich sogar so weit, ihr gegenüber tätlich zu werden. Meine Tiere mussten natürlich diese Veränderung meines Wesens ebenfalls spüren. Ich vernachlässigte sie nicht nur, sondern misshandelte sie auch. Gegen Pluto jedoch bewahrte ich noch so viel Scheu, dass ich mich hütete, ihm wehzutun, während ich Hunde, Affen oder Vögel ohne Zögern quälte, wenn sie mir in den Weg kamen. Aber meine Krankheit nahm an Stärke zu – denn welcher Teufel ist so zerstörerisch wie der Alkohol? – und schließlich begann auch Pluto, der nun alt und folglich etwas mürrisch wurde, die Folgen meines bösen Humors zu spüren.',
        japanese: '【第2章：忍び寄る酒の毒と、最初の凶行】私は日に日に陰鬱になり、苛立ちを募らせ、他人の感情に対して無配慮になっていった。妻に対して乱暴な言葉を浴びせるようになり、ついには暴力を振るうまでに至った。当然、私の動物たちも私の性質の変化を感じ取らざるを得なかった。私は彼らを放置するだけでなく、虐待するようになったのだ。しかし、プルートに対してだけは、まだいくらかの躊躇があり、彼を傷つけることは避けていた。一方で、犬や猿、鳥たちが私の行く手を遮れば、躊躇なく痛めつけていた。だが、私の病は重くなる一方だった——アルコールほど破壊的な悪魔が他にいるだろうか？——そしてついに、年老いてやや気難しくなっていたプルートも、私の悪意に満ちた気性の犠牲になり始めた。'
      },
      {
        id: 5,
        german: 'Eines Nachts, als ich spät und völlig berauscht von einer meiner Kneipentouren heimkehrte, bildete ich mir ein, dass die Katze meine Gegenwart mied. Ich packte das erschrockene Tier im Zorn, woraufhin es mir im Schrecken mit seinen Zähnen eine leichte Wunde an der Hand zufügte. In mir erwachte augenblicklich die Wut eines Dämons. Ich erkannte mich selbst nicht mehr. Meine ursprüngliche Seele schien auf einmal aus meinem Körper geflohen zu sein, und eine boshafte, vom Gin genährte Grausamkeit durchdrang jede Faser meines Seins. Ich zog ein Federmesser aus der Westentasche, packte das arme Tier an der Kehle und schnitt ihm kaltblütig eines seiner Augen aus der Augenhöhle! Ich erröte, ich brenne, ich schaudere, während ich diese entsetzliche Tat niederschreibe.',
        japanese: 'ある夜、居酒屋をはしごしてすっかり泥酔して遅く帰宅したとき、私は猫が私の存在を避けていると思い込んだ。怒りに任せて怯える猫を掴み上げると、恐怖に駆られた猫は私の手に歯を立てて軽い傷を負わせた。その瞬間、私の中に悪魔のような怒りが目覚めた。私はもはや自分自身を見失っていた。私の本来の魂は一瞬にして肉体から逃げ去り、ジンによって養われた極悪非道な残酷さが、私の存在の隅々にまで浸透した。私はチョッキのポケットからペンナイフを取り出し、哀れな猫の喉を掴むと、冷酷にもその片目を眼窩から抉り出したのだ！この恐るべき凶行を書き記している今、私は羞恥に赤面し、胸を焦がし、戦慄している。'
      },
      {
        id: 6,
        german: 'Als am Morgen die Vernunft mit dem Schlaf zurückkehrte, empfand ich ein Gefühl, das halb aus Entsetzen, halb aus Reue bestand. Aber es war nur ein schwaches Gefühl, und meine Seele blieb unberührt. Ich stürzte mich erneut in den Exzess und ertränkte bald im Wein jede Erinnerung an meine Tat. Das Auge der Katze heilte indessen langsam, und das Tier bot zwar einen schrecklichen Anblick, schien aber keine Schmerzen mehr zu leiden. Es floh jedoch verständlicherweise in äußerster Angst, sobald ich mich ihm näherte. Mein Herz war anfangs traurig über diese offensichtliche Abneigung eines Geschöpfes, das mich einst so sehr geliebt hatte. Doch dieses Gefühl wich bald einer unerträglichen Reizung, und schließlich erwachte in mir der Geist der Perversität – jener unerklärliche Drang des Menschen, das zu tun, was er als verboten und schädlich erkennt.',
        japanese: '朝になり、眠りから覚めて理性が戻ると、私は半分は恐怖、半分は後悔の念に包まれた。しかし、それはかすかな感情に過ぎず、私の魂は深く揺さぶられなかった。私は再び過度の飲酒に耽り、ワインの中に凶行の記憶をすぐに溺れさせてしまった。その間に猫の傷はゆっくりと癒え、その姿は凄惨極まりないものではあったが、もはや痛みを感じていないようだった。しかし当然ながら、私が近づくと、猫は極限の恐怖に駆られて逃げ去った。かつてあれほど私を慕ってくれた生き物が、これほど明白な嫌悪を示すことに、最初は悲しみを覚えた。だが、その悲しみはまもなく耐え難いいら立ちへと変わり、ついには私の中に「天邪鬼（あまのじゃく）の精神」——人間が禁止され有害であると認識していることを敢えて行おうとする、あの不可解な衝動が目覚めたのだ。'
      },
      {
        id: 7,
        german: 'Es war dieser Geist der Perversität, der meinen endgültigen Untergang herbeiführte. Eines Morgens warf ich dem wehrlosen Tier eine Schlinge um den Hals und hängte es an den Ast eines Baumes im Garten auf! Ich hängte es auf, während mir die Tränen aus den Augen stürzten und mein Herz von bitterster Reue zerrissen wurde. Ich hängte es auf, weil ich wusste, dass es mich geliebt hatte und mir keinen Grund zum Zorn gegeben hatte. Ich hängte es auf, weil ich wusste, dass ich damit eine Sünde beging – eine Todsünde, die meine unsterbliche Seele, wenn so etwas möglich wäre, selbst außerhalb der Reichweite der unendlichen Barmherzigkeit des Schöpfers stellen würde.',
        japanese: '私に決定的な破滅をもたらしたのは、この天邪鬼の精神であった。ある朝、私は無抵抗な動物の首に縄をかけ、庭の木の枝に吊るし殺したのだ！目から涙を溢れさせ、胸をむしり取るような痛恨の念に駆られながら、私はそれを吊るした。私を愛し、怒らせる理由を何一つ与えなかったと知っていながら、私はそれを吊るした。そうすることが罪であり、もしそんなことが可能ならば、私の不滅の魂を創造主の無限の慈悲の届かない場所に追いやってしまうほどの「大罪」であると知りながら、私は猫を吊るしたのだ。'
      },
      // Kapitel III
      {
        id: 8,
        german: '【Kapitel III: Das Feuer und die Erscheinung an der Ruine】 In der Nacht nach diesem grausamen Tag wurde ich durch den Ruf »Feuer!« aus dem Schlaf gerissen. Die Vorhänge meines Bettes standen in Flammen, und das ganze Haus war bereits ein Raub des Feuers. Mit äußerster Mühe gelang es meiner Frau, einer Magd und mir selbst, ins Freie zu entkommen. Der Ruin war vollständig. Mein ganzes Hab und Gut wurde vernichtet, und ich war von diesem Moment an der Verzweiflung preisgegeben. Ich versuche nicht, eine Verbindung zwischen dieser Katastrophe und meiner Grausamkeit herzustellen – aber ich berichte Tatsachen und möchte keine Kettenglieder auslassen.',
        japanese: '【第3章：大火と、廃墟の壁に現れた不気味な影】この残酷な一日の翌夜、私は「火事だ！」という叫び声で眠りから呼び覚まされた。私のベッドのカーテンは炎に包まれ、家全体がすでに火の海と化していた。極限の努力の末、妻とメイド、そして私自身はどうにか屋外へと脱出することができた。破滅は完全だった。私のすべての財産は灰燼に帰し、私はその瞬間から絶望のどん底へと叩き落とされた。私はこの大惨事と自分の残酷な行為との間に因果関係を結びつけようとは思わない——ただ、私は事実を報告し、いかなる鎖の輪も省略したくないだけなのだ。'
      },
      {
        id: 9,
        german: 'Am Tag nach dem Brand besuchte ich die Ruinen meines Hauses. Die Mauern waren fast alle eingestürzt, mit Ausnahme einer einzigen, dünnen Zwischenwand, die sich im Zentrum des Hauses befunden hatte. Vor dieser Wand hatte das Hauptende meines Bettes gestanden. Hier hatte sich eine dichte Menschenmenge versammelt, und viele schienen die Wand mit größter Aufmerksamkeit und Überraschung zu untersuchen. Die Worte »Merkwürdig!« und »Erstaunlich!« erregten meine Neugier. Ich trat näher und sah auf der weißen Gipsoberfläche, wie in ein Basrelief eingeprägt, das Bild einer gigantischen Katze. Die Darstellung war mit einer Präzision ausgeführt, die das Vorstellbare überstieg. Um den Hals des Tieres befand sich ein Strick.',
        japanese: '火災の翌日、私は我が家の廃墟を訪れた。壁のほとんどは崩れ落ちていたが、家の中心にあった、たった一枚の薄い仕切り壁だけが奇跡的に残っていた。その壁の前には、私のベッドの頭が置かれていた場所だった。そこには大勢の群衆が集まっており、多くの人々が極めて深い関心と驚きを持ってその壁を検証しているようだった。「奇妙だ！」「驚いた！」という言葉が私の好奇心をそそった。私は近づき、白い漆喰の表面に、まるで浮き彫りのように刻み込まれた巨大な猫の影を目にしたのだ。その描写は想像を超えるほど精密であり、動物の首の周りには、太い縄が巻き付いていた。'
      },
      {
        id: 10,
        german: 'Mein Entsetzen und mein Staunen waren grenzenlos. Doch bald suchte meine Vernunft nach einer natürlichen Erklärung. Ich erinnerte mich, dass die Katze im Garten aufgehängt worden war. Beim Ausbruch des Feuers musste ein Nachbar das Tier abgeschnitten und durch das offene Fenster in mein Zimmer geworfen haben, um mich zu wecken. Die herabstürzende Wand hatte den Körper der Katze in den frischen Gips gepresst, und das Ammoniak des Tieres hatte im Zusammenspiel mit der enormen Hitze das Bildnis gezeichnet. Obwohl ich so mein Gewissen beruhigen konnte, vermochte ich es dennoch monatelang nicht, mich von dem Phantom der Katze zu befreien. In meiner Seele erwachte eine Art Sehnsucht, die dem Verlust ähnelte, und ich begann, in den berüchtigten Spelunken nach einem anderen Tier von ähnlicher Gestalt zu suchen, um Pluto zu ersetzen.',
        japanese: '私の恐怖と驚愕は無限だった。しかしやがて、私の理性は自然な説明を求め始めた。私は猫が庭に吊るされていたことを思い出した。火事が発生した際、誰か隣人が私を起こそうとして、木から猫を切り離し、開いた窓から私の部屋へ投げ入れたに違いない。崩れ落ちた壁が猫の死骸を塗りたての漆喰に押し付け、動物の体から出たアンモニアが猛烈な熱と作用して、その肖像を焼き付けたのだ。このようにして良心を納得させたものの、私は何ヶ月もの間、あの猫の幻影から逃れることができなかった。私の心には失ったものを惜しむような憧憬が目覚め、私はプルートの代わりとなる、似た姿の別の猫を求めて場末の悪名高き酒場を捜し歩き始めた。'
      },
      // Kapitel IV
      {
        id: 11,
        german: '【Kapitel IV: Die zweite Katze und das Grauen im Keller】 Eines Nachts, als ich halb betäubt in einer dunklen Schänke saß, wurde meine Aufmerksamkeit auf einen großen, schwarzen Gegenstand gelenkt, der auf einem der riesigen Schnapsfässer lag. Ich trat näher und berührte ihn mit der Hand. Es war eine schwarze Katze – sehr groß, ebenso groß wie Pluto und ihm in jeder Hinsicht ähnlich, bis auf einen einzigen Umstand: Pluto hatte kein einziges weißes Haar an seinem ganzen Körper, während dieses Tier einen großen, wenn auch unbestimmten weißen Fleck auf seiner Brust aufwies. Sobald ich die Katze berührte, erhob sie sich, schnurrte laut, rieb sich an meiner Hand und zeigte die größte Freude über meine Aufmerksamkeit. Ich bot dem Wirt an, das Tier zu kaufen, doch er verlangte kein Geld; er habe die Katze nie zuvor gesehen.',
        japanese: '【第4章：第二の猫と、地下室で起きた恐るべき惨劇】ある夜、薄暗い酒場で半分朦朧としながら座っていたとき、巨大なラム酒の樽の上に置かれた、黒くて大きな物体に私の注意が引きつけられた。近づいて手を触れてみると、それは一匹の黒猫だった。非常に大きく、プルートと全く同じサイズで、あらゆる点で酷似していた。ただ一つの点を除いては——プルートは全身に一本の白毛もなかったが、この猫の胸には、形は不鮮明ながらも大きな白い斑紋があったのだ。私が触れると、猫はすぐに立ち上がり、喉を大きく鳴らして私の手に体をこすりつけ、私の関心を大いに喜んでいる様子を見せた。私は店主に買い取りを申し出たが、彼は金を要求しなかった。そんな猫はこれまで見たこともないと言うのだった。'
      },
      {
        id: 12,
        german: 'Ich nahm das Tier mit nach Hause, und es gewöhnte sich sofort ein und wurde der Liebling meiner Frau. Ich selbst jedoch empfand bald eine tiefe Abneigung gegen das Tier. Ich hatte gehofft, durch den Besitz dieser Katze meine Reue zu lindern, aber das Gegenteil war der Fall. Ihre auffällige Anhänglichkeit mir gegenüber widderte mich an und quälte mich. Langsam, ganz langsam, verwandelte sich dieser Ekel und diese Abneigung in bitteren Hass. Ich floh vor dem Tier wie vor einer Pestilenz. Was meinen Hass zweifellos noch verstärkte, war die Entdeckung am Morgen nach ihrer Ankunft, dass auch dieser Katze – genau wie Pluto – eines ihrer Augen fehlte! Meine Frau wies mich mit traurigem Blick darauf hin, doch diese Tatsache machte das Tier in meinen Augen nur noch abscheulicher.',
        japanese: '私はその猫を家に連れ帰った。猫はすぐに家に馴染み、妻の気に入りとなった。しかし、私自身はまもなく、その猫に対して深い嫌悪感を抱くようになった。私はこの猫を飼うことで後悔を和らげたいと願っていたが、現実は正反対だった。猫が私に対して示すあからさまな執着が、私を不快にさせ、苦しめたのだ。ゆっくりと、本当にゆっくりと、この嫌悪と忌避は激しい憎悪へと変わっていった。私は疫病から逃れるようにその猫を避けた。私の憎悪を疑いなく倍増させたのは、連れて帰った翌朝、この猫もまた——プルートと全く同様に——片目が抉り取られているのを発見したことだった！妻は悲しげな眼差しでそれを私に指摘したが、その事実こそが、私の目にはその猫をいっそうおぞましいものに見せただ。'
      },
      {
        id: 13,
        german: 'Zu meinem Entsetzen wuchs der weiße Fleck auf der Brust des Tieres im Laufe der Wochen an und nahm allmählich eine scharf umrissene Gestalt an. Es war nun kein unbestimmter Fleck mehr, sondern die Darstellung eines Gegenstandes, den ich nur mit Schaudern nennen mag: es war das Bild des Galgens! Ja, des Galgens – jenes schrecklichen Werkzeugs des Todes und des Jammers! Ich war nun ein Gefangener des nackten Entsetzens. Weder am Tag noch in der Nacht fand ich mehr Ruhe. Die Katze ließ mich keinen Augenblick allein. Wenn ich schlief, erwachte ich aus Alpträumen und fühlte den schweren Körper des Tieres auf meiner Brust liegen, ein lebendiges Inkubus, das ich nicht abzustreifen vermochte.',
        japanese: '私の恐怖が極限に達したのは、数週間が経つうちに、猫の胸の白い斑紋がゆっくりと成長し、次第に明確な輪郭を帯びてきたことだった。それはもはや不鮮明なシミではなく、私が戦慄なしには口にできない「ある物体」の肖像を形作っていた。それは——絞首台（ガルゲン）の形だった！そうだ、絞首台——死と絶望のあの恐るべき処刑台の姿だったのだ！私は完全に、剥き出しの恐怖の囚人となった。昼も夜も、私に安息は訪れなかった。猫は一瞬たりとも私を一人にしなかった。眠りにつくと悪夢で目が覚め、この猫の重い肉体が私の胸の上にのしかかっているのを感じた。振り払うことのできない、生きた夢魔（インクブス）がそこにあった。'
      },
      {
        id: 14,
        german: 'Eines Tages begleitete mich meine Frau für eine alltägliche Verrichtung hinab in den Keller des alten Gebäudes, das wir nun bewohnten. Die Katze folgte mir auf den steilen Stufen und brachte mich fast zu Fall. In einem plötzlichen Anfall von rasendem Zorn vergaß ich jeden Skrupel. Ich ergriff eine Axt, die in der Ecke stand, und zielte einen Schlag nach dem Tier, der es auf der Stelle getötet hätte, wenn meine Frau nicht meinen Arm aufgehalten hätte. Diese Einmischung entfesselte in mir die Wut eines wahren Teufels. Ich entwand meinen Arm ihrem Griff, erhob die Axt erneut und spaltete ihr ohne Zögern den Schädel! Sie sank ohne einen Laut tot zu Boden.',
        japanese: 'ある日、私たちは今暮らしている古い建物の地下室へ、日常の雑事のために降りていった。妻も一緒だった。猫は険しい階段を私の足元にまとわりついてついてきて、私をつまずかせそうにした。突発的な怒りの発作に襲われ、私はすべての良心を忘却した。私は隅に置かれていた斧を掴み、猫を目がけて振り下ろした。もし妻が私の腕を掴んで止めなければ、一撃で即死していただろう。この介入が、私の中に本物の悪魔の逆上を呼び起こした。私は彼女の束縛から腕を振りほどくと、再び斧を掲げ、躊躇なく妻の脳天を叩き割ったのだ！彼女は声を上げることもなく、即死して床に崩れ落ちた。'
      },
      // Kapitel V
      {
        id: 15,
        german: '【Kapitel V: Der Triumph der Justiz und der Schrei aus der Wand】 Dieses schreckliche Verbrechen war vollbracht, und ich begann sofort mit kühler Überlegung, die Leiche zu verbergen. Ich wusste, dass ich sie weder aus dem Haus schaffen noch im Garten vergraben konnte, ohne die Aufmerksamkeit der Nachbarn zu erregen. Schließlich fasste ich den Entschluss, sie in die Wand des Kellers einzumauern – ganz so, wie es die Mönche des Mittelalters mit ihren Opfern getan haben sollten. Der Keller eignete sich perfekt dafür. Die Mauern waren nachlässig verputzt und feucht. Ich wählte eine Stelle, an der sich ein ungenutzter Schornstein befand. Ich brach die Ziegel vorsichtig heraus, legte den Körper hinein und mauerte die Öffnung mit größter Präzision wieder zu. Ich besorgte Gips, strich die Wand glatt und rieb sie mit Schmutz ein, bis kein Unterschied zum Rest der Mauer zu erkennen war. Meine Arbeit war perfekt.',
        japanese: '【第5章：正義の勝利と、壁の奥から響く叫び声】この恐るべき犯罪が完了すると、私は即座に冷徹な思考で死体の隠蔽に着手した。近所の注目を浴びることなく、死体を家の外へ運び出すことも、庭に埋めることもできないことはわかっていた。熟考の末、私は死体を地下室の壁の中に塗り込める決意をした——中世の修道士たちがその犠牲者に対して行ったとされるように。地下室はその目的にうってつけだった。壁の漆喰は雑で、湿気に満ちていた。私は使われていない煙突の跡がある場所を選んだ。慎重にレンガを取り外し、遺体を中に安置すると、極めて精密に開口部を再び塞いだ。漆喰を用意して表面を滑らかにし、周囲の壁と区別がつかなくなるまで泥をこすりつけた。私の仕事は完璧だった。'
      },
      {
        id: 16,
        german: 'Als ich meine Arbeit beendet hatte, suchte ich nach der Katze, um auch sie zu töten. Doch das schlaue Tier schien geflohen zu sein, erschreckt durch meine Gewalt. Drei Tage vergingen, und die Katze kehrte nicht zurück. Ich kann das Gefühl der unbeschreiblichen Erleichterung nicht schildern, das meine Brust erfüllte. Der schreckliche Dämon war verschwunden! Ich schlief tief und fest – ja, ich schlief, obwohl ich die Last des Mordes auf meiner Seele trug! Am vierten Tag jedoch erschien die Polizei im Haus, um eine Untersuchung durchzuführen. Ich fühlte keinen Funken Angst. Der Leiter der Beamten befahl eine gründliche Durchsuchung des Kellers. Ich begleitete sie mit ruhigem Herzen und verschränkten Armen. Wir erreichten das Ende der Untersuchung, und die Polizisten bereiteten sich vor, den Keller zu verlassen.',
        japanese: '作業を終えると、私はあの猫を殺すために捜し回った。しかし、悪賢い動物は私の凶行に怯えて逃げ去ったようだった。三日が過ぎたが、猫は戻らなかった。私の胸を満たした、言葉に尽くせないほどの解放感を表現することはできない。あの恐るべき悪魔は消え去ったのだ！私は深く、安らかに眠った——魂に殺人の重荷を背負っていながら、私は眠り続けたのだ！しかし四日目、家宅捜索のために警察官たちが家にやってきた。私は微塵の恐怖も感じなかった。捜査官のリーダーは地下室の徹底的な捜索を命じた。私は平然と腕を組み、彼らに同行した。捜索が終わり、警官たちは地下室を立ち去ろうとしていた。'
      },
      {
        id: 17,
        german: 'In meinem herrschsüchtigen Stolz und meinem blinden Triumph konnte ich es nicht lassen, das letzte Wort zu behalten. »Meine Herren«, sagte ich, »ich freue mich, dass Ihr Verdacht zerstreut ist. Diese Mauern sind solide gebaut!« Und im Übermut schlug ich mit meinem Spazierstock schwer gegen die Ziegelwand, hinter der sich die Leiche meiner Frau befand. Kaum war der Schlag verhallt, antwortete mir eine Stimme aus dem Inneren der Wand! Ein leises, wimmerndes Weinen zuerst, das rasch zu einem schrecklichen, ununterbrochenen Schrei anschwoll – ein Laut, der halb aus dem Jammer der Hölle, halb aus dem Triumph der Dämone bestand. Ich taumelte zurück, während die Polizisten wie gelähmt vor Entsetzen standen. Mit zitternden Händen rissen sie die Ziegel nieder. Die Wand fiel. Da stand die Leiche, bereits in Verwesung übergegangen, und auf ihrem Kopf saß das scheußliche Tier, dessen List mich zum Mörder gemacht hatte und dessen Schrei mich nun dem Galgen überlieferte. Ich hatte das Ungeheuer mit in die Wand eingemauert!',
        japanese: '傲慢な自尊心と盲目的な勝利感に支配され、私は最後の一言を口にせずにはいられなかった。「諸君、諸君の疑念が晴れて嬉しく思うよ。この家の壁は実に頑丈にできている！」そして私は勝ち誇って、妻の遺体が隠されているまさにそのレンガの壁を、手にした杖で激しく叩いたのだ。叩いた音が消え去るか否かのうちに、壁の内部から一つの「声」が応えた！最初はかすかな、すすり泣くような泣き声だったが、それは瞬く間に、恐るべき、途切れることのない叫び声へと膨れ上がった——半分は地獄の絶望から、半分は悪魔の勝利の凱歌から成るような叫び声が。私はよろめき後退し、警官たちは恐怖で凍りついたように立ち尽くした。震える手で彼らはレンガを叩き壊した。壁が崩れ落ちた。そこには、すでに腐敗の始まった妻の遺体が立っており、その頭の上には、あの忌まわしい獣が座っていたのだ。その悪知恵が私を殺人者に仕立て上げ、その叫び声が今、私を絞首台へと送り届けるのだ。私は、あの怪物を遺体とともに壁の中に閉じ込めてしまっていたのだ！'
      }
    ],
    vocabulary: [
      { german: 'der Aberglaube', article: 'der', pos: 'Substantiv', japanese: '迷信' },
      { german: 'mürrisch', pos: 'Adjektiv', japanese: '不機嫌な、気難しい' },
      { german: 'die Grausamkeit', article: 'die', pos: 'Substantiv', japanese: '残酷さ、残忍な行為' },
      { german: 'die Perversität', article: 'die', pos: 'Substantiv', japanese: '天邪鬼、逆行性、ひねくれた性格' },
      { german: 'der Galgen', article: 'der', pos: 'Substantiv', japanese: '絞首台' },
      { german: 'der Inkubus', article: 'der', pos: 'Substantiv', japanese: '夢魔、悪夢' },
      { german: 'die Verwesung', article: 'die', pos: 'Substantiv', japanese: '腐敗' }
    ],
    culturalNote: {
      title: 'ポーの不条理な心理描写',
      content: 'ポーの小説に登場する「Perversity（天邪鬼・逆行的な性質）」は、理性で禁止されていることや自分にとって不利益なことを、あえて破壊的な衝動に突き動かされて実行してしまう人間の不可解な狂気を鋭く描いています。'
    }
  },
  {
    id: 'poe-doppelmord-rue-morgue',
    level: 'C1',
    title: 'Der Doppelmord in der Rue Morgue',
    titleJa: 'モルグ街の殺人（エドガー・アラン・ポー・長編完全版）',
    subtitle: 'Die Geburtsstunde des modernen Detektivromans mit dem genialen C. Auguste Dupin',
    subtitleJa: '全5章・約2,050語。推理小説の起源。凄惨を極める密室殺人事件の謎を解き明かすデュパンの超人的思索',
    genre: 'Mystery',
    genreJa: '古典推理小説',
    wordCount: 2050,
    readingTimeMinutes: 18,
    image: '/images/story_berlin_ubahn_1791322041154.jpg', // Matching cinematic Parisian/European street look
    summaryJa: '【長編・全5章】推理小説（探偵小説）というジャンルを確立した、文学史上に残る不朽の名作。19世紀のパリ。誰もが解明できなかった「密室での母娘惨殺事件」。二人の犠牲者、怪奇な叫び声、そして逆さに引きずり込まれた死体。一連の謎に対し、驚異の分析能力を持つ青年C・オーギュスト・デュパンが対峙する。数々の目撃者たちの、互いに異なる言語の証言、部屋に残された人間離れした膂力と獣毛。それらパズルの一片を冷徹な論理（Dupin’s Ratiocination）で組み立てていく。真の密室のトリック、そして意外すぎる「犯人」が明らかになる過程を描く、緊迫の古典ミステリー長編。',
    paragraphs: [
      // Kapitel I
      {
        id: 1,
        german: '【Kapitel I: Das Wesen der Analyse und die Begegnung in Paris】 Die geistigen Fähigkeiten, welche man als analytisch bezeichnet, sind an sich einer genauen Definition kaum zugänglich. Man erfährt sie nur in ihren Wirkungen. Wer sie im hohen Maße besitzt, zieht daraus eine der reinsten Freuden. Wie der starke Mann sich an seinen körperlichen Muskeln freut, so freut sich der Analytiker an jener Geistesbeschäftigung, die Licht in die tiefste Dunkelheit bringt. Er liebt das Lösen von Rätseln, das Entziffern von Geheimschriften und das Entwirren von verwickelten Labyrinthen. Während meines Aufenthalts in Paris im Frühjahr und Sommer 1840 lernte ich dort einen jungen Mann namens C. Auguste Dupin kennen.',
        japanese: '【第1章：分析能力の本質と、パリでの運命的な出会い】一般に「分析的」と呼ばれる精神的能力は、それ自体を正確に定義することはほとんど不可能である。私たちはただ、その結果を通じてのみその存在を体験する。この能力を極めて高い水準で有する者は、そこから極上の喜びを得る。強靭な男が己の肉体的な筋肉を誇るように、分析家は最も深い闇に光をもたらす精神の活動を喜びとする。彼は謎解き、暗号の解読、そして複雑な迷宮のもつれを解きほぐすことをこよなく愛するのだ。1840年の春夏、私がパリに滞在していた際、C・オーギュスト・デュパンという名の若者と知り合った。'
      },
      {
        id: 2,
        german: 'Dieser junge Mann entstammte einer edlen, ja illustren Familie, doch durch eine Reihe von Missgeschicken war sein Vermögen so sehr zusammengeschrumpft, dass er in äußerster Armut lebte. Er besaß nur noch ein einziges Luxusgut: seine Bücher, und diese waren in Paris glücklicherweise leicht zu beschaffen. Wir trafen uns zum ersten Mal in einer obskuren Bibliothek in der Rue Saint-Germain, wo wir beide nach demselben seltenen Buch suchten. Diese Begegnung war der Beginn einer tiefen Freundschaft. Ich war fasziniert von seiner stupenden Belesenheit und vor allem von der kalten, scharfen Klarheit seines Verstandes. Wir beschlossen, für die Dauer meines Aufenthalts zusammenzuwohnen, und mieteten ein einsames, verfallenes Haus im düsteren Vorort Saint-Germain.',
        japanese: 'この若者は由緒ある、極めて名高い家柄の出身であったが、度重なる不運によって財産が激減し、極度の貧困の中で暮らしていた。彼に残された唯一の贅沢品は本だけであったが、幸いにもパリでは書籍を容易に手に入れることができた。私たちが初めて出会ったのは、サン＝ジェルマン通りのうらぶれた図書館で、奇しくも二人とも同じ稀覯本を捜し求めていた。この出会いが深い友情の始まりとなった。私は彼の驚異的な読書量、そして何よりも彼の知性の冷徹で鋭い明晰さに魅了された。私たちは私の滞在中、共同生活を送ることに決め、サン＝ジェルマンの陰気な郊外にある、荒れ果てた孤独な一軒家を借りた。'
      },
      {
        id: 3,
        german: 'Unsere Lebensweise in diesem Refugium war gänzlich exzentrisch. Wir lebten im Verborgenen. Sobald der Morgen graute, schlossen wir alle Fensterläden, entzündeten ein paar stark duftende Wachslichter und widmeten uns im fahlen Schein unseren Studien oder schwiegen stundenlang. Wenn die Nacht hereinbrach und die Welt dunkel wurde, traten wir hinaus in die belebten Straßen, um im Schein der Laternen die flüchtigen Seelen der Stadt zu beobachten. Es war an einem dieser melancholischen Abende, als uns beim Durchblättern der Abendzeitung eine Nachricht ins Auge sprang, die ganz Paris in heftige Aufregung versetzt hatte.',
        japanese: 'この隠れ家での私たちのライフスタイルは完全に風変わりなものだった。私たちは隠れるように暮らした。夜が明けるとすぐにすべての雨戸を閉め、強い香りを放つ蝋燭をいくつか灯し、その薄暗い光の中で研究に没頭するか、何時間も沈黙を守った。そして夜が訪れて世界が闇に包まれると、街の灯りに照らされた人々の儚い魂を観察するために、私たちは賑やかな通りへと歩み出た。そんな物憂げなある夜、夕刊のページをめくっていた私たちの目に、パリ全土を激しい震撼に陥れたある一報が飛び込んできた。'
      },
      // Kapitel II
      {
        id: 4,
        german: '【Kapitel II: Die schreckliche Nachricht aus der Rue Morgue】 Die Schlagzeilen meldeten einen Mord, dessen Grausamkeit und Rätselhaftigkeit jede Vorstellungskraft überstiegen: »Außergewöhnliche Morde in der Rue Morgue!« Gegen drei Uhr morgens wurden die Bewohner des Quartiers Saint-Roch durch grässliche Schreie aus dem vierten Stockwerk eines Hauses geweckt, das einer Witwe namens Madame L’Espanaye und ihrer Tochter Camille gehörte. Da die Schreie voll Todesangst anhielten, brachen die Nachbarn gemeinsam mit der Polizei die schwere Haustür auf. Als sie das vierte Stockwerk erreichten, verstummten die Schreie, doch man hörte im Inneren zwei heftige Stimmen im Streit – die eine tief und rau, die andere schrill und unbestimmbar.',
        japanese: '【第2章：モルグ街から届いた凄惨極まる殺人の一報】見出しには、その残酷さと不可解さにおいて、およそ常識では考えられない殺害事件が報じられていた——「モルグ街における異常な殺人事件！」。午前3時頃、サン＝ロッシュ地区の住民たちは、未亡人のレスパネ夫人とその娘カミーユの所有するアパートの4階から響く、恐ろしい悲鳴によって叩き起こされた。死の恐怖に満ちた叫び声が止まなかったため、近隣住民たちは警察官とともにアパートの重い扉を打ち破った。彼らが4階に到達したとき悲鳴は止んだが、部屋の内部で激しく言い争う二つの声が聞こえた——一つは低く荒々しい声、もう一つは甲高く、何語とも判別がつかない奇妙な声だった。'
      },
      {
        id: 5,
        german: 'Der Raum war von innen verschlossen, die Schlüssel steckten noch im Schloss. Als die Tür endlich mit Gewalt geöffnet wurde, bot sich den Eindringenden ein Bild des absoluten Entsetzens. Das Zimmer war in wildester Unordnung, die Möbel zertrümmert. Auf dem Boden lagen blutige Haarbüschel, die offenbar mit den Wurzeln aus der Kopfhaut gerissen worden waren. Auf dem Kamin lagen große Mengen von Goldmünzen und wertvollen Papieren – ein Raubmord schien daher ausgeschlossen. Von den Frauen fehlte zunächst jede Spur. Doch eine genaue Untersuchung des Zimmers führte zu einer schrecklichen Entdeckung: Der Körper der Tochter war mit dem Kopf nach unten in den engen Schornstein gepresst worden! Sie war offenbar von unbändiger Hand erwürgt und mit solcher Gewalt in den Kamin hinaufgedrückt worden, dass es der vereinten Kraft mehrerer Männer bedurfte, um die Leiche wieder herabzuziehen.',
        japanese: '部屋は内側から鍵がかけられており、鍵穴にはまだ鍵が差し込まれたままだった。ついに扉がこじ開けられたとき、踏み込んだ人々は絶対的な恐怖の光景を目にすることになった。室内はすさまじく荒らされ、家具は粉々に砕けていた。床には、明らかに頭皮から根こそぎむしり取られた、血まみれの髪の毛の束が散らばっていた。暖炉の上には大量の金貨や貴重な書類が残されており、そのため強盗殺人の可能性は除外された。女性たちの姿は最初どこにも見当たらなかった。しかし、室内を詳細に調査すると、恐るべき発見がなされた——娘の遺体が、頭を下にして狭い煙突の中に無理やり詰め込まれていたのだ！彼女は明らかに強大な力によって絞殺され、凄まじい暴力で煙突の奥へ押し上げられていたため、遺体を引きずり下ろすには男数人の力を合わせる必要があった。'
      },
      {
        id: 6,
        german: 'Nachdem man das Zimmer vollends durchsucht hatte, fand man den leblos geköpften Körper der alten Witwe im kleinen Garten hinter dem Haus. Ihr Hals war so tief durchschnitten, dass der Kopf beim Aufheben der Leiche abfiel. Die Brutalität der Tat war so beispiellos, dass die Polizei vor einem absoluten Rätsel stand. Dupin war von diesem Fall augenblicklich gefesselt. Er erkannte, dass die Behörden durch die bloße Ungewöhnlichkeit der Umstände gelähmt waren. »Die Pariser Polizei«, sagte er mit einem feinen Lächeln, »ist geschickt, aber nicht mehr. Sie verwechselt das Ungewöhnliche mit dem Unlösbaren. Gerade die scheinbare Unmöglichkeit dieses Falls wird uns den Schlüssel zur Lösung liefern.«',
        japanese: '部屋を徹底的に捜索した結果、裏庭の小さなスペースで、こと切れて首を切断された老未亡人の遺体が発見された。彼女の首は非常に深く切り裂かれており、遺体を持ち上げると頭部が胴体から転がり落ちた。この犯行の残虐さは前代未聞であり、警察は完全に五里霧中に陥っていた。デュパンはこの事件に一瞬で心を奪われた。彼は、当局が単に事態の異常さに幻惑されて麻痺していることを見抜いていた。「パリの警察は」と彼はかすかな微笑を浮かべて言った。「器用ではあるが、それだけだ。彼らは『異常なこと』と『解決不可能なこと』を混同している。この事件の一見不可能な状況こそが、私たちに解決の鍵を与えてくれるのだ。」'
      },
      // Kapitel III
      {
        id: 7,
        german: '【Kapitel III: Der Augenschein am Tatort und die widersprüchlichen Stimmen】 Durch seine Beziehungen zum Polizeipräfekten gelang es Dupin, die Erlaubnis zu erhalten, den Tatort in der Rue Morgue persönlich in Augenschein zu nehmen. Wir machten uns sofort auf den Weg. Das Haus war von einer schweigenden, neugierigen Menge umgeben. Es war ein gewöhnliches Pariser Mietshaus, dessen Fenster im vierten Stockwerk von außen kaum erreichbar schienen. Wir betraten das Zimmer, in dem die Morde geschehen waren, und Dupin untersuchte alles mit einer Präzision, die mich in Erstaunen versetzte. Er maß die Abstände der Möbel, prüfte die Verschlüsse der Fenster und untersuchte die blutigen Spuren auf den Tapeten, ohne ein einziges Wort zu sprechen.',
        japanese: '【第3章：犯行現場の検証と、目撃者たちの矛盾する証言】警視総監との個人的なコネを利用して、デュパンはモルグ街の事件現場を自ら検証する許可を勝ち取った。私たちはすぐに出発した。アパートの周囲は、沈黙した好奇の群衆に取り囲まれていた。それは変哲のないパリの賃貸アパートで、4階の窓は外から近づくのがおよそ不可能に見えた。私たちは殺人が行われた部屋に入り、デュパンは私を驚嘆させるほどの精密さですべてのものを調査した。彼は家具の間隔を測定し、窓の鍵の構造を調べ、壁紙に残された血痕を凝視した。その間、一言も言葉を発しなかった。'
      },
      {
        id: 8,
        german: 'Besonders aufmerksam lasen wir die Zeugenaussagen in den Zeitungen. Fünfzehn Personen waren verhört worden, und alle stimmten darin überein, dass die tiefe, raue Stimme einem Franzosen gehörte – man hatte Worte wie »mon Dieu« verstanden. Über die schrille, scharfe Stimme jedoch herrschte völlige Uneinigkeit. Ein italienischer Zeuge glaubte, es sei die Stimme eines Franzosen, verstand aber die Worte nicht. Ein englischer Zeuge meinte, es sei die Stimme eines Deutschen. Ein spanischer Zeuge war sicher, es sei ein Engländer gewesen. Ein französischer Zeuge hingegen behauptete fest, es habe sich um einen Italiener gehandelt, obwohl er die Sprache selbst nicht beherrschte. Das Seltsamste war, dass kein einziger Zeuge eine Sprache wiedererkannte, die er selbst sprach! Jeder hielt die unbestimmbare Stimme für die eines Ausländers.',
        japanese: '私たちは特に、新聞に掲載された目撃者たちの証言を注意深く読み込んだ。15人の人物が尋問され、彼らは全員、あの低い荒々しい声がフランス人のものであるという点で一致していた——「モン・デュー（おお、神よ）」といった言葉が聞き取れたからだ。しかし、あの甲高い鋭い声については、証言が完全に分裂していた。イタリア人の目撃者はフランス人の声だと思ったが言葉は理解できなかったと言い、イギリス人の目撃者はドイツ人の声だと言った。スペイン人の目撃者はイギリス人に違いないと主張し、一方でフランス人の目撃者は、自分自身はその言語を解さないにもかかわらず、イタリア人だったと断言した。最も奇妙なのは、誰一人として、自分が話せる言語としてその声を認識しなかったことだ！誰もがその正体不明の声を、外国人のものだと考えていたのだ。'
      },
      {
        id: 9,
        german: '»Siehst du«, flüsterte Dupin, als wir das Haus verließen und schweigend durch die Straßen gingen, »wie fruchtlos die Untersuchung der Polizei war? Sie haben sich auf das konzentriert, was die Zeugen zu wissen glaubten, statt das zu analysieren, was wirklich gesagt wurde. Keine der Aussagen ergibt einen Sinn, wenn man von einem menschlichen Täter ausgeht. Welche menschliche Stimme klingt für jeden Europäer wie die eines fremden Ausländers, dessen Sprache er nicht versteht, und weist doch keine artikulierten Worte auf? Zudem müssen wir uns fragen, wie der Mörder entkommen konnte, wenn die Tür und die Fenster von innen verschlossen waren.«',
        japanese: '「見なさい」と、アパートを後にして静かに通りを歩きながらデュパンは囁いた。「警察の捜査がいかに的外れであったかを。彼らは本当に語られた内容を分析する代わりに、目撃者が知っていると思い込んでいることだけに執着したのだ。犯人を人間だと仮定する限り、どの証言も整合しない。あらゆるヨーロッパ人にとって、自分の理解できない外国語のように響き、しかも明確な分節を持たない人間の声など存在するだろうか？さらに、扉も窓も内側から施錠されていた中で、犯人がどのようにして脱出したのかを考えなければならない。」'
      },
      // Kapitel IV
      {
        id: 10,
        german: '【Kapitel IV: Dupins brillante Deduktion und die Spur des Unmenschlichen】 Am Abend saßen wir wieder in unserer Bibliothek. Dupin hatte eine Reihe von Skizzen und Notizen vor sich ausgebreitet. Er blickte mich mit einem ernsten, fast feierlichen Ausdruck an. »Ich werde dir nun zeigen, mein Freund, wie sich die Teile dieses Puzzles zusammenfügen. Zuerst die Frage des Entkommens. Ich habe die Fenster im Zimmer untersucht. Eines von ihnen wies einen verborgenen Federmechanismus auf. Wenn man das Fenster von außen schloss, rastete die Feder automatisch ein. Der Mörder entkam also durch das Fenster, das hinter ihm zufiel und sich selbst verriegelte. Doch um dieses Fenster im vierten Stockwerk von außen zu erreichen, bedurfte es einer Agilität, die fast an das Übernatürliche grenzt. Es gibt einen Blitzableiter direkt neben dem Fenster, und die Fensterläden ließen sich flach an die Wand legen. Ein Wesen von erstaunlicher Leichtigkeit und Kraft konnte von der Stange zum Laden springen und sich hineinschwingen.«',
        japanese: '【第4章：デュパンの鮮やかな演繹と、人間ならざるものの痕跡】その夜、私たちは再び図書館の部屋に座っていた。デュパンはスケッチやメモを目の前に広げていた。彼は真剣で、ほとんど厳かな表情で私を見つめた。「友よ、このパズルの破片がどのように組み合わさるかを今から示そう。まず脱出のルートについてだ。私は部屋の窓を調べた。窓の一つに、隠されたバネ式のロック機構があった。外から窓を閉めると、バネが自動的に噛み合う仕組みだ。つまり、犯人は窓から脱出し、窓は彼の背後で閉まって自動的に施錠されたのだ。しかし、4階の窓に外から到達するには、ほとんど超自然的な敏捷性が必要となる。窓のすぐ脇には避雷針が通っており、鎧戸は壁に平らに折りたたむことができた。驚異的な軽さと身体能力を持つ生き物であれば、避雷針から鎧戸へと飛び移り、室内へと侵入することが可能だったはずだ。」'
      },
      {
        id: 11,
        german: 'Ich lauschte mit angehaltenem Atem. Dupin fuhr fort: »Nun betrachte die Zeugenberichte über die schrille Stimme. Sie war unbestimmbar, schrill und wies keine klaren Silben auf. Und nun betrachte die Grausamkeit der Tat. Das Hineinpressen des Körpers in den Schornstein mit dem Kopf nach unten erfordert eine Kraft, die kein normaler Mensch besitzt. Und was ist mit den Haaren, die aus der Kopfhaut gerissen wurden? Sieh dir dieses Haarbündel an, das ich vom Tatort mitgenommen habe.« Er reichte mir ein kleines Bündel rötlicher, rauer Haare. »Das sind keine menschlichen Haare, mein Freund! Und sieh dir diese Zeichnung der Wundmale am Hals des Opfers an.« Er zeigte mir eine Skizze der Blutergüsse an Camilles Hals. Ich verglich die Abdrücke mit meinen eigenen Händen und schauderte: Die Fingerglieder waren viel zu lang und der Abstand zwischen Daumen und Fingern war gigantisch.',
        japanese: '私は息をのんで耳を傾けた。デュパンは続けた。「次に、あの甲高い声に関する目撃証言を考えてみよう。それは正体不明で、耳障りで、明確な音節を持たなかった。さらに、犯行の残虐性だ。遺体を頭から煙突に詰め込むには、常人にはあり得ない怪力が必要だ。そして、頭皮からむしり取られた毛髪。現場から私が持ち帰った、この毛髪の束を見てごらん。」彼は私に、赤茶けた、ゴワゴワした毛の束を差し出した。「これは人間の髪の毛ではないよ、友よ！そして、犠牲者の首に残された傷跡の、このスケッチを見てほしい。」彼はカミーユの首の痣を写した図面を示した。私はその指の跡を自分の手と比較し、戦慄した。指関節があまりにも長すぎ、親指と他の指との間隔が途方もなく広かったのだ。'
      },
      {
        id: 12,
        german: '»Das ist der Abdruck einer Hand, die nicht menschlich ist!«, rief ich aus. »Es ist die Hand eines riesigen Orang-Utans!« – »Richtig«, antwortete Dupin. »Es ist ein Orang-Utan aus den ostindischen Inseln. Das erklärt die schrille Stimme, die brutale, sinnlose Gewalt, das Fehlen eines Raubmotivs und das Entkommen durch den Blitzableiter. Doch ein solches Tier handelt nicht allein; es muss einen Besitzer haben. Ein Matrose, der von einer Reise zurückgekehrt ist, hat das Tier vermutlich gefangen und mit nach Paris gebracht. Ich habe eine Anzeige in der heutigen Morgenzeitung aufgegeben, in der ich behaupte, einen entlaufenen Orang-Utan gefunden zu haben, und den Besitzer auffordere, ihn in unserem Haus abzuholen. Wenn meine Analyse korrekt ist, wird der Besitzer heute Nacht zu uns kommen.«',
        japanese: '「これは人間の手の跡ではない！」私は叫んだ。「巨大なオランウータンの手だ！」「その通りだ」とデュパンは答えた。「東インド諸島に生息する野生のオランウータンだ。これであの奇妙な声、残虐で無意味な暴力、強盗の動機の欠如、そして避雷針からの脱出のすべてが説明できる。しかし、そのような動物が単独で行動するはずがない。必ず所有者がいる。航海から帰国した水夫が、動物を捕獲してパリに連れ帰ったに違いない。私は今日の朝刊に、逃げ出したオランウータンを保護しているため、心当たりのある飼い主は我が家まで引き取りに来られたし、という広告を出した。私の分析が正しければ、その飼い主は今夜、ここへやってくるはずだ。」'
      },
      // Kapitel V
      {
        id: 13,
        german: '【Kapitel V: Die Beichte des Matrosen und das Rätsel gelöst】 Es war fast Mitternacht, als wir schwere Schritte auf der Treppe hörten. Dupin zog eine Pistole aus der Tasche und gab mir eine zweite. Er bedeutete mir, schweigend zu warten. Ein Klopfen ertönte, und auf Dupins Aufforderung trat ein großer, wettergebräunter Mann ein – unverkennbar ein Matrose. Er wirkte nervös und misstrauisch, doch die Aussicht, sein wertvolles Eigentum zurückzuerhalten, hatte ihn hergelockt. »Guten Abend«, sagte er auf Französisch. »Ich komme wegen des Orang-Utans. Er gehört mir.«',
        japanese: '【第5章：水夫の告白と、あまりにも奇妙な密室の真相】深夜近く、私たちは階段を上る重い足音を耳にした。デュパンはポケットからピストルを取り出し、私に予備の銃を渡した。彼は私に静かに待つよう合図した。ノックの音が響き、デュパンが促すと、背が高く陽に焼けた男が入ってきた——紛れもなく水夫だった。彼は神経質で警戒している様子だったが、高価な所有物を取り戻したい一心でやってきたのだ。「こんばんは」と彼はフランス語で言った。「オランウータンの件で来ました。あれは私のものです。」'
      },
      {
        id: 14,
        german: 'Dupin blickte ihn ruhig an. »Er ist ein prächtiges Tier, und ich beneide Sie darum. Er ist im Hinterhaus untergebracht. Aber sagen Sie mir, mein Freund: Sie müssen mir einige Einzelheiten über die Morde in der Rue Morgue berichten. Ich weiß, dass Sie unschuldig sind, aber Sie wissen, wer der Täter war.« Der Matrose erbleichte augenblicklich. Er sprang auf, griff nach der Tür, doch Dupin hob die Pistole und blockierte den Weg. »Setzen Sie sich«, sagte Dupin mit einer Stimme, die keinen Widerspruch duldete. »Wir wollen Ihnen nichts Böses. Aber die Gerechtigkeit verlangt, dass die Wahrheit ans Licht kommt. Berichten Sie uns, was in jener Nacht geschehen ist.«',
        japanese: 'デュパンは冷静に彼を見つめた。「実に見事な動物ですね、羨ましい限りだ。裏の小屋にいますよ。ところで友よ、モルグ街の殺人事件について、私に詳細を話していただきたい。あなたが無実であることは知っている。だが、誰が犯人であるかは知っているはずだ。」水夫は一瞬にして顔面蒼白になった。彼は跳ね起き、扉に向かって逃げようとしたが、デュパンはピストルを構えて行く手を塞いだ。「座りなさい」とデュパンは反論を許さない声で言った。「あなたを害するつもりはない。だが、正義は真実の隠蔽を許さない。あの夜、何が起きたのかを私たちに話しなさい。」'
      },
      {
        id: 15,
        german: 'Der Mann sank erschöpft auf seinen Stuhl zurück. Er verbarg sein Gesicht in den Händen und begann schließlich mit zitternder Stimme zu sprechen. Er hatte das Tier in Borneo gefangen. In Paris hielt er es in seiner Wohnung gefangen, doch eines Nachts brach der Orang-Utan aus seinem Käfig aus, entwendete ein Rasiermesser seines Herrn und floh durch das offene Fenster. Der Matrose, der das Tier mit einer Peitsche verfolgte, sah, wie der Affe im Schein des Mondes den Blitzableiter des Hauses in der Rue Morgue emporkletterte und durch das offene Fenster in das Zimmer der schlafenden Frauen eindrang. Der Matrose konnte durch das Fenster nur das Entsetzen beobachten, ohne eingreifen zu können.',
        japanese: '男は力尽きたように椅子に崩れ落ちた。彼は両手で顔を覆い、ついに震え声で話し始めた。彼はボルネオ島でその獣を捕獲したのだった。パリの自宅で檻に入れて飼育していたが、ある夜、オランウータンが檻を破壊して脱走し、主人のカミソリを盗み出すと、開いた窓から逃げ去った。鞭を手にして動物を追った水夫は、月明かりの中で、その大猿がモルグ街のアパートの避雷針をスルスルと登り、開いた窓から眠っている女性たちの部屋へ侵入するのを目撃した。水夫は窓の外から恐怖の光景を見守るしかなく、介入することはできなかった。'
      },
      {
        id: 16,
        german: 'Das Tier, das den schreienden Frauen die Kehle durchschnitt, hatte nur die Drohgebärden seines Herrn nachgeahmt. Als der Affe im Zorn der Schreie der Opfer gewahr wurde und das Gesicht des entsetzten Matrosen am Fenster sah, geriet er in Panik. Um seine Spuren zu verwischen, presste er den Körper der Tochter in den Kamin und warf die Mutter aus dem Fenster. Der schrille Schrei war die Stimme des rasenden Tieres gewesen, während die tiefe, raue Stimme der Matrose war, der verzweifelt von außen geflucht hatte. Nachdem der Matrose seine Beichte beendet hatte, brachte Dupin ihn zur Polizeistation. Der unschuldig verhaftete Verdächtige wurde sofort freigelassen, und der Orang-Utan wurde kurz darauf eingefangen und an den Jardin des Plantes verkauft. Das Rätsel der Rue Morgue war gelöst – gelöst durch die reine Kraft des Verstandes.',
        japanese: '悲鳴を上げる女性たちの喉をカミソリで切り裂いた獣は、ただ主人のカミソリを使う仕草を真似ていただけだった。大猿は犠牲者たちの絶叫に激昂し、窓の外に恐怖に震える主人の顔を見た瞬間、パニックに陥った。己の過ちを隠蔽しようとする本能から、大猿は娘の遺体を煙突に押し込み、母親の遺体を窓から投げ捨てたのだ。あの甲高い奇妙な悲鳴は猛り狂う獣の声であり、低い荒々しい声は外から絶望して罵声を浴びせていた水夫のものだった。水夫が告白を終えると、デュパンは彼を警察署へ同行した。誤って逮捕されていた容疑者は即座に釈放され、オランウータンはまもなく捕獲されて植物園（動物園）へと売却された。モルグ街の不可解な謎は——純粋なる知性の力によって、ここに解き明かされたのだ。'
      }
    ],
    vocabulary: [
      { german: 'die Deduktion', article: 'die', pos: 'Substantiv', japanese: '演繹、論理的導出' },
      { german: 'die Analytik', article: 'die', pos: 'Substantiv', japanese: '分析力、解析学' },
      { german: 'stupend', pos: 'Adjektiv', japanese: '驚異的な、驚くべき' },
      { german: 'der Tatort', article: 'der', pos: 'Substantiv', japanese: '犯行現場' },
      { german: 'die Widersprüchlichkeit', article: 'die', pos: 'Substantiv', japanese: '矛盾、不一致' },
      { german: 'die Agilität', article: 'die', pos: 'Substantiv', japanese: '敏捷性、身軽さ' },
      { german: 'der Rasiermesser', article: 'der', pos: 'Substantiv', japanese: '西洋カミソリ' }
    ],
    culturalNote: {
      title: '現代ミステリーの始祖',
      content: '本作は、推理小説（ディテクティブ・フィクション）の歴史における最初の作品とされています。「風変わりで天才的な素人探偵」「語り手である平凡な友人」「警察の無能さと対比される論理的推理」「意外な犯人」など、コナン・ドイルのシャーロック・ホームズへと引き継がれる基本プロットのすべてが、この一作に内包されています。'
    }
  },
  {
    id: 'poe-fass-amontillado',
    level: 'B2',
    title: 'Das Fass Amontillado',
    titleJa: 'アモンティリャードの酒樽（エドガー・アラン・ポー・長編完全版）',
    subtitle: 'Eine eiskalte Rachegeschichte im bunten Treiben des Karnevals',
    subtitleJa: '全5章・約1,580語。カーニバルの喧騒の影で執行される、恐怖の冷徹な一族地下墓地復讐劇',
    genre: 'Mystery',
    genreJa: '復讐サスペンス',
    wordCount: 1580,
    readingTimeMinutes: 14,
    image: '/images/story_buergeramt_coffee_1791322052585.jpg', // Classy dark stone vaults aesthetic
    summaryJa: '【長編・全5章】エドガー・アラン・ポーの短編の中でも、最も冷酷で計算され尽くした復讐劇。主人公モントレゾールは、長年にわたり自分を侮辱し続けた傲慢な貴族フォートゥナートに対し、完璧な復讐を誓う。舞台はイタリアのカーニバル。泥酔し道化師の衣装をまとったフォートゥナートを、幻の極上ワイン「アモンティリャード（Amontillado）」の存在をエサにして、ジメジメとしたモントレゾール家の広大な地下墓地へと誘い出す。硝石の結晶が垂れ下がる不気味な地下の迷宮を、言葉巧みにさらに奥深くへと導く。そこには、ただ一本の鎖と、隠されたレンガ、そして冷徹な職人のような手つきが待っていた。人間の執念の恐ろしさを淡々と描きだすサスペンス長編。',
    paragraphs: [
      // Kapitel I
      {
        id: 1,
        german: '【Kapitel I: Die tausendfachen Verletzungen und der Plan der Vergeltung】 Die tausendfachen Verletzungen, die Fortunato mir zugefügt hatte, ertrug ich, so gut ich konnte. Doch als er es wagte, mich zu beleidigen, schwor ich Rache. Ihr, die ihr das Wesen meiner Seele so gut kennt, werdet jedoch nicht glauben, dass ich meine Rache durch ein unbedachtes Wort oder eine voreilige Tat gefährdete. Ich musste nicht nur strafen, sondern strafen, ohne selbst Schaden zu nehmen. Ein Unrecht wird nicht gesühnt, wenn die Vergeltung den Rächer trifft. Ebenso wenig ist es gesühnt, wenn der Rächer es versäumt, sich demjenigen, der das Unrecht beging, als solcher zu erkennen zu geben.',
        japanese: '【第1章：積年にわたる侮辱と、完璧なる復讐プラン】フォートゥナートが私に加えた何千もの不当な仕打ちに対して、私はできる限り耐え忍んできた。しかし、彼が私を侮辱するに至ったとき、私は復讐を誓った。私の魂の本質をよく知る諸君ならば、私が軽率な言葉や性急な行動によって、その復讐を台無しにするような愚は犯さなかったと信じてくれるだろう。私はただ罰するだけでなく、自らが傷つくことなしに罰しなければならなかった。復讐の刃が復讐者自身に跳ね返るようでは、不義が正されたとは言えない。同様に、復讐者が復讐を行っていることを、不義を犯した当人に認識させることができなければ、それもまた不義が正されたとは言えないのだ。'
      },
      {
        id: 2,
        german: 'Es muss verstanden werden, dass ich Fortunato weder durch Wort noch durch Tat einen Grund gab, an meinem Wohlwollen zu zweifeln. Ich fuhr fort, ihn wie gewohnt anzulächeln, und er ahnte nicht, dass mein Lächeln nun der Vorstellung seiner bevorstehenden Vernichtung galt. Fortunato hatte eine Schwachstelle, obwohl er in jeder Hinsicht ein Mann war, den man achten und fürchten musste. Er war stolz auf seine Kennerschaft in Weinen. Nur wenige Italiener besitzen den wahren Geist des Kenners. Meistens ist ihre Begeisterung nur eine Maske, um reichen Ausländern betrügerische Angebote zu machen. In bezug auf alte Weine jedoch war Fortunato aufrichtig. In dieser Hinsicht unterschied ich mich nicht wesentlich von ihm; ich war selbst geschickt im Ankauf italienischer Jahrgänge und versäumte keine Gelegenheit, wertvolle Fässer zu erwerben.',
        japanese: '私はフォートゥナートに対し、言葉でも行動でも、私の好意を疑わせるような隙を一切与えなかったことを理解してほしい。私はこれまで通り、彼に対して微笑みかけ続けた。そして彼は、私の微笑みが今や彼の差し迫った破滅の想像に向けられていることなど、微塵も気づいていなかった。フォートゥナートには、あらゆる点で尊敬され恐れられるべき男であったにもかかわらず、致命的な弱点があった。彼はワインの鑑定眼に対して異常なプライドを持っていたのだ。真の鑑定の精神を持つイタリア人はごくわずかである。大抵の場合、彼らの熱意は裕福な外国人に偽物を売りつけるための仮面に過ぎない。しかし、古いワインに関してだけは、フォートゥナートは本物だった。この点において、私は彼と大きく違わなかった。私自身、イタリア産ヴィンテージの買い付けに長けており、価値ある樽を手に入れる機会を逃さなかった。'
      },
      // Kapitel II
      {
        id: 3,
        german: '【Kapitel II: Das Treffen im Karneval und der Lockvogel】 Es war gegen Abend in der Dämmerung eines Tages während des Karnevals, als ich meinem Freund Fortunato begegnete. Er begrüßte mich mit übertriebener Herzlichkeit, denn er hatte bereits viel getrunken. Er trug ein buntes Narrenkostüm, sein Kopf war mit einer Schellenkappe bedeckt. Ich war so erfreut, ihn zu sehen, dass ich seine Hand fast nicht mehr losließ. Ich sagte zu ihm: »Mein lieber Fortunato, was für ein glücklicher Zufall! Ich habe heute ein Fass erhalten, das man mir als Amontillado verkauft hat. Aber ich habe meine Zweifel, ob es ein echter Amontillado ist, und ich war unvorsichtig genug, den vollen Preis zu bezahlen, ohne dich um Rat zu fragen. Da du nicht zu finden warst und ich meinen Kauf nicht gefährden wollte, habe ich voreilig gehandelt.«',
        japanese: '【第2章：カーニバルの夜の遭遇と、アモンティリャードの罠】カーニバルの喧騒が最高潮に達したある日の夕暮れ時、私は友人フォートゥナートに遭遇した。彼はすでにかなりの酒を飲んでいたため、誇張された親密さで私を歓迎した。彼は色鮮やかな道化師の衣装を身にまとい、頭には鈴のついた帽子をかぶっていた。私は彼に会えたことがあまりにも嬉しくて、その手を何度も握りしめた。私は彼に言った。「親愛なるフォートゥナート、なんという奇妙な偶然だろう！実は今日、アモンティリャードとして売り出された一樽を手に入れたのだ。しかし、それが本物のアモンティリャードかどうか疑わしくてね。君に相談する前に、うかつにも全額を支払ってしまったのだ。君が見つからず、買い取りのチャンスを逃したくなかったものだから、軽率に動いてしまった。」'
      },
      {
        id: 4,
        german: '»Amontillado?«, rief er aus. »Ein Fass? Unmöglich! Mitten im Karneval!« – »Ich habe meine Zweifel«, antwortete ich, »und ich wollte dich nicht belästigen. Ich bin auf dem Weg zu Luchresi. Wenn jemand einen klaren Verstand in bezug auf Weine besitzt, dann er. Er wird es mir sagen.« – »Luchresi?«, spottete Fortunato. »Luchresi kann Amontillado nicht von Sherry unterscheiden!« – »Und doch behaupten viele, dass sein Geschmack dem deinen ebenbürtig sei«, entgegnete ich. »Komm, lass uns gehen!« – »Wohin?« – »In meine Kellergewölbe.« – »Nein, mein Freund, ich will deine Güte nicht missbrauchen. Du hast einen schweren Husten, und meine Gewölbe sind feucht und von Nitrat bedeckt.« – »Das Nitrat ist mir gleichgültig«, rief Fortunato. »Lass uns gehen! Luchresi versteht nichts davon!«',
        japanese: '「アモンティリャードだと？」彼は叫んだ。「一樽丸ごと？あり得ん！このカーニバルの真っ只中に！」「私も半信半疑なのだ」と私は答えた。「だが君を煩わせたくはない。私はこれからルクレジのところへ行くつもりだ。彼ならワインに関して明晰な頭脳を持っているから、教えてくれるだろう。」「ルクレジだと？」フォートゥナートは嘲笑した。「あ奴はアモンティリャードとシェリーの区別すらつかん！」「だが、多くの者は彼の味覚が君に匹敵すると言っている」私は言った。「さあ、行こう！」「どこへ？」「我が一族の地下貯蔵庫へ。」「いや、友よ、君の好意に甘えるわけにはいかない。君はひどい咳をしているし、私の地下室は湿気が多く、硝石（ニトラート）に覆われている。」「硝石など構うものか！」フォートゥナートは叫んだ。「さあ行くぞ！ルクレジなど何もわかっておらん！」'
      },
      // Kapitel III
      {
        id: 5,
        german: '【Kapitel III: Hinab in die feuchten Katakomben der Montresors】 Er ergriff meinen Arm, setzte eine Maske aus schwarzer Seide auf und zog mich hastig zu meinem Palast. Es befanden sich keine Diener im Haus; ich hatte ihnen befohlen, nicht vor dem Morgen zurückzukehren, wohl wissend, dass dieser Befehl sie sofort dazu veranlassen würde, das Haus für das Fest zu verlassen. Ich nahm zwei Fackeln aus ihren Halterungen, reichte Fortunato eine und bat ihn, mir durch die endlosen Räume hinab zur Treppe der Katakomben zu folgen. Wir stiegen eine lange, gewundene Treppe hinab, bis wir den feuchten Boden der Gruft der Montresors erreichten. Die Luft war kalt und schwer, und die Fackeln brannten nur mit mühem Schein.',
        japanese: '【第3章：モントレゾール家の湿った地下墓地への下降】彼は私の腕を掴み、黒い絹のマスクを顔に当てると、私を急き立てて我が屋敷へと向かった。屋敷内には使用人が一人もいなかった。私は彼らに翌朝まで戻るなと厳命しておいたのだ。そう言っておけば、彼らが即座に祭りのために家を留守にすることを見抜いていたからだ。私は壁のホルダーから2本の松明を取り出し、1本をフォートゥナートに渡すと、果てしない部屋を通り抜けて地下墓地へと続く階段までついてくるよう促した。私たちは長くて曲がりくねった階段を降り、ついにモントレゾール家の湿った地下の床へと到達した。空気は冷たく重く、松明はかろうじて薄暗い光を放つのみだった。'
      },
      {
        id: 6,
        german: 'Der Gang war von den Gebeinen unserer Vorfahren gesäumt, die sich in Nischen bis zur Decke stapelten. Dazwischen befanden sich riesige Weinfässer und Flaschen in langen Reihen. Fortunato ging mit unsicherem Schritt, die Schellen an seiner Kappe erklangen bei jeder Bewegung. Er hustete heftig, und der Ton hallte unheimlich von den feuchten Wänden wider. »Das Nitrat!«, sagte er schließlich keuchend. »Sieh nur, wie es an den Wänden wächst!« – »Ja«, antwortete ich. »Es ist weißer Gips, der von der Feuchtigkeit nährt. Wir befinden uns unter dem Bett des Flusses. Komm, wir wollen umkehren, bevor dein Husten schlimmer wird. Deine Gesundheit ist kostbar. Du bist reich, geehrt und geliebt; man würde dich vermissen. Für mich ist es anders. Lass uns umkehren!« – »Nein«, rief er ungeduldig. »Der Husten ist nichts; er wird mich nicht töten. Ein Schluck Wein wird uns wärmen.«',
        japanese: '通路の壁には、天井まで届くほどの高さに先祖たちの骨が積み重ねられていた。その合間には、巨大なワイン樽やボトルが長い列をなして置かれていた。フォートゥナートは不安定な足取りで歩き、彼の帽子の鈴が動くたびにチリンと不気味に鳴り響いた。彼は激しく咳き込み、その音が湿った壁に反射して不気味にこだました。「硝石だ！」と彼はついに息を切らしながら言った。「壁にびっしりとこびりついているのを見てみろ！」「そうだ」私は答えた。「湿気から生じる白い結晶だ。私たちは川の底の下を歩いているのだ。さあ、咳が悪化する前に引き返そう。君の健康は貴重だ。君は富もあり、尊敬され、愛されている。失われれば皆が悲しむ。私は君とは違う。引き返そう！」「いや」彼は苛立たしげに叫んだ。「咳など大したことはない。これで死ぬことはない。ワインを一口飲めば温まるさ。」'
      },
      // Kapitel IV
      {
        id: 7,
        german: '【Kapitel IV: Das Husten und die makabren Nischen des Todes】 Ich reichte ihm eine Flasche eines schweren französischen Medocs, die ich von einem der Regale nahm. Er schlug den Hals der Flasche ab, hob sie an die Lippen und trank sie in einem einzigen Zug aus. Seine Augen blitzten mit unnatürlichem Glanz, und er lachte laut, während die Schellen klangen. Er machte eine seltsame Geste mit der Hand – eine Bewegung, die ich nicht verstand. »Du verstehst das Zeichen nicht?«, fragte er überrascht. »Du bist nicht von der Bruderschaft?« – »Welche Bruderschaft?« – »Der Freimaurer!« – »Doch«, antwortete ich, »ich bin ein Maurer!« – »Unmöglich! Ein Maurer? Zeige mir das Zeichen!« – »Hier ist es«, sagte ich und zog eine Kelle aus den Falten meines schweren Mantels. Er trat erstaunt zurück, lachte jedoch bald wieder: »Du scherzt! Aber lass uns zum Amontillado gehen!«',
        japanese: '【第4章：激しい咳き込みと、骸骨に囲まれた不気味な壁穴】私は棚から取り出した重厚なフランス産メドックのボトルを彼に手渡した。彼はボトルの首を叩き割り、唇に運ぶと、一気に飲み干した。彼の目は不自然な光を放ち、鈴の音を響かせながら大声で笑った。そして、彼は手で奇妙なジェスチャーをして見せた——私には理解できない動きだった。「このサインがわからないのか？」彼は驚いて尋ねた。「君は『同胞（ブラザー）』ではないのか？」「何の同胞だ？」「フリーメイソン（石工職人）だよ！」「いや」私は答えた。「私は石工（マウラー）だ！」「まさか！君が石工だと？ならば証拠を見せてみろ！」「これだ」私は言い、重いマントのひだからコテ（左官ゴテ）を取り出して見せた。彼は驚いて後退したが、すぐにまた笑い出した。「冗談が上手いな！だが、アモンティリャードのところへ急ごう！」'
      },
      {
        id: 8,
        german: 'Wir setzten unseren Weg fort, tiefer und tiefer in die Eingeweide der Erde. Wir passierten eine Reihe von niedrigen Bögen, stiegen hinab und erreichten schließlich eine tiefe Nische, die am Ende eines besonders feuchten Ganges lag. Die drei Wände dieser Nische waren mit den Gebeinen der Toten bedeckt, die in der Manier der großen Katakomben von Paris aufgestapelt waren. Die vierte Wand war jedoch frei, da die Knochen davor auf den Boden geworfen worden waren und einen großen Haufen bildeten. In dieser freien Wand befand sich eine kleinere, dunkle Nische, kaum einen Meter breit und zwei Meter hoch. Sie schien ohne jeden Zweck in den dicken Ziegeln ausgespart worden zu sein. Fortunato trat mit wankendem Schritt hinein, in der Hoffnung, dort das Fass Amontillado zu finden. Sobald er das Ende der Nische erreichte, blockierte ich den Ausgang.',
        japanese: '私たちは歩みを進め、大地の内臓のさらに奥深くへと侵入していった。いくつかの低いアーチをくぐり、階段を降りて、ついに特に湿った通路の突き当たりにある、深い壁穴へと到達した。この壁穴の三方の壁には、パリの巨大地下墓地に見られるような様式で、死者の骨がうず高く積み上げられていた。しかし四方目の壁は露出していた。そこにあった骨はすべて床に取り外され、山のように積み重ねられていたからだ。その露出した壁の奥に、幅1メートル、高さ2メートルほどの、さらに小さな暗い空洞があった。極めて厚いレンガの壁の中に、何の目的もなくくり抜かれたかのような空間だった。フォートゥナートは、そこにアモンティリャードの樽があると思い込み、よろめく足取りで中に入っていった。彼が空洞の突き当たりに達した瞬間、私は出口を塞いだ。'
      },
      // Kapitel V
      {
        id: 9,
        german: '【Kapitel V: Die letzte Nische und die fünfzig Jahre des Schweigens】 Mit erstaunlicher Schnelligkeit, die Fortunato in seiner Trunkenheit nicht bemerkte, legte ich eine schwere eiserne Kette um seine Taille und verriegelte das Vorhängeschloss. In der Wand befanden sich zwei eiserne Klammern, die für diesen Zweck vorbereitet worden waren. Er war nun gefangen. Er war so betäubt von dem schnellen Zugriff, dass er keinen Widerstand leistete. Ich zog mich aus der Nische zurück und begann sofort, die Öffnung mit Ziegeln und Gips zuzumauern, die ich zuvor unter dem Knochenhaufen verborgen hatte. Ich hatte die erste Reihe der Ziegel fast vollendet, als ich das erste Mal ein leises, wimmerndes Stöhnen aus der Tiefe der Nische vernahm. Es war nicht die Stimme eines betrunkenen Mannes, sondern der Laut des nackten Entsetzens. Dann folgte eine lange, schreckliche Stille.',
        japanese: '【第5章：最後のレンガと、五十年間にわたる永遠の沈黙】フォートゥナートが泥酔して気づかないうちに、私は驚くべき俊敏さで彼の腰に重い鉄の鎖を巻き付け、南京錠をかけた。壁にはあらかじめ、この目的のために2本の鉄のクランプが打ち込まれていたのだ。彼は囚われの身となった。あまりにも迅速な制圧に呆然とし、彼は抵抗することすらしなかった。私は空洞から身を引き、骨の山の陰にあらかじめ隠しておいたレンガと漆喰を取り出して、開口部を塞ぐ壁を築き始めた。最初の1段をほとんど積み終えたとき、私は空洞の奥底から、かすかな、すすり泣くような呻き声を耳にした。それはもはや酔っ払いの声ではなく、剥き出しの恐怖の呻きだった。それから、長くて恐ろしい沈黙が続いた。'
      },
      {
        id: 10,
        german: 'Ich setzte meine Arbeit fort. Ich legte die zweite, die dritte und die vierte Reihe. Die Mauer wuchs langsam. Als ich die siebte Reihe vollendet hatte, wurde die Stille plötzlich durch ein wildes, gellendes Lachen aus der Nische unterbrochen, das mir das Blut in den Adern gefrieren ließ. Fortunato schien zu glauben, dass es sich um einen grausamen Scherz handele. »Ha! Ha! Ha!«, lachte er mit schwacher Stimme. »Ein hervorragender Scherz, mein lieber Montresor! Wie wir im Palast darüber lachen werden! Aber ist es nicht Zeit, zurückzukehren? Die Gräfin und unsere Gäste werden auf uns warten.« – »Ja«, antwortete ich, »lasst uns gehen!« – »Um des Himmels willen, Montresor!« – »Ja«, sagte ich, »um des Himmels willen!« Ich wartete auf eine Antwort, doch es blieb still. Ich rief laut: »Fortunato!« Keine Antwort. Ich führte meine Fackel durch die letzte verbliebene Öffnung. Nur das leise Klingen der Schellen an seiner Kappe antwortete mir.',
        japanese: '私は作業を続けた。2段、3段、4段とレンガを積んでいく。壁はゆっくりと高くなった。7段目を終えたとき、突然、空洞の奥から響き渡った狂気じみた甲高い笑い声によって、静寂が破られた。私の血管の血が凍りつくような声だった。フォートゥナートは、これを悪趣味な冗談だと思い込もうとしているようだった。「ハ！ハ！ハ！」と彼は弱々しい声で笑った。「実に見事な冗談だ、親愛なるモントレゾール！屋敷に戻ってから、皆でどれほど笑うことか！だが、もう戻る時間ではないかね？伯爵夫人やゲストたちが私たちを待っている。」「そうだ」私は答えた。「戻ろう！」「神のために、モントレゾール！」「そうだ」私は言った。「神のために！」私は返答を待ったが、静寂だけが返ってきた。私は大声で叫んだ。「フォートゥナート！」応答はない。私は最後の隙間に松明を差し入れて中を覗いた。ただ、彼の帽子の鈴がチリンと微かに鳴る音だけが、私に応えた。'
      },
      {
        id: 11,
        german: 'Mein Herz wurde schwer – vermutlich wegen der Feuchtigkeit der Katakomben. Ich fügte den letzten Ziegel ein und verputzte die Wand mit Gips. Vor der neuen Mauer errichtete ich den alten Knochenhaufen wieder, der seitdem ungestört geblieben ist. Ein halbes Jahrhundert ist vergangen, und kein Sterblicher hat die Gebeine Fortunatos berührt. Möge er in Frieden ruhen! In pace requiescat!',
        japanese: '私の胸は重くなった——おそらく地下墓地の湿気のせいだろう。私は最後のレンガをはめ込み、漆喰で壁を完全に塞いだ。そして新しく築いた壁の前に、かつての骨の山を再び積み直した。それ以来、その骨の山は誰にも乱されていない。半世紀が経過したが、誰一人としてフォートゥナートの遺骨に触れた者はいない。彼が安らかに眠らんことを！イン・パーチェ・レクイエスカト！'
      }
    ],
    vocabulary: [
      { german: 'die Vergeltung', article: 'die', pos: 'Substantiv', japanese: '報復、復讐' },
      { german: 'die Katakombe', article: 'die', pos: 'Substantiv', japanese: '地下墓地、カタコンベ' },
      { german: 'die Kennerschaft', article: 'die', pos: 'Substantiv', japanese: '鑑定眼、専門知識' },
      { german: 'die Kelle', article: 'die', pos: 'Substantiv', japanese: 'コテ（左官道具）' },
      { german: 'das Vorhängeschloss', article: 'das', pos: 'Substantiv', japanese: '南京錠' },
      { german: 'sühnen', pos: 'Verb', japanese: '（罪を）償う、贖う' },
      { german: 'das Nitrat', article: 'das', pos: 'Substantiv', japanese: '硝石' }
    ],
    culturalNote: {
      title: 'イン・パーチェ・レクイエスカト（安らかに眠れ）',
      content: 'ラテン語の「In pace requiescat」は、キリスト教の伝統的な追悼の祈り（R.I.P.）ですが、本編においては復讐を完璧に成し遂げた主人公モントレゾールが、50年間の完全犯罪を確信し、冷酷で皮肉に満ちた勝利宣言として放つ結びの言葉となっています。'
    }
  },
  {
    id: 'poe-verraeterische-herz',
    level: 'C1',
    title: 'Das verräterische Herz',
    titleJa: '心臓の告白（エドガー・アラン・ポー・長編完全版）',
    subtitle: 'Die nervenaufreibende Sezierkunst des Wahnsinns und des pochenden Gewissens',
    subtitleJa: '全5章・約1,520語。研ぎ澄まされた聴覚が引き起こす恐怖と、地下から響き続ける幻の鼓動',
    genre: 'Mystery',
    genreJa: 'サイコ・サスペンス',
    wordCount: 1520,
    readingTimeMinutes: 13,
    image: '/images/story_buergeramt_coffee_1791322005511.jpg', // Utilizing matching dark moody asset
    summaryJa: '【長編・全5章】人間の狂気と、罪悪感から生じる心理的恐怖を極限まで描き出した傑作。「私は狂ってなどいない！」と叫ぶ語り手。彼は同居する心優しい老人の「青いハゲワシのような目」に耐えかね、老人の殺害を計画する。深夜、漆黒の寝室で、きっかり一時間かけて、一筋の細い光を老人の目に浴びせ続ける執拗な狂気。第八の夜、ついに老人の心臓が放つ「時計を綿で包んだような」不気味な鼓動を聴き、犯行へと踏み切る。完璧に解体され、床板の下に隠された遺体。翌朝、近隣の通報で訪れた警察官たちに対し、完璧な自信で歓待する語り手だったが、彼の研ぎ澄まされた耳に、再びあの「鼓動」が聞こえ始める。狂気と理性の境界を描くサスペンス長編。',
    paragraphs: [
      // Kapitel I
      {
        id: 1,
        german: '【Kapitel I: Ich bin nicht wahnsinnig – das blaue Geierauge】 Wahrhaftig! Ich bin nervös gewesen – sehr, sehr schrecklich nervös, und ich bin es noch. Aber warum wollt ihr behaupten, dass ich wahnsinnig bin? Die Krankheit hat meine Sinne nicht zerstört, nicht stumpf gemacht, sondern sie geschärft, sie feiner und empfindlicher gemacht. Vor allem war mein Gehör wunderbar scharf geworden. Ich hörte alles im Himmel und auf der Erde. Ich hörte vieles in der Hölle. Wie also sollte ich wahnsinnig sein? Hört zu! Und beobachtet, wie gesund, wie ruhig ich euch diese ganze Geschichte erzählen kann. Es ist unmöglich zu sagen, wie der Gedanke zuerst in meinen Kopf eintrat, aber als er einmal da war, ließ er mich weder Tag noch Nacht in Ruhe. Es gab kein Motiv. Es gab keine Leidenschaft. Ich liebte den alten Mann. Er hatte mir nie ein Unrecht getan. Er hatte mich nie beleidigt. Nach seinem Gold hatte ich kein Verlangen.',
        japanese: '【第1章：私は狂ってなどいない——老人の不気味なハゲワシの目】本当だ！私は神経質だった——それはもう、恐ろしいほどに神経質だった。そして今でもそうだ。だが、なぜ君たちは私のことを狂っていると言いたがるのだ？病気は私の感覚を破壊しなかったし、鈍らせもしなかった。それどころか、感覚を研ぎ澄まし、より鋭敏に、敏感にしたのだ。何よりも、私の聴覚は驚くほど鋭くなっていた。私は天上のすべての音、地上のすべての音を聴いた。地獄の多くの音さえも聴いた。それなのに、どうして私が狂っているなどと言えようか？よく聴くがいい！そして、私がどれほど健全に、どれほど冷静に、この物語の一部始終を君たちに語ることができるかを観察してほしい。その考えが、最初にどのようにして私の頭に入り込んだのかを説明するのは不可能だが、一度入り込むと、昼も夜も私を解放してはくれなかった。動機はなかった。情熱（怒り）もなかった。私はその老人を愛していた。彼は私に不当な仕打ちを一度もしたことがなかった。私を侮辱したこともなかった。彼の金に対する欲もなかった。'
      },
      {
        id: 2,
        german: 'Ich glaube, es war sein Auge! Ja, das war es! Er hatte das Auge eines Geiers – ein blasses, blaues Auge mit einem unheimlichen Schleier darüber. Wann immer dieses Auge auf mich fiel, fror mir das Blut in den Adern. Und so fasste ich langsam den Entschluss, dem alten Mann das Leben zu nehmen und mich dadurch für immer von dem Auge zu befreien. Nun, das ist der Punkt. Ihr haltet mich für wahnsinnig. Aber Wahnsinnige verstehen nichts von kluger Planung. Wenn ihr mich nur hättet beobachten können! Mit welcher Vorsicht, mit welcher Voraussicht, mit welcher Verstellung ich an die Arbeit ging! Ich war nie freundlicher zu dem alten Mann als in der ganzen Woche, bevor ich ihn tötete.',
        japanese: '私は、それは老人の「目」のせいだったと思う！そうだ、それだ！彼はハゲワシのような目をしていた——薄青い、その上に不気味な膜がかかった目だ。その目が私に向けられるたびに、私の血管の血は凍りついた。そうして私はゆっくりと、老人の命を奪い、あの目から永遠に解放される決意を固めたのだ。さあ、ここが重要な点だ。君たちは私のことを狂っていると思っている。しかし、狂人にこれほど賢密な計画が立てられるだろうか。もし君たちが私の行動を観察できていたなら！私がどれほどの慎重さ、どれほどの予見、どれほどの偽装を持って仕事に取り掛かったか！私は老人を殺害する前の丸一週間、それまでになく彼に対して親切に接していたのだ。'
      },
      // Kapitel II
      {
        id: 3,
        german: '【Kapitel II: Die sieben Nächte des lautlosen Wartens】 Und in jeder Nacht, um Mitternacht, drehte ich den Schlüssel der Zimmertür des alten Mannes um und öffnete sie – oh, so leise! Und dann, wenn die Spalte breit genug für meinen Kopf war, schob ich eine dunkle Laterne hinein, die völlig geschlossen war, so dass kein Lichtstrahl herausdrang, und dann steckte ich meinen Kopf hinein. Oh, ihr hättet lachen müssen, wenn ihr gesehen hättet, wie klug ich meinen Kopf hineinschob! Ich bewegte ihn langsam, sehr, sehr langsam, um den Schlaf des alten Mannes nicht zu stören. Es dauerte eine Stunde, bis ich meinen ganzen Kopf so weit durch die Öffnung geschoben hatte, dass ich ihn auf seinem Bett liegen sehen konnte. Würde ein Wahnsinniger so klug gehandelt haben?',
        japanese: '【第2章：深夜に繰り広げられた、静寂の中の観察】そして毎夜、真夜中になると、私は老人の部屋の鍵を回し、扉を開けた——おお、この上なく静かに！そして、頭が入るだけの隙間ができると、私は光が一切漏れないように完全に閉じた暗灯を差し入れ、それから自分の頭を中に滑り込ませた。おお、私がどれほど賢く頭を差し入れたかを見たら、君たちは笑い出したに違いない！老人の眠りを妨げないよう、私はゆっくりと、本当に、本当にゆっくりと頭を動かした。頭を完全に差し入れ、彼がベッドに横たわっているのを確認できるまでに、丸一時間もかけたのだ。狂人にこれほど賢い行動ができるだろうか？'
      },
      {
        id: 4,
        german: 'Und dann, wenn mein Kopf ganz im Zimmer war, öffnete ich die Laterne ein wenig – oh, so vorsichtig, so vorsichtig! – denn die Scharniere knarrten. Ich öffnete sie gerade so weit, dass ein einziger, haardünner Lichtstrahl auf das Geierauge fiel. Und dies tat ich sieben lange Nächte lang – jede Nacht genau um Mitternacht –, aber ich fand das Auge immer geschlossen. Und so war es mir unmöglich, die Tat zu vollbringen; denn es war nicht der alte Mann, der mich quälte, sondern sein böses Auge. Und an jedem Morgen, als der Tag graute, ging ich kühn in sein Zimmer, sprach freundlich mit ihm, rief ihn bei seinem Namen und fragte ihn, wie er die Nacht verbracht habe. Er musste ein sehr kluger alter Mann gewesen sein, wenn er geahnt hätte, dass ich jede Nacht, genau um Mitternacht, ihn im Schlaf beobachtete.',
        japanese: 'そして、頭が部屋に入りきると、私は暗灯の蓋を少しだけ開けた——おお、極めて慎重に、慎重に！蝶番がギィと鳴るかもしれないからだ。私は、ハゲワシの目の上に、髪の毛ほどの細さの光が一筋だけ落ちるように、蓋をほんの少しだけ開けたのだ。そしてこれを、丸7日間の夜、毎夜毎夜、ぴったり真夜中に行った——しかし、その目はいつも閉じられていた。だから、私には凶行に及ぶことができなかった。私を苦しめていたのは老人自身ではなく、あの邪悪な目だったからだ。そして毎朝、夜が明けると、私は平然と彼の部屋に入り、親しげに話しかけ、彼の名を呼び、昨夜はよく眠れたかねと尋ねた。私が毎夜、ぴったり真夜中に、眠っている彼を観察していたことなど、彼が夢想だにしていなかったとすれば、彼はよほどおめでたい老人だったに違いない。'
      },
      // Kapitel III
      {
        id: 5,
        german: '【Kapitel III: Die achte Nacht und das dumpfe Klopfen】 In der achten Nacht war ich noch vorsichtiger beim Öffnen der Tür. Der Minutenzeiger einer Uhr bewegt sich schneller, als meine Hand sich in jener Nacht bewegte. Nie zuvor hatte ich die Macht meines eigenen Verstandes, meiner eigenen Klugheit so stark empfunden. Ich konnte mein Gefühl des Triumphs kaum zurückhalten. Zu denken, dass ich dort war und die Tür öffnete, während er nicht einmal von meinen geheimen Gedanken träumte! Ich drehte den Griff, und meine Hand rutschte ab. Der alte Mann schreckte im Bett auf und rief: »Wer ist da?« Ich hielt mich völlig still und sprach kein Wort. Eine ganze Stunde lang bewegte ich keinen Muskel, und während dieser Zeit hörte ich ihn nicht wieder hinlegen. Er saß aufrecht im Bett und lauschte – ganz so, wie ich es nächtelang getan hatte, wenn ich den Totenwinden in den Wänden lauschte.',
        japanese: '【第3章：運命の第八の夜と、闇夜に鼓動し始めた心音】第八の夜、私は扉を開ける際に、それまで以上に慎重を期した。時計の分針でさえ、あの夜の私の手の動きよりは速く動いていただろう。私はかつてこれほど、己の知性と知略の力を強く実感したことはなかった。勝利の快感を抑えるのが困難なほどだった。彼が私の密かな企みなど夢にも思っていない間に、私がそこに立ち、扉を開けているのだと考えるだけで！私がドアノブを回したとき、手が滑ってかすかな音がした。老人はベッドの上で跳ね起き、「誰だ？」と叫んだ。私は完全に静止し、一言も発しなかった。丸一時間の間、私は筋肉をピクリとも動かさず、その間、彼が再び横になる音を耳にすることはなかった。彼はベッドの上にまっすぐ座り、耳を澄ましていたのだ——私が幾夜も壁の中の死虫（時計虫）の音に耳を澄ませていたように。'
      },
      {
        id: 6,
        german: 'Da vernahm ich ein leises, wimmerndes Stöhnen, und ich wusste, dass es der Laut des nackten Entsetzens war. Es war nicht der Schmerz oder die Trauer, sondern der dumpfe, schreckliche Ton, der aus der Tiefe einer von Angst überwältigten Seele emporsteigt. Ich kannte diesen Ton gut. Viele Nächte, genau um Mitternacht, wenn die ganze Welt schlief, war er aus meiner eigenen Brust emporgestiegen und hatte mit seinem schrecklichen Hall mein Entsetzen verstärkt. Ich sage, ich kannte ihn gut. Ich wusste, was der alte Mann fühlte, und ich empfand Mitleid mit ihm, obwohl ich im Herzen lachte. Ich wusste, dass er seit dem ersten leisen Geräusch wach gelegen hatte. Seine Angst war von Minute zu Minute gewachsen. Er hatte versucht, sie als bedeutungslos abzutun, aber er konnte es nicht. Er hatte sich gesagt: »Es ist nur der Wind im Schornstein« oder »Es ist nur eine Maus, die über den Boden läuft«. Aber er hatte keinen Trost gefunden.',
        japanese: 'そのとき、私は微かな、すすり泣くような呻き声を耳にした。それが剥き出しの恐怖の呻きであることを、私は知っていた。それは痛みや悲しみの声ではなく、恐怖に圧倒された魂の奥底から込み上げてくる、鈍く、恐ろしい音だった。私はこの音をよく知っていた。幾度も真夜中、全世界が眠りについているとき、この音が私の胸から湧き上がり、その恐ろしい反響が私の恐怖を増大させていた。だから、私はその音をよく知っていたのだ。老人が何を感じているか、私にはわかっていた。心の中では嘲笑しながらも、私は彼に同情を覚えた。彼は最初の微かな物音がした瞬間から、目を覚ましていたのだ。彼の恐怖は1分ごとに膨れ上がっていった。彼はそれを「煙突を抜ける風の音だ」とか「床を走るネズミの音だ」と自分に言い聞かせて、恐怖を打ち消そうとした。だが、何の慰めにもならなかったのだ。'
      },
      {
        id: 7,
        german: 'Schließlich öffnete ich die Laterne ein wenig – oh, so vorsichtig! – bis ein einziger, haardünner Lichtstrahl genau auf das Geierauge fiel. Es war weit, weit geöffnet – und ich geriet in Wut, als ich es erblickte. Es war von einem matten, schrecklichen Blau mit einem Schleier darüber, der mir das Mark in den Knochen gefrieren ließ. Doch von dem Gesicht oder dem Körper des alten Mannes konnte ich nichts sehen; denn ich hatte den Lichtstrahl wie durch einen Instinkt genau auf die verdammte Stelle gerichtet. Und nun vernahm ich ein dumpfes, schnelles Klopfen – ein Geräusch, wie es eine Uhr macht, die in Baumwolle gehüllt ist. Auch diesen Ton kannte ich gut. Es war das Schlagen des alten Herzens! Es steigerte meine Wut, wie das Schlagen einer Trommel den Mut des Soldaten anfeuert. Doch ich hielt mich immer noch still. Ich atmete kaum. Ich hielt die Laterne unbeweglich. Das Schlagen wurde lauter, schneller, von Sekunde zu Sekunde unerträglicher! Der alte Mann musste in äußerster Todesangst sein! Und nun, im Schein des Mondes, fällte ich meine Entscheidung.',
        japanese: 'ついに私は暗灯の蓋をほんの少しだけ開けた——おお、極めて慎重に！——そして、一筋の髪の毛ほどの細い光が、ハゲワシの目の上にぴったりと落ちた。その目は大きく、大きく見開かれていた——私はそれを見た瞬間、怒りに狂った。それは鈍く、恐ろしい青色で、その上の膜は私の骨の髄まで凍りつかせた。しかし、老人の顔も肉体も他には何も見えなかった。私は本能に導かれるように、あの呪われたスポットだけに光を正確に当てていたからだ。そのとき、私の耳に、鈍く、素早い鼓動の音が聞こえてきた——まるで時計を綿で包んだときに立てるような音だ。この音も、私はよく知っていた。老人の心臓の鼓動（ショウゾウノコドウ）だった！それは、ドラムの連打が兵士の勇気を奮い立たせるように、私の怒りを増幅させた。だが私はそれでも静止し続けた。呼吸もほとんどしなかった。暗灯を微動だにせず保持した。鼓動は大きく、速くなり、1秒ごとに耐え難い大きさになっていった！老人は極限の死の恐怖に悶えているに違いない！そして今、私は決断を下した。'
      },
      // Kapitel IV
      {
        id: 8,
        german: '【Kapitel IV: Die Tat im Dunkeln und das perfekte Versteck】 Mit einem lauten Schrei öffnete ich die Laterne ganz und sprang in das Zimmer. Er schrie einmal – nur ein einziges Mal. In einer Sekunde zog ich ihn auf den Boden und warf das schwere Bett über ihn. Ich lächelte vor Freude, als ich mein Werk so weit vollbracht sah. Aber das Herz schlug noch einige Minuten lang mit gedämpftem Ton weiter. Das besorgte mich jedoch nicht; man konnte es von außen nicht hören. Schließlich hörte das Schlagen auf. Der alte Mann war tot. Ich nahm das Bett weg und untersuchte die Leiche. Er war völlig kalt und steif. Sein Auge würde mich nie wieder quälen. Wenn ihr mich immer noch für wahnsinnig haltet, werdet ihr eure Meinung ändern, wenn ich euch beschreibe, mit welcher Klugheit ich die Leiche verbarg. Der Morgen nahte, und ich arbeitete unter Zeitdruck, aber mit äußerster Stille.',
        japanese: '【第4章：暗闇での凶行と、床下に隠された完全犯罪】私は大声を上げながら、暗灯の蓋を全開にし、部屋の中に飛び込んだ。彼は一度だけ叫んだ——ただ一度だけだ。次の瞬間、私は彼を床に引きずり下ろし、その上に重いベッドをひっくり返した。自分の計画がこれほど順調に進んだことに、私は喜びの微笑を浮かべた。しかし、心臓はまだ数分間、鈍い音を立てて鼓動し続けた。だが、私は気にも留めなかった。外から聞こえるはずがなかったからだ。ついに、鼓動が止んだ。老人は死んだ。私はベッドを取り除き、遺体を検査した。彼は完全に冷たくなり、硬直していた。彼の目はもう二度と私を苦しめることはない。もし君たちがまだ私のことを狂っていると思っているなら、私がどれほどの知恵を持って遺体を隠匿したかを聞けば、考えを改めるだろう。朝が近づいており、私は時間に追われながらも、極限の静寂を保って作業を進めた。'
      },
      {
        id: 9,
        german: 'Ich nahm drei Dielen des Fußbodens auf und legte die Leiche in den Raum darunter. Ich arbeitete mit solcher Präzision und Sauberkeit, dass kein menschliches Auge – nicht einmal sein eigenes – einen Fehler hätte entdecken können. Es gab keinen Schmutz zu beseitigen, kein Blut auf den Dielen – ich war viel zu schlau gewesen, um so etwas zuzulassen; ein Eimer hatte alles aufgefangen. Als ich diese Arbeit beendet hatte, war es vier Uhr morgens – es war immer noch dunkel wie die Nacht. Als die Glocke die Stunde schlug, ertönte ein Klopfen an der Haustür. Ich ging leichten Herzens hinab, um zu öffnen; denn was hatte ich nun zu befürchten? Drei Männer traten ein, die sich als Polizeibeamte vorstellten. Ein Nachbar hatte in der Nacht einen Schrei gehört, Verdacht geschöpft und die Behörden informiert. Die Beamten waren geschickt worden, um das Haus zu durchsuchen.',
        japanese: '私は床板を3枚取り外し、その下の空間に遺体を解体して配置した。私は極めて精密かつ清潔に作業を行ったため、人間の目には——たとえ老人の目であっても——何の異常も発見できなかっただろう。片付けるべき汚れも、床板の血痕もなかった——そんなヘマをするほど私は愚かではない。すべてはバケツが受け止めていたのだ。作業を終えたとき、午前4時だったが、まだ夜のように暗かった。時計が4時の鐘を鳴らしたとき、玄関の扉をノックする音がした。私は何の恐れもなく、軽い心で階段を降りて扉を開けた。今の私に何を恐れることがあろうか？入ってきたのは3人の男で、警察官だと身元を明かした。近隣の住人が夜間に叫び声を耳にし、不審に思って警察に通報したのだという。捜査官たちは、邸内を捜索するために派遣されてきたのだ。'
      },
      // Kapitel V
      {
        id: 10,
        german: '【Kapitel V: Der Besuch der Polizei und das unerträgliche Pochen】 Ich lächelte und hieß die Gentlemen willkommen. Der Schrei, sagte ich, sei mein eigener im Alptraum gewesen. Ich erklärte, dass der alte Mann aufs Land gereist sei. Ich führte die Beamten durch das ganze Haus. Ich bat sie, alles gründlich zu durchsuchen. Schließlich führte ich sie in sein eigenes Zimmer. Ich zeigte ihnen sein Gold, das unberührt und sicher war. In meinem blinden Triumph holte ich Stühle in das Zimmer und bat sie, sich hier von ihren Pflichten auszuruhen, während ich selbst in meinem wilden Übermut meinen eigenen Stuhl genau auf jene Stelle des Fußbodens stellte, unter der sich die Leiche des Opfers befand. Die Polizisten waren zufrieden. Mein Verhalten hatte sie überzeugt. Ich war völlig ruhig. Sie saßen da, unterhielten sich über alltägliche Dinge, und ich antwortete ihnen mit fröhlicher Stimme.',
        japanese: '【第5章：警官たちの訪問と、床底から響く狂おしい心音】私は微笑を浮かべ、紳士たちを歓迎した。叫び声は私自身が悪夢を見て上げたものだと説明した。老人は田舎へ旅行に出かけていると伝えた。私は捜査官たちを案内して家全体を見て回った。彼らに徹底的な捜索を促した。最後に、私は彼らを老人の部屋へと案内した。彼の金貨が無傷で安全な状態にあることを見せた。盲目的な勝利の快感に酔いしれ、私は部屋に椅子を運び込み、捜査官たちにここで捜索の疲れを癒やすよう勧め、私自身は、勝ち誇る心のままに、自分の椅子を、床下のまさに犠牲者の遺体が隠されているその真上に置いたのだ。警察官たちは完全に納得した。私の完璧な態度が彼らを確信させたのだ。私は完全に冷静だった。彼らは座り、ありふれた世間話を交わし、私は陽気な声でそれに応じた。'
      },
      {
        id: 11,
        german: 'Doch bald fühlte ich, wie ich bleich wurde, und wünschte, sie würden endlich gehen. Mein Kopf schmerzte, und mir war, als hörte ich ein dumpfes Geräusch im Ohr. Aber sie saßen da und sprachen weiter. Das Geräusch wurde deutlicher – es hielt an und wurde lauter. Ich sprach freudiger, um das Gefühl zu überwinden, aber es blieb und nahm an Stärke zu. Schließlich erkannte ich, dass das Geräusch nicht in meinen Ohren war. Ich wurde noch bleicher. Ich sprach schneller, mit lauterer Stimme, aber das Geräusch stieg unaufhaltsam an. Es war ein dumpfes, schnelles, pochendes Klopfen – wie das Geräusch einer Uhr, die in Baumwolle gehüllt ist! Ich keuchte nach Luft – und doch hörten die Polizisten es nicht. Ich stand auf und sprach über triviale Dinge, mit wilden Gesten, aber das Pochen nahm an Stärke zu. Warum gingen sie nicht? Ich ging auf dem Boden auf und ab, schlug mit meinem Stuhl auf die Dielen, aber das Pochen stieg über alles an. Es wurde lauter – lauter – lauter!',
        japanese: 'しかし間もなく、私は自分が血の気を失っていくのを感じ、彼らが一刻も早く立ち去ってくれることを願った。頭が痛み、耳の奥で鈍い音が聞こえ始めたように思えた。だが、彼らは座って話を続けていた。その音は次第に明瞭になり——途切れることなく、ますます大きくなっていった。私はその不快感を打ち消そうと、いっそう陽気に話したが、音は消えず、強さを増していった。ついに私は、その音が自分の耳の錯覚ではないことに気づいた。私はさらに青ざめた。私は早口になり、大声で話したが、音は容赦なく高まり続けた。それは鈍く、素早い、脈打つような鼓動だった——まるで時計を綿で包んだときに立てるような音だ！私はあえぎ、息を乱した——それなのに、警察官たちには聞こえない様子だった。私は立ち上がり、大きな身振りを交えて他愛のない話をまくしたてたが、鼓動は激しさを増していった。なぜ彼らは帰らないのだ？私は床の上をあちこち歩き回り、椅子を床板に叩きつけたが、鼓動はすべての音の上に君臨していた。それは大きく——大きく——大きくなっていった！'
      },
      {
        id: 12,
        german: 'Und immer noch saßen die Männer da und lächelten freundlich. War es möglich, dass sie es nicht hörten? Allmächtiger Gott! Nein, nein! Sie hörten es! Sie wussten es! Sie spielten mit meinem Entsetzen! Das glaubte ich, und das glaube ich noch heute. Alles war besser als diese Qual! Alles war erträglicher als dieser Hohn! Ich konnte dieses Heucheln nicht mehr ertragen! Ich fühlte, dass ich schreien oder sterben musste! Und nun – wieder! Hört! Lauter! Lauter! Lauter! Lauter! »Ihr Teufel!«, schrie ich. »Heuchelt nicht länger! Ich gestehe die Tat! Reißt die Dielen auf! Hier, hier! Es ist das Schlagen seines verräterischen Herzens!«',
        japanese: 'それでもなお、彼らはそこに座り、親しげに微笑み続けていた。彼らに聞こえないなどということが、あり得るだろうか？全能の神よ！いや、違う！彼らには聞こえていたのだ！彼らはすべてを知っていたのだ！彼らは私の恐怖をもてあそんでいたのだ！私はそう思ったし、今でもそう信じている。この苦悶に比べれば、どんなことでもマシだった！この嘲笑に比べれば、どんなことでも耐えられた！私はこれ以上の偽善に耐えられなかった！叫ぶか、さもなくば死ぬしかないと感じたのだ！そして今も——再び！聴くがいい！大きく！大きく！大きく！大きく！「悪魔どもめ！」私は叫んだ。「もう白々しい芝居はやめろ！私がやったんだ！床板を引き剥がせ！ここだ、ここだ！響いているのは、あの呪われた老人の、偽りなき心臓の鼓動だ！」'
      }
    ],
    vocabulary: [
      { german: 'das Gewissen', article: 'das', pos: 'Substantiv', japanese: '良心、罪悪感' },
      { german: 'das Geierauge', article: 'das', pos: 'Substantiv', japanese: 'ハゲワシのような目' },
      { german: 'nervös', pos: 'Adjektiv', japanese: '神経質な、いらいらした' },
      { german: 'die Scharniere', article: 'die', pos: 'Substantiv', japanese: '蝶番、関節、つなぎ目' },
      { german: 'das Pochen', article: 'das', pos: 'Substantiv', japanese: 'ノック、ノック音、鼓動、激しい高鳴り' },
      { german: 'die Heuchelei', article: 'die', pos: 'Substantiv', japanese: '偽善、猫をかぶること' },
      { german: 'verräterisch', pos: 'Adjektiv', japanese: '裏切りを暗示する、正体を暴露する、密告するような' }
    ],
    culturalNote: {
      title: '狂気と信頼できない語り手',
      content: 'ポーの小説を特徴づける「信頼できない語り手（Unreliable Narrator）」の典型例です。主人公は執拗に「私は正気だ、これほど冷静に計画したのだから」と論理性をアピールしますが、その執着自体がすでに狂気であり、最後には罪悪感からくる幻聴（心臓の音）によって自滅していきます。'
    }
  }
];

export const POE_STORIES: Story[] = RAW_POE_STORIES.map((story) => ({
  ...story,
  fullTranslationJa: story.paragraphs.map((p) => p.japanese),
}));
