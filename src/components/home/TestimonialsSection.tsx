import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Kolerr made our influencer campaigns seamless. The AI matching was spot-on, and our ROI increased significantly!",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechBrand Co."
    },
    {
      quote: "As an influencer, Kolerr helped me find the right partnerships with major brands quickly and efficiently.",
      name: "Mike Chen",
      followers: "500K+ Followers",
      platform: "Instagram & TikTok"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          What Our Users Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-white/5 border border-gray-800 hover:border-kolerr-purple transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-kolerr-yellow text-kolerr-yellow" />
                ))}
              </div>
              <p className="text-lg mb-6 text-gray-300 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.position || testimonial.followers}</p>
                <p className="text-kolerr-cyan">{testimonial.company || testimonial.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;