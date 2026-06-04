import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'; // Sadece bu satırı ekledin
import Skills from './components/Skills';
import ContactAndFooter from './components/ContactAndFooter';

function App() {
  return (
    <div className="bg-[#ffc3c9] min-h-screen text-zinc-800 selection:bg-pink-300 overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects /> {/* Ve buraya yerleştirdin */}
        <Skills />
        <ContactAndFooter />
      </main>
    </div>
  )
}

export default App;