import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './../components/HomeComponent';
import ListComponent from './../components/ListComponent';
import CartComponent from './../components/CartComponent';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeComponent} />
      <Stack.Screen name="List" component={ListComponent} />
      <Stack.Screen name="Cart" component={CartComponent} />
    </Stack.Navigator>
  );
}