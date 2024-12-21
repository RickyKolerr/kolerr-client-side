import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Kolerr made our influencer campaigns seamless. The AI matching was spot-on, and our ROI increased significantly!",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechVision Inc.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "As an influencer, Kolerr helped me find the right partnerships with major brands quickly and efficiently.",
      author: "David Chen",
      role: "Content Creator",
      followers: "500K+ Followers",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=150&h=150"
    },
    {
      quote: "The platform's analytics helped us optimize our campaigns and achieve better results than ever before.",
      author: "Maria Garcia",
      role: "Brand Manager",
      company: "StyleHub",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          What Our Users Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:scale-105 transition-duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    <p className="text-sm text-foreground/60">{testimonial.company || testimonial.followers}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;