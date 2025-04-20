
import { 
  FileCode2 as Python,
  FileCode as Java,
  Github, 
  GitBranch,
  Users
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { 
          name: "Python", 
          icon: <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Python" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Java", 
          icon: <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Java" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "C++", 
          icon: <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="C++" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "SQL", 
          icon: <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="SQL" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        }
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <Github className="w-5 h-5" /> },
        { 
          name: "Google Colab", 
          icon: <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Google Colab" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Jupyter", 
          icon: <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="Jupyter" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Tableau", 
          icon: <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Tableau" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        }
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      title: "Libraries",
      skills: [
        { 
          name: "Pandas", 
          icon: <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="Pandas" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "NumPy", 
          icon: <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="NumPy" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Matplotlib", 
          icon: <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Matplotlib" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Seaborn", 
          icon: <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="Seaborn" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        }
      ],
      bgColor: "bg-green-50",
      iconColor: "text-green-500"
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", icon: <Users className="w-5 h-5" /> },
        { 
          name: "Problem Solving", 
          icon: <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Problem Solving" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        },
        { 
          name: "Time Management", 
          icon: <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Time Management" 
            className="w-12 h-12 object-cover rounded-full" 
          /> 
        }
      ],
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
