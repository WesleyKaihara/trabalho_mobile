import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, SafeAreaView, Text } from 'react-native';
import { Card } from 'react-native-elements';

const HomePage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const fetchInitialItems = async() => {
    const { data } = await axios.get(`https://cs2-api.vercel.app/api/items?page=1`);
    setItems(data.data)
  }

  const fetchMoreItems = async(nextPage) => {
    setPage(nextPage);
    const { data } = await axios.get(`https://cs2-api.vercel.app/api/items?page=${nextPage}`);
    setItems([...items,...data.data])
  }

  useEffect(() => {
    fetchInitialItems()
  },[])

  const ItemCard = ({item}) => {
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Card.Divider /> 
        <Card.Image 
          style={{ padding: 0 }} 
          source={{uri: item.image}} 
        /> 
         <Card.Divider /> 
          <Button 
            title="Visualizar" 
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

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({item}) => <ItemCard item={item}/>}
        onEndReachedThreshold={0.2}
        onEndReached={() => fetchMoreItems(page + 1)}
      />
    </SafeAreaView>
  );
}

export default HomePage;
