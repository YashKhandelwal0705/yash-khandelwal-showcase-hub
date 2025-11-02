
const About = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-premium animate-slide-up space-y-8">
            <p className="text-lg md:text-xl text-foreground/90 leading-[1.8] font-light">
              I am a Computer Science Engineering student at Lovely Professional University, passionate about solving complex problems through data-driven solutions. With a keen interest in Data Science, Machine Learning, and Software Development, I enjoy tackling real-world challenges.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] font-light animate-fade-in" style={{ animationDelay: '100ms' }}>
              My experience spans projects from predictive models to interactive dashboards, and I am actively preparing for roles as a Data Scientist, Machine Learning Engineer, or Software Development Engineer. I believe in continuous learning and staying updated with the latest technological advancements in the field.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.8] font-light animate-fade-in" style={{ animationDelay: '200ms' }}>
              When I'm not coding or analyzing data, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I'm always eager to collaborate on innovative projects and learn from fellow developers and data enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
