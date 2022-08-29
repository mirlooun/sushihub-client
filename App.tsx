import RootStack from '@navigation/RootStack';
import { AuthProvider } from '@context/userContext';

export default function App() {
  return (
    <AuthProvider>
      <RootStack />
    </AuthProvider>
  );
}
