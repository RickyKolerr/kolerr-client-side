import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="space-y-6 text-left">
              <p className="text-lg">Last updated: March 2024</p>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account registration information</li>
                  <li>Profile information</li>
                  <li>Campaign and collaboration data</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Match brands with suitable KOLs</li>
                  <li>Process transactions</li>
                  <li>Send notifications and updates</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;