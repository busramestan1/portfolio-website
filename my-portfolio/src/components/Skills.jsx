import { motion } from 'framer-motion';

function Skills() {
  // Her teknolojiye açık temada parlayacak cıvıl cıvıl soft bir neon renk atıyoruz
  const skills = [
    { name: "C# .NET", glow: "hover:shadow-purple-400/50 hover:border-purple-400" },
    { name: "Python", glow: "hover:shadow-amber-400/50 hover:border-amber-400" },
    { name: "Flutter", glow: "hover:shadow-cyan-400/50 hover:border-cyan-400" },
    { name: "React", glow: "hover:shadow-indigo-400/50 hover:border-indigo-400" },
    { name: "PHP", glow: "hover:shadow-blue-400/50 hover:border-blue-400" },
    { name: "JavaScript", glow: "hover:shadow-yellow-500/50 hover:border-yellow-500" },
    { name: "SQL", glow: "hover:shadow-orange-400/50 hover:border-orange-400" },
    { name: "Git & GitHub", glow: "hover:shadow-emerald-400/50 hover:border-emerald-400" },
    { name: "Tailwind CSS", glow: "hover:shadow-teal-400/50 hover:border-teal-400" },
    { name: "Firebase", glow: "hover:shadow-rose-400/50 hover:border-rose-400" }
  ];

  // Sonsuz döngü hissi için diziyi üç katına çıkarıyoruz
  const tripleSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="bg-transparent py-20 border-b border-zinc-100 overflow-hidden relative w-full">
      
      {/* ── 🏵️ RASTGELE VE HAREKETLİ YENİ ÇİÇEK SERPİŞTİRMELERİ ── */}

      {/* Sol Üst: Başlığın hemen yanında yavaşça dönen bir kadife çiçeği */}
      <motion.div 
        className="absolute top-4 left-[28%] text-3xl opacity-35 select-none pointer-events-none z-0 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        🏵️                                     🪻
      </motion.div>

      {/* Sağ Üst: Bölümün en sağ yukarısında rüzgarda sallanan bir ayçiçeği */}
      <motion.div 
        className="absolute top-8 right-12 text-4xl opacity-30 select-none pointer-events-none z-0"
        animate={{ y: [0, -8, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🌻
      </motion.div>

      {/* Sol Orta: Bandın hemen altında, sol tarafta nefes alan bir nergis */}
      <motion.div 
        className="absolute bottom-24 left-8 text-3xl opacity-40 select-none pointer-events-none z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🌼
      </motion.div>

      {/* Orta Sağ: Bandın biraz üstünde asimetrik duran bir çingene gülü */}
      <motion.div 
        className="absolute top-20 right-[35%] text-2xl opacity-25 select-none pointer-events-none z-0 hidden lg:block"
        animate={{ rotate: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🌺    🌼
      </motion.div>

      {/* Sağ Alt Köşe: Sayfanın en sağ altında tatlı bir ortanca detayı */}
      <motion.div 
        className="absolute bottom-4 right-20 text-4xl opacity-35 select-none pointer-events-none z-0"
        animate={{ x: [0, 8, 0], y: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        💮
      </motion.div>

      {/* Sol Alt Köşe: Eski düz yaprağı daha estetik ve hareketli bir lale ile değiştirdik */}
      <motion.div 
        className="absolute bottom-3 left-6 text-3xl opacity-45 select-none pointer-events-none z-0"
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🌷
      </motion.div>

      {/* ──────────────────────────────────────────────────────────────────────── */}

      <div className="max-w-7xl mx-auto w-full px-6 md:px-24 mb-12 relative z-10">
        <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase block mb-2">// TEKNOLOJİLER</span>
        <h2 className="text-3xl font-bold text-zinc-800 tracking-tight">Kullandığım Teknolojiler & Araçlar</h2>
      </div>

      {/* Sürüklenebilir Bant Alanı */}
      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing relative py-6 z-10">
        
        {/* Yumuşak Geçiş Kenarlıkları */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ffc3c9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ffc3c9] to-transparent z-10 pointer-events-none"></div>

        {/* Framer Motion Animasyonlu Bant */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap w-max px-4"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 16,
              ease: "linear",
            },
          }}
        >
          {tripleSkills.map((tech, index) => (
            <div 
              key={index}
              className={`inline-block px-8 py-4 rounded-xl border border-zinc-200 bg-white/80 backdrop-blur-sm text-zinc-700 font-medium text-lg transition-all duration-300 select-none hover:-translate-y-1 hover:text-zinc-900 ${tech.glow}`}
            >
              {tech.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;