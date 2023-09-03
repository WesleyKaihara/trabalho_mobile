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
        <Text style={style[item.rarity?.trim()]}>{item.rarity}</Text>
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
  },
  rarity: {
    fontSize: 12,
    color: "#5e98d9"
  },
  HighGrade: {
    color: "#a7b5c9"
  },
  Exceptional: {
    color: "#8847ff"
  },
  Remarkable: {
    color: "#8847ff"
  },
  Restricted: {
    color: "#8847ff"
  },
  Distinguished: {
    color: "#475ef2"
  },
  "Mil-Spec Grade": {
    color: "#5e98d9"
  },
  IndustrialGrade: {
    color: "#5e98d9"
  },
  Superior: {
    color: "#d32ce6"
  },
  Classified: {
    color: "#d32ce6"
  },
  Exotic: {
    color: "#d32ce6"
  },
  Master: {
    color: "#eb4b4b"
  },
  Covert: {
    color: "#eb4b4b"
  },
  Extraordinary: {
    color: "#eb4b4b"
  },
  Contraband: {
    color: "#e4ac3a"
  }
})
export default ItemCard;
