
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-card/80 backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-playfair text-2xl font-bold text-primary">YK</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">About</a>
            <a href="#projects" className="text-foreground hover:text-primary font-medium transition-colors">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary font-medium transition-colors">Skills</a>
            <a href="#certifications" className="text-foreground hover:text-primary font-medium transition-colors">Certifications</a>
            <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/YashKhandelwal0705"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-khandelwal-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:yashkhandelwal0705@gmail.com"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-card border-b border-border`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#about" className="block px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary font-medium transition-all">About</a>
          <a href="#projects" className="block px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary font-medium transition-all">Projects</a>
          <a href="#skills" className="block px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary font-medium transition-all">Skills</a>
          <a href="#certifications" className="block px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary font-medium transition-all">Certifications</a>
          <a href="#contact" className="block px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-secondary font-medium transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
