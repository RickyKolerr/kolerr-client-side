import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MySlots = () => {
  const mySlots = [
    {
      id: 1,
      title: "Fashion Spring Collection",
      brand: "StyleHub",
      status: "Active",
      progress: "50%",
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
          <Card key={slot.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{slot.title}</CardTitle>
                <Badge variant={slot.status === "Active" ? "default" : "secondary"}>
                  {slot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Brand:</strong> {slot.brand}</p>
              <p><strong>Budget:</strong> {slot.budget}</p>
              <p><strong>Deadline:</strong> {slot.deadline}</p>
              <p><strong>Requirements:</strong> {slot.requirements}</p>
              {slot.progress && (
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: slot.progress }}
                  ></div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={slot.status === "Active" ? "default" : "secondary"}>
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