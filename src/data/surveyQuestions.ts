export interface SurveyQuestion {
  id: string;
  question: string;
  options: string[];
}

export interface CategoryQuestions {
  category: string;
  questions: SurveyQuestion[];
}

export const defaultCategories = [
  { id: 'home-products', name: 'Home Products', icon: 'home' },
  { id: 'food-dining', name: 'Food & Dining', icon: 'utensils' },
  { id: 'entertainment', name: 'Entertainment', icon: 'ticket' },
  { id: 'pet-care', name: 'Pet Care', icon: 'paw' },
  { id: 'transportation', name: 'Transportation', icon: 'car' },
  { id: 'self-care', name: 'Self Care', icon: 'leaf' },
];

export const surveyQuestions: Record<string, SurveyQuestion[]> = {
  'food-dining': [
    {
      id: 'food-dining-q1',
      question: 'What kind of experience?',
      options: ['Quick Bite', 'Sit-Down Dinner', 'Drinks & Nightlife', 'Coffee & Cafe'],
    },
    {
      id: 'food-dining-q2',
      question: 'Any dietary preferences?',
      options: ['No Preference', 'Vegetarian', 'Vegan', 'Gluten-Free'],
    },
  ],
  'home-products': [
    {
      id: 'home-products-q1',
      question: 'What do you need?',
      options: ['Furniture', 'Cleaning Services', 'Repairs & Handyman', 'Decor & Accessories'],
    },
    {
      id: 'home-products-q2',
      question: 'How soon do you need it?',
      options: ['Today', 'This Week', 'Just Browsing'],
    },
  ],
  'entertainment': [
    {
      id: 'entertainment-q1',
      question: 'What sounds fun?',
      options: ['Live Music', 'Movies', 'Outdoor Activities', 'Arts & Culture'],
    },
    {
      id: 'entertainment-q2',
      question: 'Who are you with?',
      options: ['Solo', 'Partner', 'Friends', 'Family with Kids'],
    },
  ],
  'pet-care': [
    {
      id: 'pet-care-q1',
      question: 'What type of pet?',
      options: ['Dog', 'Cat', 'Bird', 'Other'],
    },
    {
      id: 'pet-care-q2',
      question: 'What do you need?',
      options: ['Grooming', 'Vet / Health', 'Boarding', 'Supplies'],
    },
  ],
  'transportation': [
    {
      id: 'transportation-q1',
      question: 'What do you need?',
      options: ['Rideshare / Taxi', 'Car Rental', 'Bike or Scooter', 'Airport Transfer'],
    },
    {
      id: 'transportation-q2',
      question: 'When?',
      options: ['Right Now', 'Today', 'This Week'],
    },
  ],
  'self-care': [
    {
      id: 'self-care-q1',
      question: 'What are you looking for?',
      options: ['Haircut / Salon', 'Massage / Spa', 'Gym / Fitness', 'Nails'],
    },
    {
      id: 'self-care-q2',
      question: 'Any preference?',
      options: ['Closest to Me', 'Highest Rated', 'Best Deal'],
    },
  ],
};

export function getQuestionsForCategory(categoryId: string): SurveyQuestion[] {
  // TODO: For white-label custom categories, fetch from API
  // GET /api/partners/:propertyId/categories/:categoryId/questions
  return surveyQuestions[categoryId] || [];
}
