import { useParams, useNavigate } from 'react-router';
import { Home, Coffee, Ticket, Heart, Car, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useSurvey } from '../../context/SurveyContext';
import { defaultCategories } from '../../data/surveyQuestions';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/dd3bfa837dfa92a5643677141b8779a2931011b6.png';

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface PartnerConfig {
  propertyId: string;
  partnerName?: string;
  logoUrl?: string;
  isWhiteLabel: boolean;
}

const iconMap: Record<string, any> = {
  home: Home,
  utensils: Coffee,
  ticket: Ticket,
  paw: Heart,
  car: Car,
  leaf: Sparkles,
};

export function Categories() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const { setCategory, resetSurvey } = useSurvey();
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [partnerConfig, setPartnerConfig] = useState<PartnerConfig>({
    propertyId: propertyId || 'default',
    isWhiteLabel: false,
  });

  useEffect(() => {
    // Reset survey when entering category selection
    resetSurvey();

    // TODO: Fetch partner configuration
    // GET /api/partners/:propertyId/config
    // This will determine if white-label mode is active and load partner branding

    // TODO: If white-label mode, fetch enabled categories
    // GET /api/partners/:propertyId/categories
    // For now, using default categories

    // Placeholder for white-label detection
    const isWhiteLabelProperty = propertyId !== 'default' && propertyId !== 'preferred-deals';
    setPartnerConfig({
      propertyId: propertyId || 'default',
      isWhiteLabel: isWhiteLabelProperty,
      // These would come from API
      partnerName: isWhiteLabelProperty ? 'Partner Community' : undefined,
      logoUrl: undefined,
    });
  }, [propertyId, resetSurvey]);

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId);
    navigate(`/discover/${propertyId}/survey/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-background px-4 pt-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md mx-auto"
      >
        {/* Logo */}
        <div className="flex justify-center mb-12">
          {partnerConfig.isWhiteLabel && partnerConfig.logoUrl ? (
            <img 
              src={partnerConfig.logoUrl} 
              alt={partnerConfig.partnerName} 
              className="h-16 object-contain" 
            />
          ) : (
            null
          )}
        </div>

        {/* Headline */}
        <h1 className="text-center mb-8 text-[32px] font-light tracking-[1.6px] leading-[1.2]">
          What are you looking for?
        </h1>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon] || Home;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategorySelect(category.id)}
                className="group relative bg-card border border-border hover:border-foreground/20 transition-all duration-300 min-h-[160px] flex flex-col items-center justify-center gap-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-10 h-10 text-foreground/90 relative z-10" strokeWidth={1.5} />
                <span className="text-center text-[13px] font-light tracking-[0.8px] text-foreground/70 relative z-10 uppercase">
                  {category.name}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* All Listings Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          onClick={() => navigate('/directory')}
          className="w-full mt-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 font-medium tracking-[1.4px] text-[14px] uppercase"
        >
          All Listings
        </motion.button>
      </motion.div>
    </div>
  );
}