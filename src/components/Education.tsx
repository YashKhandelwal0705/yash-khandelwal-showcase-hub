import RevealOnScroll from './RevealOnScroll';

const Education = () => {
  const courses = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "System Design",
    "Data Science",
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Education</span>
          <h2 className="section-header">
            Academic background<span className="text-primary">.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-16 max-w-4xl">
            <div className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              {/* Timeline accent */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
              <div className="absolute left-0 top-8 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
              
              <div className="pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-display tracking-tight">
                      B.Tech. Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-medium mt-1">Lovely Professional University, Phagwara, Punjab</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
                      CGPA: 8.32
                    </span>
                    <span className="text-sm text-muted-foreground">Sep 2022 — Jun 2026</span>
                  </div>
                </div>

                <div className="glow-line my-6" />

                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg bg-secondary/60 text-secondary-foreground font-medium border border-border/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Education;