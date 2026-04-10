import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SurveyAnswer {
  questionId: string;
  answer: string;
}

interface SurveyContextType {
  category: string;
  setCategory: (category: string) => void;
  answers: SurveyAnswer[];
  addAnswer: (questionId: string, answer: string) => void;
  clearAnswers: () => void;
  resetSurvey: () => void;
}

const SurveyContext = createContext<SurveyContextType | null>(null);

export function SurveyProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState('');
  const [answers, setAnswers] = useState<SurveyAnswer[]>([]);

  const addAnswer = useCallback((questionId: string, answer: string) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = { questionId, answer };
        return updated;
      }
      return [...prev, { questionId, answer }];
    });
  }, []);

  const clearAnswers = useCallback(() => {
    setAnswers([]);
  }, []);

  const resetSurvey = useCallback(() => {
    setCategory('');
    setAnswers([]);
  }, []);

  return (
    <SurveyContext.Provider
      value={{
        category,
        setCategory,
        answers,
        addAnswer,
        clearAnswers,
        resetSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within SurveyProvider');
  }
  return context;
}