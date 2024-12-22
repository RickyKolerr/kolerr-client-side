import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("landing.contact.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-kolerr-cyan flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{t("landing.contact.visit")}</h3>
                <p className="text-foreground/80">
                  Nexus Tower - 5B Ton Duc Thang St,<br />
                  Ben Nghe Ward, District 1,<br />
                  Ho Chi Minh City
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-kolerr-purple flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{t("landing.contact.email")}</h3>
                <p className="text-foreground/80">contact@kolerr.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-kolerr-orange flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">{t("landing.contact.call")}</h3>
                <p className="text-foreground/80">+84 (28) 1234 5678</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <Input placeholder={t("landing.contact.form.name")} />
            <Input type="email" placeholder={t("landing.contact.form.email")} />
            <Input placeholder={t("landing.contact.form.subject")} />
            <Textarea placeholder={t("landing.contact.form.message")} className="h-32" />
            <Button 
              className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
            >
              {t("landing.contact.form.send")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;