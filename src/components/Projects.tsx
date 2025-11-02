
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
    <section id="projects" className="py-24 bg-gradient-to-b from-secondary/30 to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4 animate-fade-in">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in border border-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
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
