import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Home"
            component={HomePage}
          />
        <Stack.Screen name="Login" component={LoginPage} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
