
const Training = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Training & Development
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card-premium animate-slide-up hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4 pb-8 border-b border-border/50">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight leading-tight">Complete Machine Learning and Data Science Program</h3>
                <p className="text-lg text-primary font-semibold">GeeksforGeeks</p>
              </div>
              <div className="md:text-right flex-shrink-0">
                <p className="text-muted-foreground font-medium">Jun 2024 – Jul 2024</p>
              </div>
            </div>
            
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-muted-foreground text-base leading-[1.75]">Gained hands-on experience in data preprocessing, EDA, feature engineering, and predictive modeling using Python, Pandas, NumPy, and SQL</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-muted-foreground text-base leading-[1.75]">Built, evaluated, and optimized machine learning models (regression, classification, clustering) for practical business use cases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
