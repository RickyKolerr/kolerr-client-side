import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, DollarSign, CheckCircle2, Clock } from "lucide-react";

const MySlots = () => {
  const mySlots = [
    {
      id: 1,
      title: "Fashion Spring Collection",
      brand: "StyleHub",
      status: "Active",
      progress: 50,
      deadline: "Mar 30, 2024",
      requirements: "2 Instagram posts, 1 Story",
      budget: "$1,500"
    },
    {
      id: 2,
      title: "Food Review Series",
      brand: "TasteVN",
      status: "Pending",
      deadline: "Apr 5, 2024",
      requirements: "3 TikTok videos",
      budget: "$2,000"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {mySlots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">{slot.title}</CardTitle>
                <Badge
                  variant={slot.status === "Active" ? "default" : "secondary"}
                  className={slot.status === "Active" ? "bg-green-500" : ""}
                >
                  {slot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Brand</p>
                    <p className="font-medium">{slot.brand}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{slot.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Deadline</p>
                    <p className="font-medium">{slot.deadline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Requirements</p>
                    <p className="font-medium">{slot.requirements}</p>
                  </div>
                </div>
              </div>
              {slot.progress && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{slot.progress}%</span>
                  </div>
                  <Progress value={slot.progress} className="h-2" />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  slot.status === "Active"
                    ? "bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
                    : ""
                }`}
                variant={slot.status === "Active" ? "default" : "secondary"}
              >
                {slot.status === "Active" ? "View Details" : "Accept Invitation"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MySlots;