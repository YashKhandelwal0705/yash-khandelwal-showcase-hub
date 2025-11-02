
const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming Excellence",
      description: "Achieved 1100+ contest rating on CodeForces (Aug 2025) and solved 300+ problems across LeetCode and GeeksforGeeks, demonstrating strong problem-solving abilities and algorithmic expertise."
    },
    {
      title: "Technical Mastery",
      description: "Developed proficiency across multiple programming languages and frameworks with a strong foundation in Data Structures and Algorithms, enabling effective implementation of complex solutions."
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Achievements
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="card-premium animate-slide-up hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{achievement.title}</h3>
              <p className="text-lg text-muted-foreground leading-[1.75]">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
