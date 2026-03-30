import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: ["Java", "Python", "C++", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV", "Flask"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "Tableau", "MySQL"],
    },
    {
      title: "Soft Skills",
      items: ["Leadership", "Teamwork", "Event Handling", "Problem Solving", "Time Management"],
    },
  ];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Expertise</span>
          <h2 className="section-header">
            Skills & tools<span className="text-primary">.</span>
          </h2>
          <p className="section-subtitle">
            The toolkit I use to build intelligent solutions.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-8 group hover:border-primary/20 transition-all duration-500">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-lg bg-secondary/60 text-foreground/80 text-sm font-medium border border-border/30 hover:border-primary/40 hover:text-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;