
const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-card to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-playfair">
          About Me
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in">
              I am a Computer Science Engineering student at Lovely Professional University, passionate about solving complex problems through data-driven solutions. With a keen interest in Data Science, Machine Learning, and Software Development, I enjoy tackling real-world challenges.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              My experience spans projects from predictive models to interactive dashboards, and I am actively preparing for roles as a Data Scientist, Machine Learning Engineer, or Software Development Engineer. I believe in continuous learning and staying updated with the latest technological advancements in the field.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
              When I'm not coding or analyzing data, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I'm always eager to collaborate on innovative projects and learn from fellow developers and data enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
