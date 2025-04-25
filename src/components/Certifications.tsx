
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI with LLM",
      issuer: "Coursera",
      date: "Mar 2024",
      color: "border-blue-500",
      link: "https://coursera.org/share/94b72fc106f9af47a16b89f20fb673ed"
    },
    {
      title: "Machine Learning Program",
      issuer: "GeeksforGeeks",
      date: "Jul 2024",
      color: "border-green-500",
      link: "https://www.geeksforgeeks.org/certificate/42b0605e1a7058c9022956d3e0efc42f?utm_source=socials&utm_medium=cc_link"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Nov 2024",
      color: "border-purple-500",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S167020305904433055"
    },
    {
      title: "Algorithms",
      issuer: "Coursera",
      date: "Nov 2023",
      color: "border-indigo-500",
      link: "https://coursera.org/share/2983463721debede6b9b16a058409065"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 animate-fade-in">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md border-l-4 ${cert.color} transform hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                View Certificate <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
