import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Linklerin yanındaki çiçeklerin hover animasyon ayarı
  const flowerBounce = {
    hover: { 
      rotate: [0, -15, 15, 0],
      scale: 1.2,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#ffc3c9]/80 backdrop-blur-md border-b border-zinc-200/30 px-6 md:px-12 py-4 flex justify-between items-center transition-all">
      
      {/* Sol Taraf: Kod Bloğu İsim + 🪷 Lotus Detayı */}
      <motion.div 
        className="font-mono text-xl font-bold tracking-wider text-indigo-600 cursor-pointer hover:text-indigo-500 transition-colors flex items-center gap-2"
        whileHover={{ scale: 1.02 }}
      >
        <span>{"<Büşra />"}</span>
        <span className="text-lg animate-pulse">🪷</span>
      </motion.div>

      {/* Mobil Menü Butonu (Hamburger - Açık Tema Uyumlu) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-zinc-700 hover:text-indigo-600 focus:outline-none text-2xl transition-colors"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Sağ Taraf: Linkler & Yeni Farklı Çiçek Emojileri */}
      <div className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto 
        bg-[#ffc3c9] md:bg-transparent border-b md:border-none border-zinc-200/40 p-6 md:p-0
        items-center gap-6 md:gap-8 font-medium text-sm text-zinc-700 transition-all
      `}>
        
        {/* Hakkımda Linki + 🪻 Lavanta */}
        <motion.a 
          href="#about" 
          onClick={() => setIsOpen(false)} 
          className="hover:text-indigo-600 transition-colors duration-250 flex items-center gap-1.5 group"
          whileHover="hover"
        >
          <motion.span variants={flowerBounce} className="text-base">🪻</motion.span>
          <span>Hakkımda</span>
        </motion.a>

         {/* projeler Linki + 🌷 lale */}
          

           <motion.a 
          href="#projects" 
          onClick={() => setIsOpen(false)} 
          className="hover:text-indigo-600 transition-colors duration-250 flex items-center gap-1.5 group"
          whileHover="hover"
        >
          <motion.span variants={flowerBounce} className="text-base">🌷</motion.span>
          <span>Projeler</span>
        </motion.a>


        {/* Yetenekler Linki + 🌻 Ayçiçeği */}
        <motion.a 
          href="#skills" 
          onClick={() => setIsOpen(false)} 
          className="hover:text-indigo-600 transition-colors duration-250 flex items-center gap-1.5 group"
          whileHover="hover"
        >
          <motion.span variants={flowerBounce} className="text-base">🌻</motion.span>
          <span>Yetenekler</span>
        </motion.a>

        {/* İletişim Linki + 🌹 Gül */}
        <motion.a 
          href="#contact" 
          onClick={() => setIsOpen(false)} 
          className="hover:text-indigo-600 transition-colors duration-250 flex items-center gap-1.5 group"
          whileHover="hover"
        >
          <motion.span variants={flowerBounce} className="text-base">🌹</motion.span>
          <span>İletişim</span>
        </motion.a>

      </div>
    </nav>
  );
}

export default Navbar;