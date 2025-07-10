import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_o6pvpi4",         
      "template_84akkkn",        
      e.currentTarget,
      "DTjLlz8HlCDLNwuqd"       
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "putriigultom11@email.com",
      href: "mailto:putriigultom11@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 822-7726-3370",
      href: "tel:+6282277263370"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Balige, Toba, North Sumatra",
      href: ""
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/putriitr",
      color: "hover:text-gray-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/putrigultom11",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/putrigultom07",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/putriitr._/",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Feel free to reach out and let's turn your ideas into impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and software development.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 p-4 glass-card rounded-lg hover:bg-primary/5 transition-all duration-300 group">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full glass-card ${social.color} transition-all duration-300 hover:scale-110`} aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleInputChange} required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input id="subject" name="subject" type="text" placeholder="What's this about?" value={formData.subject} onChange={handleInputChange} required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project or just say hello..." value={formData.message} onChange={handleInputChange} required rows={6} className="resize-none" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full animated-gradient text-white font-semibold py-3 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-muted-foreground/20 text-center">
          <p className="text-muted-foreground">
            © 2024 Putri Tamara Gultom. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
