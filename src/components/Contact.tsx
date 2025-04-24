
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
      // EmailJS service configuration
      const serviceId = 'service_bvpmfpd';
      const templateId = 'template_pfmmq2h';
      
      // Format the message to clearly display sender information
      const formattedMessage = `
From: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
      `;
      
      // Send email using EmailJS
      // We use a specific format for from_name to make it clear who the message is from
      // reply_to is set to the sender's email to enable direct replies
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
      
      // Reset form after successful submission
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12 animate-fade-in">
          Let's Connect
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-2 rounded-full"/>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a 
                href="mailto:yashkhandelwal0705@gmail.com" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group"
              >
                <Mail className="h-5 w-5 mr-3 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  yashkhandelwal0705@gmail.com
                </span>
              </a>
              <a 
                href="tel:+919414105828" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group"
              >
                <span className="mr-3 group-hover:scale-110 transition-transform">📞</span>
                <span className="text-gray-700 group-hover:text-indigo-600 transition-colors">
                  +91 9414105828
                </span>
              </a>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg transform hover:shadow-xl transition-all duration-300"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
