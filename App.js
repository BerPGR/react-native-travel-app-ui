import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Home from "./components/Home";
import Details from "./components/Details";
import Liked from "./components/Liked";
import Profile from "./components/Profile";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "./assets/colors/colors";

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({color}) => <Entypo name="home" size={32} color={color}/>,
      }}/>

      <Tab.Screen name="Liked" component={Liked} options={{
        tabBarIcon: ({color}) => <Entypo name="heart" size={32} color={color}/>,
      }}/>

      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color}/>,
      }}/>

    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})

export default App;