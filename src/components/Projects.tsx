
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "BlogForge – Blog Website",
      description: "Built a fully functional blog platform with user authentication, post CRUD, and contact form integration. Designed a secure Flask backend with SQLite for lightweight local data management and integrated email notifications using SMTP.",
      tags: ["Python", "Flask", "SQLite", "SMTP", "HTML/CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      github: "https://github.com/YashKhandelwal0705/BlogForge-BlogWebsite"
    },
    {
      title: "Insurance Claim Severity Prediction System",
      description: "Built an ML pipeline with XGBoost & Random Forest, achieving R2 0.87 through feature engineering and tuning. Integrated SHAP explainability for premium adjustment, fraud risk scoring, and claim decision support.",
      tags: ["Python", "XGBoost", "Random Forest", "SHAP", "Scikit-learn"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "https://github.com/YashKhandelwal0705/insurance_claim_prediction"
    },
    {
      title: "Real-Time Sign Language Translation",
      description: "Developed a real-time Sign Language Translator using YOLOv8 Nano for 4 gestures. Engineered a Flask-based app with MediaPipe and OpenCV for real-time gesture recognition with optimized hyperparameters for stable GPU performance.",
      tags: ["YOLOv8", "Flask", "MediaPipe", "OpenCV", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      github: "https://github.com/YashKhandelwal0705/Real-Time-Sign-Language-Translation"
    }
  ];

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Featured Projects
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            Crafting innovative solutions through data science and machine learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden hover-lift animate-slide-up border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="p-8 space-y-5">
                <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-base leading-[1.75]">{project.description}</p>
                
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary/60 text-secondary-foreground text-sm px-3.5 py-1.5 rounded-lg font-medium border border-border/30 hover:border-primary/30 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2.5 mt-4 h-12 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-xl"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
