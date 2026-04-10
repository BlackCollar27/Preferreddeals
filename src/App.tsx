import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AuthProvider } from './lib/auth-context';
import { SurveyProvider } from './context/SurveyContext';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <AuthProvider>
      <SurveyProvider>
        <RouterProvider router={router} />
        <Toaster />
      </SurveyProvider>
    </AuthProvider>
  );
}