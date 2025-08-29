import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-card/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border">
        <Globe className="w-4 h-4 text-muted-foreground" />
        <Button
          variant={language === 'ru' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('ru')}
          className="h-8 px-3 text-sm font-medium"
        >
          RU
        </Button>
        <Button
          variant={language === 'uk' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('uk')}
          className="h-8 px-3 text-sm font-medium"
        >
          UK
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;