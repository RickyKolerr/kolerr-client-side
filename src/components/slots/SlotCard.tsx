import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, DollarSign, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SlotCardProps {
  slot: {
    id: number;
    title: string;
    brand: string;
    budget: string;
    dates: string;
    followers: string;
    description: string;
    status: string;
    category: string;
    platform: string;
    requirements: string;
  };
}

export function SlotCard({ slot }: SlotCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {slot.title}
            </CardTitle>
            <Badge variant="secondary" className="mb-2 bg-kolerr-purple/10 text-kolerr-purple">
              {slot.platform}
            </Badge>
          </div>
          <Badge variant="default" className="bg-green-500">
            {slot.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-kolerr-purple" />
            <div>
              <p className="text-sm text-muted-foreground">{t('slots.available.brand')}</p>
              <p className="font-medium">{slot.brand}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-kolerr-cyan" />
            <div>
              <p className="text-sm text-muted-foreground">{t('slots.available.budget')}</p>
              <p className="font-medium">{slot.budget}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-kolerr-orange" />
            <div>
              <p className="text-sm text-muted-foreground">{t('slots.available.dates')}</p>
              <p className="font-medium">{slot.dates}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-kolerr-purple" />
            <div>
              <p className="text-sm text-muted-foreground">{t('slots.available.followers')}</p>
              <p className="font-medium">{slot.followers}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-kolerr-cyan" />
          <p className="text-sm">{slot.requirements}</p>
        </div>
        <p className="text-sm text-muted-foreground">{slot.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity">
          {t('slots.available.applyNow')}
        </Button>
      </CardFooter>
    </Card>
  );
}