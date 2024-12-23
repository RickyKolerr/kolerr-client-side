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
    <Card className="group relative overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative p-6">
        {/* Profile section */}
        <div className="relative mb-6 flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl ring-2 ring-kolerr-purple/20">
            <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            {expertise && (
              <p className="text-sm text-gray-600">{expertise}</p>
            )}
          </div>
        </div>

        {/* Stats section */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-sm text-gray-600">Followers</p>
            <p className="text-lg font-bold text-gray-900">{followers}</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 text-center">
            <p className="text-sm text-gray-600">Engagement</p>
            <p className="text-lg font-bold text-gray-900">{engagement}</p>
          </div>
        </div>

        {/* Social links */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-center gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/icon relative rounded-lg bg-gradient-to-br from-kolerr-cyan via-kolerr-purple to-kolerr-orange p-[1px] transition-all hover:scale-110"
                >
                  <div className="rounded-lg bg-white p-2 transition-colors group-hover/icon:bg-transparent">
                    <span className="text-gray-600 transition-colors group-hover/icon:text-white">
                      {platformIcons[link.platform as keyof typeof platformIcons]}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action button */}
        <Button 
          className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                     transition-all duration-300 hover:scale-105 hover:opacity-90
                     hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]"
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
};

export default KOLCard;