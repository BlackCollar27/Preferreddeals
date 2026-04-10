import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserType = 'user' | 'partner' | 'distribution' | 'admin';

interface AuthState {
  isUserLoggedIn: boolean;
  isBusinessLoggedIn: boolean;
  userName: string;
  userEmail: string;
  userType: UserType;
  businessId: string | null;
  savedDeals: string[];
  distributionApprovalStatus: 'pending' | 'approved' | 'rejected';
}

interface AuthContextType extends AuthState {
  login: (email: string, name: string, type?: UserType) => void;
  logout: () => void;
  businessLogin: (id: string) => void;
  distributionLogin: (isSignup: boolean) => void;
  toggleSaveDeal: (businessId: string) => void;
  setUserType: (type: UserType) => void;
  setDistributionApprovalStatus: (status: 'pending' | 'approved' | 'rejected') => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = 'preferred_deals_auth';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    // Load from localStorage on mount
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // If parsing fails, use defaults
        }
      }
    }
    return {
      isUserLoggedIn: false,
      isBusinessLoggedIn: false,
      userName: '',
      userEmail: '',
      userType: 'user' as UserType,
      businessId: null,
      savedDeals: [],
      distributionApprovalStatus: 'approved' as const,
    };
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const login = (email: string, name: string, type: UserType = 'user') => {
    setState(prev => ({
      ...prev,
      isUserLoggedIn: true,
      userEmail: email,
      userName: name,
      userType: type,
    }));
  };

  const logout = () => {
    setState({
      isUserLoggedIn: false,
      isBusinessLoggedIn: false,
      userName: '',
      userEmail: '',
      userType: 'user',
      businessId: null,
      savedDeals: [],
      distributionApprovalStatus: 'approved',
    });
  };

  const businessLogin = (id: string) => {
    setState(prev => ({
      ...prev,
      businessId: id,
      isBusinessLoggedIn: true,
      userType: 'partner',
      userName: 'Business Partner',
      isUserLoggedIn: true,
    }));
  };

  const distributionLogin = (isSignup: boolean) => {
    setState(prev => ({
      ...prev,
      userType: 'distribution',
      userName: 'Distribution Partner',
      isUserLoggedIn: true,
      // TEMPORARY: Set to approved for development
      distributionApprovalStatus: 'approved',
    }));
  };

  const toggleSaveDeal = (businessId: string) => {
    setState(prev => ({
      ...prev,
      savedDeals: prev.savedDeals.includes(businessId)
        ? prev.savedDeals.filter(id => id !== businessId)
        : [...prev.savedDeals, businessId],
    }));
  };

  const setUserTypeValue = (type: UserType) => {
    setState(prev => ({ ...prev, userType: type }));
  };

  const setDistributionApprovalStatusValue = (status: 'pending' | 'approved' | 'rejected') => {
    setState(prev => ({ ...prev, distributionApprovalStatus: status }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        businessLogin,
        distributionLogin,
        toggleSaveDeal,
        setUserType: setUserTypeValue,
        setDistributionApprovalStatus: setDistributionApprovalStatusValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
