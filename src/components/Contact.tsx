
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
    <section id="contact" className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
      <div className="content-container">
        <h2 className="section-header font-playfair animate-fade-in">
          Let's Connect
        </h2>
        <div className="section-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="space-y-5 bg-card p-8 md:p-9 rounded-xl border border-border hover-lift shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-6 tracking-tight">
              Contact Information
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:yashkhandelwal0705@gmail.com" 
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/30"
              >
                <Mail className="h-4 w-4 mr-3 text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-muted-foreground text-[14px] group-hover:text-primary transition-colors">
                  yashkhandelwal0705@gmail.com
                </span>
              </a>
              <a 
                href="tel:+919414105828" 
                className="flex items-center p-4 bg-secondary rounded-lg hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/30"
              >
                <span className="mr-3 text-xl group-hover:scale-110 transition-transform flex-shrink-0">📞</span>
                <span className="text-muted-foreground text-[14px] group-hover:text-primary transition-colors">
                  +91 9414105828
                </span>
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-5 bg-card p-8 md:p-9 rounded-xl border border-border hover-lift shadow-card"
          >
            <div>
              <label htmlFor="name" className="block text-[13px] font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-foreground text-[14px]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-foreground text-[14px]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[13px] font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 text-foreground text-[14px] resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3.5 rounded-lg hover-lift transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-card text-[14px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
