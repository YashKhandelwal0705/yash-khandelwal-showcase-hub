
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
      color: "border-green-500"
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
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
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
