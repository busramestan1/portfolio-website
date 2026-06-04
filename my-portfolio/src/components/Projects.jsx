import { motion } from 'framer-motion';

function Projects() {
  // SADECE senin GitHub'ındaki 6 GERÇEK repo burada yer alıyor. Eski projeler tamamen silindi.
  const myProjects = [
    {
      title: "APARTMAN YÖNETİM SİSTEMİ",
      description: "Dart ve Flutter mimarisi kullanılarak geliştirilmiş, apartman yönetimi ve sakinleri arasındaki iletişimi kolaylaştıran mobil uygulama.",
      techs: ["Dart", "Flutter", "Mobile"],
      flower: "🪻",
      repoUrl: "https://github.com/busramestan1/apartman_uygulamasi"
    },
    {
      title: "HUKUK DANIŞMANLIK  ",
      description: "Hukuk büroları için backend süreçlerini, dava takibini ve müvekkil yönetimini optimize eden API altyapısı projem.",
      techs: ["CSS", "API", "Backend"],
      flower: "🏵️",
      repoUrl: "https://github.com/busramestan1/law-firm-api"
    },
    {
      title: "MEDENİYETLER",
      description: "PHP tabanlı dinamik yapısı ve veri tabanı yönetimiyle tarihi ve kültürel medeniyetleri listeleyen web platformu.",
      techs: ["PHP", "Web", "Database"],
      flower: "🌻",
      repoUrl: "https://github.com/busramestan1/medeniyetler"
    },
    {
      title: "FORUM V-2",
      description: "Kullanıcı etkileşimini, modern arayüz bileşenlerini ve topluluk yönetimini hedefleyen responsive forum projesi.",
      techs: ["CSS", "Web Design"],
      flower: "🌺",
      repoUrl: "https://github.com/busramestan1/forumx2"
    },
    {
      title: "FORUM V-1",
      description: "PHP diliyle geliştirilmiş, dinamik konu açma, yorumlama ve kullanıcı oturum yönetimi içeren geleneksel forum platformu.",
      techs: ["PHP", "Backend", "Forum"],
      flower: "🌷",
      repoUrl: "https://github.com/busramestan1/forum"
    },
    {
      title: "FİLMKUTUSU",
      description: "HTML ve modern web elementleri kullanılarak tasarlanmış, film listeleme ve içerik keşif odaklı şık arayüz çalışması.",
      techs: ["HTML", "Web Design", "UI"],
      flower: "💮",
      repoUrl: "https://github.com/busramestan1/filmkutusu"
    }
  ];

  return (
    <section id="projects" className="bg-transparent py-20 border-b border-white/10 relative overflow-hidden w-full">
      
      {/* Arka Plan Dekoratif Çiçekleri */}
      <motion.div className="absolute top-12 left-10 text-4xl opacity-35 select-none pointer-events-none z-0" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>🌻</motion.div>
      <motion.div className="absolute top-6 right-24 text-3xl opacity-30 select-none pointer-events-none z-0" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>💮</motion.div>
      <motion.div className="absolute bottom-12 left-16 text-4xl opacity-25 select-none pointer-events-none z-0" animate={{ rotate: [-15, 15, -15], x: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>🪷</motion.div>
      {/* 🌸 Ek Bahçe Efektleri */}

<motion.div
  className="absolute top-24 left-[22%] text-3xl opacity-30 select-none pointer-events-none z-0"
  animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🌼
</motion.div>

<motion.div
  className="absolute top-32 right-[38%] text-4xl opacity-25 select-none pointer-events-none z-0"
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  🪻
</motion.div>

<motion.div
  className="absolute top-[18%] left-[60%] text-3xl opacity-25 select-none pointer-events-none z-0 hidden md:block"
  animate={{ rotate: [-20, 20, -20] }}
  transition={{ duration: 8, repeat: Infinity }}
>
  🌷
</motion.div>

<motion.div
  className="absolute top-[35%] right-10 text-4xl opacity-20 select-none pointer-events-none z-0"
  animate={{ y: [0, -12, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🌺
</motion.div>

<motion.div
  className="absolute top-[45%] left-8 text-3xl opacity-30 select-none pointer-events-none z-0"
  animate={{ rotate: 360 }}
  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
>
  🏵️
</motion.div>

<motion.div
  className="absolute top-[55%] right-[28%] text-4xl opacity-25 select-none pointer-events-none z-0 hidden md:block"
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🌸
</motion.div>

<motion.div
  className="absolute bottom-[35%] left-[35%] text-3xl opacity-30 select-none pointer-events-none z-0"
  animate={{ x: [0, 8, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🌼
</motion.div>

<motion.div
  className="absolute bottom-[28%] right-[12%] text-4xl opacity-25 select-none pointer-events-none z-0"
  animate={{ rotate: [-15, 15, -15] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🪷
</motion.div>

<motion.div
  className="absolute bottom-24 left-[20%] text-3xl opacity-30 select-none pointer-events-none z-0"
  animate={{ y: [0, -8, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  🌻
</motion.div>

<motion.div
  className="absolute bottom-16 right-[35%] text-4xl opacity-25 select-none pointer-events-none z-0"
  animate={{ rotate: 360 }}
  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
>
  💮
</motion.div>

<motion.div
  className="absolute bottom-10 left-[55%] text-3xl opacity-30 select-none pointer-events-none z-0 hidden lg:block"
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 6, repeat: Infinity }}
>
  🪻
</motion.div>

<motion.div
  className="absolute top-[72%] right-[45%] text-3xl opacity-20 select-none pointer-events-none z-0 hidden lg:block"
  animate={{ rotate: [-12, 12, -12] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  🌺
</motion.div>
      <div className="max-w-5xl mx-auto w-full px-6 md:px-24 relative z-10">
        <span className="text-indigo-700 font-mono text-xs tracking-widest uppercase block mb-2 font-semibold">
          // PROJELERİM
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight mb-12">
          Geliştirdiğim Yazılımlar & Repolar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {myProjects.map((project, index) => (
            <motion.div key={index} className="p-6 rounded-2xl border border-white/40 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
              <span className="absolute top-4 right-4 text-xl opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-350 select-none">{project.flower}</span>
              <div>
                <h3 className="text-zinc-850 font-bold text-lg mb-2 font-mono group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                <p className="text-zinc-600 text-xs font-light leading-relaxed mb-4">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-pink-100/60 text-pink-700 border border-pink-200/40">{tech}</span>
                  ))}
                </div>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 group/btn transition-colors">
                  <span>Kodları İncele</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;