import { createBrowserRouter } from 'react-router';
import { Navigate } from 'react-router';
import { RootLayout } from './components/root-layout';
import { ProtectedRoute } from './lib/protected-route';

// Business pages
import { BusinessAnalytics } from './pages/business/Analytics';
import { BusinessListings } from './pages/business/Listings';
import { BusinessBilling } from './pages/business/Billing';
import { BusinessLoginPage } from './pages/business/Login';

// Distribution pages
import { DistributionOverview } from './pages/distribution/Overview';
import { DistributionBilling } from './pages/distribution/Billing';
import { DistributionWhiteLabel } from './pages/distribution/WhiteLabel';
import { DistributionLoginPage } from './pages/distribution/Login';

// Discover pages
import { Categories } from './pages/discover/Categories';
import { Survey } from './pages/discover/Survey';
import { Results } from './pages/discover/Results';

// Admin pages
import { AdminOverview } from './pages/admin/Overview';
import { AdminBusinesses } from './pages/admin/Businesses';
import { AdminUsers } from './pages/admin/Users';
import { AdminLocations } from './pages/admin/Locations';
import { AdminDistributors } from './pages/admin/Distributors';
import { AdminApprovals } from './pages/admin/Approvals';
import { AdminPricing } from './pages/admin/Pricing';
import { AdminPlatformSettings } from './pages/admin/PlatformSettings';
import { AdminUserDetail } from './pages/admin/UserDetail';
import { AdminBusinessDetail } from './pages/admin/BusinessDetail';
import { AdminLocationDetail } from './pages/admin/LocationDetail';
import { AdminDistributorDetail } from './pages/admin/DistributorDetail';
import { CategoryManager } from './pages/admin/CategoryManager';

