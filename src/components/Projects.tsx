
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
    <section id="projects" className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
      <div className="content-container">
        <h2 className="section-header font-playfair animate-fade-in">
          Featured Projects
        </h2>
        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden hover-lift animate-fade-in border border-border shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group h-52">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-7 space-y-4">
                <h3 className="text-xl font-bold text-foreground leading-snug">{project.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground text-[13px] px-3 py-1.5 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 mt-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4" />
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
