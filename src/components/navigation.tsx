import logoImage from 'figma:asset/dd3bfa837dfa92a5643677141b8779a2931011b6.png';
import logoDarkImage from 'figma:asset/086e1f0668410f07828122542aa5c045739f737a.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../lib/auth-context';

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme?: () => void;
}

export function Navigation({ isDarkMode }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isUserLoggedIn, userType, logout } = useAuth();
  const navigate = useNavigate();

  // Different menu items based on user type
  const getMenuItems = () => {
    if (!isUserLoggedIn) {
      // Public menu for non-logged in users
      return [
        { label: 'Home', path: '/discover/preferred-deals' },
        { label: 'All Listings', path: '/directory' },
        { label: 'List Your Business', path: '/become-partner' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
      ];
    }

    // Menu items based on user type when logged in
    switch (userType) {
      case 'admin':
        return [
          { label: 'Dashboard', path: '/admin/dashboard' },
          { label: 'Businesses', path: '/admin/dashboard', state: { tab: 'businesses' } },
          { label: 'Users', path: '/admin/dashboard', state: { tab: 'users' } },
          { label: 'Distributors', path: '/admin/dashboard', state: { tab: 'distributors' } },
          { label: 'Approvals', path: '/admin/dashboard', state: { tab: 'approvals' } },
        ];
      case 'partner':
        return [
          { label: 'Dashboard', path: '/business/dashboard' },
          { label: 'Manage Listing', path: '/manage-your-listing' },
          { label: 'Analytics', path: '/business/dashboard', state: { tab: 'analytics' } },
          { label: 'Settings', path: '/settings' },
        ];
      case 'distribution':
        return [
          { label: 'Dashboard', path: '/partner/dashboard' },
          { label: 'White-Label', path: '/white-label-settings' },
          { label: 'Businesses', path: '/partner/dashboard', state: { tab: 'businesses' } },
          { label: 'Settings', path: '/settings' },
        ];
      case 'user':
      default:
        return [
          { label: 'Discover', path: '/discover/preferred-deals' },
          { label: 'Saved Deals', path: '/saved-deals' },
          { label: 'Settings', path: '/settings' },
        ];
    }
  };

  const menuItems = getMenuItems();

  const handleNavigate = (path: string, state?: any) => {
    navigate(path, state ? { state } : undefined);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/discover/preferred-deals');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 md:h-16">
          {/* Logo - Centered */}
          <button onClick={() => handleNavigate('/discover/preferred-deals')} className="flex items-center">
            <img src={isDarkMode ? logoDarkImage : logoImage} alt="Preferred Deals" className="h-12 sm:h-14 md:h-12" />
          </button>
        </div>
      </div>
    </nav>
  );
}