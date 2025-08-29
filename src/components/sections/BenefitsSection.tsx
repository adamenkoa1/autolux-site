import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Palette, 
  Sparkles, 
  Shield,
  Clock,
  Award,
  CheckCircle,
  Star
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Camera,
      title: t('benefits.camera.title'),
      description: t('benefits.camera.desc'),
      highlight: t('benefits.camera.highlight')
    },
    {
      icon: Palette,
      title: t('benefits.color.title'),
      description: t('benefits.color.desc'),
      highlight: t('benefits.color.highlight')
    },
    {
      icon: Sparkles,
      title: t('benefits.materials.title'),
      description: t('benefits.materials.desc'),
      highlight: t('benefits.materials.highlight')
    },
    {
      icon: Shield,
      title: t('benefits.warranty.title'),
      description: t('benefits.warranty.desc'),
      highlight: t('benefits.warranty.highlight')
    },
    {
      icon: Clock,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.desc'),
      highlight: t('benefits.speed.highlight')
    },
    {
      icon: Award,
      title: t('benefits.masters.title'),
      description: t('benefits.masters.desc'),
      highlight: t('benefits.masters.highlight')
    }
  ];

  const processSteps = [
    t('benefits.process.step1'),
    t('benefits.process.step2'),
    t('benefits.process.step3'),
    t('benefits.process.step4'),
    t('benefits.process.step5'),
    t('benefits.process.step6'),
    t('benefits.process.step7')
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
            {t('benefits.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Highlight Badge */}
                  <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent text-xs">
                    {benefit.highlight}
                  </Badge>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              {t('benefits.process.badge')}
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('benefits.process.title')}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {t('benefits.process.subtitle')}
            </p>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-grow">
                    <span className="text-foreground font-medium">{step}</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {/* Quality Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">{t('benefits.stats.cars')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">7+</div>
                <div className="text-muted-foreground">{t('benefits.stats.experience')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">{t('benefits.stats.recommendation')}</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
                <div className="text-4xl font-bold text-accent mb-2">12</div>
                <div className="text-muted-foreground">{t('benefits.stats.warranty')}</div>
              </div>
            </div>

            {/* Quality Certificate */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">{t('benefits.quality.title')}</h4>
                <p className="text-muted-foreground">
                  {t('benefits.quality.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;