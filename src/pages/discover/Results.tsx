import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { useSurvey } from '../../context/SurveyContext';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { useEffect, useState } from 'react';

interface BusinessResult {
  id: string;
  name: string;
  category: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  dealLabel: string;
  dealDescription: string;
  logoUrl?: string;
  listingUrl: string;
}

// Mock data - will be replaced by API call
const mockResults: BusinessResult[] = [
  {
    id: '1',
    name: 'The Local Bistro',
    category: 'Food & Dining',
    tagline: 'Farm-to-table dining experience',
    rating: 4.8,
    reviewCount: 245,
    dealLabel: 'Exclusive: 15% off',
    dealDescription: '15% off your entire check',
    listingUrl: '/directory/1',
  },
  {
    id: '2',
    name: 'Sunshine Cafe',
    category: 'Food & Dining',
    tagline: 'Best coffee in town',
    rating: 4.6,
    reviewCount: 189,
    dealLabel: 'Buy 1 Get 1 Free',
    dealDescription: 'Buy one coffee, get one free',
    listingUrl: '/directory/2',
  },
  {
    id: '3',
    name: 'Green Garden Restaurant',
    category: 'Food & Dining',
    tagline: 'Organic & sustainable dining',
    rating: 4.9,
    reviewCount: 312,
    dealLabel: '20% off appetizers',
    dealDescription: '20% off all appetizers',
    listingUrl: '/directory/3',
  },
  {
    id: '4',
    name: 'Downtown Diner',
    category: 'Food & Dining',
    tagline: 'Classic American comfort food',
    rating: 4.5,
    reviewCount: 156,
    dealLabel: 'Free dessert',
    dealDescription: 'Free dessert with entree',
    listingUrl: '/directory/4',
  },
];

export function Results() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const navigate = useNavigate();
  const { category, answers } = useSurvey();
  const [results, setResults] = useState<BusinessResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch matched businesses from API
    // POST /api/partners/:propertyId/match
    // Body: { category, answers }
    // This will use the backend's matching algorithm to find relevant businesses

    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setIsLoading(false);
    }, 500);
  }, [propertyId, category, answers]);

  const handleStartOver = () => {
    navigate(`/discover/${propertyId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Finding your matches...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="mb-2">Here are your matches</h1>
          <p className="text-muted-foreground">
            Based on your preferences, we found {results.length} great options
          </p>
        </motion.div>

        {/* Results Cards */}
        <div className="space-y-4 mb-8">
          {results.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                      {business.logoUrl ? (
                        <img 
                          src={business.logoUrl} 
                          alt={business.name} 
                          className="w-full h-full object-cover rounded-lg" 
                        />
                      ) : (
                        <span className="text-2xl font-medium text-muted-foreground">
                          {business.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="mb-1">{business.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {business.category}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {business.tagline}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{business.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({business.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Deal */}
                    <div className="bg-accent/50 rounded-lg px-3 py-2 mb-4">
                      <p className="text-sm">
                        <span className="text-foreground mr-2">🎁</span>
                        {business.dealLabel}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link to={business.listingUrl}>
                      <Button className="w-full sm:w-auto">
                        View Deal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <Link 
            to="/directory" 
            className="inline-flex items-center gap-2 text-foreground hover:underline"
          >
            Browse all listings
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div>
            <button
              onClick={handleStartOver}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Start over
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
