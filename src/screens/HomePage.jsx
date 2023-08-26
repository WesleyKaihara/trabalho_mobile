import { Button, SafeAreaView, Text } from 'react-native';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
}

export default HomePage;