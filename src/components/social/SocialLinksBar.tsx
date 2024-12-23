import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
  Linkedin,
  Plus,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: JSX.Element;
}

export const SocialLinksBar = () => {
  const { toast } = useToast();
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [newUrl, setNewUrl] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");

  const platformIcons = {
    instagram: <Instagram className="h-4 w-4" />,
    youtube: <Youtube className="h-4 w-4" />,
    twitter: <Twitter className="h-4 w-4" />,
    facebook: <Facebook className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />
  };

  const handleAddLink = () => {
    if (!newUrl.trim()) return;

    const newLink: SocialLink = {
      id: Date.now().toString(),
      platform: selectedPlatform,
      url: newUrl,
      icon: platformIcons[selectedPlatform as keyof typeof platformIcons]
    };

    setLinks([...links, newLink]);
    setNewUrl("");
    toast({
      title: "Social Link Added",
      description: `Your ${selectedPlatform} link has been added successfully.`
    });
  };

  const handleRemoveLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
    toast({
      title: "Social Link Removed",
      description: "The social media link has been removed."
    });
  };

  return (
    <div className="p-4 border rounded-lg bg-background">
      <h3 className="text-lg font-semibold mb-4">Social Media Links</h3>
      <div className="flex gap-2 mb-4">
        <select
          className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
          <option value="twitter">Twitter</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">LinkedIn</option>
        </select>
        <Input
          placeholder="Enter social media URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleAddLink} size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-2 bg-muted p-2 rounded-md"
          >
            {link.icon}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              {link.platform}
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => handleRemoveLink(link.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
