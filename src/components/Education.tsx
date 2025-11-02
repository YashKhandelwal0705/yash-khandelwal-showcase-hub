
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
    <section className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
      <div className="content-container">
        <h2 className="section-header font-playfair">
          Education
        </h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border p-8 md:p-10 hover-lift animate-fade-in shadow-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-7 gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">{edu.degree}</h3>
                  <p className="text-base text-muted-foreground">{edu.institution}</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <p className="text-primary font-semibold text-base mb-1">{edu.period}</p>
                  <p className="text-muted-foreground font-medium text-sm">{edu.score}</p>
                </div>
              </div>
              
              {edu.coursework && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4 text-base">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((course, idx) => (
                      <span 
                        key={idx} 
                        className="bg-secondary text-secondary-foreground text-[13px] px-4 py-2 rounded-lg font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
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
