import { Button, SafeAreaView, Text } from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </SafeAreaView>
  );
}

export default LoginPage;