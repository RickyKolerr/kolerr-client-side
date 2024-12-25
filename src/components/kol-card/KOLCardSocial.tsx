import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
}

interface KOLCardSocialProps {
  socialLinks?: SocialLink[];
}

export const KOLCardSocial = ({ socialLinks }: KOLCardSocialProps) => {
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

  if (!socialLinks || socialLinks.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex justify-center gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/icon relative gradient-border hover-scale"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-2 transition-colors group-hover/icon:bg-transparent">
              <span className="text-muted-foreground transition-colors group-hover/icon:text-white">
                {platformIcons[link.platform as keyof typeof platformIcons]}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};