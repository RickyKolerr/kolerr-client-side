import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Internships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Internship Program</h1>
            <div className="space-y-6">
              <p className="text-lg">
                Join our internship program to gain hands-on experience in the fast-growing influencer marketing industry.
              </p>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold">Software Development Intern</h3>
                  <p className="text-gray-600 mt-2">3-6 months - Ho Chi Minh City</p>
                  <Button className="mt-4">Apply Now</Button>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Internships;