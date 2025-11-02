
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-muted relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-2 leading-tight">
            Yash Khandelwal
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            Passionate about leveraging data-driven solutions and machine learning to solve complex real-world problems. Currently pursuing Computer Science Engineering at Lovely Professional University.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/YashKhandelwal0705"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-khandelwal-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashkhandelwal0705@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1wdgs7X-AR3pIMp6cI9iParCtRKrLguOG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-lg hover-lift transition-all duration-300"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl transform scale-95"></div>
            <img
              src="/lovable-uploads/27f23704-a428-413d-93ed-480c32951bb2.png"
              alt="Yash Khandelwal - Data Scientist and Machine Learning Engineer"
              className="relative rounded-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
