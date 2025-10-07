
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "BTech CSE",
      institution: "Lovely Professional University",
      period: "Sept 2022 – Present",
      score: "CGPA: 8.21",
      coursework: ["Data Structures and Algorithms", "Machine Learning", "Database Management", "Data Science", "Object Oriented Programming", "SDLC"]
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
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-indigo-600 font-semibold">{edu.period}</p>
                  <p className="text-gray-500">{edu.score}</p>
                </div>
              </div>
              {edu.coursework && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
