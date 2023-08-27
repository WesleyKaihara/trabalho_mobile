import axios from 'axios';
import { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import ItemCard from '../components/ItemCard';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

const HomePage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchInitialItems = async() => {
    try {
      setLoading(true)
      const { data } = await axios.get(`https://cs2-api.vercel.app/api/items?page=1&q=${search}`);
      setItems(data.data)
    } catch (error) {
      console.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  const fetchMoreItems = async(nextPage) => {
    setPage(nextPage);
    setLoading(true)
    try {
      const { data } = await axios
        .get(`https://cs2-api.vercel.app/api/items?page=${nextPage}`);
      setItems([...items,...data.data])
    } catch (error) {
      
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInitialItems()
  },[search])

  const EmptyListMessage = ({item}) => {
    return (
      <Text
        style={style.emptyListStyle}>
        No Data Found
      </Text>
    );
  };

  return (
    <SafeAreaView>
      <View style={{ paddingBottom: 15}}>
        <SearchBar
          placeholder="Search..."
          value={search}
          onChangeText={(search) => setSearch(search)}
          style={style.searchBar}
          showLoading={loading}
        />
      </View>
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
        ListEmptyComponent={EmptyListMessage}
      />
      { loading && 
        <ActivityIndicator 
          size="large"
          color="#dc9708"
          style={{marginTop: 20}}
        />
      }
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default HomePage;
