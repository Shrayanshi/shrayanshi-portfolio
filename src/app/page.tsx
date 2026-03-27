import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AICompanion from "@/components/AICompanion";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Impact />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <AICompanion />
    </main>
  );
}
