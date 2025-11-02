
const Achievements = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-background to-secondary/30">
      <div className="content-container">
        <h2 className="section-header font-playfair">
          Achievements
        </h2>
        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] rounded-xl p-8 md:p-9 border border-border hover-lift animate-fade-in shadow-card">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 tracking-tight">Competitive Programming</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Achieved 1100+ contest rating on CodeForces (Aug 2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Solved 300+ problems on LeetCode and GeeksforGeeks</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-accent/[0.03] to-primary/[0.03] rounded-xl p-8 md:p-9 border border-border hover-lift animate-fade-in shadow-card" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl md:text-2xl font-bold text-accent mb-6 tracking-tight">Technical Expertise</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Proficient in multiple programming languages and frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg mt-0.5 flex-shrink-0">✓</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Strong foundation in Data Structures and Algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
