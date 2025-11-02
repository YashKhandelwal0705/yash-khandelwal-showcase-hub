
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-32 left-20 w-[500px] h-[500px] bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-[600px] h-[600px] bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left space-y-7 animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Yash Khandelwal
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold animate-fade-in" style={{ animationDelay: '150ms' }}>
            Aspiring Data Scientist & Machine Learning Engineer
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Passionate about leveraging data-driven solutions and machine learning to solve complex real-world problems. Currently pursuing Computer Science Engineering at Lovely Professional University.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-2 animate-fade-in" style={{ animationDelay: '450ms' }}>
            <div className="flex gap-3">
              <a
                href="https://github.com/YashKhandelwal0705"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-subtle"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-khandelwal-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-subtle"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashkhandelwal0705@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-subtle"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1wdgs7X-AR3pIMp6cI9iParCtRKrLguOG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-dark hover-lift transition-all duration-300 shadow-card"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl"></div>
            <img
              src="/lovable-uploads/27f23704-a428-413d-93ed-480c32951bb2.png"
              alt="Yash Khandelwal - Data Scientist and Machine Learning Engineer"
              className="relative rounded-2xl w-full shadow-card hover:shadow-hover hover-lift transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
