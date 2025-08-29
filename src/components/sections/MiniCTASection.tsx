import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactForm from "@/components/forms/ContactForm";

interface MiniCTASectionProps {
  variant?: "process" | "benefits" | "testimonials" | "comparison";
}

const MiniCTASection = ({ variant = "process" }: MiniCTASectionProps) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { t } = useLanguage();
  
  const ctaContent = {
    process: {
      badge: t('cta.process.badge'),
      title: t('cta.process.title'),
      subtitle: t('cta.process.subtitle'),
      primaryButton: t('cta.process.primary'),
      secondaryButton: t('cta.process.secondary'),
      highlight: t('cta.process.highlight')
    },
    benefits: {
      badge: t('cta.benefits.badge'),
      title: t('cta.benefits.title'),
      subtitle: t('cta.benefits.subtitle'),
      primaryButton: t('cta.benefits.primary'),
      secondaryButton: t('cta.benefits.secondary'),
      highlight: t('cta.benefits.highlight')
    },
    testimonials: {
      badge: t('cta.testimonials.badge'),
      title: t('cta.testimonials.title'),
      subtitle: t('cta.testimonials.subtitle'),
      primaryButton: t('cta.testimonials.primary'),
      secondaryButton: t('cta.testimonials.secondary'),
      highlight: t('cta.testimonials.highlight')
    },
    comparison: {
      badge: t('cta.comparison.badge'),
      title: t('cta.comparison.title'),
      subtitle: t('cta.comparison.subtitle'),
      primaryButton: t('cta.comparison.primary'),
      secondaryButton: t('cta.comparison.secondary'),
      highlight: t('cta.comparison.highlight')
    }
  };

  const content = ctaContent[variant];

  return (
    <>
      {showContactForm && (
        <ContactForm 
          onClose={() => setShowContactForm(false)}
          title={t('form.title')}
        />
      )}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-card/95 to-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent text-sm px-4 py-2">
              {content.badge}
            </Badge>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {content.title}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                size="xl" 
                variant="hero" 
                className="w-full sm:w-auto group text-base sm:text-lg px-6 sm:px-8"
                onClick={() => setShowContactForm(true)}
              >
                {content.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline" 
                className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground border-primary text-base sm:text-lg px-6 sm:px-8"
                onClick={() => window.location.href = 'tel:+380967983816'}
              >
                <Phone className="w-5 h-5 mr-2" />
                {content.secondaryButton}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{t('common.fast.response')}</span>
              </div>
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <div className="flex items-center gap-1">
                <Calculator className="w-4 h-4" />
                <span>{content.highlight}</span>
              </div>
            </div>

            {variant === "comparison" && (
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="text-accent font-semibold text-sm">
                  {t('cta.comparison.urgent')}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      </section>
    </>
  );
};

export default MiniCTASection;