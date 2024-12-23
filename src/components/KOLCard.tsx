import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialLinksBar } from "@/components/social/SocialLinksBar";

interface KOLCardProps {
  name: string;
  image: string;
  followers: string;
  engagement: string;
  expertise?: string;
}

const KOLCard = ({ name, image, followers, engagement, expertise }: KOLCardProps) => {
  return (
    <Card className="overflow-hidden bg-white shadow-lg transition-transform hover:scale-105">
      <div className="p-6 text-center">
        <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{name}</h3>
        <div className="mb-4 space-y-2 text-sm text-gray-600">
          <p>Followers: {followers}</p>
          <p>Engagement: {engagement}</p>
          {expertise && <p>Expertise: {expertise}</p>}
        </div>
        <div className="mb-4">
          <SocialLinksBar />
        </div>
        <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:opacity-90">
          Partnership Details
        </Button>
      </div>
    </Card>
  );
};

export default KOLCard;