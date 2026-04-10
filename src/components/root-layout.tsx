import { Outlet } from 'react-router';
import { useState } from 'react';
import { Navigation } from './navigation';
import { Footer } from './footer';
import { CookieConsent } from './cookie-consent';
import { useAuth } from '../lib/auth-context';
import { useNavigate, useLocation } from 'react-router';

export function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isBusinessLoggedIn, isUserLoggedIn, userName, logout } = useAuth();
  const [showCookieConsent, setShowCookieConsent] = useState(() => {
    // Check if user has already accepted/declined cookies
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('cookie_consent');
    }
    return true;
  });

  // Check if current route is a dashboard page
  const isDashboardPage = (location.pathname.startsWith('/admin') || 
                          location.pathname.startsWith('/business') || 
                          location.pathname.startsWith('/partner')) &&
                          !location.pathname.endsWith('/login');

  const handleNavigate = (page: string, category?: string, location?: string) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'directory') {
      // Handle category/location via URL params if needed
      navigate('/directory');
    } else if (page === 'become-partner') {
      navigate('/become-partner');
    } else if (page === 'distribution-partner') {
      navigate('/distribution-partner');
    } else if (page === 'user-dashboard' || page === 'dashboard') {
      navigate('/dashboard');
    } else if (page === 'saved-deals') {
      navigate('/saved-deals');
    } else if (page === 'settings') {
      navigate('/settings');
    } else if (page === 'terms') {
      navigate('/terms');
    } else if (page === 'privacy') {
      navigate('/privacy');
    } else if (page === 'cookies') {
      navigate('/cookies');
    } else if (page === 'about') {
      navigate('/about');
    } else if (page === 'help') {
      navigate('/help');
    } else if (page === 'contact-us' || page === 'contact') {
      navigate('/contact');
    } else if (page === 'pricing') {
      navigate('/pricing');
    } else if (page === 'list-your-business') {
      navigate('/list-your-business');
    } else if (page === 'manage-your-listing') {
      navigate('/business/login');
    } else if (page === 'partner-dashboard-login') {
      navigate('/partner/login');
    } else if (page === 'white-label-settings') {
      navigate('/white-label-settings');
    }
  };

  const handleCookieAccept = () => {
    setShowCookieConsent(false);
    localStorage.setItem('cookie_consent', 'accepted');
  };

  const handleCookieDecline = () => {
    setShowCookieConsent(false);
    localStorage.setItem('cookie_consent', 'declined');
  };

  const handleToggleTheme = () => {
    // No longer using dark mode
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!isDashboardPage && <Navigation isDarkMode={false} />}
      
      <Outlet />
      
      {!isDashboardPage && <Footer onNavigate={handleNavigate} />}
      
      {!isDashboardPage && showCookieConsent && (
        <CookieConsent
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
          onViewPolicy={() => handleNavigate('cookies')}
        />
      )}
    </div>
  );
}