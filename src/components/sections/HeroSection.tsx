import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, Award, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-workshop.jpg";
import ContactForm from "@/components/forms/ContactForm";

const HeroSection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {showContactForm && (
        <ContactForm 
          onClose={() => setShowContactForm(false)}
          title={t('form.title')}
        />
      )}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Award className="w-4 h-4 mr-1" />
                {t('hero.experience')}
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                <Star className="w-4 h-4 mr-1" />
                {t('hero.clients')}
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Shield className="w-4 h-4 mr-1" />
                {t('hero.warranty')}
              </Badge>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('hero.camera.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.camera.desc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t('hero.color.title')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.color.desc')}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                variant="hero" 
                className="w-full sm:w-auto text-base sm:text-lg flex-shrink-0"
                onClick={() => setShowContactForm(true)}
              >
                {t('hero.btn.order')}
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="w-full hover:bg-primary hover:text-primary-foreground border-primary text-base sm:text-lg"
                onClick={() => window.location.href = 'tel:+380967983816'}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.btn.diagnostic')}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-muted-foreground mb-2">{t('hero.call.now')}</p>
              <a href="tel:+380967983816" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                +38 (096) 798-38-16
              </a>
              <p className="text-muted-foreground mt-2">
                {t('common.address')}
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Профессиональная покрасочная камера в Чернигове"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{t('hero.free.estimate')}</h3>
                    <p className="text-muted-foreground">{t('hero.free.diagnostic')}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">0₴</div>
                    <div className="text-sm text-muted-foreground">{t('hero.diagnostic')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;