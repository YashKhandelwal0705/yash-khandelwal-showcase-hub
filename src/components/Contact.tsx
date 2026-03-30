import { useState } from 'react';
import { Mail, Send, ArrowUpRight } from 'lucide-react';
import { toast } from "sonner";
import emailjs from 'emailjs-com';
import RevealOnScroll from './RevealOnScroll';

emailjs.init("vhjY1WjLHYvPkoCcQ");

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_bvpmfpd', 'template_pfmmq2h', {
        from_name: `${formData.name} <${formData.email}>`,
        reply_to: formData.email,
        message: `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        to_email: 'yashkhandelwal0705@gmail.com',
        subject: `Portfolio Contact: ${formData.name}`,
      });
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      
      <div className="content-container relative z-10">
        <RevealOnScroll>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-header">
            Let's connect<span className="text-primary">.</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid md:grid-cols-5 gap-10 max-w-5xl">
          {/* Contact info */}
          <RevealOnScroll className="md:col-span-2" delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:yashkhandelwal0705@gmail.com"
                className="group glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-primary/20 transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    yashkhandelwal0705@gmail.com
                  </p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+919414105828" className="text-sm text-foreground font-medium hover:text-primary transition-colors duration-300">
                    +91-9414105828
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll className="md:col-span-3" delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-secondary/80 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-secondary/80 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-secondary/80 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;