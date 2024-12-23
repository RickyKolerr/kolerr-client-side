import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [socialLinks, setSocialLinks] = useState<Array<{ platform: string; url: string }>>([]);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleAddSocialLink = (platform: string, url: string) => {
    if (!url.trim()) return;
    
    setSocialLinks(prev => {
      // Remove existing link for the same platform if it exists
      const filtered = prev.filter(link => link.platform !== platform);
      return [...filtered, { platform, url }];
    });

    toast({
      title: "Social Link Added",
      description: `Your ${platform} link has been added successfully.`
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Include socialLinks in the registration data when implementing with Supabase
    toast({
      title: "Registration Attempted",
      description: "This is a placeholder. Actual registration will be implemented with Supabase.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t("auth.social.title")}</CardTitle>
          <CardDescription>{t("auth.social.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                {t("auth.password")}
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Select onValueChange={setAccountType}>
                <SelectTrigger>
                  <SelectValue placeholder={t("auth.selectAccountType")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kol">{t("auth.accountType.kol")}</SelectItem>
                  <SelectItem value="brand">{t("auth.accountType.brand")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {accountType === "kol" && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Social Media Links</h3>
                {["instagram", "youtube", "twitter", "facebook", "linkedin"].map((platform) => (
                  <div key={platform} className="flex gap-2">
                    <Input
                      placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
                      onChange={(e) => handleAddSocialLink(platform, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}

            <Button type="submit" className="w-full">
              {t("auth.signup")}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-center text-muted-foreground">
            {t("auth.haveAccount")}{" "}
            <Link to="/auth/login" className="text-primary hover:underline">
              {t("auth.signin")}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
