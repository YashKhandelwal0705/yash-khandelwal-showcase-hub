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
              I'm a <span className="text-foreground font-medium">Software Engineer at Accenture</span> with a background in Computer Science and a strong interest in backend engineering, Generative AI, and building intelligent applications. I work with technologies including Java, Python, SQL, REST APIs, and modern AI frameworks.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.9] font-light mt-8">
              My experience spans full-stack development, machine learning, and Generative AI projects, including an AI-powered student risk intelligence system and RAG-based applications. I enjoy turning ideas into practical, scalable software and continuously strengthening my skills in software engineering and system design.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;