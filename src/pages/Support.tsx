import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support ticket submitted",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Support</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How do I get started?</h3>
                <p className="text-gray-400">
                  Sign up for an account, complete your profile, and start browsing campaigns or KOLs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How does payment work?</h3>
                <p className="text-gray-400">
                  We support various payment methods including local Vietnamese providers and global solutions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Support</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Your email" type="email" required />
              </div>
              <div>
                <Input placeholder="Subject" required />
              </div>
              <div>
                <Textarea placeholder="Describe your issue" required className="min-h-[150px]" />
              </div>
              <Button type="submit">Submit Ticket</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;