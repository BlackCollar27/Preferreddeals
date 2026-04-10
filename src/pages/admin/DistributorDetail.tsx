import { useNavigate } from 'react-router';
import { DistributorDetailAdmin } from '../../components/distributor-detail-admin';

export function AdminDistributorDetail() {
  const navigate = useNavigate();
  
  // Mock distributor data - in a real app, this would come from URL params or API
  const mockDistributor = {
    id: '1',
    name: 'Metro Partners LLC',
    email: 'contact@metropartners.com',
    phone: '(555) 123-4567',
    status: 'Active',
    hasWhiteLabel: true,
    locations: 12,
    totalBusinesses: 145,
    monthlyRevenue: 12500,
  };

  return (
    <DistributorDetailAdmin
      distributor={mockDistributor}
      onBack={() => navigate('/admin/distributors')}
      onEdit={() => console.log('Edit distributor')}
      onSuspend={() => console.log('Suspend distributor')}
    />
  );
}
