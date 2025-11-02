
import React from 'react';

const Education = () => {
  const courses = ["Data Structures and Algorithms", "Machine Learning", "Database Management", "Data Science", "Object Oriented Programming", "SDLC"];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Education
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="card-premium animate-slide-up hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4 pb-8 border-b border-border/50">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight leading-tight">B.Tech. Computer Science and Engineering</h3>
                <p className="text-lg text-primary font-semibold mb-2">Lovely Professional University</p>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <span className="text-sm text-muted-foreground">CGPA:</span>
                  <span className="text-base font-bold text-foreground">8.21</span>
                </div>
              </div>
              <div className="md:text-right flex-shrink-0">
                <p className="text-muted-foreground font-medium">Sept 2022 – Present</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-foreground mb-5">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-3">
                {courses.map((course, index) => (
                  <span 
                    key={index}
                    className="bg-secondary/60 text-secondary-foreground text-sm px-4 py-2.5 rounded-xl font-medium border border-border/30 hover:border-primary/40 hover:bg-secondary transition-all duration-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
