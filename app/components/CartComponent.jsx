import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartComponent = ({ route }) => {
  const navigator = useNavigation();
  const { item } = route.params;
  // if (!item) {
  //   return (
  //     <View>
  //       <Text >No item data available.</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}
          source={require("../../assets/images/bike.png")} />
      </View>
      <View style={{
        width: '100%',
        display: 'flex',
        gap: 20,
      }}>
        <View>
          <Text style={{
            fontSize: 35,
            lineHeight: 45,
            marginTop: 25,
            marginBottom: 15,
          }}>{item.name}</Text>

          <View style={{ flexDirection: 'row', marginLeft: 5 }}>

            <Text style={{
              fontSize: 25,
              color: '#00000096',
              fontWeight: 400,
              lineHeight: 35
            }}>15% OFF | {item.price} $</Text>
            <Text style={{
              textDecorationLine: 'line-through',
              marginLeft: 25, fontSize: 25,
              color: '#000000',
              fontWeight: 400,
              lineHeight: 35
            }}>2000$</Text>
          </View>
        </View>
        <Text style={{
          marginLeft: 5,
          fontSize: 25,
          color: '#000000',
          fontWeight: 400,
          lineHeight: 35
        }}>Decription
        </Text>
        <Text style={{
          fontSize: 20,
          lineHeight: 30,
          color: '#00000091',
        }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 40,
      }} >
        <Image style={{
          width: 50,
          height: 50,
          resizeMode: 'contain',
        }}
          source={require("../../assets/images/heart.svg")} />
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          style={styles.btn}>
          <Text style={styles.btnText} >Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#E941411A',
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 30,
    borderRadius: 5,
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    backgroundColor: '#E94141',
    width: '296px',
    height: '60px',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText :{
    color: '#fff',
    fontSize: '27px',
    fontWeight: 400,
    lineHeight: '27px',
  }
});

export default CartComponent;
