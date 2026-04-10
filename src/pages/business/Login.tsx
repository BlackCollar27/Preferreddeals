import { useNavigate } from 'react-router';
import { BusinessLogin } from '../../components/business-login';
import { useAuth } from '../../lib/auth-context';

export function BusinessLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Mock login - set business user type
    login('business', 'business@example.com', 'Business Owner');
    navigate('/business/analytics');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <BusinessLogin 
      onBack={handleBack}
      onLogin={handleLogin}
      defaultTab="login"
    />
  );
}
