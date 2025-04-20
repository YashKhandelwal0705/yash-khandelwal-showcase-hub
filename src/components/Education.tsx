
const Education = () => {
  const education = [
    {
      degree: "BTech CSE",
      institution: "Lovely Professional University",
      period: "2022–2026",
      score: "CGPA: 8.1"
    },
    {
      degree: "Intermediate",
      institution: "New Look Sr. Secondary School",
      period: "2022",
      score: "75%"
    },
    {
      degree: "Matriculation",
      institution: "Emmanuel Mission School",
      period: "2020",
      score: "94.67%"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-indigo-600 font-semibold">{edu.period}</p>
                  <p className="text-gray-500">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
