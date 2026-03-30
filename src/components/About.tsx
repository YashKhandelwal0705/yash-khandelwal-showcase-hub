import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">About</span>
          <h2 className="section-header">
            The story so far<span className="text-primary">.</span>
          </h2>
        </RevealOnScroll>
        
        <div className="mt-16 max-w-3xl">
          <RevealOnScroll delay={0.1}>
            <p className="text-lg md:text-xl text-foreground/80 leading-[1.9] font-light">
              I'm a Computer Science Engineering student at Lovely Professional University, driven by the challenge of transforming raw data into meaningful solutions. My world revolves around{" "}
              <span className="text-foreground font-medium">Data Science</span>,{" "}
              <span className="text-foreground font-medium">Machine Learning</span>, and{" "}
              <span className="text-foreground font-medium">Software Development</span>.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.9] font-light mt-8">
              From building predictive models to crafting interactive dashboards, I thrive on solving real-world problems with code. Currently preparing for roles as a Data Scientist, ML Engineer, or Software Development Engineer.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.9] font-light mt-8">
              Beyond the terminal, you'll find me exploring emerging tech, competing in hackathons, and contributing to open-source — always learning, always building.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;