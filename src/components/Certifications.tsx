
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
    <section id="certifications" className="py-24 bg-gradient-to-b from-secondary/30 to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4 animate-fade-in">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl p-6 border-l-4 ${cert.color} hover-lift animate-fade-in border-t border-r border-b border-border`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{cert.title}</h3>
              <p className="text-muted-foreground font-medium mb-2">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent font-medium transition-colors group"
              >
                View Certificate 
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
