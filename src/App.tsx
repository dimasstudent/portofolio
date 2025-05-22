import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background antialiased">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;