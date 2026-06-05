import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// Dosya yolunu ve adını tam olarak buraya yaz
import benimAvatarim from './src/assets/busra-avatar.png';

function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-transparent flex items-center px-6 md:px-24 pt-20 relative overflow-hidden"
    >
      {/* ── 🌟 YENİ: SAĞA SOLA EKLEMEN DIJITAL BAHAR ELEMENTLERİ (Yapıyı Bozmaz) ── */}
      
      {/* Sol Üst: Kendi etrafında hipnotik ve yavaşça dönen taze papatya */}
      <motion.div 
        className="absolute top-28 left-6 md:left-16 text-4xl opacity-40 select-none pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        🌼
      </motion.div>

      {/* Sol Alt: Butonların hemen aşağısında rüzgarda tatlı tatlı sallanan yaprak */}
      <motion.div 
        className="absolute bottom-16 left-12 md:left-32 text-3xl opacity-35 select-none pointer-events-none z-0"
        animate={{ rotate: [-15, 15, -15], y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍃
      </motion.div>

      {/* Sağ Üst: Avatar çerçevesinin üzerinde asılı duran beyaz buket */}
      <motion.div 
        className="absolute top-24 right-12 md:right-40 text-5xl opacity-30 select-none pointer-events-none z-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💐
      </motion.div>

      {/* Sağ Alt: Sayfa geçişine doğru süzülen beyaz çiçek yaprağı */}
      <motion.div 
        className="absolute bottom-20 right-6 md:right-20 text-4xl opacity-40 select-none pointer-events-none z-0"
        animate={{ x: [0, 10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        💮
      </motion.div>

      {/* ──────────────────────────────────────────────────────────────────────── */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10">
        
        {/* SOL TARAF: Cıvıl Cıvıl Metinler ve Canlı Butonlar */}
        <div className="flex flex-col justify-center items-start text-left">
          <div className="text-indigo-600 font-mono text-sm mb-4 tracking-widest uppercase font-semibold">
            ✨ Dünyama Hoş Geldin
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-800 tracking-tight leading-tight mb-6">
  Ben Büşra.
  <br />

  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
    <TypeAnimation
      sequence={[
        'Bilgisayar Programcısıyım.',
        2000,
        'Full-Stack Developerım.',
        2000,
        'Backend Geliştiricisiyim.',
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={true}
    />
  </span>
</h1>

          <p className="text-zinc-600 text-base md:text-lg max-w-xl font-light mb-8 leading-relaxed">
            Modern web uygulamaları ve mobil çözümler geliştirmeye odaklanan bir yazılımcıyım. 
            Temiz, modüler ve yüksek performanslı kodlar yazmayı seviyorum.
          </p>

          <div className="flex gap-4">
            <a 
              href="#about"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all text-white font-medium rounded-xl shadow-md shadow-indigo-500/10"
            >
              Kariyer Yolculuğum
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 bg-[#fdb8bf] hover:bg-zinc-50 border border-zinc-200 text-zinc-700 font-medium rounded-xl transition-all active:scale-95 shadow-sm"
            >
              İletişime Geç
            </a>
          </div>
        </div>
        

        {/* SAĞ TARAF: Büyüyen/Açan Çiçek Animasyonu ve Avatar Alanı */}
        <div className="flex justify-center items-center relative">
          
          {/* PINTEREST TARZI BÜYÜYEN/AÇAN ÇİÇEK ANİMASYONU */}
          <motion.div 
            className="absolute -z-10 text-[180px] md:text-[240px] opacity-20 select-none pointer-events-none"
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 0.25 }}
            transition={{ 
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.2 
            }}
          >
            🌸
          </motion.div>

          {/* Arkadaki Soft Renkli Parlama Efekti */}
          <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-3xl -z-20 animate-pulse"></div>
          
          {/* Görsel Çerçevesi - Açık Temaya Uyarlandı */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl border border-zinc-200 bg-white/60 p-4 backdrop-blur-sm flex justify-center items-center overflow-hidden shadow-xl shadow-zinc-200/50">
            <img 
              src={benimAvatarim} alt="Avatar"
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full rounded-xl bg-zinc-50 border border-dashed border-zinc-300 flex-col justify-center items-center text-zinc-400 font-mono text-xs">
              <span className="text-2xl mb-2">🎨</span>
              <span>[...]</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default Hero;