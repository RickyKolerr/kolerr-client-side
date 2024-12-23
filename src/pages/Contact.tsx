import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, SendHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Nexus Tower - 5B Ton Duc Thang St, Ben Nghe Ward, District 1, Ho Chi Minh City",
      color: "text-kolerr-purple",
      bgColor: "bg-kolerr-purple/10",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@kolerr.com",
      color: "text-kolerr-cyan",
      bgColor: "bg-kolerr-cyan/10",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+84 (28) 1234 5678",
      color: "text-kolerr-orange",
      bgColor: "bg-kolerr-orange/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out to us
              through any of the channels below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-gradient hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                      className="flex items-start space-x-4"
                    >
                      <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center", info.bgColor)}>
                        <info.icon className={cn("h-6 w-6", info.color)} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-gradient hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="bg-background/50 backdrop-blur-sm focus:ring-2 ring-kolerr-purple/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-background/50 backdrop-blur-sm focus:ring-2 ring-kolerr-cyan/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="How can we help?"
                        className="min-h-[120px] bg-background/50 backdrop-blur-sm focus:ring-2 ring-kolerr-orange/20"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity group"
                    >
                      <span className="flex items-center gap-2">
                        Send Message
                        <SendHorizontal className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <style>
        {`
          .border-gradient {
            position: relative;
            border: none;
          }
          .border-gradient::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            padding: 1px;
            background: linear-gradient(to right, #00F5FF, #9C27B0, #FF5722);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;