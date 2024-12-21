import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JobOpenings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Current Openings</h1>
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Senior Frontend Developer",
                    location: "Remote",
                    type: "Full Time",
                    description: "Join our engineering team to build and scale our platform using React and TypeScript."
                  },
                  {
                    title: "Product Manager",
                    location: "Ho Chi Minh City",
                    type: "Full Time",
                    description: "Lead product strategy and development for our core platform features."
                  }
                ].map((job, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.location} - {job.type}</p>
                    <p className="mt-2">{job.description}</p>
                    <Button className="mt-4">Apply Now</Button>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobOpenings;