
import { 
  FileCode2 as Python,
  FileCode as Java,
  Github, 
  GitBranch,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      items: ["Java", "Python", "C++", "SQL"]
    },
    {
      title: "Frameworks/Libraries",
      icon: "⚙️",
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV", "Flask"]
    },
    {
      title: "Tools/Platforms",
      icon: "🛠️",
      items: ["Git", "GitHub", "Tableau", "MySQL"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      items: ["Leadership", "Teamwork", "Event Handling", "Problem Solving", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Skills & Expertise
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl border border-border/50 p-8 hover-lift animate-slide-up shadow-md hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3.5">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="text-base text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-3 group/item"
                  >
                    <span className="w-2 h-2 bg-primary/40 rounded-full group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300"></span>
                    <span className="font-medium">{skill}</span>
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

