import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email and message to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-12">
          We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Office</h2>
              <address className="text-gray-400 not-italic">
                Nexus Tower<br />
                5B Ton Duc Thang Street<br />
                Ben Nghe Ward, District 1<br />
                Ho Chi Minh City, Vietnam
              </address>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              <div className="space-y-2 text-gray-400">
                <p>Email: <a href="mailto:support@kolerr.com" className="text-kolerr-cyan hover:underline">support@kolerr.com</a></p>
                <p>Phone: <a href="tel:+84938737714" className="text-kolerr-cyan hover:underline">+84 938 737 714</a></p>
                <p>Business Hours: Monday – Friday, 9:00 AM – 6:00 PM (GMT+7)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">Send Us an Email</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;