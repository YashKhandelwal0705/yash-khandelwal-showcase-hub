
import { 
  FileCode2 as Python,
  FileCode as Java,
  Github, 
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <Python className="w-5 h-5" /> },
        { name: "Java", icon: <Java className="w-5 h-5" /> },
        { name: "C++", icon: <span className="font-mono font-bold">C++</span> },
        { name: "SQL", icon: <span className="font-mono">SQL</span> }
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <Github className="w-5 h-5" /> },
        { name: "Google Colab", icon: "GC" },
        { name: "Jupyter", icon: "JP" },
        { name: "Tableau", icon: "TB" }
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Libraries",
      skills: [
        { name: "Pandas", icon: "PD" },
        { name: "NumPy", icon: "NP" },
        { name: "Matplotlib", icon: "MP" },
        { name: "Seaborn", icon: "SB" }
      ],
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className={`mr-3 ${category.iconColor} flex items-center justify-center w-6 h-6`}>
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
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

