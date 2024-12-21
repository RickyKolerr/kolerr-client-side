import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AvailableSlots = () => {
  const slots = [
    {
      id: 1,
      title: "Beauty Campaign with XYZ Brand",
      brand: "XYZ Beauty",
      budget: "$1,000-$2,000",
      dates: "Mar 15 - Apr 15, 2024",
      followers: "10K+",
      description: "Looking for beauty influencers to promote our new skincare line",
      status: "Open"
    },
    {
      id: 2,
      title: "Tech Review Campaign",
      brand: "TechGear Pro",
      budget: "$2,000-$3,000",
      dates: "Mar 20 - Apr 20, 2024",
      followers: "50K+",
      description: "Seeking tech reviewers for our latest smartphone accessories",
      status: "Open"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Input placeholder="Search slots..." className="md:w-1/3" />
        <Select>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beauty">Beauty</SelectItem>
            <SelectItem value="tech">Tech</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <Card key={slot.id}>
            <CardHeader>
              <CardTitle>{slot.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Brand:</strong> {slot.brand}</p>
              <p><strong>Budget:</strong> {slot.budget}</p>
              <p><strong>Campaign Dates:</strong> {slot.dates}</p>
              <p><strong>Required Followers:</strong> {slot.followers}</p>
              <p className="text-sm text-gray-400">{slot.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;