import { useNavigate } from 'react-router';
import { LocationDetailAdmin } from '../../components/location-detail-admin';

export function AdminLocationDetail() {
  const navigate = useNavigate();
  
  // Mock location data - in a real app, this would come from URL params or API
  const mockLocation = {
    id: '1',
    name: 'Downtown Plaza',
    city: 'New York',
    state: 'NY',
    businesses: 45,
    distributionPartner: 'Metro Partners LLC',
  };

  return (
    <LocationDetailAdmin
      location={mockLocation}
      onBack={() => navigate('/admin/locations')}
      onEdit={() => console.log('Edit location')}
    />
  );
}
