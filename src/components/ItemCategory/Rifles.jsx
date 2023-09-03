import { StyleSheet, Text, View } from 'react-native';

const Rifles = ({min_float,max_float,stattrak,souvenir,paint_index}) => {
  return (
    <View style={styles.data}>
      <Text style={styles.info}>Min Float: {min_float}</Text>
      <Text style={styles.info}>Man Float: {max_float}</Text>
      <Text style={styles.info}>Stattrak: {stattrak?"YES":"NO"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    color: "#fff",
    fontSize: 15,
    marginTop: 5,
  },
  data: {
    marginTop: 10
  }
})

export default Rifles;
