import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './src/pages/Main/Main';

const queryClient = new QueryClient()
export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}

