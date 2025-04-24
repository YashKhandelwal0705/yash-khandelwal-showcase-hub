
const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI with LLM",
      issuer: "Coursera",
      date: "Mar 2024",
      color: "border-blue-500"
    },
    {
      title: "Machine Learning Program",
      issuer: "GeeksforGeeks",
      date: "Jul 2024",
      color: "border-green-500",
      link: "https://www.geeksforgeeks.org/certificate/42b0605e1a7058c9022956d3e0efc42f"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Nov 2024",
      color: "border-purple-500"
    },
    {
      title: "Algorithms",
      issuer: "Coursera",
      date: "Nov 2023",
      color: "border-indigo-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md border-l-4 ${cert.color} transform hover:scale-105 transition-transform duration-300`}
            >
              {cert.link ? (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80"
                >
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    {cert.title}
                    <span className="ml-2 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              )}
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
