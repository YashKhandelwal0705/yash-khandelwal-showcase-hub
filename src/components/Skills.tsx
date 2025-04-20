
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "SQL"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Google Colab", "Jupyter", "Tableau"],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Time Management"],
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center bg-white rounded-lg p-2 shadow-sm"
                  >
                    <span className={`mr-2 ${category.iconColor}`}>•</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
