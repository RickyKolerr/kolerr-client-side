import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AddOnCardProps {
  name: string;
  price: number;
  description: string;
}

export const AddOnCard = ({ name, price, description }: AddOnCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">
            {price.toLocaleString()} VND
            <span className="text-sm text-muted-foreground block">
              (${(price / 25000).toFixed(2)} USD)
            </span>
          </p>
          <Button variant="outline">Add to Plan</Button>
        </div>
      </CardContent>
    </Card>
  );
};