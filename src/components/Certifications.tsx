import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Divide & Conquer, Sorting & Searching, and Randomized Algorithms",
      issuer: "Stanford",
      date: "Nov 2023",
      link: "#",
    },
    {
      title: "Generative AI with LLM",
      issuer: "DeepLearning.AI",
      date: "Mar 2024",
      link: "https://coursera.org/share/94b72fc106f9af47a16b89f20fb673ed",
    },
  ];

  return (
    <section id="certifications" className="section-spacing relative overflow-hidden">
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Credentials</span>
          <h2 className="section-header">
            Certifications<span className="text-primary">.</span>
          </h2>
          <p className="section-subtitle">
            Continuous learning milestones from world-class institutions.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={index} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl p-7 group hover:border-primary/20 transition-all duration-500 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-primary font-semibold uppercase tracking-widest">{cert.issuer}</span>
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-display leading-snug group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground hover:text-primary font-medium transition-colors duration-300 group/link"
                  >
                    View Certificate
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                )}
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
