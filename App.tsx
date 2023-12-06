import Main from './src/container/Main/Main';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient()

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Main />
        </QueryClientProvider>
      </NavigationContainer>
    </>
  );
}

