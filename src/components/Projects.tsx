
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 animate-fade-in">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-5 w-5 mr-2" />
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
