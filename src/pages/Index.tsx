
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Training />
      <Achievements />
      <Contact />
      <footer className="bg-gradient-to-t from-secondary/30 to-background border-t border-border/50 py-8">
        <div className="content-container">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} Yash Khandelwal. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
