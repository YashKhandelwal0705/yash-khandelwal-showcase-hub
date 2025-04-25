import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "Implemented machine learning techniques including Logistic Regression, Decision Trees, and Random Forests with optimized hyperparameters. Built a complete ML pipeline for accurate house price predictions.",
      detailedDescription: [
        "Developed a predictive model using multiple machine learning techniques, including Logistic Regression, Decision Trees, and Random Forests, for forecasting house prices based on various features such as square footage, location, and more.",
        "Implemented hyperparameter tuning strategies to optimize model accuracy and performance, achieving a notable prediction accuracy.",
        "Built an end-to-end pipeline for data preprocessing, model training, evaluation, and deployment, significantly reducing prediction error for real estate forecasting."
      ],
      tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      image: "/lovable-uploads/53920492-1217-4755-937a-2ee5f30b5272.png",
      github: "https://github.com/YashKhandelwal0705/House-price-prediction"
    },
    {
      title: "Heart Disease Data Visualization",
      description: "Developed comprehensive visualizations using Matplotlib & Seaborn to analyze health data trends. Created insightful visual representations for better understanding of heart disease patterns.",
      detailedDescription: [
        "Developed a comprehensive analysis and visualization project on heart disease risk factors, leveraging datasets to uncover meaningful trends in patient demographics, cholesterol levels, blood pressure, and other critical indicators.",
        "Implemented advanced data visualization techniques using Matplotlib and Seaborn, providing a clear depiction of factors with the highest correlation to heart disease.",
        "Created an interactive, accessible dashboard for visual insights, facilitating more informed decision making for healthcare analytics."
      ],
      tags: ["Data Visualization", "Python", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/YashKhandelwal0705/HeartDiseaseVisualization"
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
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
