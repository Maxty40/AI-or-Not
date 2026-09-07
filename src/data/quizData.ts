import { ImageChallengeItem } from '../types';

export const QUIZ_ITEMS: ImageChallengeItem[] = [
  {
    id: 'ai-portrait-1',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Potret Natural Wanita di Bawah Cahaya Alami',
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
    title: 'Semangkuk Ramen Tonkotsu Panas',
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
    title: 'Kucing Domestik dengan Tatapan Tajam',
    category: 'Hewan & Alam',
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
    title: 'Neon Malam Kota Tokyo Shinjuku',
    category: 'Street Life',
    difficulty: 'Sedang',
    source: 'Karya Alexander Smagin',
    creatorInfo: 'Fotografi Asli: Street Photography malam hari',
    clues: [
      'Karakter huruf Kanji/Katakana Jepang pada papan reklame dapat dibaca dengan tata bahasa yang benar.',
      'Kabel jalanan memiliki jalur fisik nyata tanpa sambungan putus misterius.',
      'Orang-orang di latar belakang memiliki bentuk anatomi proporsional.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI. Karya fotografer Alexander Smagin. Huruf kanji pada plang toko dapat terbaca sempurna. Generator AI sering menghasilkan "tulisan alien" atau huruf menyerupai alfabet tanpa arti yang kacau balau.'
  },
  {
    id: 'ai-gen-robot-5',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    isAi: true,
    title: 'Gelombang Fluida Abstrak Hyper-Glossy',
    category: 'Teknologi',
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
    title: 'Model dengan Riasan Elegan di Studio',
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
    title: 'Kota Cyberpunk Penuh Lampu Neon Melayang',
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
    title: 'Secangkir Kopi Latte Art di Kedai Kopi',
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
    title: 'Papan Sirkuit Motherboard Makro Komputer',
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
    isAi: true,
    title: 'Lukisan Digital Surealis Bunga Berputar',
    category: 'Hewan & Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Algorithmic Synthetic Art',
    clues: [
      'Kelopak bunga berbaur menjadi pusaran kuas tanpa pangkal tangkai.',
      'Gaya sapuan warna tidak memiliki tekstur kanvas atau impasto cat minyak fisik.',
      'Pola fraktal yang terlalu matematis pada pusat bunga.'
    ],
    detailedExplanation: 'Ini adalah GAMBAR AI! Menggabungkan berbagai gaya seni digital dengan interpolasi warna mulus tanpa struktur anatomi botani yang sebenarnya.'
  },
  {
    id: 'ai-indonesian-street-12',
    imageUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Suasana Candi Borobudur di Pagi Hari',
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
    title: 'Robot Humanoid Interaktif di Laboratorium',
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
    title: 'Pola Gelombang Geometris Ilusi Optik',
    category: 'Teknologi',
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
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873ee008?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Rubah Merah di Alam Terbuka Musim Dingin',
    category: 'Hewan & Alam',
    difficulty: 'Sedang',
    source: 'Karya Ray Hennessy',
    creatorInfo: 'Fotografi Asli: Wildlife Photography',
    clues: [
      'Butiran salju menempel secara diskrit pada ujung bulu luar rubah.',
      'Pupil mata rubah bereaksi terhadap pencahayaan salju putih yang silau.',
      'Rumput kering di latar depan sedikit mengabur karena depth of field kamera telephoto asli.'
    ],
    detailedExplanation: 'Ini adalah FOTO ASLI! Karya fotografer Ray Hennessy. Lensa telephoto 500mm menghasilkan pemisahan latar depan dan belakang yang sangat halus, dengan butiran salju asli yang menempel di ujung bulu.'
  }
];

export const BOOTH_RANKS = [
  { minScore: 0, maxScore: 200, title: 'Pemula Digital', badge: '🌱 Newbie', desc: 'Mata masih sering tertipu polesan halus algoritma AI. Terus amati detailnya!' },
  { minScore: 201, maxScore: 450, title: 'Pengamat Booth Jeli', badge: '🔍 Inspector', desc: 'Mulai mahir membedakan tekstur kulit asli vs buatan AI.' },
  { minScore: 451, maxScore: 650, title: 'Sleuth Citra Digital', badge: '⚡ Tech Sleuth', desc: 'Insting komputasimu tajam! Mampu melihat anomali refleksi dan anatomi.' },
  { minScore: 651, maxScore: 9999, title: 'Maha-Detektif AI', badge: '👑 Master Vision', desc: 'Luar biasa! Penglihatanmu setara algoritma DeepFake Detector tercanggih!' }
];
