import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="space-y-6 text-left">
              <p className="text-lg">Last updated: March 2024</p>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Kolerr's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. User Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain accurate account information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain professional conduct in all interactions</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Service Terms</h2>
                <p>
                  Kolerr reserves the right to modify or terminate services for any reason, without notice, at any time.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;