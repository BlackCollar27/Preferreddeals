import { useNavigate } from 'react-router';
import { UserDetailAdmin } from '../../components/user-detail-admin';

export function AdminUserDetail() {
  const navigate = useNavigate();
  
  // Mock user data - in a real app, this would come from URL params or API
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@email.com',
    savedDeals: 24,
    status: 'Active',
    joined: 'Jan 15, 2024',
  };

  return (
    <UserDetailAdmin
      user={mockUser}
      onBack={() => navigate('/admin/users')}
      onEdit={() => console.log('Edit user')}
      onSuspend={() => console.log('Suspend user')}
    />
  );
}
