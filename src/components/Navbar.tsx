
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-playfair text-xl font-bold text-indigo-600">YK</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600">Skills</a>
            <a href="#certifications" className="text-gray-700 hover:text-indigo-600">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/YashKhandelwal0705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-khandelwal-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:yashkhandelwal0705@gmail.com"
              className="text-gray-600 hover:text-indigo-600"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
          <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
          <a href="#certifications" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Certifications</a>
          <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
