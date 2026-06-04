import { motion } from 'framer-motion';

function About() {
  // Çiçeklerin pıt pıt açma yaylanma animasyonu
  const flowerPop = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2 + (i * 0.15)
      }
    })
  };

  return (
    <section id="about" className="min-h-screen bg-transparent flex items-center px-6 md:px-24 py-20 border-b border-white/10 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto w-full relative">
        {/* 🌸 EXTRA BAHÇE EFEKTİ */}

<motion.div
  className="absolute top-0 left-0 text-4xl opacity-20 pointer-events-none select-none"
  animate={{ rotate: 360 }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
>
  🌻
</motion.div>

<motion.div
  className="absolute top-8 right-8 text-3xl opacity-25 pointer-events-none select-none"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🪻
</motion.div>

<motion.div
  className="absolute top-32 left-[22%] text-3xl opacity-20 pointer-events-none select-none"
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  🌼
</motion.div>

<motion.div
  className="absolute top-20 right-[28%] text-4xl opacity-20 pointer-events-none select-none hidden md:block"
  animate={{ rotate: [-15, 15, -15] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🌸
</motion.div>

<motion.div
  className="absolute top-[35%] left-4 text-4xl opacity-20 pointer-events-none select-none"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🌷
</motion.div>

<motion.div
  className="absolute top-[40%] right-4 text-4xl opacity-20 pointer-events-none select-none"
  animate={{ rotate: [-10, 10, -10] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  💮
</motion.div>

<motion.div
  className="absolute top-[55%] left-[12%] text-3xl opacity-20 pointer-events-none select-none hidden lg:block"
  animate={{ x: [0, 8, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🌺
</motion.div>

<motion.div
  className="absolute top-[58%] right-[15%] text-4xl opacity-20 pointer-events-none select-none"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🪷
</motion.div>

<motion.div
  className="absolute bottom-32 left-[25%] text-3xl opacity-20 pointer-events-none select-none"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  🌼
</motion.div>

<motion.div
  className="absolute bottom-24 right-[20%] text-4xl opacity-20 pointer-events-none select-none"
  animate={{ rotate: 360 }}
  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
>
  🏵️
</motion.div>

<motion.div
  className="absolute bottom-10 left-10 text-5xl opacity-20 pointer-events-none select-none"
  animate={{ rotate: [-15, 15, -15] }}
  transition={{ duration: 7, repeat: Infinity }}
>
  🌻
</motion.div>

<motion.div
  className="absolute bottom-10 right-10 text-4xl opacity-20 pointer-events-none select-none"
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🪻
</motion.div>

<motion.div
  className="absolute top-[18%] left-[55%] text-3xl opacity-15 pointer-events-none select-none hidden lg:block"
  animate={{ rotate: [-20, 20, -20] }}
  transition={{ duration: 8, repeat: Infinity }}
>
  🌸🌼
</motion.div>

<motion.div
  className="absolute bottom-[35%] right-[35%] text-3xl opacity-15 pointer-events-none select-none hidden lg:block"
  animate={{ x: [0, 10, 0] }}
  transition={{ duration: 7, repeat: Infinity }}
>
  🪻🌷
</motion.div>
        
        {/* ── 🌿 BAŞLIĞIN ETRAFINDAN SIKÇA SARILAN SARMAŞIK VE ÇİÇEKLER ── */}
        <div className="relative mb-12 inline-block">
          <span className="text-indigo-700 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
            // KARİYER & EĞİTİM
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight relative z-10">
            Hakkımda & Deneyim
          </h2>

          {/* Başlığın hemen altından kıvrılıp yazıya doğru uzanan mini sarmaşık dalı */}
          <svg width="200" height="40" viewBox="0 0 120 40" fill="none" className="absolute -bottom-6 left-0 pointer-events-none select-none">
            <motion.path
              d="M0 10 Q 30 30, 60 10 T 120 20"
              stroke="#059669"
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </svg>

          {/* Başlığın hemen yanındaki sık çiçek tomurcukları */}
          <motion.span custom={1} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute -top-3 -right-8 text-2xl select-none pointer-events-none">🌸</motion.span>
          <motion.span custom={2} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute -bottom-4 right-12 text-xl select-none pointer-events-none">🪷🪻🌷🌺💮🌹🌻</motion.span>
        </div>

        {/* Alt İçerik Düzeni */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-6">
          
          {/* Sol Kolon: Profil Özeti (Çiçekler bu kutunun dibine sımsıkı sarılıyor) */}
          <div className="md:col-span-1 relative">
            
            {/* Kutunun arkasından ve solundan kıvrılan dikey daldırma sarmaşık */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 pointer-events-none select-none hidden md:block">
              <svg width="20" height="100%" viewBox="0 0 20 200" preserveAspectRatio="none" fill="none">
                <motion.path
                  d="M10 0 Q 20 50, 5 100 T 10 200"
                  stroke="#059669"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />
              </svg>
              {/* Dalın üzerindeki bitişik sık çiçekler */}
                <motion.span custom={1} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-4 -left-3 text-xl">🌸</motion.span>

                <motion.span custom={2} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-16 -left-2 text-lg">🏵️</motion.span>

                <motion.span custom={3} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-28 -left-3 text-xl">💮</motion.span>

                <motion.span custom={4} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-40 -left-2 text-lg">🪻</motion.span>

                <motion.span custom={5} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-52 -left-3 text-xl">🌺</motion.span>

                <motion.span custom={6} variants={flowerPop} initial="hidden" whileInView="visible" viewport={{ once: true }} className="absolute top-64 -left-2 text-lg">💮</motion.span>
                 
            </div>

            {/* Profil Metin Kutusu */}
            <div className="text-zinc-850 font-normal leading-relaxed text-sm flex flex-col gap-4 bg-white/50 p-6 rounded-2xl backdrop-blur-sm border border-white/30 shadow-sm relative z-10">
              <p>
                Borsa İstanbul MTA lisesinde temellerini attığım yazılım serüvenimi, üniversite eğitimi ve kurumsal staj deneyimleriyle harmanlayarak çok yönlü bir <strong className="text-indigo-700 font-semibold">Full-Stack Geliştirici</strong> olarak sürdürüyorum.
              </p>
              <p>
                Büyük ölçekli sistemlerin arka plan mimarilerinden, son kullanıcının dokunduğu mobil ve web arayüzlerine kadar geniş bir yelpazede performans ve optimizasyon odaklı çözümler üretiyorum.
              </p>
            </div>
          </div>

          {/* Sağ Kolon: Deneyim Zaman Tüneli Kartları */}
          <div className="md:col-span-2 flex flex-col gap-6 relative border-l border-dashed border-emerald-600/30 pl-6 ml-2">
            
            {/* Kart 1: Bursa Büyükşehir */}
            <motion.div className="relative group" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-500"></div>
              <div className="p-5 rounded-xl border border-white/40 bg-white/80 shadow-md group-hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-zinc-800 font-bold text-base">Full-Stack Developer Stajyeri</h3>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">2026 - Günümüz</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono mb-2">Bursa Büyükşehir Belediyesi • Yazılım Şube Müdürlüğü</p>
                <p className="text-zinc-700 text-xs font-light leading-relaxed">Kurumsal yazılım şubesi bünyesinde, belediyecilik süreçlerini dijitalleştiren web ve mobil projelerin mimari tasarımında aktif rol alıyorum.</p>
              </div>
            </motion.div>

            {/* Kart 2: Üniversite */}
            <motion.div className="relative group" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-500"></div>
              <div className="p-5 rounded-xl border border-white/40 bg-white/80 shadow-md group-hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-zinc-800 font-bold text-base">Bilgisayar Programcılığı</h3>
                  <span className="text-[10px] font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded font-medium">2024 - 2026</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono mb-2">Bandırma Onyedi Eylül Üniversitesi • Önlisans</p>
                <p className="text-zinc-700 text-xs font-light leading-relaxed">Modern web technologies, nesne yönelimli programlama ve veri yapıları üzerine odaklanarak eğitimimi başarıyla tamamladım.</p>
              </div>
            </motion.div>

            {/* Kart 3: Lise */}
            <motion.div className="relative group" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-emerald-500"></div>
              <div className="p-5 rounded-xl border border-white/40 bg-white/80 shadow-md group-hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-zinc-800 font-bold text-base">Bilişim Teknolojileri Alanı</h3>
                  <span className="text-[10px] font-mono bg-zinc-200 text-zinc-700 px-2 py-0.5 rounded font-medium">Sayısal Mezuniyet</span>
                </div>
                <p className="text-zinc-500 text-xs font-mono mb-2">Borsa İstanbul Mesleki ve Teknik Anadolu Lisesi</p>
                <p className="text-zinc-700 text-xs font-light leading-relaxed">Yazılım mimarilerine, temel kodlama mantığına ve bilgisayar sistemlerine ilk adımımı attığım lise dönemi.</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;