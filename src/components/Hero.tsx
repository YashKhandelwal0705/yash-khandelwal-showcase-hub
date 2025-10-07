
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Yash Khandelwal
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          <p className="text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
            Passionate about leveraging data-driven solutions and machine learning to solve complex real-world problems. Currently pursuing Computer Science Engineering at Lovely Professional University.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex space-x-6">
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
            <a
              href="https://drive.google.com/file/d/1wdgs7X-AR3pIMp6cI9iParCtRKrLguOG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <img
            src="/lovable-uploads/27f23704-a428-413d-93ed-480c32951bb2.png"
            alt="Yash Khandelwal Profile"
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
