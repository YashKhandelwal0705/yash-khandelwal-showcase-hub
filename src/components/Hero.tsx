
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Yash Khandelwal
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 mb-6">
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          <p className="text-gray-600 mb-8 max-w-lg">
            Computer Science Engineering student at Lovely Professional University, passionate about solving complex problems through data-driven solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/YashKhandelwal0705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-khandelwal-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:yashkhandelwal0705@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="Profile"
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
