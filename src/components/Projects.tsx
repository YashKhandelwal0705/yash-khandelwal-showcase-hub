const Projects = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "Implemented machine learning techniques including Logistic Regression, Decision Trees, and Random Forests with optimized hyperparameters. Built a complete ML pipeline for accurate house price predictions.",
      tags: ["Machine Learning", "Python", "Scikit-learn", "Data Analysis"],
      image: "/lovable-uploads/53920492-1217-4755-937a-2ee5f30b5272.png"
    },
    {
      title: "Heart Disease Data Visualization",
      description: "Developed comprehensive visualizations using Matplotlib & Seaborn to analyze health data trends. Created insightful visual representations for better understanding of heart disease patterns.",
      tags: ["Data Visualization", "Python", "Matplotlib", "Seaborn"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
