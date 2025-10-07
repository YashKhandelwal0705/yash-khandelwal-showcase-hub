
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
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Yash Khandelwal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
