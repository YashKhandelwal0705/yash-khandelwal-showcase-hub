
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
    <section id="certifications" className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
      <div className="content-container">
        <h2 className="section-header font-playfair animate-fade-in">
          Certifications
        </h2>
        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-card rounded-xl p-7 border-l-[3px] ${cert.color} hover-lift animate-fade-in border-t border-r border-b border-border shadow-card`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-base md:text-lg font-bold text-foreground mb-3 leading-snug">{cert.title}</h3>
              <p className="text-muted-foreground font-semibold mb-1.5 text-sm">{cert.issuer}</p>
              <p className="text-[13px] text-muted-foreground mb-5">{cert.date}</p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] text-primary hover:text-accent font-semibold transition-colors group"
              >
                View Certificate 
                <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
