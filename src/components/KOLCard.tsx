import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

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
    facebook: <Facebook className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    tiktok: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  };

  return (
    <Card className="group relative overflow-hidden bg-white card-hover animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative p-6">
        <div className="relative mb-6 flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl gradient-border">
            <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold gradient-text">{name}</h3>
            {expertise && (
              <p className="text-sm text-muted-foreground">{expertise}</p>
            )}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-background p-3 text-center hover-scale">
            <p className="text-sm text-muted-foreground">Followers</p>
            <p className="text-lg font-bold gradient-text">{followers}</p>
          </div>
          <div className="rounded-lg bg-background p-3 text-center hover-scale">
            <p className="text-sm text-muted-foreground">Engagement</p>
            <p className="text-lg font-bold gradient-text">{engagement}</p>
          </div>
        </div>

        {socialLinks && socialLinks.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative gradient-border hover-scale"
                >
                  <div className="rounded-lg bg-white p-2 transition-colors group-hover/icon:bg-transparent">
                    <span className="text-muted-foreground transition-colors group-hover/icon:text-white">
                      {platformIcons[link.platform as keyof typeof platformIcons]}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <Button 
          className="w-full gradient-bg text-white hover-scale"
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
};

export default KOLCard;