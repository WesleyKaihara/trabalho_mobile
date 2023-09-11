import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericButton from '../components/GenericButton';
import { useState } from 'react';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    let EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(EMAIL_REGEX)
  }

  const handleLogin = () => {
    if(isValidEmail(email) && password) {
      navigation.navigate("Home")
      return
    }
    setError("Email and Password required!!")
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome</Text>
      <Text style={style.subTitle}>Login to continue</Text>
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
      <GenericButton title="Connect" onPress={handleLogin} />
      { error && <Text style={style.error}>{error}</Text>}
      <TouchableOpacity 
        style={{marginVertical:10}}
        onPress={() => navigation.navigate("Extra")}
      >
        <Text style={{color: "#ccc"}}>Extra Page</Text>
      </TouchableOpacity>
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
  },
  error: {
    color: "#fc1e1e",
    marginVertical: 10
  }
})

export default LoginPage;