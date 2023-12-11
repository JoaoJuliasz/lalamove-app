import Main from './src/container/Main/Main';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}

