import { useNavigate } from 'react-router';
import { BusinessDetailAdmin } from '../../components/business-detail-admin';

export function AdminBusinessDetail() {
  const navigate = useNavigate();
  
  // Mock business data - in a real app, this would come from URL params or API
  const mockBusiness = {
    id: '1',
    name: 'Coffee Shop',
    category: 'Dining',
    status: 'Active',
    premium: true,
    location: 'New York, NY',
    rating: 4.8,
  };

  return (
    <BusinessDetailAdmin
      business={mockBusiness}
      onBack={() => navigate('/admin/businesses')}
      onEdit={() => console.log('Edit business')}
      onSuspend={() => console.log('Suspend business')}
    />
  );
}
