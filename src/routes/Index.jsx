import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';
import ItemPage from '../screens/ItemPage';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  
  const CustomTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      card: '#dc9708',
      background: '#333',
      text: '#222',
    },
  }
  
  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
            name="Home"
            component={HomePage}
          />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Item Details" component={ItemPage} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;