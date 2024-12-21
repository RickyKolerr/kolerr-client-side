import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

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
      status: "Open",
      category: "Beauty",
      platform: "Instagram"
    },
    {
      id: 2,
      title: "Tech Review Campaign",
      brand: "TechGear Pro",
      budget: "$2,000-$3,000",
      dates: "Mar 20 - Apr 20, 2024",
      followers: "50K+",
      description: "Seeking tech reviewers for our latest smartphone accessories",
      status: "Open",
      category: "Tech",
      platform: "YouTube"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input placeholder="Search slots..." className="pl-10" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select>
            <SelectTrigger className="w-[150px]">
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
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{slot.title}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{slot.platform}</Badge>
                </div>
                <Badge variant="default" className="bg-green-500">
                  {slot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Brand</p>
                  <p className="font-medium">{slot.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="font-medium">{slot.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Campaign Dates</p>
                  <p className="font-medium">{slot.dates}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Required Followers</p>
                  <p className="font-medium">{slot.followers}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{slot.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
                Apply Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;