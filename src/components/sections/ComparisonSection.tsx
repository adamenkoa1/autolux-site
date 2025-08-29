import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonSection = () => {
  const { t } = useLanguage();
  
  const comparisonData = [
    {
      criteria: t('comparison.color.criteria'),
      us: t('comparison.color.us'),
      others: t('comparison.color.others'),
      advantage: true
    },
    {
      criteria: t('comparison.camera.criteria'),
      us: t('comparison.camera.us'),
      others: t('comparison.camera.others'),
      advantage: true
    },
    {
      criteria: t('comparison.warranty.criteria'),
      us: t('comparison.warranty.us'),
      others: t('comparison.warranty.others'),
      advantage: true
    },
    {
      criteria: t('comparison.duration.criteria'),
      us: t('comparison.duration.us'),
      others: t('comparison.duration.others'),
      advantage: true
    },
    {
      criteria: t('comparison.materials.criteria'),
      us: t('comparison.materials.us'),
      others: t('comparison.materials.others'),
      advantage: true
    },
    {
      criteria: t('comparison.experience.criteria'),
      us: t('comparison.experience.us'),
      others: t('comparison.experience.others'),
      advantage: true
    },
    {
      criteria: t('comparison.technology.criteria'),
      us: t('comparison.technology.us'),
      others: t('comparison.technology.others'),
      advantage: true
    },
    {
      criteria: t('comparison.price.criteria'),
      us: t('comparison.price.us'),
      others: t('comparison.price.others'),
      advantage: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
            {t('comparison.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Premium Badge */}
        <div className="text-center mb-12">
          <Card className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Crown className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">{t('comparison.premium.title')}</h3>
                  <p className="text-muted-foreground">{t('comparison.premium.desc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Version */}
          <Card className="hidden md:block overflow-hidden border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="p-4 lg:p-6 text-center border-r border-border/50">
                  <h3 className="text-sm lg:text-lg font-bold text-muted-foreground">{t('comparison.criteria')}</h3>
                </div>
                <div className="p-4 lg:p-6 text-center border-r border-border/50 bg-gradient-to-r from-primary/10 to-primary/5">
                  <div className="flex items-center justify-center gap-1 lg:gap-2 mb-2">
                    <Crown className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                    <h3 className="text-sm lg:text-lg font-bold text-primary">{t('comparison.us')}</h3>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                    {t('comparison.us.level')}
                  </Badge>
                </div>
                <div className="p-4 lg:p-6 text-center">
                  <h3 className="text-sm lg:text-lg font-bold text-muted-foreground">{t('comparison.others')}</h3>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs mt-2">
                    {t('comparison.others.level')}
                  </Badge>
                </div>
              </div>

              {/* Comparison Rows */}
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 border-b border-border/30 hover:bg-muted/30 transition-colors ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                  }`}
                >
                  {/* Criteria */}
                  <div className="p-3 lg:p-6 border-r border-border/50">
                    <span className="font-semibold text-foreground text-sm lg:text-base">{row.criteria}</span>
                  </div>

                  {/* Our Solution */}
                  <div className="p-3 lg:p-6 border-r border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm lg:text-base">{row.us}</span>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-3 lg:p-6">
                    <div className="flex items-start gap-2 lg:gap-3">
                      <XCircle className="w-4 h-4 lg:w-5 lg:h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm lg:text-base">{row.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mobile Version */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <Card key={index} className="border border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 text-center">{row.criteria}</h3>
                  
                  {/* Our Solution */}
                  <div className="mb-4 p-4 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary text-sm">{t('comparison.us')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium text-sm">{row.us}</span>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-muted-foreground text-sm">{t('comparison.others')}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{row.others}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('comparison.our.approach')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('comparison.our.desc')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('comparison.our.result')}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('comparison.our.warranty')}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('comparison.our.price')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-muted/50 to-muted border border-border">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('comparison.typical.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('comparison.typical.desc')}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{t('comparison.typical.transitions')}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{t('comparison.typical.durability')}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{t('comparison.typical.hidden')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {t('comparison.choice')}
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            {t('comparison.invest')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
