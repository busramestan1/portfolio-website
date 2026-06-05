import { motion } from "framer-motion";

function ContactAndFooter() {
  const myEmail = "busramestan1021@gmail.com";

  // Gmail compose ekranını açar
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`;

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/busramestan1",
      handle: "@busramestan1",
      hover: "hover:bg-purple-50 hover:border-purple-200",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/b%C3%BC%C5%9Fra-mestan-2aa863353/",
      handle: "Büşra Mestan",
      hover: "hover:bg-blue-50 hover:border-blue-200",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/busramstn",
      handle: "@busramstn",
      hover: "hover:bg-pink-50 hover:border-pink-200",
    },
  ];

  return (
    <>
      <div id="top"></div>

      <section
        id="contact"
        className="relative bg-[#ffc3c9] px-6 md:px-24 pt-20 pb-12 overflow-hidden"
      >
        {/* Dekoratif Blur Efektleri */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200/30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200/30 blur-3xl rounded-full"></div>

                  {/* 🌸 Bahçe Efektleri */}

          <motion.div
            className="absolute top-10 left-10 text-4xl opacity-40 z-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            🌻
          </motion.div>

          <motion.div
            className="absolute top-24 right-20 text-3xl opacity-35 z-0 pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🪻
          </motion.div>

          <motion.div
            className="absolute top-40 left-[35%] text-4xl opacity-30 z-0 pointer-events-none"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌼
          </motion.div>

          <motion.div
            className="absolute top-32 right-[35%] text-3xl opacity-30 z-0 pointer-events-none"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            💮
          </motion.div>

          <motion.div
            className="absolute top-[55%] left-6 text-4xl opacity-35 z-0 pointer-events-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🪷
          </motion.div>

          <motion.div
            className="absolute top-[45%] right-8 text-3xl opacity-35 z-0 pointer-events-none"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🌻
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-[20%] text-4xl opacity-35 z-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            🌼
          </motion.div>

          <motion.div
            className="absolute bottom-32 right-[25%] text-3xl opacity-30 z-0 pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            🪻
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-16 text-4xl opacity-40 z-0 pointer-events-none"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💮
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-16 text-5xl opacity-35 z-0 pointer-events-none"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🪷
          </motion.div>

          <motion.div
            className="absolute top-[20%] left-[60%] text-3xl opacity-25 z-0 pointer-events-none hidden md:block"
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🌸
          </motion.div>

          <motion.div
            className="absolute top-[75%] left-[45%] text-3xl opacity-25 z-0 pointer-events-none hidden md:block"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🏵️
          </motion.div>

          <motion.div
            className="absolute bottom-[40%] right-[8%] text-4xl opacity-25 z-0 pointer-events-none hidden md:block"
            animate={{ rotate: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            🌺
          </motion.div>



        <div className="max-w-5xl mx-auto w-full relative z-10">
          <span className="text-indigo-500 font-mono text-xs tracking-widest uppercase block mb-2">
            // İLETİŞİM
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight mb-12">
            İletişim & Dijital Ağlar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#ffc3c9] rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
            {/* Sol Panel */}
            <div className="md:col-span-2 p-6 font-mono text-xs md:text-sm text-zinc-700 border-b md:border-b-0 md:border-r border-zinc-100">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-rose-300"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-300"></div>
              </div>

              <p className="text-zinc-400 mb-2">
                // developer-notes.js
              </p>

              <p className="text-pink-500">
                const <span className="text-zinc-800">developer</span> = {"{"}
              </p>

              <p className="pl-4 text-zinc-600">
                isim:
                <span className="text-emerald-600"> "Büşra"</span>,
              </p>

              <p className="pl-4 text-zinc-600">
                rol:
                <span className="text-emerald-600">
                  {" "}
                  "Full-Stack Developer"
                </span>
                ,
              </p>

              <p className="pl-4 text-zinc-600">
                lokasyon:
                <span className="text-emerald-600">
                  {" "}
                  "Bursa, Türkiye"
                </span>
                ,
              </p>

              <p className="pl-4 text-zinc-600">
                ePosta:
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 hover:text-indigo-600 hover:underline ml-1"
                >
                  "{myEmail}"
                </a>
                ,
              </p>

              <p className="pl-4 text-zinc-600">
                durum:
                <span className="text-emerald-600">
                  {" "}
                  "Yeni projelere hazır"
                </span>
              </p>

              <p className="text-pink-500">{"};"}</p>

              <div className="mt-8 p-4 rounded-xl bg-[#ffc3c9] border border-zinc-100 text-zinc-500 text-xs">
                💌 Mail adresine tıkladığında Gmail'de yeni mesaj ekranı
                açılır.
              </div>
            </div>

            {/* Sağ Panel */}
            <div className="p-6 flex flex-col justify-center gap-4 bg-[#ffc3c9]">
              <h4 className="text-zinc-500 font-semibold text-sm tracking-wide uppercase font-mono mb-2">
                // Dijital Ağlarım
              </h4>

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-4
                    rounded-xl
                    border
                    border-zinc-200
                    bg-[#ffc3c9]
                    flex
                    justify-between
                    items-center
                    transition-all
                    duration-300
                    hover:-translate-x-1
                    ${social.hover}
                  `}
                >
                  <span className="font-medium text-sm text-zinc-800">
                    {social.name}
                  </span>

                  <span className="font-mono text-xs text-zinc-500">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center text-zinc-500 text-xs gap-4 font-mono">
            <div>
              <p>
                © {new Date().getFullYear()} Büşra. Crafted with React &
                Tailwind.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Şu an Bursa'da kod yazıyor</span>
              </div>

              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white border border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 shadow-sm"
                aria-label="Yukarı Çık"
              >
                ↑
              </a>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default ContactAndFooter;