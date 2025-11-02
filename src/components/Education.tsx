
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
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover-lift animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-primary font-semibold text-lg">{edu.period}</p>
                  <p className="text-muted-foreground font-medium">{edu.score}</p>
                </div>
              </div>
              
              {edu.coursework && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.coursework.map((course, idx) => (
                      <span 
                        key={idx} 
                        className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      >
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
