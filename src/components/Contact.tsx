
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
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-foreground mb-4 animate-fade-in">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6 bg-card p-8 rounded-2xl border border-border hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <a 
                href="mailto:yashkhandelwal0705@gmail.com" 
                className="flex items-center p-4 bg-secondary rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary"
              >
                <Mail className="h-5 w-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  yashkhandelwal0705@gmail.com
                </span>
              </a>
              <a 
                href="tel:+919414105828" 
                className="flex items-center p-4 bg-secondary rounded-xl hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary"
              >
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">📞</span>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  +91 9414105828
                </span>
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-card p-8 rounded-2xl border border-border hover-lift"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transform hover-lift transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
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
