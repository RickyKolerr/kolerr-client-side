import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <div className="space-y-6 text-left">
              <p className="text-lg">
                At Kolerr, we're building the future of influencer marketing. Join us in our mission to transform how brands and creators collaborate.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Open Positions</h2>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                    <p className="text-gray-600 mt-2">Remote - Full Time</p>
                    <p className="mt-2">Join our engineering team to build and scale our platform using React and TypeScript.</p>
                    <Button className="mt-4">Apply Now</Button>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="text-xl font-semibold">Product Manager</h3>
                    <p className="text-gray-600 mt-2">Ho Chi Minh City - Full Time</p>
                    <p className="mt-2">Lead product strategy and development for our core platform features.</p>
                    <Button className="mt-4">Apply Now</Button>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="text-xl font-semibold">Marketing Manager</h3>
                    <p className="text-gray-600 mt-2">Ho Chi Minh City - Full Time</p>
                    <p className="mt-2">Drive our marketing initiatives and grow our platform's presence in the market.</p>
                    <Button className="mt-4">Apply Now</Button>
                  </div>
                </div>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-semibold">Benefits & Perks</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Competitive salary and equity packages</li>
                  <li>Health insurance coverage</li>
                  <li>Flexible working hours</li>
                  <li>Professional development opportunities</li>
                  <li>Modern office in prime location</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;