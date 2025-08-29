import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Palette, Car } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      number: "02", 
      icon: Palette,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      number: "03",
      icon: Car,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            {t('process.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-card rounded-full shadow-lg flex items-center justify-center border border-border">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Before/After Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
              {t('process.result.badge')}
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('process.result.title')}
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t('process.result.desc')}
              </p>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">+</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t('process.result.increase')}</div>
                  <div className="text-primary font-bold">{t('process.result.percent')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={beforeAfterImage} 
                alt="До и после покраски автомобиля - результат работы автомалярки в Чернигове"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              
              {/* Before/After Labels */}
              <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {t('process.result.before')}
              </div>
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {t('process.result.after')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;