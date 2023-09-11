import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import HomePage from '../screens/HomePage';
import BrazilRankingNames from '../screens/BrazilRankingNames';
import ItemPage from '../screens/ItemPage';
import { View } from 'react-native';

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
      <Stack.Navigator 
        initialRouteName="Login">
        <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ 
              headerBackVisible: false
            }}
          />
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="Item Details" component={ItemPage} />
        <Stack.Screen name="Extra" component={BrazilRankingNames} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;