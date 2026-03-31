import { Github, ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "BlogForge — Backend Web Application",
      subtitle: "Full-Stack Web Application",
      description: "Designed RESTful backend services with authentication, role-based access, and scalable CRUD workflows. Multi-tier Flask web application with database-backed persistence, SMTP-based email notifications, and modular design principles.",
      tags: ["Python", "Flask", "SQLite", "SMTP", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      github: "https://github.com/YashKhandelwal0705/BlogForge-BlogWebsite",
      period: "Apr — Jun 2025",
    },
    {
      title: "Insurance Claim Severity Prediction",
      subtitle: "End-to-End ML Pipeline",
      description: "Built an end-to-end ML pipeline with modular preprocessing, model training, and evaluation components. Applied hyperparameter tuning and optimization techniques to improve model performance by 20% with a clean, reproducible, production-ready workflow.",
      tags: ["Python", "XGBoost", "Random Forest", "Scikit-learn"],
      image: "/lovable-uploads/d27c6502-0042-4795-adf1-a931e4ecbfb1.png",
      github: "https://github.com/YashKhandelwal0705/insurance_claim_prediction",
      period: "Apr — May 2025",
    },
    {
      title: "Real-Time Sign Language Translation",
      subtitle: "Computer Vision System",
      description: "Real-time Sign Language Translator using YOLOv8 Nano for 4 gestures (A, F, L, Y). Flask-based app with MediaPipe and OpenCV for gesture recognition, with optimized training pipeline and error handling for smooth real-time feedback.",
      tags: ["YOLOv8", "Flask", "MediaPipe", "OpenCV"],
      image: "/lovable-uploads/bc67309f-cfaa-48e6-86e1-3a9d4acf17bf.png",
      github: "https://github.com/YashKhandelwal0705/Real-Time-Sign-Language-Translation",
      period: "Feb — Apr 2025",
    },
  ];

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Featured Work</span>
          <h2 className="section-header">
            Selected projects<span className="text-primary">.</span>
          </h2>
          <p className="section-subtitle">
            Case studies in data science, machine learning, and software engineering.
          </p>
        </RevealOnScroll>

        <div className="mt-20 space-y-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group glass-card rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="h-64 lg:h-full min-h-[280px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-all duration-500" />
                    </div>
                  </div>

                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-primary font-medium tracking-widest uppercase">{project.subtitle}</span>
                        <span className="text-xs text-muted-foreground">{project.period}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-display tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground font-medium border border-border/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/btn"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
