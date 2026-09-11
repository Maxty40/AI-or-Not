import { ImageChallengeItem } from '../types';

export const QUIZ_ITEMS: ImageChallengeItem[] = [
  {
    id: 'ai-portrait-1',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Potret Wanita di Alam',
    category: 'Potret Wajah',
    difficulty: 'Sedang',
    source: 'Karya Christopher Campbell',
    creatorInfo: 'Fotografi Asli: Shot on Canon EOS 5D Mark IV',
    clues: [
      'Pori-pori kulit wajah memiliki tekstur tidak seragam alami.',
      'Refleksi pada kornea mata memperlihatkan pantulan jendela nyata.',
      'Rambut halus (flyaway hair) tersebar acak tanpa efek helai yang menyatu aneh.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI (Bukan AI). Karya fotografer Christopher Campbell. Kamera menangkap ketidaksempurnaan alami seperti tekstur kulit berpori, bintik-bintik halus (freckles), dan helai rambut liar yang sangat organik tanpa smoothing khas AI.'
  },
  {
    id: 'ai-ramen-2',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Semangkuk Ramen Tonkotsu',
    category: 'Kuliner',
    difficulty: 'Mudah',
    source: 'Karya Mgg Vitchakorn',
    creatorInfo: 'Fotografi Asli: Dokumentasi kuliner gastronomi',
    clues: [
      'Uap kuah tersebar secara transparan dan natural.',
      'Bentuk irisan daun bawang memiliki potongan pisau manual yang tidak identik.',
      'Tekstur telur ajitsuke tamago memiliki retakan kuning telur autentik.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI. Karya fotografer Mgg Vitchakorn. Perhatikan detail kuah minyak dan biji wijen yang tersebar tidak berpola acak ala algoritma, serta pantulan cahaya keramik mangkok yang realistis.'
  },
  {
    id: 'ai-cat-3',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Kucing dengan Tatapan Tajam',
    category: 'Hewan',
    difficulty: 'Mudah',
    source: 'Karya Manja Vitolic',
    creatorInfo: 'Fotografi Asli: Fotografi satwa domestik',
    clues: [
      'Kumis kucing tumbuh dari folikel bintik hitam dengan ketebalan meruncing.',
      'Tekstur selaput basah hidung kucing (rhinarium) memiliki pola granular nyata.',
      'Kedalaman fokus lensa (DoF) optik kamera asli pada bulu telinga.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI. Karya fotografer Manja Vitolic. AI sering kali membuat kumis kucing terpotong di tengah udara atau menembus objek lain. Di foto ini, folikel dan struktur kumis sangat konsisten secara biologis.'
  },
  {
    id: 'ai-cyber-street-4',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Controller Playstation 4',
    category: 'Teknologi',
    difficulty: 'Sedang',
    source: 'Karya Nikita Kachanovsky',
    creatorInfo: 'Fotografi Asli: Nikita Kachanovsky',
    clues: [
      'Refleksi cahaya pada permukaan plastik memiliki distorsi optik realistis.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI. Karya fotografer Nikita Kachanovsky.'
  },
  {
    id: 'ai-gen-robot-5',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    isAi: true,
    title: 'Gelombang Fluida Abstrak Glossy',
    category: 'Ilustrasi',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: 3D Fluid Synthesis via Prompt Engineering',
    clues: [
      'Permukaan memiliki kilap (glossiness) dan refraksi yang menentang hukum fisika fluida.',
      'Tidak ada tanda-tanda gesekan atau partikel debu mikro di atmosfer.',
      'Gradien warna terlalu mulus dan sempurna tanpa chromatic aberration optik.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR AI! Dihasilkan secara komputasi. Ciri khasnya adalah kilau specular yang terlalu bersih tanpa cacat sensor kamera fisik, dengan kelengkungan permukaan matematis yang khas generative render.'
  },
  {
    id: 'ai-gen-girl-glasses-6',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Potret Gadis di Studio',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    source: 'Karya Ayo Ogunseinde',
    creatorInfo: 'Fotografi Asli: Studio Fashion Photography',
    clues: [
      'Tekstur bedak dan foundation terlihat jelas di bawah pencahayaan softbox.',
      'Garis bibir memiliki garis-garis halus mikroskopis.',
      'Anting telinga menembus cuping telinga dengan gravitasi yang benar.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Ayo Ogunseinde. Banyak orang menduganya AI karena kulitnya sangat mulus, namun ini adalah riasan makeup studio profesional dengan pencahayaan beauty dish asli. Zoom ke pori-pori dan cuping telinga membuktikan keasliannya.'
  },
  {
    id: 'ai-gen-city-futuristic-7',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    isAi: true,
    title: 'Istana Medieval',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Generative Cityscape Render',
    clues: [
      'Gedung-gedung di latar belakang menyatu satu sama lain tanpa pondasi struktural yang masuk akal.',
      'Cahaya tidak memiliki sumber titik lampu (light source) yang konsisten.',
      'Jendela gedung memiliki grid kotak-kotak yang meleleh di kejauhan.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR AI! Generator AI kerap menggabungkan fasad arsitektur secara tidak logis di mana tangga atau jendela tiba-tiba berakhir di dinding hampa.'
  },
  {
    id: 'ai-coffee-latte-8',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Secangkir Latte Art',
    category: 'Kuliner',
    difficulty: 'Sedang',
    source: 'Karya Fahmi Fakhrudin',
    creatorInfo: 'Fotografi Asli: Barista Photography',
    clues: [
      'Gelembung mikro (microfoam) susu memiliki ukuran bervariasi dengan gelembung pecah alami.',
      'Urat kayu pada meja kedai kopi memiliki goresan lecet pemakaian fisik.',
      'Cangkir keramik memiliki sedikit ketidakrataan glasir porselen.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Fahmi Fakhrudin. Microfoam latte art asli memperlihatkan tegangan permukaan cairan dan gelembung udara kecil yang pecah, sesuatu yang sering gagal direplikasi dengan presisi oleh model difusi AI.'
  },
  {
    id: 'ai-gen-fantasy-nature-9',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Sirkuit Motherboard Komputer',
    category: 'Teknologi',
    difficulty: 'Tantangan',
    source: 'Karya Alexandre Debiève',
    creatorInfo: 'Fotografi Asli: Macro Hardware Photography',
    clues: [
      'Kode nomor seri SMD dan resistor tercetak presisi (contoh: R102, C45).',
      'Bekas solder timah memiliki bentuk meniscus fisik alami.',
      'Jalur tembaga PCB memiliki ketebalan terstandar industri pabrikasi nyata.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Alexandre Debiève. Di kalangan mahasiswa IT, foto macro hardware sering dicurigai sebagai AI. Namun perhatikan nomor kode resistor dan pin solder yang sangat presisi sesuai standar pabrikan semikonduktor.'
  },
  {
    id: 'ai-gen-old-man-10',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Potret Pria Berjanggut dengan Tatapan Tajam',
    category: 'Potret Wajah',
    difficulty: 'Sedang',
    source: 'Karya Albert Dera',
    creatorInfo: 'Fotografi Asli: Portraiture Photography',
    clues: [
      'Helai jenggot tumbuh dengan arah folikel bervariasi alami.',
      'Bayangan hidung jatuh secara matematis sesuai posisi lampu samping (key light).',
      'Warna kulit leher dan wajah memiliki kontinuitas vaskular alami.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Albert Dera. AI sering mengalami masalah pada pertemuan helai jenggot dan kulit leher yang tampak seperti "ditempel" atau seperti kuas lukis digital. Di sini transisinya sangat tajam dan organik.'
  },
  {
    id: 'ai-gen-surreal-landscape-11',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Lukisan Bunga',
    category: 'Ilustrasi',
    difficulty: 'Mudah',
    creatorInfo: 'Lukisan Asli: Vase of Flowers',
    clues: [
      'Kelopak bunga berbaur menjadi pusaran kuas tanpa pangkal tangkai.',
      'Gaya sapuan warna tidak memiliki tekstur kanvas atau impasto cat minyak fisik.',
      'Pola fraktal yang terlalu matematis pada pusat bunga.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR ASLI! Karya Jan Davidsz. de Heem. Dilukis pada tahun 1670.'
  },
  {
    id: 'ai-indonesian-street-12',
    imageUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Suasana Candi Borobudur',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    source: 'Karya Rian Adi',
    creatorInfo: 'Fotografi Asli: Travel Photography',
    clues: [
      'Pahatan relief batu andesit menunjukkan erosi usia ratusan tahun.',
      'Susunan stupa berongga memiliki geometri belah ketupat yang simetris historis.',
      'Kabut tipis di latar belakang perbukitan Menoreh mengikuti kontur geografis nyata.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Rian Adi. Keotentikan relief batu andesit candi Borobudur dengan lumut alami dan erosi cuaca sangat berbeda dengan tekstur batu bersih steril buatan AI.'
  },
  {
    id: 'ai-gen-robot-hand-13',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Robot Humanoid',
    category: 'Teknologi',
    difficulty: 'Tantangan',
    source: 'Karya Alex Knight',
    creatorInfo: 'Fotografi Asli: Robotics Lab Photography',
    clues: [
      'Sekrup dan baut pengencang sendi mekanis memiliki ulir standar metrik.',
      'Kabel serat optik dan pelindung selang memiliki klem industri nyata.',
      'Pantulan ruang laboratorium pada pelindung akrilik kepala robot.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Alex Knight. Banyak yang mengira ini 3D render atau AI, namun ini adalah robot humanoid nyata di pameran sains dengan rakitan komponen baut, engsel aktuator, dan kabel nyata.'
  },
  {
    id: 'ai-gen-abstract-ai-14',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    isAi: true,
    title: 'Pola Gelombang Abstrak',
    category: 'Ilustrasi',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Midjourney Algorithmic Wave Generator',
    clues: [
      'Bentuk lipatan gelombang saling tumpang tindih secara paradoksikal.',
      'Gradien warna neon ungu dan cyan berbaur tanpa sumber refraksi cahaya jelas.',
      'Sempurna secara digital tanpa noise partikel optik kamera.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR AI! Menggunakan komputasi tensor untuk membuat pola gelombang paradoksikal yang mustahil dibentuk atau difoto di dunia nyata.'
  },
  {
    id: 'ai-nature-fox-15',
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/442/721/small/ai-generated-portrait-of-a-young-man-no-facial-expression-facing-the-camera-isolated-white-background-ai-generative-photo.jpg',
    isAi: true,
    title: 'Wajah Pria Muda',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    source: 'Vecteezy AI Generated Image Collection',
    creatorInfo: 'Vecteezy AI: Generative Portrait Synthesis',
    clues: [
      'Mata memiliki pantulan cahaya yang tidak konsisten dengan arah pencahayaan.',
      'Telinga memiliki bentuk anatomi yang tidak simetris dan proporsional.',
      'Tekstur kulit wajah terlalu halus tanpa pori-pori atau ketidaksempurnaan alami.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR AI! Menggunakan teknologi generative untuk menciptakan wajah yang tampak realistis tetapi dibuat sepenuhnya oleh AI.'
  },
  {
    id: 'real-coastline-16',
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Pemandangan Matahari Terbit',
    category: 'Alam',
    difficulty: 'Sedang',
    source: 'Fotografi lanskap dokumenter',
    creatorInfo: 'Fotografi Asli: Landscape Photography',
    clues: ['Cahaya matahari menunjukan arah yang konsisten.', 'Bukit bukit berjajar.', 'Kabut atmosfer mengurangi kontras objek jauh.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan variasi tekstur batu, buih air, dan kabut atmosfer yang ditangkap kamera.'
  },
  {
    id: 'ai-gen-neon-17',
    imageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80',
    isAi: true,
    title: 'Kota Neon di Malam Hari',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Synthetic Neon City Prompt',
    clues: ['Pendar cahaya menyebar tanpa sumber konsisten.', 'Garis bangunan berulang terlalu seragam.', 'Gradasi langit terlalu mulus tanpa noise kamera.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan komposisi cahaya neon sintetis dan bentuk arsitektur yang terlalu sempurna.'
  },
  {
    id: 'real-bakery-18',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Roti Sourdough',
    category: 'Kuliner',
    difficulty: 'Sedang',
    source: 'Fotografi kuliner artisan',
    creatorInfo: 'Fotografi Asli: Artisan Food Photography',
    clues: ['Retakan kulit roti tidak seragam.', 'Remah roti mengikuti proses pemotongan.', 'Serat kayu memiliki goresan pemakaian.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan detail fisik dari proses pemanggangan dan pemotongan roti.'
  },
  {
    id: 'ai-gen-crystal-19',
    imageUrl: 'https://images.nightcafe.studio/tools/QJ8U79mqnOhO2I35N5H1/QJ8U79mqnOhO2I35N5H1--1--ndlpn.jpg?tr=w-584,c-at_max',
    isAi: true,
    title: 'Kristal Fantasi dengan Cahaya Ungu',
    category: 'Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Fantasy Crystal Synthesis',
    clues: ['Pantulan cahaya berasal dari arah yang bertentangan.', 'Detail kecil berulang secara matematis.', 'Cahaya biru tidak memiliki pantulan lingkungan.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan bentuk dan pencahayaan kristal yang dibuat secara sintetis.'
  },
  {
    id: 'real-forest-20',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Hutan dengan Sinar Matahari',
    category: 'Alam',
    difficulty: 'Sedang',
    source: 'Fotografi alam terbuka',
    creatorInfo: 'Fotografi Asli: Outdoor Nature Photography',
    clues: ['Daun memiliki tingkat fokus berbeda.', 'Sinar matahari terpecah oleh cabang nyata.', 'Tanah memperlihatkan variasi warna alami.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan kedalaman fokus dan variasi permukaan hutan yang nyata.'
  },
  {
    id: 'ai-gen-architecture-21',
    imageUrl: 'https://metropolismag.com/wp-content/uploads/2022/07/featured_-Leilah_theythem_a_contemporary_house_carved_out_of_a_rock_face__534f7319-551f-4b34-9e52-938e651683c2.png',
    isAi: true,
    title: 'Bangunan Futuristik dengan Struktur Mustahil',
    category: 'Arsitektur',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Impossible Architecture Render',
    clues: ['Balkon tampak tidak memiliki penyangga.', 'Jendela berubah ukuran tanpa perspektif.', 'Bayangan bangunan tidak sesuai arah cahaya.'],
    detailedExplanation: 'Ini adalah GAMBAR AI yang menggabungkan perspektif dan konstruksi mustahil.'
  },
  {
    id: 'real-dog-22',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Anjing Golden Retriever di Taman',
    category: 'Hewan',
    difficulty: 'Mudah',
    source: 'Fotografi satwa domestik',
    creatorInfo: 'Fotografi Asli: Pet Photography',
    clues: ['Helai bulu berubah arah di sekitar moncong.', 'Mata memantulkan lingkungan secara konsisten.', 'Rumput memiliki blur optik berbeda.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan karakteristik bulu, pantulan mata, dan depth of field lensa nyata.'
  },
  {
    id: 'ai-gen-portrait-23',
    imageUrl: 'https://images.piclumen.com/picture/directUpload/20260804/17/ai-portrait-daily-white-woman.webp',
    isAi: true,
    title: 'Potret Wanita Kulit Putih',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Character Portrait Synthesis',
    clues: ['Tekstur kulit terlalu seragam.', 'Tatapan mata terlalu kosong.', 'Tekstur bibir terlalu halus.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan tekstur kulit, rambut, dan pantulan mata hasil sintesis digital.'
  },
  {
    id: 'real-street-24',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Rumah Modern di Komplek',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    source: 'Fotografi dokumenter perkotaan',
    creatorInfo: 'Fotografi Asli: Urban Documentary Photography',
    clues: ['Cat dinding mengelupas tanpa pola berulang.', 'Pantulan cahaya.', 'Jendela yang memperlihatkan isi rumah.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan detail material, cahaya, dan bayangan lingkungan yang terdokumentasi langsung.'
  },
  {
    id: 'ai-gen-ocean-25',
    imageUrl: 'https://img.magnific.com/free-photo/sunset-sea-ai-generated_268835-18538.jpg?semt=ais_hybrid&w=740&q=80',
    isAi: true,
    title: 'Samudra dengan Pemandangan Matahari Terbenam',
    category: 'Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Surreal Ocean Worldbuilding',
    clues: ['Cahaya tidak menghasilkan bayangan sesuai permukaan air.', 'Gelombang memiliki pola berulang.', 'Cahaya tidak mengikuti jarak atmosfer.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan elemen surealis dan pencahayaan samudra generatif.'
  },
  /* New AI Images */
  {
    id: 'ai-gen-woman-26',
    imageUrl: '/img/ai-gen-woman-26.jpg',
    isAi: true,
    title: 'Potret Wanita Muda dengan Cahaya Lembut',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Synthetic Editorial Portrait',
    clues: ['Tekstur kulit tampak terlalu halus dan seragam.', 'Helai rambut menyatu secara tidak wajar di beberapa bagian.', 'Pantulan cahaya pada kedua mata tidak sepenuhnya konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret editorial wanita dengan pencahayaan lembut. Detail kulit, rambut, dan pantulan mata menunjukkan hasil sintesis digital.'
  },
  {
    id: 'ai-gen-love-27',
    imageUrl: '/img/ai-gen-love-27.jpg',
    isAi: true,
    title: 'Robot Kecil di Dunia Warna-warni',
    category: 'Ilustrasi',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Colorful Robot Illustration',
    clues: ['Sapuan warna mengalir tanpa tekstur media fisik yang konsisten.', 'Sambungan lengan dan kaki robot tidak menunjukkan mekanisme jelas.', 'Pantulan warna pada tubuh robot berasal dari arah yang tidak seragam.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa ilustrasi robot kecil dengan palet warna cerah dan bentuk mekanis yang bersifat imajinatif.'
  },
  {
    id: 'ai-ilustration-people-28',
    imageUrl: '/img/ai-ilustartion-people-28.jpg',
    isAi: true,
    title: 'Komposisi Karakter dalam Ilustrasi Abstrak',
    category: 'Ilustrasi',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Abstract Character Illustration',
    clues: ['Bentuk karakter dan latar menyatu tanpa batas objek yang jelas.', 'Detail kecil berulang dengan pola digital.', 'Arah cahaya pada beberapa bidang tidak konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa ilustrasi abstrak dengan karakter dan elemen visual yang disintesis secara digital.'
  },
  {
    id: 'ai-gen-cat-29',
    imageUrl: '/img/ai-gen-cat-29.jpg',
    isAi: true,
    title: 'Kucing Hitam di Antara Bunga Kuning',
    category: 'Hewan',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Stylized Black Cat Portrait',
    clues: ['Bulu di sekitar wajah tampak terlalu seragam dan simetris.', 'Mata memiliki pantulan yang sangat mirip satu sama lain.', 'Bunga latar berulang dengan bentuk dan warna yang terlalu konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret kucing hitam dengan latar bunga kuning. Simetri wajah, bulu, dan latar memperlihatkan karakter visual generatif.'
  },
  {
    id: 'ai-gen-cartoon-30',
    imageUrl: '/img/ai-gen-cartoon-30.jpg',
    isAi: true,
    title: 'Robot Kartun di Latar Cat Warna-warni',
    category: 'Ilustrasi',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Cartoon Robot Concept Art',
    clues: ['Bentuk tangan dan jari robot tidak memiliki struktur mekanis yang jelas.', 'Sapuan cat latar membentuk pola yang terlalu mulus.', 'Pantulan pada permukaan logam tidak mengikuti satu sumber cahaya.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa robot kartun dengan latar abstrak penuh warna dan detail mekanis imajinatif.'
  },
  {
    id: 'ai-gen-employee-31',
    imageUrl: '/img/ai-gen-employee-31.jpg',
    isAi: true,
    title: 'Wanita Profesional di Lingkungan Kantor',
    category: 'Potret Wajah',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Corporate Editorial Portrait',
    clues: ['Kulit wajah terlalu mulus dibandingkan tekstur jas dan latar.', 'Jari dan tangan yang terlipat perlu diperiksa karena bentuknya sangat halus.', 'Pencahayaan wajah dan lampu latar tidak sepenuhnya memiliki arah yang sama.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret profesional di kantor. Komposisinya realistis, tetapi tekstur kulit, tangan, dan pencahayaan menunjukkan sintesis digital.'
  },
  {
    id: 'ai-gen-dog-32',
    imageUrl: '/img/ai-gen-dog-32.jpg',
    isAi: true,
    title: 'Anjing Putih Berlari di Atas Salju',
    category: 'Hewan',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Winter Animal Action Scene',
    clues: ['Proporsi kaki dan cakar perlu diperiksa saat bergerak.', 'Bulu putih menyatu terlalu halus dengan percikan salju.', 'Mata dan hidung memiliki pantulan yang tidak sepenuhnya konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa anjing putih yang melompat di salju. Bulu, cakar, dan percikan salju memperlihatkan hasil generatif yang dibuat agar tampak seperti foto aksi.'
  },
  {
    id: 'ai-gen-office-woman-33',
    imageUrl: '/img/ai-gen-office-woman-33.jpg',
    isAi: true,
    title: 'Potret Wanita Profesional di Ruang Kantor',
    category: 'Potret Wajah',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Office Portrait Synthesis',
    clues: ['Kulit wajah tampak terlalu bersih tanpa variasi pori.', 'Siluet orang di latar terlalu halus dan tidak memiliki detail alami.', 'Batas rambut, telinga, dan wajah perlu diperiksa karena tampak menyatu.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret wanita profesional dengan latar kantor buram. Efek depth of field dan detail wajah dibuat secara sintetis.'
  },
  {
    id: 'ai-gen-white-wolf-34',
    imageUrl: '/img/ai-gen-white-wolf-34.jpg',
    isAi: true,
    title: 'Serigala Putih Berlari di Salju',
    category: 'Hewan',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: White Wolf Wildlife Synthesis',
    clues: ['Bentuk kaki dan cakar tampak terlalu rapi saat bergerak.', 'Bulu di sekitar wajah menyatu secara digital.', 'Percikan salju dan bayangan tubuh tidak sepenuhnya mengikuti gerakan.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa serigala putih yang berlari di salju. Detail bulu, cakar, dan percikan salju menunjukkan adegan satwa sintetis.'
  },
  {
    id: 'ai-gen-robot-ilustration-woman-35',
    imageUrl: '/img/ai-gen-robot-ilustration-35.png',
    isAi: true,
    title: 'Robot Humanoid di Dunia Cat Abstrak',
    category: 'Ilustrasi',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Colorful Humanoid Robot Illustration',
    clues: ['Sambungan lutut dan lengan tidak menunjukkan konstruksi mekanis lengkap.', 'Permukaan cat dan refleksi robot bercampur tanpa sumber cahaya tunggal.', 'Antena dan detail kepala terlihat terlalu simetris.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa robot humanoid dengan latar cat abstrak warna-warni. Struktur mekanis dan sapuan warna dibuat melalui generasi digital.'
  },
  {
    id: 'ai-gen-grass-36',
    imageUrl: '/img/ai-gen-grass-36.jpg',
    isAi: true,
    title: 'Padang Rumput dengan Cahaya Matahari',
    category: 'Alam',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Dreamlike Nature Landscape',
    clues: ['Bokeh cahaya memiliki bentuk dan ukuran yang terlalu seragam.', 'Helai rumput di latar menyatu menjadi pola yang lembut.', 'Sinar matahari tampak menyebar tanpa sumber optik yang jelas.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa lanskap padang rumput dengan efek bokeh dan cahaya lembut yang dibuat secara generatif.'
  },
  {
    id: 'ai-gen-hijab-37',
    imageUrl: '/img/ai-gen-hijab-37.jpg',
    isAi: true,
    title: 'Potret Wanita Berhijab dengan Cahaya Merah',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Dramatic Hijab Portrait Synthesis',
    clues: ['Gigi dan garis bibir tampak terlalu seragam.', 'Tekstur kain hijab menyatu tanpa lipatan kecil yang konsisten.', 'Pantulan cahaya merah pada wajah tidak sepenuhnya mengikuti sumber lampu.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret wanita berhijab dengan pencahayaan merah dramatis. Wajah, kain, dan cahaya merupakan hasil sintesis digital.'
  },
  {
    id: 'ai-gen-yellow-car-38',
    imageUrl: '/img/ai-gen-yellow-car-38.jpg',
    isAi: true,
    title: 'Mobil Sport Kuning Futuristik',
    category: 'Teknologi',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Futuristic Sports Car Concept',
    clues: ['Bentuk roda dan detail ban tampak tidak sepenuhnya simetris.', 'Refleksi bodi tidak selalu mengikuti garis lingkungan.', 'Beberapa panel dan ventilasi terlihat seperti menyatu tanpa sambungan.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa konsep mobil sport kuning futuristik. Desain bodi, refleksi, dan detail mekanisnya dibuat secara generatif.'
  },
  {
    id: 'ai-gen-wolf-39',
    imageUrl: '/img/ai-gen-wolf-39.jpg',
    isAi: true,
    title: 'Serigala Berwajah Domba',
    category: 'Hewan',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Surreal Wolf-Sheep Hybrid',
    clues: ['Bulu domba dan kepala serigala bertemu tanpa transisi biologis.', 'Kaki dan tubuh tidak memiliki proporsi hewan yang konsisten.', 'Tekstur bulu berulang pada beberapa area tubuh.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa makhluk hibrida serigala dan domba. Penggabungan anatomi yang tidak mungkin menjadi petunjuk utama bahwa gambar ini generatif.'
  },
  {
    id: 'ai-gen-cake-40',
    imageUrl: '/img/ai-gen-cake-40.jpg',
    isAi: true,
    title: 'Kue Ulang Tahun dengan Lilin Warna-warni',
    category: 'Kuliner',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Stylized Birthday Cake Image',
    clues: ['Lilin di latar memiliki bentuk dan arah yang terlalu seragam.', 'Tekstur krim tampak berulang seperti pola digital.', 'Api lilin tidak semuanya memiliki cahaya dan bayangan yang konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa kue ulang tahun dengan krim, buah, dan lilin warna-warni. Detail krim, api, dan susunan lilin menunjukkan sintesis digital.'
  },
  {
    id: 'ai-gen-scotland-41',
    imageUrl: '/img/ai-gen-scotland-41.png',
    isAi: true,
    title: 'Lembah Pegunungan Saat Matahari Terbenam',
    category: 'Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Cinematic Highland Landscape',
    clues: ['Pantulan cahaya matahari pada air terlalu sempurna.', 'Awan dan kabut memiliki bentuk yang tampak berulang.', 'Garis bukit dan bangunan jauh tidak sepenuhnya konsisten dengan perspektif.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa lanskap pegunungan bergaya sinematik saat matahari terbenam. Cahaya, kabut, dan refleksi air dibuat secara generatif.'
  },
  {
    id: 'ai-gen-pasta-42',
    imageUrl: '/img/ai-gen-pasta-42.jpg',
    isAi: true,
    title: 'Pita Pasta Abstrak Berwarna Oranye',
    category: 'Kuliner',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Abstract Pasta Texture Study',
    clues: ['Lipatan pita pasta berulang dengan pola yang terlalu seragam.', 'Pantulan permukaan tidak selalu mengikuti lekukan material.', 'Tidak terlihat detail pori, tepung, atau ketidaksempurnaan bahan nyata.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa komposisi abstrak pita pasta oranye. Bentuk lengkung dan kilau permukaannya dibuat sebagai tekstur generatif.'
  },
  {
    id: 'ai-gen-tundra-43',
    imageUrl: '/img/ai-gen-tundra-43.jpg',
    isAi: true,
    title: 'Tundra Fantasi di Bawah Bulan Merah Muda',
    category: 'Alam',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Stylized Tundra Environment Art',
    clues: ['Garis tepi pegunungan memiliki pola ilustratif yang terlalu seragam.', 'Cahaya bulan merah muda menyebar tanpa sumber atmosfer yang realistis.', 'Lapisan salju dan awan tampak seperti sapuan digital berulang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa lanskap tundra bergaya ilustrasi dengan bulan merah muda. Warna, pegunungan, dan tekstur salju merupakan komposisi generatif.'
  },
  /* New Real Images */
  {
    id: 'real-mountain-lake-44',
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Danau Pegunungan Saat Pagi',
    category: 'Alam',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi lanskap',
    creatorInfo: 'Fotografi Asli: Landscape Photography',
    clues: ['Pantulan gunung sedikit terganggu riak air.', 'Kabut mengikuti lembah secara bertahap.', 'Pepohonan depan memiliki fokus optik berbeda dari latar.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan pantulan air, kabut, dan kedalaman fokus yang menunjukkan kondisi alam nyata.'
  },
  {
    id: 'real-bicycle-45',
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Sepeda di Jalan Kota',
    category: 'Teknologi',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi sepeda',
    creatorInfo: 'Fotografi Asli: Urban product photography',
    clues: ['Rantai dan roda memiliki hubungan mekanis nyata.', 'Bayangan sepeda mengikuti arah cahaya.', 'Goresan kecil pada rangka tidak berulang.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan komponen sepeda dan bayangan yang mengikuti kondisi fisik.'
  },
  {
    id: 'real-board-46',
    imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Papan Pemotong Sayur',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi pesisir',
    creatorInfo: 'Fotografi Asli: Coastal Architecture Photography',
    clues: ['Permukaan papan memiliki tekstur alami.', 'Bayangan papan mengikuti arah cahaya.', 'Goresan pada papan tidak berulang.'],
    detailedExplanation: 'Ini adalah FOTO ASLI yang menampilkan papan pemotong sayur dengan detail tekstur dan bayangan yang realistis.'
  },
  {
    id: 'real-leaves-47',
    imageUrl: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Dedauanan yang Bertumpuk',
    category: 'Alam',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi tanaman',
    creatorInfo: 'Fotografi Asli: Botanical Photography',
    clues: ['Helai daun memiliki urat yang berbeda-beda.', 'Permukaan daun acak.', 'Pantulan cahaya pada daun mengikuti bentuk fisik.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan detail tanaman dan pantulan cahaya yang bersifat fisik.'
  },
  {
    id: 'real-breakfast-48',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Sarapan Pagi Sehat',
    category: 'Kuliner',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi makanan',
    creatorInfo: 'Fotografi Asli: Food Photography',
    clues: ['.Tekstur sayuran terkihat natural', 'Bentuk piring dan mangkuk natural.', 'Serakan biji - bijian terlihat natural.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan tekstur sayur, peralatan makan, dan pencahayaan yang natural.'
  },
  {
    id: 'real-street-market-49',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Tampilan Di Toko Pakaian',
    category: 'Arsitektur',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi street market',
    creatorInfo: 'Fotografi Asli: Street Documentary Photography',
    clues: ['Lipatan kain dan gantungan memiliki variasi alami.', 'Pakaian tertata dengan rapih.', 'Pencahayaan yang natural.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dokumentasi toko dengan banyak detail objek yang tidak seragam.'
  },
  {
    id: 'real-piano-50',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Foto Klasik Piano',
    category: 'Ilustrasi',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi musik',
    creatorInfo: 'Fotografi Asli: Concert Instrument Photography',
    clues: ['Refleksi piano mengikuti bentuk lengkung instrumen.', 'Tuts memiliki jarak dan pola yang konsisten.', 'Debu dan goresan permukaan tidak berulang.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan bentuk instrumen dan refleksi permukaan yang mengikuti objek nyata.'
  },
  {
    id: 'real-ceramic-vase-51',
    imageUrl: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Vas Keramik Buatan Tangan',
    category: 'Ilustrasi',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi keramik',
    creatorInfo: 'Fotografi Asli: Handmade Ceramic Photography',
    clues: ['Glasir memiliki ketidakrataan kecil.', 'Bentuk vas sedikit asimetris karena proses manual.', 'Bayangan mengikuti sumber cahaya studio.'],
    detailedExplanation: 'Ini adalah FOTO ASLI sebuah karya keramik dengan ketidaksempurnaan proses manual.'
  },
  {
    id: 'real-cat-window-52',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Kucing Duduk di Sofa',
    category: 'Hewan',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi hewan',
    creatorInfo: 'Fotografi Asli: Pet Photography',
    clues: ['Helai kumis memiliki arah dan panjang berbeda.', 'Tekstur sofa yang kasar.', 'Bulu di sekitar telinga memiliki kedalaman fokus optik.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan tekstur bulu dan pencahayaan dari sofa yang nyata.'
  },
  {
    id: 'real-wooden-bridge-53',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Pepohonan di Hutan',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi alam',
    creatorInfo: 'Fotografi Asli: Nature Architecture Photography',
    clues: ['Serat kayu memiliki arah yang berbeda pada tiap pohon.', 'Bentuk tanah yang tidak beraturan.', 'Jalur menyusut sesuai perspektif kamera.'],
    detailedExplanation: 'Ini adalah FOTO ASLI yang memperlihatkan material kayu dan lingkungan hutan secara langsung.'
  },
  {
    id: 'real-coffee-beans-54',
    imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Biji Kopi dalam Proses Sangrai',
    category: 'Kuliner',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi kopi',
    creatorInfo: 'Fotografi Asli: Coffee Documentary Photography',
    clues: ['Ukuran biji kopi tidak identik.', 'Retakan permukaan tiap biji berbeda.', 'Pantulan cahaya mengikuti bentuk lengkung biji.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan variasi alami pada ukuran, warna, dan retakan biji kopi.'
  },
  {
    id: 'real-old-library-55',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Rak Buku Perpustakaan Lama',
    category: 'Arsitektur',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi perpustakaan',
    creatorInfo: 'Fotografi Asli: Interior Documentary Photography',
    clues: ['Buku memiliki kemiringan dan ukuran yang tidak sama.', 'Debu dan keausan rak tidak berulang.', 'Garis perspektif rak mengarah ke titik lenyap yang konsisten.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan variasi buku, rak, dan perspektif interior yang nyata.'
  },
  {
    id: 'real-rainy-window-56',
    imageUrl: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Payung Hujan',
    category: 'Alam',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi hujan',
    creatorInfo: 'Fotografi Asli: Atmospheric Photography',
    clues: ['Ukuran tetes air bervariasi.', 'Distorsi latar mengikuti bentuk tiap tetes.', 'Cahaya kota dibiaskan secara berbeda.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan pembiasan cahaya dan tetes air yang terbentuk secara alami.'
  },
  {
    id: 'real-pottery-workshop-57',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Vas Bunga Suram',
    category: 'Teknologi',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi kerajinan',
    creatorInfo: 'Fotografi Asli: Craft Documentary Photography',
    clues: ['Pencahayaan gelap yang natural.', 'Bentuk vas berbeda beda.', 'Bunga yang layu terkesan suram natural.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dokumentasi vas bunga yang layu.'
  },
  {
    id: 'real-sunflower-field-58',
    imageUrl: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Ladang Bunga Matahari',
    category: 'Alam',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi lanskap',
    creatorInfo: 'Fotografi Asli: Botanical Landscape Photography',
    clues: ['Tinggi bunga tidak seragam.', 'Kelopak memiliki kerusakan kecil yang berbeda.', 'Cahaya dan bayangan mengikuti arah matahari.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan variasi biologis pada bunga dan pencahayaan alam.'
  },
  {
    id: 'real-portrait-59',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Potret Pria di Cahaya Alami',
    category: 'Potret Wajah',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi potret',
    creatorInfo: 'Fotografi Asli: Natural Light Portrait Photography',
    clues: ['Tekstur kulit dan janggut memiliki variasi alami.', 'Pantulan mata mengikuti posisi sumber cahaya.', 'Rambut halus memiliki arah yang tidak seragam.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan tekstur wajah, rambut, dan pencahayaan alami yang ditangkap kamera.'
  },
  {
    id: 'real-architecture-60',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Bangunan Putih dengan Geometri Modern',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi arsitektur',
    creatorInfo: 'Fotografi Asli: Modern Architecture Photography',
    clues: ['Garis perspektif bertemu pada titik lenyap yang konsisten.', 'Bayangan bangunan mengikuti sudut matahari.', 'Permukaan dinding memiliki variasi tekstur kecil.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan perspektif, bayangan, dan material bangunan yang terdokumentasi secara langsung.'
  }
];

export const BOOTH_RANKS = [
  { minScore: 0, maxScore: 200, title: 'Pemula', badge: 'Newbie', desc: 'Mata masih sering tertipu polesan halus algoritma AI. Terus amati detailnya!' },
  { minScore: 201, maxScore: 450, title: 'Pengamat Jeli', badge: 'Intermediate', desc: 'Mulai mahir membedakan tekstur kulit asli vs buatan AI.' },
  { minScore: 451, maxScore: 650, title: 'Ahli Citra', badge: 'Expert', desc: 'Insting komputasimu tajam! Mampu melihat anomali refleksi dan anatomi.' },
  { minScore: 651, maxScore: 9999, title: 'Maha-Detektif AI', badge: 'Master', desc: 'Luar biasa! Penglihatanmu setara algoritma DeepFake Detector tercanggih!' }
];
