
const Training = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4">
          Training & Development
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border p-8 hover-lift animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Complete Machine Learning and Data Science Program</h3>
                <p className="text-lg text-primary font-semibold">GeeksforGeeks</p>
              </div>
              <div className="md:text-right">
                <p className="text-muted-foreground font-medium">Jun 2024 – Jul 2024</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1 flex-shrink-0">•</span>
                <span className="text-muted-foreground leading-relaxed">Gained hands-on experience in data preprocessing, EDA, feature engineering, and predictive modeling using Python, Pandas, NumPy, and SQL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1 flex-shrink-0">•</span>
                <span className="text-muted-foreground leading-relaxed">Built, evaluated, and optimized machine learning models (regression, classification, clustering) for practical business use cases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
