import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Privacy Agreement Required",
        description: "Please agree to the privacy policy and terms of service.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: data.message,
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          privacy: false
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and help bring innovative ideas to life. Whether you need a web application, desktop software, or technical consultation, I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-email">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">kashanmiankhel922@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="contact-location">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Peshawar, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" data-testid="contact-response-time">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/kashansaeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                  data-testid="contact-github"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/kashan-saeed-a5b2a6272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  data-testid="contact-linkedin"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a 
                  href="mailto:kashanmiankhel922@gmail.com"
                  className="bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  data-testid="contact-email-icon"
                >
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    required
                    data-testid="input-first-name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    required
                    data-testid="input-last-name"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)} required>
                  <SelectTrigger className="mt-2" data-testid="select-subject">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="desktop-app">Desktop Application</SelectItem>
                    <SelectItem value="full-stack">Full Stack Development</SelectItem>
                    <SelectItem value="consultation">Technical Consultation</SelectItem>
                    <SelectItem value="tutoring">Programming Tutoring</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={6}
                  required
                  data-testid="textarea-message"
                  className="mt-2 resize-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                  data-testid="checkbox-privacy"
                />
                <Label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-primary hover:underline">privacy policy</a> and terms of service.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-primary/20 transition-all duration-200 transform hover:scale-105"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}