import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Stye } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListComponent = () => {
  const navigation = useNavigation();
  const [bikes, setBikes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  const handlePress = (item) => {
    navigation.navigate('Cart', { item });
  };
  
  useEffect(() => {
    // Set overflow to auto when component mounts
    document.body.style.overflow = 'auto';

    // Reset overflow to hidden when component unmounts
    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);
  const filteredBikes = selectedType === 'All' ? bikes : bikes.filter(bike => bike.type === selectedType);

  useEffect(() => {
    fetch ('https://671891927fc4c5ff8f49fcac.mockapi.io/test')
    .then(response => response.json())
    .then(data => setBikes(data))
    .catch(error => console.log(error));
  }
  , []);
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>The world’s Best Bike</Text>
      <View>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setSelectedType('All')}>
          <Text style={[styles.option, { color: selectedType === 'All' ? 'red' : '#BEB6B6' }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType('tinyint')}>
          <Text style={[styles.option, { color: selectedType === 'tinyint' ? 'red' : '#BEB6B6' }]}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType('boolean')}>
          <Text style={[styles.option, { color: selectedType === 'boolean' ? 'red' : '#BEB6B6' }]}>Mountain</Text>
        </TouchableOpacity>
      </View>
        <View>
        <FlatList
        data={filteredBikes}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style = {{
            backgroundColor :'#F7BA8326',
            padding : 10,
            borderRadius : 10,
            width : 170,
            height : 200,
            justifyContent : 'center',
            alignItems : 'center',
            shadowColor: '#666',
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.5,
            position : 'relative',
            margin : 10,
          }}>
             <Image style ={styles.heart} source={ require('../../assets/images/heart.svg') }/>
             <Image style ={{width : 100, height : 100, resizeMode : 'contain'}}
              source = {
               require('../../assets/images/bike.png')
             }/>
            <Text style = {{
              marginTop : 10,
              marginBottom : 10,
              fontSize : 20,
              fontWeight : 400,
              color : '#00000099'
            }}>{item.name}</Text>
            <Text> 
              <Text style = {{
                color : '#F7BA83',
                fontSize : 20,
              }}
              >$</Text> {item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    color: '#E94141',
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 30,
  },
  listContainer: {
    justifyContent: 'center',
    gap: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#F7BA8326',
    padding: 10,
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#666',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    position: 'relative',
    margin: 10,
  },
  option: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 32,
    fontSize: 20,
    borderRadius: 5,
    borderColor: '#E9414187',
    borderWidth: 1,
    color: '#BEB6B6',
    fontWeight: '400',
    marginHorizontal: 5,
  },
  heart: {
    position: 'absolute',
    left: 5,
    top: 5,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ListComponent;
