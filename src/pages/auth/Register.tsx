import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSocialLinkChange = (platform: string, value: string) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
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
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="password">{t("auth.password")}</Label>
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
                <Label>Social Media Links</Label>
                <div className="space-y-3">
                  {Object.keys(socialLinks).map((platform) => (
                    <div key={platform} className="space-y-1">
                      <Label htmlFor={platform} className="capitalize">{platform}</Label>
                      <Input
                        id={platform}
                        placeholder={`Your ${platform} profile URL`}
                        value={socialLinks[platform as keyof typeof socialLinks]}
                        onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
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