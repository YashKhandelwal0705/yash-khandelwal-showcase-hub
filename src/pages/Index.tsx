import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Training from "@/components/Training";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="glow-line" />
      <About />
      <Projects />
      <div className="glow-line" />
      <Skills />
      <Education />
      <Training />
      <div className="glow-line" />
      <Certifications />
      <Achievements />
      <div className="glow-line" />
      <Contact />
      <footer className="border-t border-border/30 py-10">
        <div className="content-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Yash Khandelwal
            </p>
            <p className="text-xs text-muted-foreground/60">
              Designed & built with precision
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;