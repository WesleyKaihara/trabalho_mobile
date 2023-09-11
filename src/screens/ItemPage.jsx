import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Rifles from '../components/ItemCategory/Rifles';

const ItemPage = ({ route, navigation }) => {
  const { itemId, itemInfo } = route.params;
  const [data,setData] = useState()
  const [loading,setLoading] = useState(true)

  const fetchItem = useCallback(async() => {
    try {
      setLoading(true)
      const id = itemId.split("_")[0]
      const { data:response } = await axios.get(`https://cs2-api.vercel.app/api/items?id=${id}`)
      setData(response)
    } catch (error) {
      
    } finally {
      setLoading(false)
    }
  },[])

  useEffect(() => {
    fetchItem()
  },[])

  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <>
          <Text style={styles.title}>{data.name}</Text>
          <Image 
            style={styles.image}
            source={{ uri: data.image}}
          />
          <Text style={styles.description}>{data.description}</Text>
          <Text 
            style={{
              ...styles.rarity,
              ...styles[data.rarity?.name.trim()]
            }}
            >{data.rarity?.name}</Text>
          {data.category === "Rifles" && <Rifles 
            min_float={data.min_float}
            max_float={data.max_float}
            stattrak={data.stattrak}
            souvenir={data.souvenir}
            paint_index={data.paint_index}
          />}
        </>
      )}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  image: {
    width: "100%",
    height: 250,
    marginVertical: 20
  },
  description: {
    color: "#ccc",
    textAlign: "justify",
    lineHeight: 20
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

export default ItemPage;