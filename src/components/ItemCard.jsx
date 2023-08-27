import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import GenericButton from './GenericButton';

const ItemCard = ({item, navigation}) => {
  return (
    <Card containerStyle={style.card}>
      <Card.Title style={style.card_title}>{item.name}</Card.Title>

      <Card.Image 
        style={{ padding: 0, margin: 10 }} 
        source={{uri: item.image}} 
      />
      <View style={{flexDirection: 'row'}}>
        <Text 
          style={{
            fontWeight: '700', 
            marginRight: 5, 
            marginBottom: 10,
            color: '#ccc'
          }}
        >
          RARITY:
        </Text>
        <Text style={{color: '#008cdd'}}>{item.rarity}</Text>
      </View>
      <GenericButton 
        title={"VISUALIZAR"}
        onPress={() => { 
          navigation.navigate('Item Details', {
            itemId: item.id,
            itemInfo: item,
          });
        }}
        />
    </Card>
  )
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#262626',
    borderColor: '#444'
  },
  card_title: {
    color: '#fff'
  }
})
export default ItemCard;
