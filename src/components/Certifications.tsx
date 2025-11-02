
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Divide & Conquer, Sorting & Searching, and Randomized Algorithms",
      issuer: "Stanford",
      date: "Nov 2023",
      color: "border-primary",
      link: "#"
    },
    {
      title: "Generative AI with LLM",
      issuer: "DeepLearning.AI",
      date: "Mar 2024",
      color: "border-accent",
      link: "https://coursera.org/share/94b72fc106f9af47a16b89f20fb673ed"
    },
    {
      title: "Machine Learning Program",
      issuer: "GeeksforGeeks",
      date: "Jul 2024",
      color: "border-primary",
      link: "https://www.geeksforgeeks.org/certificate/42b0605e1a7058c9022956d3e0efc42f?utm_source=socials&utm_medium=cc_link"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Nov 2024",
      color: "border-accent",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S167020305904433055"
    }
  ];

  return (
    <section id="certifications" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Certifications
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            Continuous learning and professional development milestones
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl border-l-[6px] border-primary p-8 hover-lift animate-slide-up shadow-md hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
              <p className="text-lg text-primary font-semibold mb-2.5">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground font-medium">{cert.date}</p>
              
              {cert.link && (
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 mt-6 px-4 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg transition-all duration-300 font-semibold text-sm"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
