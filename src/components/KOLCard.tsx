import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
}

interface KOLCardProps {
  name: string;
  image: string;
  followers: string;
  engagement: string;
  expertise?: string;
  socialLinks?: SocialLink[];
}

const KOLCard = ({ name, image, followers, engagement, expertise, socialLinks }: KOLCardProps) => {
  const platformIcons = {
    facebook: <Facebook className="h-4 w-4" />,
    instagram: <Instagram className="h-4 w-4" />,
    youtube: <Youtube className="h-4 w-4" />,
    tiktok: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  };

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
        {socialLinks && socialLinks.length > 0 && (
          <div className="mb-4">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900"
                >
                  {platformIcons[link.platform as keyof typeof platformIcons]}
                </a>
              ))}
            </div>
          </div>
        )}
        <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:opacity-90">
          Partnership Details
        </Button>
      </div>
    </Card>
  );
};

export default KOLCard;