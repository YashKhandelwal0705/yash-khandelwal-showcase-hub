
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>
      <div className="absolute inset-0" style={{ background: 'var(--gradient-subtle)' }}></div>
      
      {/* Ambient Light Effects */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-accent rounded-full blur-[140px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 flex flex-col lg:flex-row items-center gap-20 lg:gap-24 relative z-10">
        <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
              Yash Khandelwal
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-dark rounded-full mx-auto lg:mx-0"></div>
          </div>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold leading-tight animate-slide-up" style={{ animationDelay: '100ms' }}>
            Aspiring Data Scientist &<br className="hidden sm:block" /> Machine Learning Engineer
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.8] max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Passionate about leveraging data-driven solutions and machine learning to solve complex real-world problems. Currently pursuing Computer Science Engineering at Lovely Professional University.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex gap-4">
              <a
                href="https://github.com/YashKhandelwal0705"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-khandelwal-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashkhandelwal0705@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover-lift shadow-sm hover:shadow-md"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1wdgs7X-AR3pIMp6cI9iParCtRKrLguOG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-xl font-semibold hover:shadow-glow hover-lift transition-all duration-300 shadow-lg"
            >
              <FileDown className="mr-2.5 h-5 w-5" />
              Download CV
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-scale">
              <img
                src="/lovable-uploads/27f23704-a428-413d-93ed-480c32951bb2.png"
                alt="Yash Khandelwal - Data Scientist and Machine Learning Engineer"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
