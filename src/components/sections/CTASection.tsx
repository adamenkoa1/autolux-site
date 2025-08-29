import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Sparkles,
  ArrowRight,
  Star,
  Gift
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/forms/ContactForm";

const CTASection = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t } = useLanguage();
  
  const contactInfo = {
    phone: "+38 (096) 798-38-16",
    address: t('common.address'),
    workingHours: t('cta.section.working.hours')
  };

  const urgentOffer = {
    title: t('cta.section.offer.title'),
    discount: t('cta.section.offer.discount'),
    description: t('cta.section.offer.description'),
    conditions: t('cta.section.offer.conditions')
  };

  return (
    <>
      {showContactForm && (
        <ContactForm 
          onClose={() => setShowContactForm(false)}
          title={t('form.title')}
        />
      )}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Urgent Offer Banner */}
        <div className="text-center mb-12">
          <Card className="inline-block bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/30 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Gift className="w-8 h-8 text-accent" />
                <div>
                  <Badge variant="secondary" className="mb-2 bg-accent/20 text-accent">
                    {urgentOffer.title}
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t('cta.section.discount.title')} <span className="text-accent">{urgentOffer.discount}</span> {t('cta.section.discount.paint')}
                  </h3>
                  <p className="text-muted-foreground text-sm">{urgentOffer.conditions}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('cta.section.return.shine')}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> {t('cta.section.today')}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
            {t('cta.section.book.estimate')}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="xl" 
              variant="hero" 
              className="w-full sm:w-auto text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 shadow-2xl hover:shadow-glow"
              onClick={() => setShowContactForm(true)}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              {t('cta.section.main.btn')}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.location.href = 'tel:+380967983816'}
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              {t('cta.section.call.now')}
            </Button>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('cta.section.phone')}</h3>
              <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('cta.section.address')}</h3>
              <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t('cta.section.hours')}</h3>
              <p className="text-muted-foreground text-sm">{contactInfo.workingHours}</p>
            </CardContent>
          </Card>

        </div>

        {/* Trust Signals */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">{t('cta.section.happy.clients')}</h4>
            <p className="text-muted-foreground text-sm">{t('cta.section.recommendation')}</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-accent" />
            </div>
            <h4 className="font-bold text-foreground mb-2">{t('cta.section.years.market')}</h4>
            <p className="text-muted-foreground text-sm">{t('cta.section.reputation')}</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold text-foreground mb-2">{t('cta.section.response.time')}</h4>
            <p className="text-muted-foreground text-sm">{t('cta.section.quick.response')}</p>
          </div>
        </div>

      </div>
      </section>
    </>
  );
};

export default CTASection;