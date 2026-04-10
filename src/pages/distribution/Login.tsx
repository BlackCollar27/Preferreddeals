import { useNavigate } from 'react-router';
import { PartnerDashboardLogin } from '../../components/partner-dashboard-login';
import { useAuth } from '../../lib/auth-context';

export function DistributionLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Mock login - set distribution user type
    login('distribution', 'partner@example.com', 'Distribution Partner');
    navigate('/partner/overview');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <PartnerDashboardLogin 
      onBack={handleBack}
      onLogin={handleLogin}
      defaultTab="login"
    />
  );
}
