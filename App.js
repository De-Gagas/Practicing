import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="shop" component={Shop} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})