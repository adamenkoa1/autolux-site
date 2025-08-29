import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Андрей Петрович",
      location: "Чернигов",
      car: "Toyota Camry 2019",
      rating: 5,
      text: "Покрасили крыло после ДТП — цвет подобрали идеально, даже под углом не видно перехода. Работали 2 дня, как обещали. Гарантию дали письменную на год.",
      highlight: "Идеальный подбор цвета"
    },
    {
      name: "Марина Сергеевна", 
      location: "Чернигов",
      car: "Volkswagen Golf 2020",
      rating: 5,
      text: "Полная покраска после града. Машина выглядит лучше чем новая! Мастера профессионалы, всё объяснили, показали процесс. Цена честная, без скрытых доплат.",
      highlight: "Честная цена"
    },
    {
      name: "Дмитрий Владимирович",
      location: "Прилуки", 
      car: "BMW X5 2018",
      rating: 5,
      text: "Специально ехал из Прилук после рекомендации друга. Покрасили капот и бампер — работа на высшем уровне. Камера профессиональная, не то что в гаражах.",
      highlight: "Профессиональная камера"
    },
    {
      name: "Оксана Николаевна",
      location: "Нежин",
      car: "Hyundai Elantra 2021", 
      rating: 5,
      text: "Царапина по всему борту — думала машина испорчена. Мастера творят чудеса! Стоимость авто даже выросла после их работы. Всем рекомендую!",
      highlight: "Увеличение стоимости авто"
    },
    {
      name: "Александр Иванович",
      location: "Чернигов",
      car: "Mercedes-Benz C-Class 2017",
      rating: 5, 
      text: "Покраска металликом — очень сложная работа. Справились на отлично! Переход незаметен даже на солнце. Гарантию соблюдают — проверено лично.",
      highlight: "Работа с металликом"
    }
  ];

  const caseStudy = {
    title: "Кейс: восстановление после ДТП",
    car: "Audi A4 2019",
    problem: "Серьезное повреждение передней части после столкновения",
    solution: "Полная покраска переда с заменой деталей",
    result: "Автомобиль полностью восстановлен, стоимость увеличилась на 20%",
    duration: "3 дня",
    before: "Сильные повреждения ЛКП, вмятины",
    after: "Заводской блеск, идеальная геометрия"
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Highlight */}
                <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent text-xs">
                  {testimonial.highlight}
                </Badge>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location} • {testimonial.car}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Testimonials - Mobile Optimized */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card key={index + 3} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent text-xs">
                      {testimonial.highlight}
                    </Badge>
                    <blockquote className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.location} • {testimonial.car}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
                {t('testimonials.case.badge')}
              </Badge>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {t('testimonials.case.title')}
              </h3>
              <p className="text-lg text-muted-foreground">{t('testimonials.case.car')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-foreground mb-2 text-lg">{t('testimonials.case.problem.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('testimonials.case.problem.desc')}</p>
                <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="text-sm font-medium text-destructive">{t('testimonials.case.before.label')}</div>
                  <div className="text-sm text-muted-foreground">{t('testimonials.case.problem.before')}</div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-foreground mb-2 text-lg">{t('testimonials.case.solution.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('testimonials.case.solution.desc')}</p>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm font-medium text-primary">{t('testimonials.case.duration.label')}</div>
                  <div className="text-lg font-bold text-primary">{t('testimonials.case.solution.duration')}</div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-bold text-foreground mb-2 text-lg">{t('testimonials.case.result.title')}</h4>
                <p className="text-muted-foreground text-sm">{t('testimonials.case.result.desc')}</p>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="text-sm font-medium text-accent">{t('testimonials.case.after.label')}</div>
                  <div className="text-sm text-muted-foreground">{t('testimonials.case.result.after')}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;