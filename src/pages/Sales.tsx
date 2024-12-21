import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Sales = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sales inquiry submitted",
      description: "Our team will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Sales Inquiry</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company Name</label>
              <Input required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Contact Person</label>
              <Input required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <Input type="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <Textarea required className="min-h-[150px]" />
            </div>
            <Button type="submit">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sales;