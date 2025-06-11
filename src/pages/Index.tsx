
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import MagicalBackground from "@/components/MagicalBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <MagicalBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-forest-800/90 backdrop-blur-sm text-white py-6 md:py-8 relative z-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-forest-200 text-sm md:text-base">
            © 2025 Anish Aman. Built with ❤️ and lots of ☕
          </p>
          <p className="text-forest-300 text-xs md:text-sm mt-2">
            "Data is the new soil for growing smarter solutions" 🌱✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
