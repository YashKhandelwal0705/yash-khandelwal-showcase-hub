
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Insurance Claim Severity Prediction System",
      description: "Built an end-to-end ML pipeline using XGBoost and Random Forest, achieving R2 score of 0.87 on claim severity prediction through advanced feature engineering and hyperparameter tuning.",
      tags: ["Machine Learning", "XGBoost", "Random Forest", "Python", "SHAP", "Scikit-learn"],
      image: "/lovable-uploads/53920492-1217-4755-937a-2ee5f30b5272.png",
      github: "https://github.com/YashKhandelwal0705/insurance_claim_prediction"
    },
    {
      title: "Real Time Sign Language Translation",
      description: "Developed a real-time Sign Language Translation system utilizing YOLOv8 Nano architecture for hand gesture recognition, implementing advanced feature extraction and normalization techniques for 4 distinct gestures.",
      tags: ["YOLOv8", "Flask", "MediaPipe", "OpenCV", "Computer Vision", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
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
