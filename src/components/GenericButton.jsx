import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const GenericButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#dc9708',
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },
  title: {
    alignSelf: "center",
    color: '#f1f1f1'
  }
})

export default GenericButton;