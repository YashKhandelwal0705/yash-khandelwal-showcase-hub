
const Achievements = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4">
          Achievements
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border hover-lift animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Competitive Programming</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground leading-relaxed">Achieved 1100+ contest rating on CodeForces (Aug 2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground leading-relaxed">Solved 300+ problems on LeetCode and GeeksforGeeks</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-border hover-lift animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h3 className="text-2xl font-bold text-accent mb-6">Technical Expertise</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground leading-relaxed">Proficient in multiple programming languages and frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl mt-1 flex-shrink-0">✓</span>
                <span className="text-muted-foreground leading-relaxed">Strong foundation in Data Structures and Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
