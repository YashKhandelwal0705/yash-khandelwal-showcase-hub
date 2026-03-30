import RevealOnScroll from './RevealOnScroll';

const Training = () => {
  const highlights = [
    "Hands-on experience in data preprocessing, EDA, feature engineering, and predictive modeling using Python, Pandas, NumPy, and SQL",
    "Built, evaluated, and optimized ML models (regression, classification, clustering) for practical business use cases",
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Experience</span>
          <h2 className="section-header">
            Training & development<span className="text-primary">.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-16 max-w-4xl">
            <div className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
              <div className="absolute left-0 top-8 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-display tracking-tight">
                      Complete Machine Learning & Data Science Program
                    </h3>
                    <p className="text-primary font-medium mt-1">GeeksforGeeks</p>
                  </div>
                  <span className="text-sm text-muted-foreground flex-shrink-0">Jun — Jul 2024</span>
                </div>

                <div className="glow-line my-6" />

                <ul className="space-y-4">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Training;