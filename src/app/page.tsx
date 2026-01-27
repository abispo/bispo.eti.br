import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navigation />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Services />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}
