import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { DescriptionGenerator } from "@/components/auth/DescriptionGenerator";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Mode",
      description: "This is a UI-only version. Registration functionality has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{t("auth.social.title")}</CardTitle>
          <CardDescription>{t("auth.social.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SocialLogin />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {t("auth.or")}
              </span>
            </div>
          </div>

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
              <label htmlFor="accountType" className="text-sm font-medium text-foreground">
                {t("auth.accountType")}
              </label>
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
            
            <DescriptionGenerator 
              accountType={accountType}
              description={description}
              setDescription={setDescription}
            />

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