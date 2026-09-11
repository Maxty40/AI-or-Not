# Draft 35 Objek Gambar Tambahan

Draft ini menambah pool gambar dari 25 menjadi 60 item setelah objek dipindahkan ke `src/data/quizData.ts`.

- Total objek: 35
- GenAI: 18 objek (`isAi: true`)
- Foto/karya asli: 17 objek (`isAi: false`)
- Tidak ada file aplikasi yang diubah.
- URL GenAI menggunakan endpoint Pollinations berbasis prompt unik.
- URL foto asli menggunakan CDN Unsplash Source. Verifikasi URL dan lisensi sebelum dipakai untuk publikasi.
- Semua `category` mengikuti union type saat ini: `Potret Wajah`, `Kuliner`, `Hewan`, `Alam`, `Arsitektur`, `Teknologi`, `Ilustrasi`.

## Objek Tambahan

```ts
[
  {
    id: 'ai-gen-portrait-cyber-26',
    imageUrl: 'https://image.pollinations.ai/prompt/cinematic%20AI-generated%20portrait%20of%20a%20cyberpunk%20woman%20with%20neon%20reflections%2C%20high%20detail?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Potret Cyberpunk dengan Pantulan Neon',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Prompt sinematik cyberpunk',
    clues: ['Pantulan neon pada kedua mata tidak sepenuhnya konsisten.', 'Rambut membentuk helai berulang yang terlalu rapi.', 'Tekstur kulit tampak seragam tanpa pori alami.'],
    detailedExplanation: 'Ini adalah GAMBAR AI yang dibuat dari prompt potret cyberpunk dengan pencahayaan neon sintetis.'
  },
  {
    id: 'ai-gen-floating-city-27',
    imageUrl: 'https://image.pollinations.ai/prompt/cinematic%20AI-generated%20floating%20city%20above%20clouds%2C%20impossible%20architecture%2C%20ultra%20detailed?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Kota Melayang di Atas Awan',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Surreal floating city',
    clues: ['Bangunan tidak memiliki struktur penyangga yang masuk akal.', 'Bayangan kota tidak mengikuti arah cahaya awan.', 'Jendela gedung berulang secara terlalu seragam.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan kota surealis yang melayang dan struktur arsitektur mustahil.'
  },
  {
    id: 'ai-gen-robot-chef-28',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20humanoid%20robot%20chef%20in%20a%20futuristic%20kitchen%2C%20detailed%20concept%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Robot Koki di Dapur Futuristik',
    category: 'Teknologi',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Futuristic robotics concept art',
    clues: ['Sambungan jari robot tidak memiliki mekanisme yang jelas.', 'Pantulan alat masak berbeda dari sumber cahaya utama.', 'Teks pada panel dapur tampak tidak bermakna.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa konsep robot koki dengan detail mekanis dan lingkungan futuristik sintetis.'
  },
  {
    id: 'ai-gen-crystal-forest-29',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20magical%20crystal%20forest%20at%20sunset%2C%20fantasy%20environment%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Hutan Kristal Saat Matahari Terbenam',
    category: 'Alam',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Fantasy environment synthesis',
    clues: ['Kristal memantulkan warna tanpa sumber cahaya yang jelas.', 'Bentuk cabang dan kristal berulang secara matematis.', 'Kabut menyatu dengan objek jauh tanpa perspektif atmosfer.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa lanskap fantasi yang menggabungkan hutan dan kristal bercahaya.'
  },
  {
    id: 'ai-gen-ramen-space-30',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20bowl%20of%20ramen%20floating%20in%20space%2C%20surreal%20food%20photography?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Ramen Mengambang di Luar Angkasa',
    category: 'Kuliner',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Surreal food image generation',
    clues: ['Uap kuah tidak mengikuti arah gravitasi.', 'Topping terlihat berulang dan terlalu sempurna.', 'Pantulan mangkuk tidak sesuai dengan lingkungan luar angkasa.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan konsep kuliner surealis yang tidak dapat difoto dalam kondisi tersebut.'
  },
  {
    id: 'ai-gen-mechanical-bird-31',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20mechanical%20bird%20with%20brass%20wings%20on%20a%20clockwork%20tower?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Burung Mekanis di Menara Jam',
    category: 'Ilustrasi',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Steampunk mechanical illustration',
    clues: ['Roda gigi saling menembus tanpa hubungan mekanis.', 'Bulu logam memiliki pola yang berulang.', 'Bayangan burung dan menara tidak sejajar.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan ilustrasi steampunk dan struktur mekanis yang tidak sepenuhnya fungsional.'
  },
  {
    id: 'ai-gen-ocean-temple-32',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20underwater%20temple%20with%20glowing%20columns%20and%20floating%20fish%2C%20fantasy%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Kuil Bawah Laut Bercahaya',
    category: 'Arsitektur',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Underwater fantasy architecture',
    clues: ['Cahaya kolom tidak menyebar secara fisik di air.', 'Ikan latar memiliki bentuk dan arah yang berulang.', 'Partikel air tidak mengikuti kedalaman ruang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan kuil fantasi bawah laut dan pencahayaan generatif.'
  },
  {
    id: 'ai-gen-fantasy-fox-33',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20fantasy%20fox%20with%20bioluminescent%20fur%20in%20a%20moonlit%20forest?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Rubah Fantasi dengan Bulu Bercahaya',
    category: 'Hewan',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Bioluminescent animal synthesis',
    clues: ['Cahaya bulu tidak menerangi lingkungan sekitar.', 'Kumis dan telinga memiliki simetri berlebihan.', 'Tekstur bulu tampak seperti sapuan digital.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa hewan fantasi dengan efek bioluminesensi sintetis.'
  },
  {
    id: 'ai-gen-glass-house-34',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20transparent%20glass%20house%20in%20a%20desert%20with%20impossible%20reflections?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Rumah Kaca di Tengah Gurun',
    category: 'Arsitektur',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Impossible glass architecture',
    clues: ['Refleksi kaca menampilkan pemandangan dari sudut berbeda.', 'Bayangan rumah tidak sesuai bentuk bangunan.', 'Sambungan panel kaca tidak memiliki struktur rangka.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan rumah transparan dan refleksi arsitektur yang mustahil.'
  },
  {
    id: 'ai-gen-watercolor-city-35',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20watercolor%20city%20street%20with%20floating%20lanterns%2C%20artistic%20illustration?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Jalan Kota dengan Lentera Melayang',
    category: 'Ilustrasi',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Watercolor city illustration',
    clues: ['Tulisan pada papan kota tidak konsisten.', 'Lentera melayang tanpa tali atau penyangga.', 'Tekstur cat terlalu seragam pada banyak bidang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan gaya ilustrasi cat air dan elemen kota fantasi.'
  },
  {
    id: 'ai-gen-desert-train-36',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20futuristic%20train%20crossing%20a%20desert%20under%20two%20moons?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Kereta Futuristik di Bawah Dua Bulan',
    category: 'Teknologi',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Sci-fi transportation concept',
    clues: ['Pantulan dua bulan pada kaca kereta tidak konsisten.', 'Roda dan rel tidak terlihat memiliki hubungan mekanis.', 'Jejak kereta berhenti secara tidak wajar di pasir.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa konsep transportasi fiksi ilmiah di gurun.'
  },
  {
    id: 'ai-gen-flower-face-37',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20surreal%20portrait%20with%20flowers%20growing%20from%20the%20face%2C%20fine%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Potret Surealis dengan Bunga di Wajah',
    category: 'Potret Wajah',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Surreal portrait synthesis',
    clues: ['Bunga menyatu dengan kulit tanpa pangkal biologis.', 'Tekstur kelopak berulang pada sisi berbeda.', 'Kedalaman fokus wajah dan bunga tidak konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa potret surealis dengan elemen biologis yang tidak mungkin.'
  },
  {
    id: 'ai-gen-ice-castle-38',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20ice%20castle%20under%20the%20aurora%20borealis%2C%20cinematic%20fantasy?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Istana Es di Bawah Aurora',
    category: 'Arsitektur',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Cinematic fantasy architecture',
    clues: ['Pantulan aurora pada tiap bidang es berbeda-beda.', 'Menara memiliki ukuran yang tidak mengikuti perspektif.', 'Salju di udara membentuk pola berulang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan istana es fantasi dan aurora sintetis.'
  },
  {
    id: 'ai-gen-miniature-market-39',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20miniature%20night%20market%20inside%20a%20teacup%2C%20whimsical%20illustration?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Pasar Malam di Dalam Cangkir',
    category: 'Kuliner',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Whimsical miniature scene',
    clues: ['Skala kios dan manusia tidak konsisten.', 'Cahaya lampu tidak memiliki bayangan yang sesuai.', 'Detail benda kecil terlalu tajam secara bersamaan.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa adegan miniatur surealis di dalam cangkir.'
  },
  {
    id: 'ai-gen-astronaut-garden-40',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20astronaut%20watering%20a%20garden%20on%20Mars%2C%20detailed%20concept%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Astronaut Menyiram Taman di Mars',
    category: 'Ilustrasi',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Mars concept art',
    clues: ['Selang tidak terhubung jelas ke sumber air.', 'Refleksi helm tidak sesuai dengan taman.', 'Tanaman memiliki bentuk daun yang berulang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa konsep kehidupan futuristik di Mars.'
  },
  {
    id: 'ai-gen-levitating-books-41',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20ancient%20library%20with%20levitating%20books%20and%20golden%20light?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Perpustakaan dengan Buku Melayang',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    creatorInfo: 'Generasi AI: Magical library environment',
    clues: ['Buku melayang tidak memiliki arah gravitasi yang sama.', 'Rak buku menyatu pada sudut yang mustahil.', 'Tulisan pada sampul tidak terbaca konsisten.'],
    detailedExplanation: 'Ini adalah GAMBAR AI berupa perpustakaan fantasi dengan buku-buku melayang.'
  },
  {
    id: 'ai-gen-neon-jellyfish-42',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20giant%20neon%20jellyfish%20over%20a%20city%20at%20night%2C%20surreal%20art?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Ubur-Ubur Neon di Atas Kota',
    category: 'Hewan',
    difficulty: 'Mudah',
    creatorInfo: 'Generasi AI: Surreal neon creature art',
    clues: ['Cahaya ubur-ubur tidak menerangi gedung di bawahnya.', 'Tentakel memiliki pola simetris berlebihan.', 'Ukuran makhluk dan perspektif kota tidak seimbang.'],
    detailedExplanation: 'Ini adalah GAMBAR AI dengan makhluk laut raksasa dan cahaya neon surealis.'
  },
  {
    id: 'ai-gen-ancient-machine-43',
    imageUrl: 'https://image.pollinations.ai/prompt/AI-generated%20ancient%20machine%20covered%20in%20vines%20in%20a%20jungle%20temple?width=1200&height=800&nologo=true',
    isAi: true,
    title: 'Mesin Kuno di Kuil Hutan',
    category: 'Teknologi',
    difficulty: 'Tantangan',
    creatorInfo: 'Generasi AI: Ancient technology concept art',
    clues: ['Roda mesin tertutup tanaman tanpa tanda tekanan.', 'Pola ukiran berulang terlalu sempurna.', 'Sumber energi mesin tidak terlihat.'],
    detailedExplanation: 'Ini adalah GAMBAR AI yang memadukan teknologi fiksi dengan kuil hutan tropis.'
  },
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
    id: 'real-lighthouse-46',
    imageUrl: 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Mercusuar di Tepi Laut',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi pesisir',
    creatorInfo: 'Fotografi Asli: Coastal Architecture Photography',
    clues: ['Buih ombak berubah mengikuti permukaan batu.', 'Cat mercusuar memiliki keausan tidak seragam.', 'Kabut laut mengurangi detail objek jauh.'],
    detailedExplanation: 'Ini adalah FOTO ASLI yang menampilkan bangunan dan kondisi pesisir secara langsung.'
  },
  {
    id: 'real-greenhouse-47',
    imageUrl: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Tanaman di Rumah Kaca',
    category: 'Alam',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi tanaman',
    creatorInfo: 'Fotografi Asli: Botanical Photography',
    clues: ['Embun pada daun memiliki ukuran bervariasi.', 'Tulang daun mengikuti struktur biologis alami.', 'Pantulan kaca berubah sesuai posisi kamera.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan detail tanaman, embun, dan pantulan kaca yang bersifat fisik.'
  },
  {
    id: 'real-bread-basket-48',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Keranjang Roti di Meja',
    category: 'Kuliner',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi makanan',
    creatorInfo: 'Fotografi Asli: Food Photography',
    clues: ['Remah roti tersebar tanpa pola seragam.', 'Tekstur kulit roti memiliki retakan berbeda.', 'Bayangan keranjang mengikuti arah lampu.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan tekstur roti dan bayangan meja yang ditangkap kamera.'
  },
  {
    id: 'real-street-market-49',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Pasar Pakaian di Pusat Kota',
    category: 'Street Life',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi street market',
    creatorInfo: 'Fotografi Asli: Street Documentary Photography',
    clues: ['Lipatan kain dan gantungan memiliki variasi alami.', 'Orang di latar memiliki pose berbeda.', 'Papan toko tetap terbaca mengikuti perspektif.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dokumentasi pasar dengan banyak detail objek dan manusia yang tidak seragam.'
  },
  {
    id: 'real-piano-50',
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Piano di Ruang Konser',
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
    title: 'Kucing di Dekat Jendela',
    category: 'Hewan',
    difficulty: 'Mudah',
    source: 'Unsplash: fotografi hewan',
    creatorInfo: 'Fotografi Asli: Pet Photography',
    clues: ['Helai kumis memiliki arah dan panjang berbeda.', 'Cahaya jendela membentuk bayangan lembut.', 'Bulu di sekitar telinga memiliki kedalaman fokus optik.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan tekstur bulu dan pencahayaan jendela yang nyata.'
  },
  {
    id: 'real-wooden-bridge-53',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Jembatan Kayu di Hutan',
    category: 'Arsitektur',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi alam',
    creatorInfo: 'Fotografi Asli: Nature Architecture Photography',
    clues: ['Serat kayu memiliki arah yang berbeda pada tiap papan.', 'Lumutan mengikuti permukaan yang lembap.', 'Jalur jembatan menyusut sesuai perspektif kamera.'],
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
    title: 'Tetes Hujan di Jendela',
    category: 'Alam',
    difficulty: 'Sedang',
    source: 'Unsplash: fotografi hujan',
    creatorInfo: 'Fotografi Asli: Atmospheric Photography',
    clues: ['Ukuran tetes air bervariasi.', 'Distorsi latar mengikuti bentuk tiap tetes.', 'Cahaya kota dibiaskan secara berbeda di permukaan kaca.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dengan pembiasan cahaya dan tetes air yang terbentuk secara alami.'
  },
  {
    id: 'real-pottery-workshop-57',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    isAi: false,
    title: 'Meja Kerja Pengrajin Gerabah',
    category: 'Teknologi',
    difficulty: 'Tantangan',
    source: 'Unsplash: fotografi kerajinan',
    creatorInfo: 'Fotografi Asli: Craft Documentary Photography',
    clues: ['Bekas tanah liat tersebar tidak beraturan.', 'Alat kerja menunjukkan keausan berbeda.', 'Bentuk benda setengah jadi tidak identik.'],
    detailedExplanation: 'Ini adalah FOTO ASLI dokumentasi proses kerajinan dengan material dan alat yang digunakan manusia.'
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
]
```

## Catatan Verifikasi

- Endpoint GenAI berbasis prompt dapat menghasilkan gambar berbeda ketika dipanggil ulang; bila diperlukan hasil tetap, simpan hasil gambar ke `public/assets/` dan gunakan path lokal.
- Beberapa URL Unsplash dapat menampilkan gambar yang berbeda setelah perubahan CDN atau parameter; simpan salinan lokal bila dataset harus reproducible.
- Sebelum dipindahkan ke data aplikasi, cek semua URL dengan `onLoad` dan `onError`, lalu pastikan lisensi/syarat penggunaan sesuai kebutuhan proyek.