// Other components
import { DirectoryPage } from './components/directory-page';
import { ListingDetail } from './components/listing-detail';
import { BecomePartner } from './components/become-partner';
import { DistributionPartner } from './components/distribution-partner';
import { UserDashboard } from './components/user-dashboard';
import { SavedDeals } from './components/saved-deals';
import { Settings } from './components/settings';
import { WhiteLabelPlatformSettings } from './components/white-label-platform-settings';
import { ListYourBusiness } from './components/list-your-business';
import { AboutUs } from './components/about-us';
import { HelpCenter } from './components/help-center';
import { ContactUs } from './components/contact-us';
import { PricingPlans } from './components/pricing-plans';
import { TermsOfService } from './components/terms-of-service';
import { PrivacyPolicy } from './components/privacy-policy';
import { CookiePolicy } from './components/cookie-policy';
import { BusinessDashboard } from './components/business-dashboard';
import { DistributionPartnerDashboard } from './components/distribution-partner-dashboard';
import { PartnerDashboard } from './components/partner-dashboard';
import { BusinessLogin } from './components/business-login';
import { DashboardSwitcher } from './components/dashboard-switcher';
import { WhiteLabelCustomization } from './components/white-label-customization';
import { BusinessDetailWhiteLabel } from './components/business-detail-whitelabel';
import { LocationDetailWhiteLabel } from './components/location-detail-whitelabel';
import { WhiteLabelPlatform } from './components/white-label-platform-new';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/discover/preferred-deals" replace />,
      },
      {
        path: 'directory',
        Component: DirectoryPage,
      },
      {
        path: 'directory/:businessId',
        Component: ListingDetail,
      },
      {
        path: 'become-partner',
        Component: BecomePartner,
      },
      {
        path: 'distribution-partner',
        Component: DistributionPartner,
      },
      {
        path: 'business/login',
        Component: BusinessLoginPage,
      },
      {
        path: 'partner/login',
        Component: DistributionLoginPage,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'saved-deals',
        element: (
          <ProtectedRoute>
            <SavedDeals />
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
      {
        path: 'white-label-settings',
        element: (
          <ProtectedRoute requireUserType="distribution">
            <WhiteLabelPlatformSettings />
          </ProtectedRoute>
        ),
      },
      // Business dashboard routes
      {
        path: 'business/dashboard',
        element: (
          <ProtectedRoute requireUserType="business">
            <Navigate to="/business/analytics" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'business/analytics',
        element: (
          <ProtectedRoute requireUserType="business">
            <BusinessAnalytics />
          </ProtectedRoute>
        ),
      },
      {
        path: 'business/listings',
        element: (
          <ProtectedRoute requireUserType="business">
            <BusinessListings />
          </ProtectedRoute>
        ),
      },
      {
        path: 'business/billing',
        element: (
          <ProtectedRoute requireUserType="business">
            <BusinessBilling />
          </ProtectedRoute>
        ),
      },
      // Distribution partner routes
      {
        path: 'partner/dashboard',
        element: (
          <ProtectedRoute requireUserType="distribution">
            <Navigate to="/partner/overview" replace />
          </ProtectedRoute>
        ),
      },
      {
        path: 'partner/overview',
        element: (
          <ProtectedRoute requireUserType="distribution">
            <DistributionOverview />
          </ProtectedRoute>
        ),
      },
      {
        path: 'partner/billing',
        element: (
          <ProtectedRoute requireUserType="distribution">
            <DistributionBilling />
          </ProtectedRoute>
        ),
      },
      {
        path: 'partner/white-label',
        element: (
          <ProtectedRoute requireUserType="distribution">
            <DistributionWhiteLabel />
          </ProtectedRoute>
        ),
      },
      {
        path: 'list-your-business',
        Component: ListYourBusiness,
      },
      {
        path: 'about',
        Component: AboutUs,
      },
      {
        path: 'help',
        Component: HelpCenter,
      },
      {
        path: 'contact',
        Component: ContactUs,
      },
      {
        path: 'pricing',
        Component: PricingPlans,
      },
      {
        path: 'terms',
        Component: TermsOfService,
      },
      {
        path: 'privacy',
        Component: PrivacyPolicy,
      },
      {
        path: 'cookies',
        Component: CookiePolicy,
      },
      // Discovery flow routes
      {
        path: 'discover/:propertyId',
        Component: Categories,
      },
      {
        path: 'discover/:propertyId/survey/:category',
        Component: Survey,
      },
      {
        path: 'discover/:propertyId/results',
        Component: Results,
      },
      // Admin routes
      {
        path: 'admin/:propertyId/categories',
        Component: CategoryManager,
      },
      {
        path: 'admin/dashboard',
        element: <Navigate to="/admin/overview" replace />,
      },
      {
        path: 'admin/overview',
        Component: AdminOverview,
      },
      {
        path: 'admin/businesses',
        Component: AdminBusinesses,
      },
      {
        path: 'admin/users',
        Component: AdminUsers,
      },
      {
        path: 'admin/locations',
        Component: AdminLocations,
      },
      {
        path: 'admin/distributors',
        Component: AdminDistributors,
      },
      {
        path: 'admin/approvals',
        Component: AdminApprovals,
      },
      {
        path: 'admin/pricing',
        Component: AdminPricing,
      },
      {
        path: 'admin/platform-settings',
        Component: AdminPlatformSettings,
      },
      {
        path: 'admin/user-detail',
        Component: AdminUserDetail,
      },
      {
        path: 'admin/business-detail',
        Component: AdminBusinessDetail,
      },
      {
        path: 'admin/location-detail',
        Component: AdminLocationDetail,
      },
      {
        path: 'admin/distributor-detail',
        Component: AdminDistributorDetail,
      },
      {
        path: 'admin/business-dashboard',
        Component: BusinessDashboard,
      },
      {
        path: 'admin/distribution-partner-dashboard',
        Component: DistributionPartnerDashboard,
      },
      {
        path: 'admin/partner-dashboard',
        Component: PartnerDashboard,
      },
      {
        path: 'admin/business-login',
        Component: BusinessLogin,
      },
      {
        path: 'admin/dashboard-switcher',
        Component: DashboardSwitcher,
      },
      {
        path: 'admin/white-label-customization',
        Component: WhiteLabelCustomization,
      },
      {
        path: 'admin/business-detail-whitelabel',
        Component: BusinessDetailWhiteLabel,
      },
      {
        path: 'admin/location-detail-whitelabel',
        Component: LocationDetailWhiteLabel,
      },
      {
        path: 'admin/white-label-platform-new',
        Component: WhiteLabelPlatform,
      },
      {
        path: 'admin/business/analytics',
        Component: BusinessAnalytics,
      },
      {
        path: 'admin/business/listings',
        Component: BusinessListings,
      },
      {
        path: 'admin/business/billing',
        Component: BusinessBilling,
      },
      {
        path: 'admin/distribution/overview',
        Component: DistributionOverview,
      },
      {
        path: 'admin/distribution/billing',
        Component: DistributionBilling,
      },
      {
        path: 'admin/distribution/white-label',
        Component: DistributionWhiteLabel,
      },
      {
        path: '*',
        element: <div className="flex items-center justify-center min-h-screen"><div className="text-center"><h1 className="mb-4">404 - Page Not Found</h1><a href="/" className="text-blue-600 hover:underline">Go home</a></div></div>,
      },
    ],
  },
]);