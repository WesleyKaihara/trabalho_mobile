import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const BrazilRankingNames = () => {
  const [names, setNames] = useState([]);

  const fetchRanking = useCallback(async() => {
    const { data } = await axios("https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking")
    setNames(data[0].res)
  },[])

  useEffect(() => {
    fetchRanking()
  },[])

  const renderNameInfo = (item) => {
    return (
      <View style={style.nameCard}>
        <Text>{item.ranking}</Text>
        <Text>{item.nome}</Text>
        <Text>{item.frequencia}</Text>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>IBGE - TOP 20 Names</Text>
      <FlatList 
        data={names}
        renderItem={({item}) => renderNameInfo(item)}
      />
    </View>
  );
}

const style = new StyleSheet.create({
  nameCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#ededed",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 10
  },
  container: {
    marginBottom: 75
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    paddingVertical: 15,
    color: "#fff"
  }
})

export default BrazilRankingNames;