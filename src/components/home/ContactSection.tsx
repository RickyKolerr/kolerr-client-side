import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Have Questions? Let's Get in Touch!
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <form className="space-y-4">
              <Input placeholder="Your Name" className="bg-white/5" />
              <Input type="email" placeholder="Your Email" className="bg-white/5" />
              <select className="w-full h-10 rounded-md border border-input bg-white/5 px-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Select Inquiry Type</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="press">Press</option>
              </select>
              <Textarea placeholder="Your Message" className="bg-white/5" rows={4} />
              <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-400">
                  <MapPin className="text-kolerr-cyan" />
                  Nexus Tower - 5B Ton Duc Thang St, Ben Nghe Ward, District 1, Ho Chi Minh City
                </p>
                <p className="flex items-center gap-2 text-gray-400">
                  <Mail className="text-kolerr-cyan" />
                  contact@kolerr.com
                </p>
                <p className="flex items-center gap-2 text-gray-400">
                  <Phone className="text-kolerr-cyan" />
                  +84 (28) 1234 5678
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;