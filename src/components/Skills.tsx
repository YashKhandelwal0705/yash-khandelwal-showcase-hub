
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
        { name: "Java", icon: <Java className="w-5 h-5" /> },
        { name: "Python", icon: <Python className="w-5 h-5" /> },
        { name: "C++", icon: <span className="font-mono font-bold">C++</span> },
        { name: "SQL", icon: <span className="font-mono">SQL</span> }
      ],
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Pandas", icon: "PD" },
        { name: "NumPy", icon: "NP" },
        { name: "Scikit-learn", icon: "SK" },
        { name: "Matplotlib", icon: "MP" },
        { name: "Seaborn", icon: "SB" },
        { name: "OpenCV", icon: "CV" },
        { name: "Flask", icon: "FL" }
      ],
      gradient: "from-accent/10 to-accent/5"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <Github className="w-5 h-5" /> },
        { name: "Tableau", icon: "TB" },
        { name: "MySQL", icon: "SQL" }
      ],
      gradient: "from-primary/15 to-primary/5"
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", icon: "LD" },
        { name: "Teamwork", icon: "TW" },
        { name: "Event Handling", icon: "EH" },
        { name: "Problem Solving", icon: "PS" },
        { name: "Time Management", icon: "TM" }
      ],
      gradient: "from-accent/15 to-accent/5"
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-gradient-to-b from-background to-secondary/30">
      <div className="content-container">
        <h2 className="section-header font-playfair">
          Skills & Expertise
        </h2>
        <div className="section-divider"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${category.gradient} rounded-xl p-6 border border-border hover-lift animate-fade-in shadow-subtle`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-5 tracking-tight">{category.title}</h3>
              <div className="space-y-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center bg-card rounded-lg px-3 py-2.5 shadow-subtle hover:shadow-card transition-all duration-300"
                  >
                    <span className="mr-3 text-primary flex items-center justify-center w-5 h-5 font-semibold text-[13px]">
                      {skill.icon}
                    </span>
                    <span className="text-foreground font-medium text-[14px]">{skill.name}</span>
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

