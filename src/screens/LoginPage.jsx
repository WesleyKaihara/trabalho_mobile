import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import GenericButton from '../components/GenericButton';
import { useState } from 'react';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <Text style={style.title}>Bem-vindo</Text>
      <Text style={style.subTitle}>Faça login para continuar</Text>
      <View style={style.formGroup}>
        <TextInput
          style={style.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={style.formGroup}>
        <TextInput
          style={style.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <GenericButton title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: '10%'
  },
  formGroup: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    width: "100%",
    height: 45,
    marginBottom: 25,
  },
  input: {
    height: 40,
    flex: 1,
    padding: 10,
    paddingLeft: 25
  },
  title: {
    marginTop: -150,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#dc9708'
  },
  subTitle: {
    marginBottom: 20,
    color: '#ccc',
    fontSize: 20
  }
})

export default LoginPage;