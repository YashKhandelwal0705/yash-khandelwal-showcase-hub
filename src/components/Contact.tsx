
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from 'emailjs-com';

// Initialize EmailJS
emailjs.init("vhjY1WjLHYvPkoCcQ"); 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_bvpmfpd';
      const templateId = 'template_pfmmq2h';
      
      const formattedMessage = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `;
      
      const templateParams = {
        from_name: `${formData.name} <${formData.email}>`,
        reply_to: formData.email,
        message: formattedMessage,
        to_email: 'yashkhandelwal0705@gmail.com',
        subject: `Portfolio Contact: ${formData.name}`
      };
      
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log('Email sent successfully:', response);
      
      toast.success("Message sent! Thank you for your message. I'll get back to you soon.");
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Something went wrong. Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-header font-playfair animate-fade-in">
            Let's Connect
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: '100ms' }}>
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-foreground mb-8 leading-tight">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Email</p>
                    <a href="mailto:yashkhandelwal0705@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors duration-300 font-medium">
                      yashkhandelwal0705@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Phone</p>
                    <a href="tel:+919414105828" className="text-lg text-foreground hover:text-primary transition-colors duration-300 font-medium">
                      +91-9414105828
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="card-premium space-y-7">
              <h3 className="text-2xl font-bold text-foreground leading-tight">Send a Message</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all duration-300 text-base"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all duration-300 text-base"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl border-2 border-input bg-background text-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none text-base"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground font-bold py-4 rounded-xl hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base uppercase tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
