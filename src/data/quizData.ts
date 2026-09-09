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
    title: 'Controller Playstation',
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
    title: 'Gelombang Fluida Abstrak Hyper-Glossy',
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
    title: 'Pola Gelombang Geometris',
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
    title: 'Langit Neon Abstrak di Atas Kota',
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
    title: 'Roti Artisan di Meja Kayu',
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
    title: 'Jalur Hutan dengan Sinar Matahari',
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
    title: 'Gedung Futuristik dengan Struktur Mustahil',
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
    title: 'Anjing Golden Retriever di Padang Rumput',
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
    title: 'Potret Karakter Digital dengan Cahaya Dramatis',
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
    title: 'Rumah Modern di Jalan Perumahan',
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
    title: 'Samudra Fantasi dengan Pemandangan Mathari Terbenam',
    category: 'Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Surreal Ocean Worldbuilding',
    clues: ['Pulau tidak menghasilkan bayangan sesuai permukaan air.', 'Gelombang memiliki pola berulang.', 'Cahaya tidak mengikuti jarak atmosfer.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan elemen surealis dan pencahayaan samudra generatif.'
  }
];

export const BOOTH_RANKS = [
  { minScore: 0, maxScore: 200, title: 'Pemula', badge: 'Newbie', desc: 'Mata masih sering tertipu polesan halus algoritma AI. Terus amati detailnya!' },
  { minScore: 201, maxScore: 450, title: 'Pengamat Jeli', badge: 'Intermediate', desc: 'Mulai mahir membedakan tekstur kulit asli vs buatan AI.' },
  { minScore: 451, maxScore: 650, title: 'Ahli Citra', badge: 'Expert', desc: 'Insting komputasimu tajam! Mampu melihat anomali refleksi dan anatomi.' },
  { minScore: 651, maxScore: 9999, title: 'Maha-Detektif AI', badge: 'Master', desc: 'Luar biasa! Penglihatanmu setara algoritma DeepFake Detector tercanggih!' }
];
