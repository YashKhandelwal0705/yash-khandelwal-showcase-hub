import RevealOnScroll from './RevealOnScroll';
import { Trophy, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "Competitive Programming",
      description: "Achieved 1100+ contest rating on CodeForces and solved 300+ problems across LeetCode and GeeksforGeeks.",
    },
    {
      icon: Trophy,
      title: "Technical Mastery",
      description: "Developed proficiency across multiple programming languages and frameworks with a strong foundation in Data Structures and Algorithms.",
    },
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Recognition</span>
          <h2 className="section-header">
            Achievements<span className="text-primary">.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-16 max-w-4xl space-y-5">
          {achievements.map((achievement, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-8 flex items-start gap-6 group hover:border-primary/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <achievement.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-display mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{achievement.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;