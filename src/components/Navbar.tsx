
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-3xl font-bold text-primary font-playfair hover:scale-105 transition-transform duration-300">
            YK
          </a>
          
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#about" className="text-foreground hover:text-primary font-semibold text-base transition-colors duration-300">About</a>
            <a href="#projects" className="text-foreground hover:text-primary font-semibold text-base transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary font-semibold text-base transition-colors duration-300">Skills</a>
            <a href="#certifications" className="text-foreground hover:text-primary font-semibold text-base transition-colors duration-300">Certifications</a>
            <a href="#contact" className="text-foreground hover:text-primary font-semibold text-base transition-colors duration-300">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/YashKhandelwal0705"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-khandelwal-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:yashkhandelwal0705@gmail.com"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-card/95 backdrop-blur-md border-t border-border`}>
        <div className="px-6 pt-4 pb-6 space-y-2">
          <a href="#about" className="block px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-secondary font-semibold transition-all duration-300">About</a>
          <a href="#projects" className="block px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-secondary font-semibold transition-all duration-300">Projects</a>
          <a href="#skills" className="block px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-secondary font-semibold transition-all duration-300">Skills</a>
          <a href="#certifications" className="block px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-secondary font-semibold transition-all duration-300">Certifications</a>
          <a href="#contact" className="block px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-secondary font-semibold transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
