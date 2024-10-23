import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet, } from 'react-native';
import { View, Text, Image } from 'react-native';


const HomeComponent = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{
        marginTop: 100,
        display: "flex",
        width: "100%",
        gap: 40,
        alignItems: "center",
      }}>
        <View style={{
          alignItems: "center",
        }}>
          <Text style={styles.text}>A premium online store for  </Text>
          <Text style={styles.text}>sporter and their stylish choice</Text>
        </View>
        <View style={{
          backgroundColor: '#E941411A',
          paddingTop: 100,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 30,
          borderRadius: 50,
          width: "95%",
          height: 400,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Image style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}

            source={require("../../assets/images/bike.png")} />
        </View>
        <View style={{
          alignItems: "center",
        }}>
          <Text style={styles.titleText}>POWER BIKE</Text>
          <Text style={styles.titleText}>SHOP</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
        style={styles.button}>
        <Text style={styles.buttonText} >Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: '26px',
    fontWeight: 400,
    lineHeight: "26px",
  },
  titleText: {
    color: '#000',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#E94141',
    width: 340,
    height: 60,
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: '27px',
    fontWeight: 400,
    lineHeight: '27px',
  }
})

export default HomeComponent;
