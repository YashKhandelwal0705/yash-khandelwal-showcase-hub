
const Training = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-background to-secondary/30">
      <div className="content-container">
        <h2 className="section-header font-playfair">
          Training & Development
        </h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] rounded-xl border border-border p-8 md:p-10 hover-lift animate-fade-in shadow-card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-7 gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight leading-snug">Complete Machine Learning and Data Science Program</h3>
                <p className="text-base text-primary font-semibold">GeeksforGeeks</p>
              </div>
              <div className="md:text-right flex-shrink-0">
                <p className="text-muted-foreground font-medium text-sm">Jun 2024 – Jul 2024</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Gained hands-on experience in data preprocessing, EDA, feature engineering, and predictive modeling using Python, Pandas, NumPy, and SQL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">Built, evaluated, and optimized machine learning models (regression, classification, clustering) for practical business use cases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
