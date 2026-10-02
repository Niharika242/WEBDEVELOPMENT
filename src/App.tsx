import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import MotionSystem from './components/animations/MotionSystem';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
      <MotionSystem />
    </>
  );
}
