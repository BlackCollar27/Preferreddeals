import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useSurvey } from '../../context/SurveyContext';
import { getQuestionsForCategory, SurveyQuestion } from '../../data/surveyQuestions';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';

export function Survey() {
  const { propertyId, category } = useParams<{ propertyId: string; category: string }>();
  const navigate = useNavigate();
  const { setCategory, addAnswer, answers } = useSurvey();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<SurveyQuestion[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (category) {
      setCategory(category);
      const categoryQuestions = getQuestionsForCategory(category);
      setQuestions(categoryQuestions);
    }
  }, [category, setCategory]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleOptionSelect = (option: string) => {
    if (isTransitioning) return;

    // Save answer
    addAnswer(currentQuestion.id, option);
    setIsTransitioning(true);

    // Auto-advance after delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      } else {
        // Navigate to results page
        navigate(`/discover/${propertyId}/results`);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      navigate(`/discover/${propertyId}`);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with back button and progress */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-4 mb-2">
            <button
              onClick={handleBack}
              className="p-0 hover:opacity-70 transition-opacity flex-shrink-0"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <div className="flex-1 flex flex-col gap-2">
              <div className="text-center">
                <span className="text-[11px] font-light tracking-[0.8px] text-muted-foreground uppercase">
                  Step {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              <div className="h-[2px] bg-border overflow-hidden">
                <motion.div 
                  className="h-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="px-4 pt-16 pb-8">
        <div className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Question */}
              <h2 className="text-center mb-8 text-[32px] font-light tracking-[1.6px] leading-[1.2]">
                {currentQuestion.question}
              </h2>

              {/* Options Grid */}
              <div className="grid grid-cols-2 gap-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers.find(a => a.questionId === currentQuestion.id)?.answer === option;
                  return (
                    <motion.button
                      key={option}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.06,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect(option)}
                      className={`
                        relative px-6 py-8 border transition-all duration-300 min-h-[120px] flex items-center justify-center
                        ${isSelected 
                          ? 'bg-foreground text-background border-foreground' 
                          : 'bg-card text-foreground border-border hover:border-foreground/20'
                        }
                      `}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-[13px] font-light tracking-[0.8px] text-center uppercase relative z-10">
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}