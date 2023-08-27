import axios from 'axios';
import { useEffect, useState } from 'react';

import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import ItemCard from '../components/ItemCard';

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

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ItemCard 
            item={item} 
            navigation={navigation}
          />
        )}
        onEndReachedThreshold={0.2}
        onEndReached={() => fetchMoreItems(page + 1)}
      />
    </SafeAreaView>
  );
}

export default HomePage;
